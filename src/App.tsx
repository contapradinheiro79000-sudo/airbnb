import { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { CategoryBar } from './components/CategoryBar';
import { ListingCard } from './components/ListingCard';
import { ListingDetailModal } from './components/ListingDetailModal';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { categories, mockProperties } from './data/mockData';
import type { Property, SearchFilters } from './types';
import type { User } from './types/authAndPayment';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showHero, setShowHero] = useState(true);

  // Estados de Autenticação
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Estados de Pagamento / Checkout
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutProperty, setCheckoutProperty] = useState<Property | null>(null);
  const [checkoutNights, setCheckoutNights] = useState(5);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);

  // Recupera usuário salvo localmente
  useEffect(() => {
    const savedUser = localStorage.getItem('airbnb_user');
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch {
        // ignora
      }
    }
  }, []);

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('airbnb_user', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('airbnb_user');
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleStartCheckout = (
    property: Property,
    nights: number,
    totalPrice: number
  ) => {
    setSelectedProperty(null); // Fecha modal de detalhes
    setCheckoutProperty(property);
    setCheckoutNights(nights);
    setCheckoutTotalPrice(totalPrice);
    setCheckoutModalOpen(true);
  };

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesLocation =
        !searchLocation ||
        item.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        item.title.toLowerCase().includes(searchLocation.toLowerCase());
      return matchesCategory && matchesLocation;
    });
  }, [selectedCategory, searchLocation]);

  const handleSearch = (filters: SearchFilters) => {
    setSearchLocation(filters.location);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navbar */}
      <Navbar
        currentUser={currentUser}
        onSearchClick={() => setShowHero(!showHero)}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
      />

      {/* Hero Search Section */}
      {showHero && <HeroSearch onSearch={handleSearch} />}

      {/* Category Navigation Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Main Content Listings Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {searchLocation && (
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-neutral-800">
              Acomodações encontradas para "{searchLocation}"
            </h2>
            <button
              onClick={() => setSearchLocation('')}
              className="text-xs text-[#FF385C] font-semibold hover:underline cursor-pointer"
            >
              Limpar busca
            </button>
          </div>
        )}

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <ListingCard
                key={property.id}
                property={property}
                onSelect={(prop) => setSelectedProperty(prop)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg font-semibold text-neutral-700">
              Nenhuma acomodação encontrada nesta categoria.
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              Tente selecionar outra categoria ou remover os filtros.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchLocation('');
              }}
              className="mt-4 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 cursor-pointer"
            >
              Ver todas as acomodações
            </button>
          </div>
        )}
      </main>

      {/* Property Details Modal */}
      <ListingDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onStartCheckout={handleStartCheckout}
      />

      {/* Auth Modal (Login / Cadastro) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        onClose={() => setAuthModalOpen(false)}
        onSuccess={handleLoginSuccess}
      />

      {/* Checkout Modal (Pagamento Cartão / PIX) */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        property={checkoutProperty}
        nights={checkoutNights}
        totalPrice={checkoutTotalPrice}
        onClose={() => setCheckoutModalOpen(false)}
        onSuccess={() => {
          // Callback de sucesso
        }}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
