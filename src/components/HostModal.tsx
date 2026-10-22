import React, { useState } from 'react';
import { X, Sparkles, Home, DollarSign, ShieldCheck } from 'lucide-react';

interface HostModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HostModal: React.FC<HostModalProps> = ({ isOpen, onClose }) => {
  const [nightsPerMonth, setNightsPerMonth] = useState(15);
  const estimatedEarnings = nightsPerMonth * 450;

  if (!isOpen) return null;

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
            <Home className="w-6 h-6" />
            <span className="font-bold text-sm uppercase tracking-wider">Airbnb Host</span>
          </div>

          <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
            Anuncie seu espaço e fature o ano todo
          </h2>

          <div className="p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl border border-rose-100">
            <span className="text-xs font-bold text-rose-700 uppercase">
              Estimativa de Ganhos na sua região
            </span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-4xl font-extrabold text-neutral-900">
                R$ {estimatedEarnings.toLocaleString('pt-BR')}
              </span>
              <span className="text-sm text-neutral-600 font-medium">por mês</span>
            </div>
            <p className="text-xs text-neutral-500 mt-1">
              Com base em {nightsPerMonth} noites reservadas a uma diária média de R$ 450.
            </p>

            <div className="mt-4">
              <label className="block text-xs font-bold text-neutral-700 mb-1">
                Ajustar noites por mês: {nightsPerMonth} noites
              </label>
              <input
                type="range"
                min="5"
                max="30"
                value={nightsPerMonth}
                onChange={(e) => setNightsPerMonth(Number(e.target.value))}
                className="w-full accent-[#FF385C]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl border border-neutral-200 space-y-1.5">
              <Sparkles className="w-5 h-5 text-[#FF385C]" />
              <h4 className="font-bold text-sm text-neutral-900">1. Cadastre grátis</h4>
              <p className="text-xs text-neutral-500">
                Compartilhe fotos, comodidades e regras do seu espaço em poucos minutos.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 space-y-1.5">
              <DollarSign className="w-5 h-5 text-[#00B495]" />
              <h4 className="font-bold text-sm text-neutral-900">2. Defina seus preços</h4>
              <p className="text-xs text-neutral-500">
                Escolha suas datas, regras e tarifas com total controle de disponibilidade.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-neutral-200 space-y-1.5">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <h4 className="font-bold text-sm text-neutral-900">3. Receba com AirCover</h4>
              <p className="text-xs text-neutral-500">
                Proteção completa contra danos de até R$ 15 milhões e seguro de responsabilidade civil.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                alert('Obrigado pelo interesse! Seu formulário de anfitrião foi iniciado.');
                onClose();
              }}
              className="w-full bg-[#FF385C] hover:bg-[#E00B41] text-white font-bold py-3.5 rounded-xl shadow-md transition text-sm cursor-pointer"
            >
              Começar a Anunciar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
