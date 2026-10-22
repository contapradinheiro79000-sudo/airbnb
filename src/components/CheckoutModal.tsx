import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Loader2,
  Clock,
  Sparkles,
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
  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{ qrCodeText?: string; transactionId?: string } | null>(null);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos

  // Gera o Pix automaticamente assim que o modal abre
  useEffect(() => {
    if (isOpen && property) {
      let isMounted = true;
      setLoading(true);
      setPaymentSuccess(false);
      setTimeLeft(900);

      paymentService
        .processPayment({
          propertyId: property.id,
          amount: totalPrice,
          paymentMethod: 'pix',
        })
        .then(async (res) => {
          if (isMounted) {
            setPixData({
              qrCodeText: res.qrCodeText,
              transactionId: res.transactionId,
            });

            if (res.qrCodeText) {
              try {
                const url = await QRCode.toDataURL(res.qrCodeText, {
                  width: 320,
                  margin: 1,
                  color: {
                    dark: '#000000',
                    light: '#FFFFFF',
                  },
                });
                if (isMounted) setQrCodeDataUrl(url);
              } catch (err) {
                console.error('Erro ao gerar imagem do QR Code:', err);
              }
            }
            setLoading(false);
          }
        })
        .catch(() => {
          if (isMounted) setLoading(false);
        });

      return () => {
        isMounted = false;
      };
    }
  }, [isOpen, property, totalPrice]);

  // Contador regressivo de 15 minutos
  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [isOpen, timeLeft]);

  if (!isOpen || !property) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const copyPix = () => {
    if (pixData?.qrCodeText) {
      navigator.clipboard.writeText(pixData.qrCodeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
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
      }, 2000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto animate-in fade-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-100 transition text-neutral-600 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h3 className="font-bold text-neutral-900 text-base">
              Pagamento via PIX
            </h3>
            <span className="text-xs text-emerald-600 font-semibold flex items-center justify-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Aprovação Imediata
            </span>
          </div>
          <div className="w-8" />
        </div>

        {paymentSuccess ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900">
              Pagamento Confirmado!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto">
              Sua reserva para <strong>{property.title}</strong> foi confirmada com sucesso.
            </p>
            <p className="text-xs text-neutral-400">
              ID da Transação: {pixData?.transactionId}
            </p>
          </div>
        ) : (
          <div className="pt-4 space-y-5">
            {/* Card com Resumo da Acomodação & Desconto */}
            <div className="flex gap-4 p-4 bg-neutral-50 rounded-2xl border border-neutral-200 items-center">
              <img
                src={property.images[0]}
                alt={property.title}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-neutral-900 text-sm truncate">
                    {property.title}
                  </h4>
                </div>
                <p className="text-xs text-neutral-500 truncate">{property.location}</p>

                {property.discountBadge && (
                  <div className="mt-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded inline-flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {property.discountBadge}
                  </div>
                )}

                <div className="mt-2 text-xs font-semibold text-neutral-700 flex justify-between items-baseline">
                  <span>{nights} {nights === 1 ? 'noite' : 'noites'}</span>
                  <span className="text-lg font-extrabold text-[#FF385C]">
                    R$ {totalPrice.toLocaleString('pt-BR')}
                  </span>
                </div>
              </div>
            </div>

            {/* Timer de Expiração */}
            <div className="flex items-center justify-between text-xs bg-amber-50 border border-amber-200 text-amber-900 px-3.5 py-2.5 rounded-xl font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Pague dentro do prazo para garantir as datas</span>
              </div>
              <span className="font-mono font-bold text-amber-700 text-sm">
                {formattedTime}
              </span>
            </div>

            {/* Área do QR Code Pix */}
            <div className="space-y-4 text-center">
              {loading ? (
                <div className="py-12 flex flex-col items-center justify-center gap-3">
                  <Loader2 className="w-8 h-8 animate-spin text-[#00B495]" />
                  <p className="text-sm font-semibold text-neutral-600">
                    Gerando QR Code Pix com o Banco Central...
                  </p>
                </div>
              ) : (
                <div className="space-y-4 p-5 border border-neutral-200 rounded-2xl bg-neutral-50">
                  <div className="w-56 h-56 mx-auto bg-white p-3 rounded-2xl border border-neutral-300 shadow-md flex items-center justify-center">
                    {qrCodeDataUrl ? (
                      <img
                        src={qrCodeDataUrl}
                        alt="QR Code Pix Oficial"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Loader2 className="w-8 h-8 animate-spin text-[#00B495]" />
                    )}
                  </div>

                  <p className="text-xs text-neutral-600 font-medium">
                    Aponte a câmera do seu celular no aplicativo do seu banco para escanear
                  </p>

                  {/* Campo Pix Copia e Cola */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase mb-1.5 text-left">
                      Ou copie o código Pix abaixo:
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        readOnly
                        value={pixData?.qrCodeText || ''}
                        className="w-full px-3.5 py-3 text-xs bg-white border border-neutral-300 rounded-xl text-neutral-700 font-mono truncate focus:outline-none"
                      />
                      <button
                        onClick={copyPix}
                        className="py-3 px-4 bg-[#00B495] hover:bg-[#009E83] text-white text-xs font-bold rounded-xl transition shrink-0 flex items-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-white" />
                            Copiado!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copiar Pix
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Passo a Passo */}
                  <div className="text-left bg-white p-4 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-1.5">
                    <p className="font-bold text-neutral-800 mb-1">Como pagar:</p>
                    <p>1. Abra o app do seu banco ou carteira digital.</p>
                    <p>2. Acesse a área <strong>Pix</strong> e selecione <strong>Pix Copia e Cola</strong> (ou Ler QR Code).</p>
                    <p>3. Cole o código ou aponte a câmera e confirme o pagamento.</p>
                  </div>

                  {/* Botão de Verificação */}
                  <button
                    onClick={confirmPixPayment}
                    disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Já fiz o Pix, confirmar reserva
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Pagamento seguro instantâneo protegido por criptografia</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
