import React, { useState } from 'react';
import { Globe, Menu, User as UserIcon, Search, LogOut, Heart, Briefcase, HelpCircle, Home } from 'lucide-react';
import type { User } from '../types/authAndPayment';

interface NavbarProps {
  currentUser: User | null;
  onSearchClick: () => void;
  onOpenAuth: (mode: 'login' | 'register') => void;
  onLogout: () => void;
  onOpenHost: () => void;
  onOpenHelp: () => void;
  onOpenTrips: () => void;
  onOpenFavorites: () => void;
  onOpenLangCurr: () => void;
  favoritesCount?: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentUser,
  onSearchClick,
  onOpenAuth,
  onLogout,
  onOpenHost,
  onOpenHelp,
  onOpenTrips,
  onOpenFavorites,
  onOpenLangCurr,
  favoritesCount = 0,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 cursor-pointer"
          >
            <svg
              className="h-8 w-auto text-[#FF385C]"
              viewBox="0 0 32 32"
              fill="currentColor"
            >
              <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.479.96 3.327.142 2.449-.806 4.678-2.528 5.962-1.579 1.178-3.642 1.62-5.744 1.233-2.128-.393-4.148-1.745-6.079-4.043-1.928 2.296-3.947 3.647-6.076 4.04-2.102.387-4.164-.055-5.743-1.233-1.723-1.284-2.67-3.513-2.528-5.962.05-.848.293-1.736.96-3.327l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1h4zm0 2h-4c-1.298 0-2.316.634-3.385 2.546l-.529 1.018C6.183 10.301 2.083 18.89 1.127 21.118c-.57 1.36-.78 2.083-.82 2.766-.109 1.884.604 3.553 1.892 4.513 1.174.876 2.748 1.206 4.385.905 1.764-.326 3.535-1.551 5.394-3.774l.462-.562.463.562c1.859 2.223 3.63 3.448 5.394 3.774 1.637.301 3.211-.029 4.385-.905 1.288-.96 2.001-2.629 1.892-4.513-.04-.683-.25-1.406-.82-2.766-.956-2.228-5.056-10.817-7.01-14.554l-.529-1.018C18.316 3.634 17.298 3 16 3zm0 15c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#FF385C] hidden sm:inline">
              airbnb
            </span>
          </a>

          {/* Quick Search Pill */}
          <button
            onClick={onSearchClick}
            className="flex items-center border border-neutral-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer text-sm font-medium"
          >
            <span className="px-2 text-neutral-800">Qualquer lugar</span>
            <span className="border-r border-neutral-300 h-4 mx-1"></span>
            <span className="px-2 text-neutral-800">Qualquer semana</span>
            <span className="border-r border-neutral-300 h-4 mx-1"></span>
            <span className="px-2 text-neutral-500 font-normal">Hóspedes?</span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full ml-2">
              <Search className="w-3.5 h-3.5 stroke-[3]" />
            </div>
          </button>

          {/* Right Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenHost}
              className="hidden md:block text-sm font-semibold py-2 px-3.5 rounded-full hover:bg-neutral-100 transition text-neutral-800 cursor-pointer"
            >
              Anuncie no seu espaço
            </button>
            <button
              onClick={onOpenLangCurr}
              className="p-2.5 rounded-full hover:bg-neutral-100 transition text-neutral-800 cursor-pointer"
              title="Idioma e Moeda"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* User Menu Trigger */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-3 border border-neutral-300 rounded-full py-1.5 px-3 hover:shadow-md transition cursor-pointer"
              >
                <Menu className="w-4 h-4 text-neutral-700" />
                {currentUser?.avatar ? (
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                ) : (
                  <div className="bg-neutral-600 text-white p-1 rounded-full">
                    <UserIcon className="w-3.5 h-3.5" />
                  </div>
                )}
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl border border-neutral-200 py-2 z-50 text-sm animate-in fade-in duration-150">
                  {currentUser ? (
                    <>
                      <div className="px-4 py-2 border-b border-neutral-100">
                        <p className="font-bold text-neutral-900 truncate">
                          {currentUser.name}
                        </p>
                        <p className="text-xs text-neutral-500 truncate">
                          {currentUser.email}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenTrips();
                        }}
                        className="w-full text-left px-4 py-2.5 font-medium text-neutral-700 hover:bg-neutral-50 flex items-center gap-2.5 cursor-pointer"
                      >
                        <Briefcase className="w-4 h-4 text-neutral-500" />
                        Minhas Viagens
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenFavorites();
                        }}
                        className="w-full text-left px-4 py-2.5 font-medium text-neutral-700 hover:bg-neutral-50 flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <Heart className="w-4 h-4 text-[#FF385C]" />
                          Favoritos
                        </div>
                        {favoritesCount > 0 && (
                          <span className="text-[10px] bg-rose-100 text-[#FF385C] font-bold px-2 py-0.5 rounded-full">
                            {favoritesCount}
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenHost();
                        }}
                        className="w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 flex items-center gap-2.5 cursor-pointer"
                      >
                        <Home className="w-4 h-4 text-neutral-500" />
                        Anuncie seu espaço
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenHelp();
                        }}
                        className="w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 flex items-center gap-2.5 cursor-pointer"
                      >
                        <HelpCircle className="w-4 h-4 text-neutral-500" />
                        Central de Ajuda
                      </button>
                      <div className="border-t border-neutral-200 my-1"></div>
                      <button
                        onClick={() => {
                          onLogout();
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 font-medium cursor-pointer"
                      >
                        <LogOut className="w-4 h-4" />
                        Sair
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          onOpenAuth('register');
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 font-bold text-neutral-900 hover:bg-neutral-50 cursor-pointer"
                      >
                        Cadastre-se
                      </button>
                      <button
                        onClick={() => {
                          onOpenAuth('login');
                          setUserMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                      >
                        Entrar
                      </button>
                      <div className="border-t border-neutral-200 my-1"></div>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenHost();
                        }}
                        className="w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Home className="w-4 h-4 text-neutral-500" />
                        Anuncie seu espaço
                      </button>
                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          onOpenHelp();
                        }}
                        className="w-full text-left px-4 py-2.5 text-neutral-700 hover:bg-neutral-50 flex items-center gap-2 cursor-pointer"
                      >
                        <HelpCircle className="w-4 h-4 text-neutral-500" />
                        Central de Ajuda
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
