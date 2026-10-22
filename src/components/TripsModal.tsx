import React from 'react';
import { X, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import type { Property } from '../types';

interface TripItem {
  id: string;
  property: Property;
  nights: number;
  totalPrice: number;
  date: string;
  status: 'CONFIRMED' | 'PENDING';
}

interface TripsModalProps {
  isOpen: boolean;
  trips: TripItem[];
  onClose: () => void;
  onExplore: () => void;
}

export const TripsModal: React.FC<TripsModalProps> = ({
  isOpen,
  trips,
  onClose,
  onExplore,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto animate-in fade-in duration-200">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-neutral-100 transition absolute right-6 top-6 text-neutral-600 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">Minhas Viagens</h2>
            <p className="text-xs text-neutral-500 mt-1">
              Acompanhe suas reservas ativas e anteriores com confirmação de pagamento.
            </p>
          </div>

          {trips.length > 0 ? (
            <div className="space-y-4">
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="flex flex-col sm:flex-row gap-4 p-4 border border-neutral-200 rounded-2xl hover:shadow-md transition"
                >
                  <img
                    src={trip.property.images[0]}
                    alt={trip.property.title}
                    className="w-full sm:w-36 h-28 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Reserva Confirmada
                      </span>
                      <span className="text-xs text-neutral-400">ID #{trip.id.substring(0, 8)}</span>
                    </div>

                    <h4 className="font-bold text-sm text-neutral-900">{trip.property.title}</h4>
                    <p className="text-xs text-neutral-500 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                      {trip.property.location}
                    </p>

                    <div className="flex items-center justify-between pt-2 text-xs font-semibold text-neutral-700">
                      <span className="flex items-center gap-1 text-neutral-600">
                        <Calendar className="w-3.5 h-3.5" />
                        {trip.nights} noites · {trip.date}
                      </span>
                      <span className="text-sm font-extrabold text-[#FF385C]">
                        R$ {trip.totalPrice.toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-12 text-center space-y-3 border border-dashed border-neutral-200 rounded-2xl">
              <Calendar className="w-10 h-10 text-neutral-300 mx-auto" />
              <h4 className="font-bold text-neutral-800 text-sm">Nenhuma viagem agendada ainda</h4>
              <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                Hora de tirar a poeira das malas e planejar sua próxima estadia inesquecível!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="mt-2 bg-[#FF385C] hover:bg-[#E00B41] text-white text-xs font-bold py-2.5 px-5 rounded-xl transition cursor-pointer"
              >
                Explorar Acomodações
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
