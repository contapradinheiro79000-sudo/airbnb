import React, { useState } from 'react';
import {
  X,
  CreditCard,
  QrCode,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
} from 'lucide-react';
import type { Property } from '../types';
import { paymentService } from '../services/paymentService';

interface CheckoutModalProps {
  isOpen: boolean;
  property: Property | null;
  nights: number;
  totalPrice: number;
  onClose: () => void;
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  property,
  nights,
  totalPrice,
  onClose,
  onSuccess,
}) => {
  const [method, setMethod] = useState<'credit_card' | 'pix'>('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [holderName, setHolderName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [installments, setInstallments] = useState(1);
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{ qrCodeText?: string } | null>(null);
  const [copied, setCopied] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  if (!isOpen || !property) return null;

  const handlePay = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await paymentService.processPayment({
        propertyId: property.id,
        amount: totalPrice,
        paymentMethod: method,
        cardDetails:
          method === 'credit_card'
            ? {
                number: cardNumber,
                holder: holderName,
                expiry,
                cvv,
                installments,
              }
            : undefined,
      });

      if (method === 'pix') {
        setPixData({ qrCodeText: response.qrCodeText });
        setLoading(false);
      } else {
        setPaymentSuccess(true);
        setLoading(false);
        setTimeout(() => {
          onSuccess();
          onClose();
        }, 1500);
      }
    } catch {
      setLoading(false);
      alert('Erro ao processar pagamento. Tente novamente.');
    }
  };

  const copyPix = () => {
    if (pixData?.qrCodeText) {
      navigator.clipboard.writeText(pixData.qrCodeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const confirmPixPayment = () => {
    setLoading(true);
    setTimeout(() => {
      setPaymentSuccess(true);
      setLoading(false);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 transition text-neutral-600"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="font-bold text-neutral-900 text-base">
            Confirmar e Pagar
          </h3>
          <div className="w-8" />
        </div>

        {paymentSuccess ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h3 className="text-2xl font-bold text-neutral-900">
              Pagamento Aprovado!
            </h3>
            <p className="text-sm text-neutral-600">
              Sua reserva para <strong>{property.title}</strong> está confirmada.
              Enviamos os detalhes para o seu e-mail.
            </p>
          </div>
        ) : (
          <div className="pt-4 space-y-6">
            {/* Resumo da Viagem */}
            <div className="flex gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h4 className="font-bold text-neutral-900 text-sm line-clamp-1">
                  {property.title}
                </h4>
                <p className="text-xs text-neutral-500">{property.location}</p>
                <div className="mt-2 text-xs font-semibold text-neutral-700 flex justify-between">
                  <span>{nights} noites</span>
                  <span className="text-base font-extrabold text-[#FF385C]">
                    Total: R$ {totalPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>

            {/* Seleção do Método de Pagamento */}
            <div>
              <label className="block text-xs font-bold uppercase text-neutral-700 mb-2">
                Forma de Pagamento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMethod('credit_card');
                    setPixData(null);
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition ${
                    method === 'credit_card'
                      ? 'border-neutral-900 bg-neutral-900 text-white shadow'
                      : 'border-neutral-300 hover:border-neutral-800 text-neutral-700'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  Cartão de Crédito
                </button>
                <button
                  type="button"
                  onClick={() => setMethod('pix')}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-sm font-semibold transition ${
                    method === 'pix'
                      ? 'border-[#00B495] bg-[#00B495] text-white shadow'
                      : 'border-neutral-300 hover:border-neutral-800 text-neutral-700'
                  }`}
                >
                  <QrCode className="w-4 h-4" />
                  PIX Instantâneo
                </button>
              </div>
            </div>

            {/* Formulário Cartão */}
            {method === 'credit_card' && (
              <form onSubmit={handlePay} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Número do Cartão
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={19}
                    placeholder="0000 0000 0000 0000"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Nome Impresso no Cartão
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="NOME COMPLETO"
                    value={holderName}
                    onChange={(e) => setHolderName(e.target.value.toUpperCase())}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none uppercase"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      Validade
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="MM/AA"
                      maxLength={5}
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase mb-1">
                    Parcelamento
                  </label>
                  <select
                    value={installments}
                    onChange={(e) => setInstallments(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border border-neutral-300 rounded-xl text-sm focus:border-neutral-900 focus:outline-none bg-white"
                  >
                    {[1, 2, 3, 4, 5, 6, 10, 12].map((parc) => (
                      <option key={parc} value={parc}>
                        {parc}x de R${' '}
                        {(totalPrice / parc).toLocaleString('pt-BR', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}{' '}
                        {parc === 1 ? 'à vista' : 'sem juros'}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white font-bold py-3.5 rounded-xl shadow-md transition disabled:opacity-50 text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  {loading
                    ? 'Processando com a operadora...'
                    : `Pagar R$ ${totalPrice.toLocaleString('pt-BR')}`}
                </button>
              </form>
            )}

            {/* Fluxo PIX */}
            {method === 'pix' && (
              <div className="space-y-4 text-center">
                {!pixData ? (
                  <button
                    type="button"
                    onClick={handlePay}
                    disabled={loading}
                    className="w-full bg-[#00B495] hover:bg-[#009E83] text-white font-bold py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {loading ? 'Gerando QR Code...' : 'Gerar Chave e QR Code Pix'}
                  </button>
                ) : (
                  <div className="space-y-4 p-4 border border-neutral-200 rounded-2xl bg-neutral-50">
                    <p className="text-xs font-bold text-neutral-700 uppercase">
                      Escaneie ou copie a chave Pix
                    </p>
                    <div className="w-44 h-44 mx-auto bg-white p-3 rounded-xl border border-neutral-300 shadow-sm flex items-center justify-center">
                      <QrCode className="w-36 h-36 text-neutral-900" />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={pixData.qrCodeText}
                        className="w-full px-3 py-2 text-xs bg-white border border-neutral-300 rounded-lg text-neutral-600 font-mono truncate"
                      />
                      <button
                        onClick={copyPix}
                        className="p-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg transition shrink-0"
                      >
                        {copied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    <button
                      onClick={confirmPixPayment}
                      disabled={loading}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl transition text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                      Simular Confirmação do Pix
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Transação criptografada com certificado SSL seguro</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
