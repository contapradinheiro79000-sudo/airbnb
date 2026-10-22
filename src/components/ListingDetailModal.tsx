import React, { useState } from 'react';
import {
  X,
  Star,
  CheckCircle2,
  Award,
} from 'lucide-react';
import type { Property } from '../types';

interface ListingDetailModalProps {
  property: Property | null;
  onClose: () => void;
  onStartCheckout: (property: Property, nights: number, totalPrice: number) => void;
}

export const ListingDetailModal: React.FC<ListingDetailModalProps> = ({
  property,
  onClose,
  onStartCheckout,
}) => {
  if (!property) return null;

  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(2);

  const basePrice = property.pricePerNight * nights;
  const cleaningFee = 150;
  const serviceFee = Math.round(basePrice * 0.12);
  const totalPrice = basePrice + cleaningFee + serviceFee;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6">
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 animate-in fade-in duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="sticky top-0 float-right z-10 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 p-2 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Stats */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 pr-10">
          {property.title}
        </h2>
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-700 mt-2 pb-4 border-b border-neutral-200">
          <div className="flex items-center gap-1 font-semibold">
            <Star className="w-4 h-4 fill-black text-black" />
            <span>{property.rating.toFixed(2)}</span>
          </div>
          <span>·</span>
          <span className="underline font-medium cursor-pointer">
            {property.reviewCount} avaliações
          </span>
          <span>·</span>
          <span className="font-medium text-neutral-800">
            {property.location}
          </span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-6 rounded-2xl overflow-hidden max-h-96">
          <div className="md:col-span-2 h-72 md:h-full">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:grid grid-rows-2 gap-2">
            {property.images.slice(1, 3).map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-full h-44 object-cover"
              />
            ))}
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-6">
            {/* Host Section */}
            <div className="flex items-center justify-between pb-6 border-b border-neutral-200">
              <div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Espaço inteiro por {property.host.name}
                </h3>
                <p className="text-sm text-neutral-500">
                  {property.details.guests} hóspedes · {property.details.bedrooms}{' '}
                  quartos · {property.details.beds} camas · {property.details.baths}{' '}
                  banheiros
                </p>
              </div>
              <img
                src={property.host.avatar}
                alt={property.host.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-neutral-200"
              />
            </div>

            {/* Highlights */}
            {property.host.isSuperhost && (
              <div className="flex items-start gap-4 pb-6 border-b border-neutral-200">
                <Award className="w-6 h-6 text-[#FF385C] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-neutral-900">
                    {property.host.name} é Superhost
                  </h4>
                  <p className="text-sm text-neutral-500">
                    Superhosts são anfitriões experientes e muito bem avaliados,
                    comprometidos em oferecer estadias excelentes.
                  </p>
                </div>
              </div>
            )}

            {/* Description */}
            <div className="pb-6 border-b border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">
                Sobre este espaço
              </h3>
              <p className="text-neutral-700 leading-relaxed text-sm">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">
                O que esse lugar oferece
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                {property.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Widget (Checkout Box) */}
          <div className="md:col-span-1">
            <div className="sticky top-20 border border-neutral-200 rounded-2xl p-5 shadow-xl bg-white space-y-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-neutral-900">
                    R$ {property.pricePerNight}
                  </span>{' '}
                  <span className="text-neutral-500 text-sm">noite</span>
                </div>
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <Star className="w-3.5 h-3.5 fill-black" />
                  <span>{property.rating.toFixed(2)}</span>
                </div>
              </div>

              {/* Selector Inputs */}
              <div className="border border-neutral-300 rounded-xl overflow-hidden text-xs">
                <div className="grid grid-cols-2 border-b border-neutral-300">
                  <div className="p-2.5 border-r border-neutral-300">
                    <span className="block font-bold text-neutral-500 uppercase">
                      Noites
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={30}
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full font-semibold focus:outline-none text-sm"
                    />
                  </div>
                  <div className="p-2.5">
                    <span className="block font-bold text-neutral-500 uppercase">
                      Check-in
                    </span>
                    <span className="font-semibold text-neutral-800 text-sm">
                      12/nov
                    </span>
                  </div>
                </div>
                <div className="p-2.5">
                  <span className="block font-bold text-neutral-500 uppercase">
                    Hóspedes
                  </span>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full font-semibold focus:outline-none bg-transparent text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6].map((g) => (
                      <option key={g} value={g}>
                        {g} {g === 1 ? 'hóspede' : 'hóspedes'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reserve Button */}
              <button
                onClick={() => onStartCheckout(property, nights, totalPrice)}
                className="w-full bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:opacity-95 text-white font-bold py-3.5 rounded-xl shadow-md transition cursor-pointer text-sm"
              >
                Prosseguir para Reserva
              </button>
              <p className="text-center text-xs text-neutral-500">
                Você ainda não será cobrado
              </p>

              {/* Price Calculation breakdown */}
              <div className="space-y-2 pt-2 border-t border-neutral-200 text-sm text-neutral-600">
                <div className="flex justify-between">
                  <span className="underline">
                    R$ {property.pricePerNight} x {nights} noites
                  </span>
                  <span>R$ {basePrice.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Taxa de limpeza</span>
                  <span>R$ {cleaningFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline">Taxa de serviço Airbnb</span>
                  <span>R$ {serviceFee.toLocaleString('pt-BR')}</span>
                </div>
                <div className="flex justify-between font-bold text-neutral-900 pt-3 border-t border-neutral-200 text-base">
                  <span>Total sem impostos</span>
                  <span>R$ {totalPrice.toLocaleString('pt-BR')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
