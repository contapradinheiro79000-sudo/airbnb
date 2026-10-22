import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 mt-20 text-neutral-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-neutral-300">
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Atendimento</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Central de Ajuda</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Apoio a pessoas com deficiência</a></li>
              <li><a href="#" className="hover:underline">Opções de cancelamento</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Hospedagem</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Anuncie seu espaço no Airbnb</a></li>
              <li><a href="#" className="hover:underline">AirCover para anfitriões</a></li>
              <li><a href="#" className="hover:underline">Recursos para anfitriões</a></li>
              <li><a href="#" className="hover:underline">Fórum da comunidade</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-neutral-900 mb-3">Airbnb</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">Novos recursos</a></li>
              <li><a href="#" className="hover:underline">Carreiras</a></li>
              <li><a href="#" className="hover:underline">Investidores</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacidade</a>
            <span>·</span>
            <a href="#" className="hover:underline">Termos</a>
            <span>·</span>
            <a href="#" className="hover:underline">Mapa do site</a>
          </div>
          <div className="flex items-center gap-4 font-semibold text-neutral-800">
            <button className="flex items-center gap-1.5 hover:underline">
              <Globe className="w-3.5 h-3.5" />
              Português (BR)
            </button>
            <button className="hover:underline">
              R$ BRL
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
