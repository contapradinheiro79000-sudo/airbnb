import type { PaymentIntentPayload, PaymentResponse } from '../types/authAndPayment';

export const paymentService = {
  /**
   * Processa pagamento via API Backend Segura (Server-to-Server)
   * Evita bloqueios de CORS, SSL e adblockers de navegadores mobile
   */
  async processPayment(payload: PaymentIntentPayload): Promise<PaymentResponse> {
    const amountNumber = Math.max(20, Number(payload.amount));
    const txId = `up_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    console.log(`[AIRBNB.OFC] Criando cobrança de R$ ${amountNumber.toFixed(2)}`);

    // 1. Tenta via Backend Oficial (/api/payments/process)
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
      });

      if (response.ok) {
        const data = await response.json();
        if (data.qrCodeText || data.pix_code) {
          return {
            success: true,
            transactionId: data.transactionId || txId,
            qrCodeText: data.qrCodeText || data.pix_code,
            qrBase64: data.qrBase64 || null,
            message: 'Código Pix oficial AIRBNB.OFC gerado com sucesso!',
          };
        }
      }
    } catch (serverErr) {
      console.warn('[AIRBNB.OFC] Tentando conexão direta de contingência...', serverErr);
    }

    // 2. Chamada de contingência direta
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
      });

      const directData = await directResponse.json();
      const pixCode =
        directData.pix_code ||
        directData.payment?.pix_copia_cola ||
        directData.transaction?.pix_code;

      const qrBase64 =
        directData.qr_base64 ||
        directData.qr_code_base64 ||
        directData.payment?.qr_code_base64;

      if (pixCode) {
        return {
          success: true,
          transactionId: directData.transaction_id || txId,
          qrCodeText: pixCode,
          qrBase64: qrBase64 ? (qrBase64.startsWith('data:') ? qrBase64 : `data:image/png;base64,${qrBase64}`) : undefined,
          message: 'Código Pix oficial AIRBNB.OFC gerado!',
        };
      }
    } catch (directErr) {
      console.error('[AIRBNB.OFC] Erro ao gerar Pix:', directErr);
    }

    throw new Error('Não foi possível gerar o código Pix no momento. Tente novamente em instantes.');
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
