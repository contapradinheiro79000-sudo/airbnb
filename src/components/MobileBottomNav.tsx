import React from 'react';
import { Search, Heart, Briefcase, MessageSquare, User as UserIcon } from 'lucide-react';
import type { User } from '../types/authAndPayment';

interface MobileBottomNavProps {
  currentUser: User | null;
  favoritesCount: number;
  onExplore: () => void;
  onOpenFavorites: () => void;
  onOpenTrips: () => void;
  onOpenChat: () => void;
  onOpenAuth: () => void;
  activeTab?: 'explore' | 'favorites' | 'trips' | 'chat' | 'profile';
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentUser,
  favoritesCount,
  onExplore,
  onOpenFavorites,
  onOpenTrips,
  onOpenChat,
  onOpenAuth,
  activeTab = 'explore',
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-neutral-200 py-2.5 px-4 flex justify-around items-center shadow-lg">
      {/* Explorar */}
      <button
        onClick={onExplore}
        className={`flex flex-col items-center gap-1 cursor-pointer transition ${
          activeTab === 'explore' ? 'text-[#FF385C]' : 'text-neutral-500 hover:text-neutral-900'
        }`}
      >
        <Search className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-medium">Explorar</span>
      </button>

      {/* Favoritos */}
      <button
        onClick={onOpenFavorites}
        className={`flex flex-col items-center gap-1 cursor-pointer relative transition ${
          activeTab === 'favorites' ? 'text-[#FF385C]' : 'text-neutral-500 hover:text-neutral-900'
        }`}
      >
        <div className="relative">
          <Heart className="w-5 h-5 stroke-[2.2]" />
          {favoritesCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#FF385C] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {favoritesCount}
            </span>
          )}
        </div>
        <span className="text-[10px] font-medium">Favoritos</span>
      </button>

      {/* Viagens */}
      <button
        onClick={onOpenTrips}
        className={`flex flex-col items-center gap-1 cursor-pointer transition ${
          activeTab === 'trips' ? 'text-[#FF385C]' : 'text-neutral-500 hover:text-neutral-900'
        }`}
      >
        <Briefcase className="w-5 h-5 stroke-[2.2]" />
        <span className="text-[10px] font-medium">Viagens</span>
      </button>

      {/* Chat / Mensagens */}
      <button
        onClick={onOpenChat}
        className={`flex flex-col items-center gap-1 cursor-pointer relative transition ${
          activeTab === 'chat' ? 'text-[#FF385C]' : 'text-neutral-500 hover:text-neutral-900'
        }`}
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 stroke-[2.2]" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full"></span>
        </div>
        <span className="text-[10px] font-medium">Mensagens</span>
      </button>

      {/* Perfil / Entrar */}
      <button
        onClick={onOpenAuth}
        className="flex flex-col items-center gap-1 cursor-pointer text-neutral-500 hover:text-neutral-900 transition"
      >
        {currentUser?.avatar ? (
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-5 h-5 rounded-full object-cover ring-1 ring-neutral-400"
          />
        ) : (
          <UserIcon className="w-5 h-5 stroke-[2.2]" />
        )}
        <span className="text-[10px] font-medium truncate max-w-[55px]">
          {currentUser ? currentUser.name.split(' ')[0] : 'Entrar'}
        </span>
      </button>
    </nav>
  );
};
