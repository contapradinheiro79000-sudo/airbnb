import React, { useState } from 'react';
import { X, HelpCircle, Shield, CreditCard, Calendar, MessageSquare, ChevronDown } from 'lucide-react';

interface HelpCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const HelpCenterModal: React.FC<HelpCenterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  if (!isOpen) return null;

  const faqs = [
    {
      q: 'Como funciona o pagamento via PIX?',
      a: 'O pagamento por PIX é aprovado imediatamente. Assim que você gerar a cobrança na tela de reserva, basta abrir o aplicativo do seu banco, escanear o QR Code ou copiar o código Pix. O sistema identifica o pagamento em segundos e confirma a reserva automaticamente.',
    },
    {
      q: 'Qual é a política de cancelamento?',
      a: 'A maioria dos anfitriões oferece cancelamento gratuito em até 48 horas após a reserva (ou até 7 dias antes do check-in). O reembolso é processado integralmente na mesma chave Pix utilizada na compra.',
    },
    {
      q: 'O que é a proteção AirCover?',
      a: 'O AirCover é uma proteção abrangente e gratuita inclusa em todas as reservas. Ele inclui garantia de fidelidade da acomodação, garantia de check-in e linha de segurança 24 horas.',
    },
    {
      q: 'Como entro em contato com o anfitrião?',
      a: 'Assim que sua reserva for confirmada, você terá acesso direto ao chat privado com o anfitrião para combinar detalhes de check-in, chave de acesso e tirar dúvidas.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 transition absolute right-6 top-6 text-neutral-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-2 text-[#FF385C]">
            <HelpCircle className="w-6 h-6" />
            <span className="font-bold text-sm uppercase tracking-wider">Atendimento & Suporte</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Central de Ajuda Airbnb
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition cursor-pointer">
              <CreditCard className="w-5 h-5 text-emerald-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-neutral-800">Pagamentos Pix</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition cursor-pointer">
              <Calendar className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-neutral-800">Cancelamentos</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition cursor-pointer">
              <Shield className="w-5 h-5 text-rose-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-neutral-800">AirCover</span>
            </div>
            <div className="p-3 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition cursor-pointer">
              <MessageSquare className="w-5 h-5 text-indigo-600 mx-auto mb-1.5" />
              <span className="text-xs font-bold text-neutral-800">Chat Suporte</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-base text-neutral-900">Perguntas Frequentes</h3>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-neutral-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold text-sm text-neutral-800 hover:bg-neutral-50 transition cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-[#FF385C]' : 'text-neutral-400'
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200 flex items-center justify-between">
            <div>
              <p className="font-bold text-sm text-neutral-900">Precisa de suporte agora?</p>
              <p className="text-xs text-neutral-500">Nossa equipe atende 24 horas por dia, 7 dias por semana.</p>
            </div>
            <button
              onClick={() => {
                alert('Conectando ao suporte 24h via chat...');
                onClose();
              }}
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs py-2.5 px-4 rounded-xl transition cursor-pointer"
            >
              Falar com Suporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
