import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { generatePixPayload } from './pixHelper.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Servir frontend compilado em produção
app.use(express.static(path.join(__dirname, '../dist')));

const PORT = process.env.PORT || 3001;
const UNIAO_PAY_API_KEY = process.env.UNIAO_PAY_API_KEY || 'up_live_fe4bafc2c3db58cdc097abccefe34fa3a639b046cee20d59';
const UNIAO_PAY_ENDPOINT = process.env.UNIAO_PAY_ENDPOINT || 'https://meupagamento.site/api/v1/uniaopay/pix/create';

// Mock database in-memory
const users = [
  {
    id: 'usr_default',
    name: 'Viajante Demo',
    email: 'demo@airbnb.com',
    password: '123',
    role: 'guest',
  },
];

const transactions = [];

// 1. Healthcheck
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    gateway: 'União 7 Pay',
    keyConfigured: Boolean(UNIAO_PAY_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// 2. Auth: Register
app.post('/api/auth/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const existing = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (existing) {
    return res.status(409).json({ error: 'E-mail já cadastrado.' });
  }

  const newUser = {
    id: `usr_${Date.now()}`,
    name,
    email,
    password,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
    role: 'guest',
  };
  users.push(newUser);

  res.status(201).json({
    success: true,
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      avatar: newUser.avatar,
      role: newUser.role,
    },
    message: 'Conta criada com sucesso!',
  });
});

// 3. Auth: Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(
    (u) =>
      u.email.toLowerCase() === (email || '').toLowerCase() &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({ error: 'E-mail ou senha incorretos.' });
  }

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
    },
    token: `jwt_${user.id}_${Date.now()}`,
    message: 'Login realizado com sucesso!',
  });
});

// 4. Payment: Criar Cobrança PIX com União 7 Pay
app.post('/api/payments/process', async (req, res) => {
  const { propertyId, amount, description } = req.body;

  if (!amount || Number(amount) <= 0) {
    return res.status(400).json({ error: 'Valor inválido para cobrança.' });
  }

  const numericAmount = Number(amount);
  const transactionId = `up_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const orderDescription = description || `Reserva Airbnb #${propertyId || '1020'}`;

  // Tenta criar cobrança oficial na União 7 Pay
  try {
    console.log(`[União 7 Pay] Enviando requisição de PIX para R$ ${numericAmount.toFixed(2)}`);

    const hostUrl = req.get('host') || 'localhost:3001';
    const protocol = req.protocol || 'https';
    const webhookUrl = `${protocol}://${hostUrl}/api/payments/webhook`;

    const upResponse = await fetch(UNIAO_PAY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': UNIAO_PAY_API_KEY,
        Authorization: `Bearer ${UNIAO_PAY_API_KEY}`,
      },
      body: JSON.stringify({
        amount: numericAmount,
        description: orderDescription,
        external_id: transactionId,
        webhook_url: webhookUrl,
      }),
    });

    const upData = await upResponse.json();
    console.log('[União 7 Pay Resposta]:', upData);

    if (upResponse.ok && (upData.success || upData.status === 'success' || upData.pix_code)) {
      const pixCode = upData.pix_code || upData.payment?.pix_copia_cola;
      const qrBase64 = upData.qr_base64 || null;
      const gatewayTxId = upData.transaction_id || transactionId;

      const txRecord = {
        id: gatewayTxId,
        externalId: transactionId,
        propertyId,
        amount: numericAmount,
        status: 'PENDING',
        pixCode,
        qrBase64,
        provider: 'União 7 Pay',
        createdAt: new Date().toISOString(),
      };
      transactions.push(txRecord);

      return res.json({
        success: true,
        provider: 'União 7 Pay',
        transactionId: gatewayTxId,
        qrCodeText: pixCode,
        qrBase64: qrBase64,
        status: 'PENDING',
        message: 'Cobrança PIX gerada com sucesso pela União 7 Pay!',
      });
    }

    console.warn('[União 7 Pay] Falha ao processar pelo gateway, ativando fallback EMV padrão:', upData);
  } catch (err) {
    console.error('[União 7 Pay Erro]:', err.message);
  }

  // Fallback padrão com geração oficial EMV caso a API externa oscile
  const pixPayload = generatePixPayload({
    amount: numericAmount,
    name: 'AIRBNB RESERVAS',
    city: 'SAO PAULO',
    txid: transactionId.substring(0, 25),
  });

  const txRecord = {
    id: transactionId,
    propertyId,
    amount: numericAmount,
    status: 'PENDING',
    pixCode: pixPayload,
    provider: 'Local EMV',
    createdAt: new Date().toISOString(),
  };
  transactions.push(txRecord);

  return res.json({
    success: true,
    provider: 'União 7 Pay (Fallback)',
    transactionId,
    qrCodeText: pixPayload,
    status: 'PENDING',
    message: 'Código PIX gerado com sucesso!',
  });
});

// 5. Payment Status Check (Polling)
app.get('/api/payments/:id/status', (req, res) => {
  const tx = transactions.find((t) => t.id === req.params.id || t.externalId === req.params.id);
  if (!tx) {
    return res.status(404).json({ error: 'Transação não encontrada.' });
  }
  res.json({
    transactionId: tx.id,
    status: tx.status,
    amount: tx.amount,
  });
});

// 6. Webhook Oficial da União 7 Pay
app.post('/api/payments/webhook', (req, res) => {
  console.log('🔔 [WEBHOOK UNIÃO 7 PAY RECEBIDO]:', req.body);
  const { event, transaction_id, status, external_id } = req.body;

  const tx = transactions.find(
    (t) => t.id === transaction_id || t.externalId === external_id
  );

  if (tx) {
    if (event === 'payment.confirmed' || status === 'paid') {
      tx.status = 'PAID';
      console.log(`✅ [PAGAMENTO CONFIRMADO]: ${tx.id} de R$ ${tx.amount}`);
    }
  }

  res.json({ received: true });
});

// Fallback SPA: Qualquer rota web entrega o index.html do React
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 [BACKEND API] Servidor rodando na porta ${PORT}`);
  console.log(`🔑 [UNIÃO 7 PAY] Gateway Integrado e Ativo!`);
});
