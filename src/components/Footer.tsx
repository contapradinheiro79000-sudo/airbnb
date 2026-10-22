import React from 'react';
import { Globe } from 'lucide-react';

interface FooterProps {
  onOpenHelp: () => void;
  onOpenHost: () => void;
  onOpenLangCurr: () => void;
  selectedLanguage?: string;
  selectedCurrency?: string;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenHelp,
  onOpenHost,
  onOpenLangCurr,
  selectedLanguage = 'pt-BR',
  selectedCurrency = 'BRL',
}) => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-20 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-300">
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Atendimento</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Central de Ajuda
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  AirCover (Proteção de reservas)
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Apoio a pessoas com deficiência
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Opções e regras de cancelamento
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Hospedagem</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenHost} className="hover:underline cursor-pointer font-semibold text-neutral-900">
                  Anuncie seu espaço no Airbnb
                </button>
              </li>
              <li>
                <button onClick={onOpenHost} className="hover:underline cursor-pointer">
                  AirCover para anfitriões
                </button>
              </li>
              <li>
                <button onClick={onOpenHost} className="hover:underline cursor-pointer">
                  Estimativa de ganhos mensais
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Fórum e diretrizes da comunidade
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Airbnb</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Newsroom & Atualizações
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Recursos de Inverno e Verão
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Carreiras e Oportunidades
                </button>
              </li>
              <li>
                <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
                  Investidores e Governança
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
              Privacidade
            </button>
            <span>·</span>
            <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
              Termos
            </button>
            <span>·</span>
            <button onClick={onOpenHelp} className="hover:underline cursor-pointer">
              Informações da Empresa
            </button>
          </div>
          <div className="flex items-center gap-4 font-semibold text-neutral-800">
            <button
              onClick={onOpenLangCurr}
              className="flex items-center gap-1.5 hover:underline cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              {selectedLanguage === 'pt-BR' ? 'Português (BR)' : selectedLanguage}
            </button>
            <button
              onClick={onOpenLangCurr}
              className="hover:underline cursor-pointer font-bold"
            >
              {selectedCurrency === 'BRL' ? 'R$ BRL' : selectedCurrency}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
