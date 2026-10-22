import React from 'react';
import {
  Sparkles,
  Palmtree,
  Home,
  Waves,
  Trees,
  Gem,
  Mountain,
  Ship,
  Compass,
  SlidersHorizontal,
} from 'lucide-react';
import type { Category } from '../types';

interface CategoryBarProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
  onOpenFilters: () => void;
  activeFilterCount?: number;
}

const iconMap: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6" />,
  Palmtree: <Palmtree className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Waves: <Waves className="w-6 h-6" />,
  Trees: <Trees className="w-6 h-6" />,
  Gem: <Gem className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Ship: <Ship className="w-6 h-6" />,
  Compass: <Compass className="w-6 h-6" />,
};

export const CategoryBar: React.FC<CategoryBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
  onOpenFilters,
  activeFilterCount = 0,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4 flex items-center justify-between gap-4">
      {/* Scrollable Categories List */}
      <div className="flex items-center gap-8 overflow-x-auto no-scrollbar py-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex flex-col items-center gap-2 pb-2 transition border-b-2 whitespace-nowrap cursor-pointer ${
                isSelected
                  ? 'border-neutral-900 text-neutral-900 font-semibold'
                  : 'border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300'
              }`}
            >
              {iconMap[cat.icon] || <Sparkles className="w-6 h-6" />}
              <span className="text-xs">{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Filter Button */}
      <button
        onClick={onOpenFilters}
        className="hidden sm:flex items-center gap-2 border border-neutral-300 rounded-xl py-2.5 px-4 text-xs font-semibold hover:border-neutral-800 transition whitespace-nowrap cursor-pointer relative"
      >
        <SlidersHorizontal className="w-3.5 h-3.5" />
        Filtros
        {activeFilterCount > 0 && (
          <span className="w-5 h-5 bg-[#FF385C] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
            {activeFilterCount}
          </span>
        )}
      </button>
    </div>
  );
};
