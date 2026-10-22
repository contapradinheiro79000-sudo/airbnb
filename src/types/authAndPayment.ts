export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'guest' | 'host';
}

export interface PaymentIntentPayload {
  propertyId: string;
  amount: number;
  paymentMethod: 'credit_card' | 'pix';
  cardDetails?: {
    number: string;
    holder: string;
    expiry: string;
    cvv: string;
    installments: number;
  };
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  qrCode?: string;
  qrCodeText?: string;
  message: string;
}
