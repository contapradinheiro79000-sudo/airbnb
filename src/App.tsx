import { useState, useMemo, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { CategoryBar } from './components/CategoryBar';
import { ListingCard } from './components/ListingCard';
import { ListingDetailModal } from './components/ListingDetailModal';
import { AuthModal } from './components/AuthModal';
import { CheckoutModal } from './components/CheckoutModal';
import { HostModal } from './components/HostModal';
import { HelpCenterModal } from './components/HelpCenterModal';
import { TripsModal } from './components/TripsModal';
import { FiltersModal } from './components/FiltersModal';
import type { FilterOptions } from './components/FiltersModal';
import { LanguageCurrencyModal } from './components/LanguageCurrencyModal';
import { LiveChat } from './components/LiveChat';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Footer } from './components/Footer';
import { categories, mockProperties } from './data/mockData';
import type { Property, SearchFilters } from './types';
import type { User } from './types/authAndPayment';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [showHero, setShowHero] = useState(true);

  // Estados de Favoritos e Viagens
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('airbnb_favorites');
      return saved ? JSON.parse(saved) : ['1', '2'];
    } catch {
      return ['1', '2'];
    }
  });
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  const [trips, setTrips] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem('airbnb_trips');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Estados de Autenticação
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const saved = localStorage.getItem('airbnb_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [authBookingNotice, setAuthBookingNotice] = useState(false);

  // Estados de Pagamento / Checkout
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [checkoutProperty, setCheckoutProperty] = useState<Property | null>(null);
  const [checkoutNights, setCheckoutNights] = useState(2);
  const [checkoutTotalPrice, setCheckoutTotalPrice] = useState(0);
  const [pendingCheckout, setPendingCheckout] = useState<{
    property: Property;
    nights: number;
    totalPrice: number;
  } | null>(null);

  // Estados de Chat ao Vivo
  const [chatOpen, setChatOpen] = useState(false);
  const [chatProperty, setChatProperty] = useState<Property | null>(null);

  // Estados de Modais Complementares (Anuncie, Ajuda, Viagens, Filtros, Idioma)
  const [hostModalOpen, setHostModalOpen] = useState(false);
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [tripsModalOpen, setTripsModalOpen] = useState(false);
  const [filtersModalOpen, setFiltersModalOpen] = useState(false);
  const [langCurrModalOpen, setLangCurrModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('pt-BR');
  const [selectedCurrency, setSelectedCurrency] = useState('BRL');

  // Filtros Avançados
  const [filters, setFilters] = useState<FilterOptions>({
    minPrice: 0,
    maxPrice: 1000,
    bedrooms: 0,
    amenities: [],
  });

  useEffect(() => {
    localStorage.setItem('airbnb_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('airbnb_trips', JSON.stringify(trips));
  }, [trips]);

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prev) =>
      prev.includes(propertyId)
        ? prev.filter((id) => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('airbnb_user', JSON.stringify(user));

    // Se havia uma reserva em andamento bloqueada por falta de login, segue para o checkout
    if (pendingCheckout) {
      setCheckoutProperty(pendingCheckout.property);
      setCheckoutNights(pendingCheckout.nights);
      setCheckoutTotalPrice(pendingCheckout.totalPrice);
      setPendingCheckout(null);
      setAuthBookingNotice(false);
      setCheckoutModalOpen(true);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('airbnb_user');
  };

  // Trava de segurança: usuário OBRIGATORIAMENTE precisa estar logado para ir ao pagamento
  const handleStartCheckout = (
    property: Property,
    nights: number,
    totalPrice: number
  ) => {
    setSelectedProperty(null);

    if (!currentUser) {
      // Bloqueia e abre modal de identificação
      setPendingCheckout({ property, nights, totalPrice });
      setAuthBookingNotice(true);
      setAuthMode('login');
      setAuthModalOpen(true);
      return;
    }

    setCheckoutProperty(property);
    setCheckoutNights(nights);
    setCheckoutTotalPrice(totalPrice);
    setCheckoutModalOpen(true);
  };

  const handleCheckoutSuccess = () => {
    if (checkoutProperty) {
      const newTrip = {
        id: `res_${Date.now()}`,
        property: checkoutProperty,
        nights: checkoutNights,
        totalPrice: checkoutTotalPrice,
        date: checkoutProperty.dates,
        status: 'CONFIRMED' as const,
      };
      setTrips((prev) => [newTrip, ...prev]);
    }
  };

  const handleOpenChatWithHost = (property: Property) => {
    setChatProperty(property);
    setChatOpen(true);
  };

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.minPrice > 0) count++;
    if (filters.maxPrice < 1000) count++;
    if (filters.bedrooms > 0) count++;
    if (filters.amenities.length > 0) count += filters.amenities.length;
    return count;
  }, [filters]);

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((item) => {
      // Filtro de Favoritos
      if (showOnlyFavorites && !favorites.includes(item.id)) {
        return false;
      }
      // Filtro de Categoria Inteligente
      let matchesCategory = true;
      if (selectedCategory === 'all') {
        matchesCategory = true;
      } else if (selectedCategory === 'beach') {
        matchesCategory = true; // Todas as 30 acomodações são de praia
      } else if (selectedCategory === 'pools') {
        matchesCategory =
          item.title.toLowerCase().includes('piscina') ||
          item.amenities.some((a) => a.toLowerCase().includes('piscina') || a.toLowerCase().includes('jacuzzi'));
      } else if (selectedCategory === 'parana') {
        matchesCategory = item.category === 'parana' || item.location.includes('Paraná');
      } else if (selectedCategory === 'sc') {
        matchesCategory = item.category === 'sc' || item.location.includes('Santa Catarina');
      } else if (selectedCategory === 'sp') {
        matchesCategory = item.category === 'sp' || item.location.includes('São Paulo') || item.location.includes('- SP');
      } else if (selectedCategory === 'rj') {
        matchesCategory = item.category === 'rj' || item.location.includes('Rio de Janeiro');
      } else if (selectedCategory === 'nordeste') {
        matchesCategory = item.category === 'nordeste' || ['Bahia', 'Alagoas', 'Pernambuco', 'Rio Grande do Norte', 'Ceará'].some(st => item.location.includes(st));
      } else {
        matchesCategory = item.category === selectedCategory;
      }

      // Filtro de Busca (Localização / Título)
      const matchesLocation =
        !searchLocation ||
        item.location.toLowerCase().includes(searchLocation.toLowerCase()) ||
        item.title.toLowerCase().includes(searchLocation.toLowerCase());

      // Filtro de Preço
      const matchesPrice =
        item.pricePerNight >= filters.minPrice &&
        item.pricePerNight <= filters.maxPrice;

      // Filtro de Quartos
      const matchesBedrooms =
        filters.bedrooms === 0 || item.details.bedrooms >= filters.bedrooms;

      // Filtro de Comodidades
      const matchesAmenities =
        filters.amenities.length === 0 ||
        filters.amenities.every((amenity) => item.amenities.includes(amenity));

      return (
        matchesCategory &&
        matchesLocation &&
        matchesPrice &&
        matchesBedrooms &&
        matchesAmenities
      );
    });
  }, [selectedCategory, searchLocation, showOnlyFavorites, favorites, filters]);

  const handleSearch = (searchFilters: SearchFilters) => {
    setSearchLocation(searchFilters.location);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Navbar */}
      <Navbar
        currentUser={currentUser}
        onSearchClick={() => setShowHero(!showHero)}
        onOpenAuth={(mode) => {
          setAuthBookingNotice(false);
          setAuthMode(mode);
          setAuthModalOpen(true);
        }}
        onLogout={handleLogout}
        onOpenHost={() => setHostModalOpen(true)}
        onOpenHelp={() => setHelpModalOpen(true)}
        onOpenTrips={() => setTripsModalOpen(true)}
        onOpenFavorites={() => setShowOnlyFavorites(!showOnlyFavorites)}
        onOpenLangCurr={() => setLangCurrModalOpen(true)}
        favoritesCount={favorites.length}
      />

      {/* Hero Search Section */}
      {showHero && <HeroSearch onSearch={handleSearch} />}

      {/* Category Navigation Bar */}
      <CategoryBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          setShowOnlyFavorites(false);
        }}
        onOpenFilters={() => setFiltersModalOpen(true)}
        activeFilterCount={activeFiltersCount}
      />

      {/* Main Content Listings Grid */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full pb-24 md:pb-8">
        {/* Banner de Status de Busca ou Favoritos */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-neutral-800">
              {showOnlyFavorites
                ? 'Seus Imóveis Favoritos'
                : searchLocation
                ? `Acomodações encontradas para "${searchLocation}"`
                : `${filteredProperties.length} acomodações pé na areia e Réveillon`}
            </h2>
            <p className="text-xs text-neutral-500">
              Destinos exclusivos: Guaratuba, Caiobá, Balneário Camboriú, Bombinhas, Maresias, Ubatuba, Búzios e mais
            </p>
          </div>

          <div className="flex items-center gap-2">
            {showOnlyFavorites && (
              <button
                onClick={() => setShowOnlyFavorites(false)}
                className="text-xs text-[#FF385C] font-semibold hover:underline cursor-pointer"
              >
                Ver todos os imóveis
              </button>
            )}
            {searchLocation && (
              <button
                onClick={() => setSearchLocation('')}
                className="text-xs text-[#FF385C] font-semibold hover:underline cursor-pointer"
              >
                Limpar busca
              </button>
            )}
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="relative">
                <ListingCard
                  property={property}
                  isFavorite={favorites.includes(property.id)}
                  onToggleFavorite={() => toggleFavorite(property.id)}
                  onSelect={(prop) => setSelectedProperty(prop)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-neutral-50 rounded-3xl p-8 border border-neutral-200">
            <p className="text-lg font-semibold text-neutral-700">
              Nenhuma acomodação encontrada com esses critérios.
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              Tente selecionar outra categoria ou redefinir seus filtros de preço e comodidades.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchLocation('');
                setShowOnlyFavorites(false);
                setFilters({
                  minPrice: 0,
                  maxPrice: 1000,
                  bedrooms: 0,
                  amenities: [],
                });
              }}
              className="mt-4 px-6 py-2.5 bg-neutral-900 text-white rounded-xl text-sm font-semibold hover:bg-neutral-800 cursor-pointer shadow"
            >
              Ver todas as acomodações
            </button>
          </div>
        )}
      </main>

      {/* Floating Chat Button (Desktop & Mobile) */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-30 bg-[#FF385C] hover:bg-[#E00B41] text-white p-3.5 md:px-5 md:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition transform hover:scale-105 cursor-pointer font-medium text-sm border-2 border-white"
        title="Falar com o Anfitrião"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-white animate-pulse" />
        </div>
        <span className="hidden md:inline font-semibold">Chat com Anfitrião</span>
      </button>

      {/* Property Details Modal */}
      <ListingDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onStartCheckout={handleStartCheckout}
        onOpenChatWithHost={handleOpenChatWithHost}
      />

      {/* Auth Modal (Login / Cadastro Obrigatório antes da Reserva) */}
      <AuthModal
        isOpen={authModalOpen}
        initialMode={authMode}
        bookingNotice={authBookingNotice}
        onClose={() => {
          setAuthModalOpen(false);
          setAuthBookingNotice(false);
        }}
        onSuccess={handleLoginSuccess}
      />

      {/* Live Chat Modal / Drawer */}
      <LiveChat
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        activeProperty={chatProperty || selectedProperty}
      />

      {/* Checkout Modal (Pagamento 100% PIX Oficial União 7 Pay) */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        property={checkoutProperty}
        nights={checkoutNights}
        totalPrice={checkoutTotalPrice}
        onClose={() => setCheckoutModalOpen(false)}
        onSuccess={handleCheckoutSuccess}
      />

      {/* Modal Seja um Anfitrião */}
      <HostModal
        isOpen={hostModalOpen}
        onClose={() => setHostModalOpen(false)}
      />

      {/* Modal Central de Ajuda & FAQ */}
      <HelpCenterModal
        isOpen={helpModalOpen}
        onClose={() => setHelpModalOpen(false)}
      />

      {/* Modal Minhas Viagens */}
      <TripsModal
        isOpen={tripsModalOpen}
        trips={trips}
        onClose={() => setTripsModalOpen(false)}
        onExplore={() => setShowOnlyFavorites(false)}
      />

      {/* Modal de Filtros Avançados */}
      <FiltersModal
        isOpen={filtersModalOpen}
        currentFilters={filters}
        onClose={() => setFiltersModalOpen(false)}
        onApply={(newFilters) => setFilters(newFilters)}
        onReset={() =>
          setFilters({
            minPrice: 0,
            maxPrice: 1000,
            bedrooms: 0,
            amenities: [],
          })
        }
      />

      {/* Modal de Idioma e Moeda */}
      <LanguageCurrencyModal
        isOpen={langCurrModalOpen}
        selectedLanguage={selectedLanguage}
        selectedCurrency={selectedCurrency}
        onSelectLanguage={setSelectedLanguage}
        onSelectCurrency={setSelectedCurrency}
        onClose={() => setLangCurrModalOpen(false)}
      />

      {/* Mobile Bottom Navigation Bar */}
      <MobileBottomNav
        currentUser={currentUser}
        favoritesCount={favorites.length}
        onExplore={() => {
          setShowOnlyFavorites(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenFavorites={() => setShowOnlyFavorites((prev) => !prev)}
        onOpenTrips={() => setTripsModalOpen(true)}
        onOpenChat={() => setChatOpen(true)}
        onOpenAuth={() => {
          if (!currentUser) {
            setAuthBookingNotice(false);
            setAuthMode('login');
            setAuthModalOpen(true);
          } else {
            setTripsModalOpen(true);
          }
        }}
        activeTab={showOnlyFavorites ? 'favorites' : 'explore'}
      />

      {/* Footer com todos os links funcionais */}
      <Footer
        onOpenHelp={() => setHelpModalOpen(true)}
        onOpenHost={() => setHostModalOpen(true)}
        onOpenLangCurr={() => setLangCurrModalOpen(true)}
        selectedLanguage={selectedLanguage}
        selectedCurrency={selectedCurrency}
      />
    </div>
  );
}
