import React, { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Property } from '../types';

interface ListingCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (e: React.MouseEvent) => void;
}

export const ListingCard: React.FC<ListingCardProps> = ({
  property,
  onSelect,
  isFavorite = false,
  onToggleFavorite,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(e);
    }
  };

  return (
    <div
      onClick={() => onSelect(property)}
      className="group cursor-pointer flex flex-col gap-2"
    >
      {/* Image Container with Slider */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badges: Guest Favorite or Discount */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {property.isGuestFavorite && (
            <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold text-neutral-800 shadow-sm">
              Preferido dos hóspedes
            </div>
          )}
          {property.discountBadge && (
            <div className="bg-emerald-600 text-white px-2.5 py-1 rounded-full text-[11px] font-bold shadow-sm tracking-wide">
              {property.discountBadge}
            </div>
          )}
        </div>

        {/* Favorite Heart Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:scale-110 transition active:scale-95 cursor-pointer"
        >
          <Heart
            className={`w-6 h-6 stroke-white stroke-2 ${
              isFavorite ? 'fill-[#FF385C] stroke-[#FF385C]' : 'fill-black/40'
            }`}
          />
        </button>

        {/* Carousel Navigation Arrows */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow"
            >
              <ChevronLeft className="w-4 h-4 text-neutral-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition shadow"
            >
              <ChevronRight className="w-4 h-4 text-neutral-800" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {property.images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Property Details */}
      <div className="flex justify-between items-start text-sm">
        <h3 className="font-semibold text-neutral-900 truncate">
          {property.location}
        </h3>
        <div className="flex items-center gap-1 font-medium text-neutral-800 shrink-0">
          <Star className="w-3.5 h-3.5 fill-black" />
          <span>{property.rating.toFixed(2)}</span>
        </div>
      </div>

      <p className="text-neutral-500 text-sm -mt-1 truncate">
        {property.distance}
      </p>
      <p className="text-neutral-500 text-sm -mt-1">{property.dates}</p>

      {/* Price */}
      <div className="mt-1 text-sm flex items-baseline gap-2">
        {property.originalPrice && (
          <span className="text-neutral-400 line-through text-xs font-medium">
            R$ {property.originalPrice.toLocaleString('pt-BR')}
          </span>
        )}
        <span className="font-bold text-neutral-900">
          R$ {property.pricePerNight.toLocaleString('pt-BR')}
        </span>{' '}
        <span className="text-neutral-600">noite</span>
      </div>
    </div>
  );
};
