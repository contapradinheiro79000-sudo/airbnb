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
const SECRET_KEY = process.env.PAYMENT_SECRET_KEY;
const PUBLIC_KEY = process.env.VITE_PAYMENT_PUBLIC_KEY;

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
    timestamp: new Date().toISOString(),
    gatewayConfigured: Boolean(SECRET_KEY),
    publicKeyPrefix: PUBLIC_KEY ? PUBLIC_KEY.substring(0, 8) + '...' : null,
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

// 4. Payment: Process (Cartão ou PIX)
app.post('/api/payments/process', (req, res) => {
  const authHeader = req.headers.authorization;
  const clientKey = authHeader ? authHeader.replace('Bearer ', '') : '';

  // Validação das chaves de API
  if (clientKey !== SECRET_KEY && clientKey !== PUBLIC_KEY) {
    console.warn('[API Security] Requisição com chave inválida ou ausente');
    // Aceita também caso não seja enviado em dev, mas avisa
  }

  const { propertyId, amount, paymentMethod, cardDetails } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Valor inválido para cobrança.' });
  }

  const transactionId = `tx_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

  // Fluxo PIX
  if (paymentMethod === 'pix') {
    const pixPayload = generatePixPayload({
      amount,
      name: 'AIRBNB RESERVAS',
      city: 'SAO PAULO',
      txid: transactionId.substring(0, 25),
    });

    const txRecord = {
      id: transactionId,
      propertyId,
      amount,
      method: 'pix',
      status: 'PENDING',
      qrCodeText: pixPayload,
      createdAt: new Date().toISOString(),
    };
    transactions.push(txRecord);

    console.log(`[PIX CRIADO] ${transactionId} - R$ ${amount}`);

    return res.json({
      success: true,
      transactionId,
      qrCodeText: pixPayload,
      status: 'PENDING',
      message: 'Código PIX gerado com sucesso!',
    });
  }

  // Fluxo Cartão de Crédito
  if (paymentMethod === 'credit_card') {
    if (!cardDetails || !cardDetails.number || !cardDetails.cvv) {
      return res.status(400).json({ error: 'Dados do cartão incompletos.' });
    }

    const txRecord = {
      id: transactionId,
      propertyId,
      amount,
      method: 'credit_card',
      cardLast4: cardDetails.number.replace(/\s/g, '').slice(-4),
      installments: cardDetails.installments || 1,
      status: 'APPROVED',
      createdAt: new Date().toISOString(),
    };
    transactions.push(txRecord);

    console.log(`[CARTÃO APROVADO] ${transactionId} - R$ ${amount} (${txRecord.installments}x)`);

    return res.json({
      success: true,
      transactionId,
      status: 'APPROVED',
      message: 'Pagamento no cartão aprovado com sucesso!',
    });
  }

  return res.status(400).json({ error: 'Método de pagamento desconhecido.' });
});

// 5. Payment Status Check
app.get('/api/payments/:id/status', (req, res) => {
  const tx = transactions.find((t) => t.id === req.params.id);
  if (!tx) {
    return res.status(404).json({ error: 'Transação não encontrada.' });
  }
  res.json(tx);
});

// 6. Webhook
app.post('/api/payments/webhook', (req, res) => {
  console.log('[WEBHOOK RECEBIDO]', req.body);
  const { event, transactionId } = req.body;
  const tx = transactions.find((t) => t.id === transactionId);
  if (tx && event === 'PAYMENT_RECEIVED') {
    tx.status = 'APPROVED';
  }
  res.json({ received: true });
});

// Fallback SPA: Qualquer rota web entrega o index.html do React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 [BACKEND API] Servidor rodando na porta ${PORT}`);
  console.log(`🔑 [GATEWAY API] Secret Key configurada: ${SECRET_KEY ? 'Sim (sk_...)' : 'Não'}`);
  console.log(`🔑 [GATEWAY API] Public Key configurada: ${PUBLIC_KEY ? 'Sim (pk_...)' : 'Não'}`);
});
