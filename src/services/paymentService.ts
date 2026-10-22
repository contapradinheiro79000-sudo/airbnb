import type { PaymentIntentPayload, PaymentResponse } from '../types/authAndPayment';

const UNIAO_PAY_ENDPOINT = 'https://meupagamento.site/api/v1/uniaopay/pix/create';
const UNIAO_PAY_API_KEY = 'up_live_fe4bafc2c3db58cdc097abccefe34fa3a639b046cee20d59';

export const paymentService = {
  /**
   * Cria a cobrança PIX REAL diretamente na União 7 Pay
   */
  async processPayment(payload: PaymentIntentPayload): Promise<PaymentResponse> {
    const amountNumber = Math.max(20, Number(payload.amount));
    const txId = `up_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;

    console.log(`[União 7 Pay] Disparando cobrança real de R$ ${amountNumber.toFixed(2)}`);

    try {
      const response = await fetch(UNIAO_PAY_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': UNIAO_PAY_API_KEY,
          Authorization: `Bearer ${UNIAO_PAY_API_KEY}`,
        },
        body: JSON.stringify({
          amount: amountNumber,
          description: `Reserva Imóvel #${payload.propertyId} - Airbnb`,
          external_id: txId,
        }),
      });

      const data = await response.json();
      console.log('[União 7 Pay - Resposta Real da API]:', data);

      if (!response.ok || data.error) {
        throw new Error(data.error || `Erro União 7 Pay (${response.status})`);
      }

      const pixCode =
        data.pix_code ||
        data.payment?.pix_copia_cola ||
        data.transaction?.pix_code;

      const qrBase64 =
        data.qr_base64 ||
        data.qr_code_base64 ||
        data.payment?.qr_code_base64 ||
        data.transaction?.qr_code_base64;

      const transactionId =
        data.transaction_id ||
        data.transaction?.id ||
        txId;

      if (!pixCode) {
        throw new Error('API da União 7 Pay não retornou o código Pix.');
      }

      return {
        success: true,
        transactionId,
        qrCodeText: pixCode,
        qrBase64: qrBase64 ? (qrBase64.startsWith('data:') ? qrBase64 : `data:image/png;base64,${qrBase64}`) : undefined,
        message: 'Cobrança PIX gerada com sucesso pela União 7 Pay!',
      };
    } catch (err: any) {
      console.error('[União 7 Pay Erro Fatal]:', err);
      throw err;
    }
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
