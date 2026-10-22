import React, { useState } from 'react';
import { X } from 'lucide-react';

export interface FilterOptions {
  minPrice: number;
  maxPrice: number;
  bedrooms: number; // 0 = qualquer
  amenities: string[];
}

interface FiltersModalProps {
  isOpen: boolean;
  currentFilters: FilterOptions;
  onClose: () => void;
  onApply: (filters: FilterOptions) => void;
  onReset: () => void;
}

const availableAmenities = [
  'Piscina infinita privativa',
  'Piscina aquecida privativa',
  'Wi-Fi rápido (300 Mbps)',
  'Ar-condicionado em todos os quartos',
  'Jacuzzi privativa com hidromassagem',
  'Acesso direto à praia',
  'Lareira a lenha',
  'Churrasqueira gourmet',
  'Estacionamento gratuito para 2 carros',
];

export const FiltersModal: React.FC<FiltersModalProps> = ({
  isOpen,
  currentFilters,
  onClose,
  onApply,
  onReset,
}) => {
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice);
  const [bedrooms, setBedrooms] = useState(currentFilters.bedrooms);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    currentFilters.amenities
  );

  if (!isOpen) return null;

  const toggleAmenity = (item: string) => {
    if (selectedAmenities.includes(item)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== item));
    } else {
      setSelectedAmenities([...selectedAmenities, item]);
    }
  };

  const handleApply = () => {
    onApply({
      minPrice,
      maxPrice,
      bedrooms,
      amenities: selectedAmenities,
    });
    onClose();
  };

  const handleClear = () => {
    setMinPrice(0);
    setMaxPrice(3000);
    setBedrooms(0);
    setSelectedAmenities([]);
    onReset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 transition absolute right-6 top-6 text-neutral-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <h2 className="text-xl font-bold text-neutral-900 border-b border-neutral-200 pb-4">
            Filtros
          </h2>

          {/* Faixa de Preço */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-neutral-900">Faixa de Preço por noite</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 border border-neutral-300 rounded-xl">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase">Preço Mínimo</span>
                <div className="flex items-center gap-1 font-semibold text-sm">
                  <span>R$</span>
                  <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="p-3 border border-neutral-300 rounded-xl">
                <span className="block text-[11px] font-bold text-neutral-500 uppercase">Preço Máximo</span>
                <div className="flex items-center gap-1 font-semibold text-sm">
                  <span>R$</span>
                  <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quartos */}
          <div className="space-y-3 pt-2 border-t border-neutral-200">
            <h3 className="font-bold text-sm text-neutral-900">Quartos</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { label: 'Qualquer', val: 0 },
                { label: '1+', val: 1 },
                { label: '2+', val: 2 },
                { label: '3+', val: 3 },
                { label: '4+', val: 4 },
                { label: '5+', val: 5 },
              ].map((item) => (
                <button
                  key={item.val}
                  type="button"
                  onClick={() => setBedrooms(item.val)}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold transition cursor-pointer ${
                    bedrooms === item.val
                      ? 'bg-neutral-900 text-white border-neutral-900'
                      : 'border-neutral-300 text-neutral-700 hover:border-neutral-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Comodidades */}
          <div className="space-y-3 pt-2 border-t border-neutral-200">
            <h3 className="font-bold text-sm text-neutral-900">Comodidades</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {availableAmenities.map((amenity) => {
                const checked = selectedAmenities.includes(amenity);
                return (
                  <button
                    key={amenity}
                    type="button"
                    onClick={() => toggleAmenity(amenity)}
                    className={`flex items-center gap-2 p-2.5 rounded-xl border text-left transition cursor-pointer ${
                      checked
                        ? 'border-[#FF385C] bg-rose-50/50 text-neutral-900 font-semibold'
                        : 'border-neutral-200 text-neutral-600 hover:border-neutral-400'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      readOnly
                      className="accent-[#FF385C]"
                    />
                    <span className="truncate">{amenity}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
            <button
              type="button"
              onClick={handleClear}
              className="text-xs font-bold text-neutral-800 underline hover:text-black cursor-pointer"
            >
              Limpar tudo
            </button>
            <button
              type="button"
              onClick={handleApply}
              className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs py-3 px-6 rounded-xl transition cursor-pointer shadow-md"
            >
              Aplicar Filtros
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
