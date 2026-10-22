export interface Property {
  id: string;
  title: string;
  location: string;
  distance: string;
  dates: string;
  pricePerNight: number;
  originalPrice?: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  images: string[];
  isGuestFavorite?: boolean;
  category: string;
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    timeHosting: string;
  };
  details: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  amenities: string[];
  description: string;
}

export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface SearchFilters {
  location: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}
