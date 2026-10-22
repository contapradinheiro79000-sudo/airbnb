import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import type { SearchFilters } from '../types';

interface HeroSearchProps {
  onSearch: (filters: SearchFilters) => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch }) => {
  const [location, setLocation] = useState('Ubatuba, São Paulo');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      location,
      checkIn,
      checkOut,
      adults,
      children,
    });
  };

  return (
    <div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl mx-4 sm:mx-6 lg:mx-8 my-6">
      {/* Background Image Banner */}
      <img
        src="/images/c8ba7316-48cc-407c-bbad-04116ff2c555.jpg"
        alt="Hero banner"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12 md:py-16 text-white text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">
          Descubra acomodações inesquecíveis
        </h1>
        <p className="text-lg md:text-xl text-neutral-200 mb-8 max-w-2xl mx-auto">
          As melhores estadias começam aqui. Espaços únicos para todos os estilos de viagem.
        </p>

        {/* Search Box Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white text-neutral-800 rounded-2xl shadow-xl p-4 md:p-3 grid grid-cols-1 md:grid-cols-4 gap-3 items-center text-left"
        >
          {/* Location Field */}
          <div className="p-2 border-b md:border-b-0 md:border-r border-neutral-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF385C]" />
              Onde
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Para onde você vai?"
              className="w-full text-sm font-medium focus:outline-none placeholder-neutral-400"
            />
          </div>

          {/* Dates Field */}
          <div className="p-2 border-b md:border-b-0 md:border-r border-neutral-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#FF385C]" />
              Quando
            </label>
            <div className="grid grid-cols-2 gap-1 text-xs">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full font-medium focus:outline-none"
              />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full font-medium focus:outline-none"
              />
            </div>
          </div>

          {/* Guests Field */}
          <div className="p-2 border-b md:border-b-0 border-neutral-200">
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-[#FF385C]" />
              Quem
            </label>
            <div className="flex items-center gap-2 text-sm">
              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full font-medium focus:outline-none bg-transparent"
              >
                {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Adulto' : 'Adultos'}
                  </option>
                ))}
              </select>
              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full font-medium focus:outline-none bg-transparent"
              >
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Criança' : 'Crianças'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Search Action Button */}
          <div className="p-2 flex justify-end">
            <button
              type="submit"
              className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#FF385C] hover:bg-[#E00B41] text-white font-semibold py-3.5 px-6 rounded-xl transition shadow-md"
            >
              <Search className="w-4 h-4" />
              <span>Buscar</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
