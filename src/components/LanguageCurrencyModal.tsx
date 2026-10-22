import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LanguageCurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLanguage: string;
  selectedCurrency: string;
  onSelectLanguage: (lang: string) => void;
  onSelectCurrency: (curr: string) => void;
}

const languages = [
  { code: 'pt-BR', name: 'Português (Brasil)', region: 'Brasil' },
  { code: 'en-US', name: 'English (US)', region: 'United States' },
  { code: 'es-ES', name: 'Español', region: 'España' },
  { code: 'fr-FR', name: 'Français', region: 'France' },
];

const currencies = [
  { code: 'BRL', symbol: 'R$', name: 'Real brasileiro' },
  { code: 'USD', symbol: '$', name: 'Dólar americano' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'Libra esterlina' },
];

export const LanguageCurrencyModal: React.FC<LanguageCurrencyModalProps> = ({
  isOpen,
  onClose,
  selectedLanguage,
  selectedCurrency,
  onSelectLanguage,
  onSelectCurrency,
}) => {
  const [activeTab, setActiveTab] = useState<'lang' | 'curr'>('lang');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 transition absolute right-6 top-6 text-neutral-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          {/* Tabs */}
          <div className="flex border-b border-neutral-200 gap-6 text-sm font-bold">
            <button
              onClick={() => setActiveTab('lang')}
              className={`pb-3 cursor-pointer transition border-b-2 ${
                activeTab === 'lang'
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Idioma e região
            </button>
            <button
              onClick={() => setActiveTab('curr')}
              className={`pb-3 cursor-pointer transition border-b-2 ${
                activeTab === 'curr'
                  ? 'border-neutral-900 text-neutral-900'
                  : 'border-transparent text-neutral-400 hover:text-neutral-700'
              }`}
            >
              Moeda
            </button>
          </div>

          {activeTab === 'lang' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languages.map((item) => (
                <button
                  key={item.code}
                  onClick={() => {
                    onSelectLanguage(item.code);
                    onClose();
                  }}
                  className={`p-3 rounded-2xl border text-left flex items-center justify-between transition cursor-pointer ${
                    selectedLanguage === item.code
                      ? 'border-neutral-900 bg-neutral-50 font-bold'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div>
                    <p className="text-sm text-neutral-900">{item.name}</p>
                    <p className="text-xs text-neutral-400">{item.region}</p>
                  </div>
                  {selectedLanguage === item.code && (
                    <Check className="w-4 h-4 text-neutral-900" />
                  )}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currencies.map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    onSelectCurrency(curr.code);
                    onClose();
                  }}
                  className={`p-3 rounded-2xl border text-left flex items-center justify-between transition cursor-pointer ${
                    selectedCurrency === curr.code
                      ? 'border-neutral-900 bg-neutral-50 font-bold'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div>
                    <p className="text-sm text-neutral-900">
                      {curr.name} ({curr.symbol})
                    </p>
                    <p className="text-xs text-neutral-400">{curr.code}</p>
                  </div>
                  {selectedCurrency === curr.code && (
                    <Check className="w-4 h-4 text-neutral-900" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
