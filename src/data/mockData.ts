import type { Property, Category } from '../types';

export const categories: Category[] = [
  { id: 'all', label: 'Tudo', icon: 'Sparkles' },
  { id: 'beach', label: 'Praias Tranquilas', icon: 'Palmtree' },
  { id: 'parana', label: 'Paraná (Guaratuba/Caiobá)', icon: 'Waves' },
  { id: 'sc', label: 'Santa Catarina (BC/Bombinhas)', icon: 'Compass' },
  { id: 'sp', label: 'São Paulo (Litoral)', icon: 'Home' },
  { id: 'rj', label: 'Rio de Janeiro (Búzios/Arraial)', icon: 'Ship' },
  { id: 'nordeste', label: 'Nordeste & Bahia', icon: 'Mountain' },
  { id: 'pools', label: 'Com Quintal e Varanda', icon: 'Gem' },
];

export const mockProperties: Property[] = [
  {
    "id": "1",
    "title": "Casa de Praia Aconchegante c/ Quintal e Churrasqueira",
    "location": "Guaratuba, Paraná",
    "distance": "A 200m da Praia Central",
    "dates": "26 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 190,
    "discountBadge": "34% OFF · Réveillon Guaratuba",
    "rating": 4.93,
    "reviewCount": 76,
    "isGuestFavorite": true,
    "category": "parana",
    "host": {
      "name": "Eduardo Guimarães",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 8,
      "bedrooms": 3,
      "beds": 5,
      "baths": 2
    },
    "amenities": [
      "Churrasqueira de tijolinho coberta",
      "Quintal espaçoso todo murado para crianças e pets",
      "Varanda arejada com ganchos para rede",
      "Ar-condicionado nos quartos e ventiladores",
      "Vaga para 3 carros na garagem",
      "Ducha fria no quintal pós-praia"
    ],
    "description": "Casa térrea simples e muito agradável em rua tranquila de Guaratuba. Pertinho da praia, feirinha e comércio. Ideal para reunir a família no fim de ano sem complicação.",
    "images": [
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "2",
    "title": "Sobrado Arejado Familiar a 150m do Mar",
    "location": "Guaratuba, Paraná",
    "distance": "Praia do Brejatuba · Perto do Cristo",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 175,
    "discountBadge": "34% OFF · Brejatuba Réveillon",
    "rating": 4.91,
    "reviewCount": 64,
    "isGuestFavorite": true,
    "category": "parana",
    "host": {
      "name": "Mariana Rocha",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "4 anos hospedando"
    },
    "details": {
      "guests": 7,
      "bedrooms": 3,
      "beds": 4,
      "baths": 2
    },
    "amenities": [
      "Sacada fresca com vista da brisa do mar",
      "Churrasqueira individual",
      "Ventiladores de teto e ar-condicionado",
      "Estacionamento para 2 carros",
      "Cadeiras de praia e guarda-sol disponíveis"
    ],
    "description": "Sobrado aconchegante no Brejatuba, ideal para curtir as férias com tranquilidade. Rua calma e segura, a uma curta caminhada da praia.",
    "images": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "3",
    "title": "Casa Familiar Simples com Varanda e Rede",
    "location": "Matinhos, Paraná",
    "distance": "A 180m da Praia Brava de Matinhos",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 105,
    "originalPrice": 160,
    "discountBadge": "34% OFF · Fim de Ano Matinhos",
    "rating": 4.9,
    "reviewCount": 58,
    "isGuestFavorite": true,
    "category": "parana",
    "host": {
      "name": "Regina Célia",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "6 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 4,
      "baths": 1
    },
    "amenities": [
      "Varanda coberta com rede de descanso",
      "Churrasqueira com grelha e espetos",
      "Cozinha completa com geladeira duplex e fogão",
      "Garagem coberta para 2 veículos",
      "Ducha externa refrescante"
    ],
    "description": "Ambiente caseiro e acolhedor em Matinhos. Casa fresca, muito limpa e bem cuidada, perfeita para quem busca descanso com a família perto do mar.",
    "images": [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "4",
    "title": "Apartamento Familiar Confortável na Praia Mansa",
    "location": "Caiobá, Paraná",
    "distance": "A 150m da orla da Praia Mansa",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 205,
    "discountBadge": "34% OFF · Caiobá Réveillon",
    "rating": 4.94,
    "reviewCount": 92,
    "isGuestFavorite": true,
    "category": "parana",
    "host": {
      "name": "Carlos Alberto Siqueira",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Sacada ventilada com churrasqueira a carvão",
      "Ar-condicionado nos quartos",
      "Garagem demarcada no prédio",
      "Cozinha montada com micro-ondas e cafeteira",
      "Prédio familiar tranquilo e seguro"
    ],
    "description": "Apartamento prático e aconchegante para curtir as águas mansas e limpas de Caiobá. Ótimo para famílias com crianças pequenas e idosos.",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "5",
    "title": "Chalé Rústico e Sossegado sob as Árvores",
    "location": "Ilha do Mel, Paraná",
    "distance": "A 80m da Praia de Encantadas",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 95,
    "originalPrice": 150,
    "discountBadge": "36% OFF · Ilha do Mel",
    "rating": 4.95,
    "reviewCount": 62,
    "isGuestFavorite": true,
    "category": "parana",
    "host": {
      "name": "Tiago & Bruna",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "3 anos hospedando"
    },
    "details": {
      "guests": 4,
      "bedrooms": 2,
      "beds": 2,
      "baths": 1
    },
    "amenities": [
      "Varanda de madeira com rede entre as árvores",
      "Ventilador e brisa natural constante",
      "Wi-Fi para conexão e trabalho leve",
      "Cozinha com utensílios para pequenas refeições",
      "Chuveiro quente a gás"
    ],
    "description": "Chalé simples de madeira cercado de restinga e pássaros nativos. Silêncio absoluto à noite e pertinho do trapiche e dos restaurantes locais.",
    "images": [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "6",
    "title": "Apartamento Prático e Familiar a 2 Quadras do Mar",
    "location": "Balneário Camboriú, Santa Catarina",
    "distance": "A 200m da Avenida Atlântica",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 145,
    "originalPrice": 220,
    "discountBadge": "34% OFF · Réveillon BC",
    "rating": 4.92,
    "reviewCount": 110,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Felipe Zanella",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "8 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Sacada com churrasqueira",
      "Ar-condicionado nos dormitórios",
      "Vaga de garagem rotativa no edifício",
      "Wi-Fi e Smart TV na sala",
      "Portaria segura e elevador"
    ],
    "description": "Apartamento aconchegante, sem ostentação, com excelente custo-benefício em Balneário Camboriú. Dá para fazer tudo a pé até a praia e os supermercados.",
    "images": [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "7",
    "title": "Casa Simples com Varanda e Vista do Verde",
    "location": "Bombinhas, Santa Catarina",
    "distance": "A 250m da Praia de Quatro Ilhas",
    "dates": "27 de dez. – 3 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Bombinhas Verão",
    "rating": 4.93,
    "reviewCount": 84,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Luciana & Marcelo",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda arejada com churrasqueira de alvenaria",
      "Quintal com árvores frutíferas e sombra fresca",
      "Ar-condicionado e ventiladores",
      "Espaço para 2 carros",
      "Ducha externa pós-mar"
    ],
    "description": "Casa tranquila de praia em Bombinhas. Bairro sossegado para relaxar com a família após um dia de mergulho nas praias de águas cristalinas.",
    "images": [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "8",
    "title": "Chalé Praiano Arejado a Poucos Passos da Areia",
    "location": "Bombinhas, Santa Catarina",
    "distance": "A 100m da Praia de Mariscal",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 110,
    "originalPrice": 170,
    "discountBadge": "35% OFF · Mariscal Réveillon",
    "rating": 4.91,
    "reviewCount": 52,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Gabriel Becker",
      "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "3 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda com rede e brisa constante",
      "Churrasqueira portátil para churrasco em família",
      "Ventiladores e telas mosqueteiras nas janelas",
      "Vaga privativa para 1 carro",
      "Cadeiras de praia e guarda-sol"
    ],
    "description": "Chalé simples, limpo e prático pertinho da extensa faixa de areia de Mariscal. Ótimo para quem quer fugir da correria e curtir a virada do ano em paz.",
    "images": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "9",
    "title": "Casa Térrea Familiar com Quintal no Campeche",
    "location": "Florianópolis, Santa Catarina",
    "distance": "A 300m da Praia do Campeche",
    "dates": "26 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 210,
    "discountBadge": "35% OFF · Campeche Floripa",
    "rating": 4.94,
    "reviewCount": 78,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Renata D’Ávila",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "9 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Quintal gramado cercado com churrasqueira",
      "Varanda arejada com ganchos para duas redes",
      "Ar-condicionado no quarto principal",
      "Estacionamento para 2 carros",
      "Cozinha com fogão a gás e utensílios básicos"
    ],
    "description": "Casa térrea acolhedora no sul da ilha. Bairro calmo e familiar, com comércio local por perto e fácil acesso à praia e passeios de barco para a Ilha do Campeche.",
    "images": [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "10",
    "title": "Sobrado Aconchegante a 150m da Praia em Canasvieiras",
    "location": "Florianópolis, Santa Catarina",
    "distance": "A 150m da Praia de Canasvieiras",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Canasvieiras Réveillon",
    "rating": 4.9,
    "reviewCount": 65,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Diego Fontana",
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "4 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 2
    },
    "amenities": [
      "Sacada com churrasqueira a carvão",
      "Ar-condicionado split nos dormitórios",
      "Vaga de garagem coberta",
      "Wi-Fi para navegação da família",
      "Cozinha com geladeira e micro-ondas"
    ],
    "description": "Excelente opção no norte da ilha. Águas calmas e quentes para banho de mar, centrinho com pizzarias e artesanato acessível a pé.",
    "images": [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "11",
    "title": "Casa Rústica com Varanda e Rede na Praia da Ferrugem",
    "location": "Garopaba, Santa Catarina",
    "distance": "A 200m da Praia da Ferrugem",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 95,
    "originalPrice": 155,
    "discountBadge": "38% OFF · Garopaba Réveillon",
    "rating": 4.92,
    "reviewCount": 71,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Patrícia Vianna",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda charmosa com rede e plantas nativas",
      "Churrasqueira simples de quintal",
      "Ventiladores e duchão externo pós-praia",
      "Espaço seguro para guardar carro",
      "Cozinha com geladeira e fogão caseiro"
    ],
    "description": "Casa de praia no estilo clássico de Garopaba. Sem luxo, mas cheia de charme, frescor e aconchego para curtir a natureza e as ondas da Ferrugem.",
    "images": [
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "12",
    "title": "Apartamento Familiar Confortável em Meia Praia",
    "location": "Itapema, Santa Catarina",
    "distance": "A 150m da orla de Meia Praia",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "35% OFF · Itapema Réveillon",
    "rating": 4.91,
    "reviewCount": 88,
    "isGuestFavorite": true,
    "category": "sc",
    "host": {
      "name": "Valter Simon",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Sacada arejada com churrasqueira",
      "Ar-condicionado nos quartos",
      "Vaga privativa de garagem",
      "Prédio familiar com elevador",
      "Wi-Fi e TV aberta"
    ],
    "description": "Acomodação muito bem localizada em Meia Praia. Prédio calmo, próximo a padaria, farmácia e ao calçadão à beira-mar.",
    "images": [
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "13",
    "title": "Casa Simples e Fresca com Varanda no Canto de Maresias",
    "location": "Maresias, São Sebastião - SP",
    "distance": "A 250m da Praia de Maresias",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Réveillon Maresias",
    "rating": 4.93,
    "reviewCount": 82,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Gustavo Mendonça",
      "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda espaçosa com rede e plantas tropicais",
      "Churrasqueira no quintal",
      "Ventiladores potentes e ar-condicionado",
      "Estacionamento para 2 carros",
      "Ducha no jardim"
    ],
    "description": "Casa caiçara acolhedora e arejada no Canto do Moreira. Lugar arborizado e sossegado para curtir a energia de Maresias em família.",
    "images": [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "14",
    "title": "Casa Térrea Familiar com Churrasqueira na Praia Grande",
    "location": "Ubatuba, São Paulo",
    "distance": "A 200m da Praia Grande",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 175,
    "discountBadge": "34% OFF · Ubatuba Réveillon",
    "rating": 4.92,
    "reviewCount": 94,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Ana Cláudia Fontes",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "6 anos hospedando"
    },
    "details": {
      "guests": 7,
      "bedrooms": 3,
      "beds": 4,
      "baths": 2
    },
    "amenities": [
      "Churrasqueira coberta nos fundos",
      "Varanda fresca para descansar à tarde",
      "Ventiladores de teto em todos os quartos",
      "Garagem fechada para 2 carros",
      "Cozinha com geladeira e fogão"
    ],
    "description": "Casa prática e funcional para férias em Ubatuba. Rua tranquila com vizinhos moradores e proximidade dos quiosques da Praia Grande e Tenório.",
    "images": [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "15",
    "title": "Chalé Rústico com Varanda e Rede Cercado de Verde",
    "location": "Ilhabela, São Paulo",
    "distance": "A 300m da Praia do Curral",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Ilhabela Verão",
    "rating": 4.95,
    "reviewCount": 89,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Leonardo & Sofia",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 4,
      "bedrooms": 2,
      "beds": 2,
      "baths": 1
    },
    "amenities": [
      "Deck de madeira com rede e vista da mata",
      "Ventiladores e brisa fresca da serra",
      "Wi-Fi para conexão básica",
      "Vaga para carro no terreno",
      "Cozinha compacta equipada"
    ],
    "description": "Chalé sossegado e fresco em Ilhabela, ideal para quem quer descansar longe do barulho da cidade e relaxar com o canto dos pássaros.",
    "images": [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "16",
    "title": "Apartamento Prático e Familiar a 100m da Praia",
    "location": "Guarujá, São Paulo",
    "distance": "A 100m da Praia de Pitangueiras",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 110,
    "originalPrice": 170,
    "discountBadge": "35% OFF · Guarujá Réveillon",
    "rating": 4.9,
    "reviewCount": 102,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Beatriz Almeida",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "6 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Apartamento arejado com ventiladores nos quartos",
      "Vaga de garagem no condomínio",
      "Portaria 24 horas",
      "Cozinha montada para preparar refeições",
      "Localização central perto de tudo"
    ],
    "description": "Acomodação familiar no centro de Pitangueiras. Não precisa de carro para nada: praia, feirinha, padarias e farmácias a poucos passos.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "17",
    "title": "Casa Térrea Aconchegante com Jardim para Família",
    "location": "Juquehy, São Sebastião - SP",
    "distance": "A 280m da Praia de Juquehy",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 205,
    "discountBadge": "34% OFF · Juquehy Réveillon",
    "rating": 4.93,
    "reviewCount": 68,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Rodrigo Paes",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Quintal fechado com gramado e plantas",
      "Churrasqueira com mesa para almoço ao ar livre",
      "Ventiladores e ar-condicionado no dormitório",
      "Vaga interna para 2 veículos",
      "Ducha externa"
    ],
    "description": "Casa tranquila em Juquehy para desfrutar o verão em família. Praia com águas limpas e infraestrutura excelente para passeios diurnos e noturnos.",
    "images": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "18",
    "title": "Casa Simples com Quintal e Churrasqueira em Bertioga",
    "location": "Bertioga, São Paulo",
    "distance": "A 250m da Praia da Enseada",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 105,
    "originalPrice": 165,
    "discountBadge": "36% OFF · Bertioga Réveillon",
    "rating": 4.89,
    "reviewCount": 74,
    "isGuestFavorite": true,
    "category": "sp",
    "host": {
      "name": "Camila Mattos",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "4 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 4,
      "baths": 1
    },
    "amenities": [
      "Churrasqueira de tijolo na área externa",
      "Varanda fresca com banco de madeira",
      "Ventiladores e ar-condicionado",
      "Garagem fechada para 2 carros",
      "Cozinha com utensílios e geladeira duplex"
    ],
    "description": "Opção econômica e confortável em Bertioga. Quintal seguro para crianças brincarem e proximidade da praia e do forte histórico.",
    "images": [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "19",
    "title": "Casa Buziana Tradicional com Varanda Arejada",
    "location": "Búzios, Rio de Janeiro",
    "distance": "A 250m da Praia de Geribá",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 210,
    "discountBadge": "35% OFF · Réveillon Búzios",
    "rating": 4.95,
    "reviewCount": 96,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Marcelle Dupont",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda com rede e jardim típico buziano",
      "Churrasqueira de alvenaria",
      "Ventiladores e ar-condicionado nos quartos",
      "Vaga para 2 carros dentro do terreno",
      "Wi-Fi e cozinha caseira"
    ],
    "description": "Casa cheia de aconchego e estilo descontraído em Geribá. Rua sem saída super calma, ideal para descansar depois de curtir a praia e a Rua das Pedras.",
    "images": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "20",
    "title": "Casa Arejada com Vista das Colinas em Arraial",
    "location": "Arraial do Cabo, Rio de Janeiro",
    "distance": "A 200m da Prainha de Arraial",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 110,
    "originalPrice": 170,
    "discountBadge": "35% OFF · Arraial Réveillon",
    "rating": 4.94,
    "reviewCount": 88,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Thiago Nogueira",
      "avatar": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda arejada com vista da colina verde",
      "Churrasqueira simples no pátio",
      "Ventiladores e ar-condicionado",
      "Vaga de garagem privativa",
      "Cozinha com geladeira, fogão e micro-ondas"
    ],
    "description": "Casa fresca e tranquila em Arraial do Cabo. Fácil acesso à areia branca da Prainha e aos passeios de barco para as praias do Farol e Forno.",
    "images": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "21",
    "title": "Casa Familiar com Quintal a 200m da Praia do Forte",
    "location": "Cabo Frio, Rio de Janeiro",
    "distance": "A 200m da Praia do Forte",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 105,
    "originalPrice": 160,
    "discountBadge": "34% OFF · Cabo Frio Fim de Ano",
    "rating": 4.91,
    "reviewCount": 80,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Marilena Costa",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "6 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Quintal murado com churrasqueira de alvenaria",
      "Varandinha fresca com rede",
      "Ventiladores de teto nos quartos",
      "Garagem para 2 carros",
      "Cozinha com utensílios completos"
    ],
    "description": "Casa aconchegante para reunir a família no Réveillon em Cabo Frio. Perto da praia e da feirinha, em local calmo e bem arejado.",
    "images": [
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "22",
    "title": "Chalé Rústico e Acolhedor em Trindade",
    "location": "Paraty, Rio de Janeiro",
    "distance": "A 100m da Praia do Meio",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 90,
    "originalPrice": 145,
    "discountBadge": "38% OFF · Paraty Réveillon",
    "rating": 4.93,
    "reviewCount": 60,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Júlio & Clara",
      "avatar": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "4 anos hospedando"
    },
    "details": {
      "guests": 4,
      "bedrooms": 2,
      "beds": 2,
      "baths": 1
    },
    "amenities": [
      "Varanda de madeira com rede sob árvores nativas",
      "Ventiladores e telas protetoras",
      "Cozinha simples para café da manhã e lanches",
      "Ducha natural externa",
      "Espaço para estacionar 1 carro"
    ],
    "description": "Chalé rústico na tranquila vila de Trindade. Perto da praia, trilhas leves para a Piscina Natural do Caixa D’Aço e muito contato com a natureza.",
    "images": [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "23",
    "title": "Casa Arejada com Varanda Próxima à Praia do Abraão",
    "location": "Angra dos Reis, Rio de Janeiro",
    "distance": "Ilha Grande · Vila do Abraão",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "36% OFF · Angra Réveillon",
    "rating": 4.94,
    "reviewCount": 75,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Capitão Bernardo",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "8 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda arejada cercada por plantas e coqueiros",
      "Ventiladores e ar-condicionado nos quartos",
      "Cozinha com geladeira e fogão para refeições caseiras",
      "Wi-Fi para comunicação",
      "Chuveiro quente pós-passeio"
    ],
    "description": "Casa tranquila na mágica Ilha Grande. Sem barulho de trânsito, perfeita para caminhar descalço até a praia e fazer passeios de barco pelas enseadas.",
    "images": [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "24",
    "title": "Apartamento Confortável e Silencioso a 2 Quadras do Mar",
    "location": "Copacabana, Rio de Janeiro",
    "distance": "A 200m da praia de Copacabana · Posto 4",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 140,
    "originalPrice": 220,
    "discountBadge": "36% OFF · Réveillon Copacabana",
    "rating": 4.93,
    "reviewCount": 140,
    "isGuestFavorite": true,
    "category": "rj",
    "host": {
      "name": "Fernanda Meirelles",
      "avatar": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "10 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Apartamento de fundos silencioso e fresco",
      "Ar-condicionado nos dormitórios",
      "Portaria 24 horas com controle de acesso",
      "Cozinha equipada com geladeira e micro-ondas",
      "Wi-Fi rápido"
    ],
    "description": "Excelente ponto de apoio em Copacabana para a noite da virada. Prédio seguro e estritamente residencial, a poucos minutos a pé da queima de fogos.",
    "images": [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "25",
    "title": "Casa Rústica e Arejada com Redes na Varanda",
    "location": "Trancoso, Porto Seguro - Bahia",
    "distance": "A 300m do Quadrado Histórico",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 215,
    "discountBadge": "37% OFF · Trancoso Réveillon",
    "rating": 4.95,
    "reviewCount": 86,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Maria Clara Bahia",
      "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda de madeira com redes artesanais baianas",
      "Jardim sossegado com mangueiras e coqueiros",
      "Ventiladores e ar-condicionado nos quartos",
      "Cozinha com fogão a gás e utensílios básicos",
      "Estacionamento privativo"
    ],
    "description": "Casa térrea charmosa e tranquila no estilo tradicional de Trancoso. Ambiente simples, muito fresco e acolhedor perto do Quadrado e da Praia dos Coqueiros.",
    "images": [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "26",
    "title": "Bangalô Simples e Sossegado no Coqueiral",
    "location": "Praia do Forte, Mata de São João - BA",
    "distance": "A 150m da praia e piscinas naturais",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "36% OFF · Praia do Forte Réveillon",
    "rating": 4.92,
    "reviewCount": 73,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Antônio Peixoto",
      "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "6 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda sombreada sob coqueiros com rede",
      "Ar-condicionado e ventiladores",
      "Cozinha com geladeira duplex e fogão",
      "Vaga privativa para 1 carro",
      "Wi-Fi para navegação da família"
    ],
    "description": "Hospedagem agradável e tranquila na Praia do Forte. Próxima às piscinas de corais calminhas, ideal para relaxar e passear na vila.",
    "images": [
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "27",
    "title": "Casa Familiar na Praia de Antunes em Maragogi",
    "location": "Maragogi, Alagoas",
    "distance": "A 150m da areia da Praia de Antunes",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Maragogi Réveillon",
    "rating": 4.94,
    "reviewCount": 81,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Larissa Alencar",
      "avatar": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 6,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda arejada com redes de descanso",
      "Churrasqueira no quintal para confraternização",
      "Ar-condicionado nos quartos",
      "Espaço interno para 2 carros",
      "Ducha no jardim"
    ],
    "description": "Casa caseira e confortável pertinho do mar calmo e azul-turquesa de Antunes. Perfeita para quem quer curtir a virada do ano com tranquilidade e praia quente.",
    "images": [
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "28",
    "title": "Apartamento Confortável a Poucos Passos da Praia",
    "location": "Porto de Galinhas, Ipojuca - PE",
    "distance": "A 150m das piscinas naturais da vila",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Porto de Galinhas",
    "rating": 4.91,
    "reviewCount": 95,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Henrique Vasconcelos",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "8 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Sacada fresca com ventilação natural",
      "Ar-condicionado nos quartos",
      "Estacionamento rotativo no prédio",
      "Cozinha com utensílios para refeições diárias",
      "Wi-Fi rápido"
    ],
    "description": "Acomodação prática e aconchegante em Porto de Galinhas. Dá para ir a pé até as piscinas naturais, feiras de artesanato e restaurantes da vila.",
    "images": [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "29",
    "title": "Casa Térrea Arejada com Varanda e Rede em Pipa",
    "location": "Praia da Pipa, Tibau do Sul - RN",
    "distance": "A 200m da Praia do Centro e Praia do Amor",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 180,
    "discountBadge": "36% OFF · Pipa Réveillon",
    "rating": 4.93,
    "reviewCount": 70,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Sabrina & Daniel",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "5 anos hospedando"
    },
    "details": {
      "guests": 5,
      "bedrooms": 2,
      "beds": 3,
      "baths": 1
    },
    "amenities": [
      "Varanda fresca com redes e jardim privativo",
      "Churrasqueira portátil para a família",
      "Ar-condicionado no dormitório e ventilador",
      "Vaga para 1 carro no pátio fechado",
      "Cozinha completa"
    ],
    "description": "Casa aconchegante em rua calma de Pipa. Perto da avenida principal com lojinhas e bares, mas afastada o suficiente para dormir em silêncio absoluto.",
    "images": [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "30",
    "title": "Chalé Aconchegante na Areia da Vila de Jeri",
    "location": "Jericoacoara, Jijoca - Ceará",
    "distance": "A 150m da praia e da Duna do Pôr do Sol",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Jericoacoara",
    "rating": 4.95,
    "reviewCount": 82,
    "isGuestFavorite": true,
    "category": "nordeste",
    "host": {
      "name": "Mateus Albuquerque",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      "isSuperhost": true,
      "timeHosting": "7 anos hospedando"
    },
    "details": {
      "guests": 4,
      "bedrooms": 2,
      "beds": 2,
      "baths": 1
    },
    "amenities": [
      "Varanda charmosa com esteiras e rede",
      "Ar-condicionado split silencioso",
      "Chuveiro quente com energia solar",
      "Wi-Fi para conexão",
      "Cafeteira e frigobar"
    ],
    "description": "Chalé simples, rústico e acolhedor nas ruas de areia de Jeri. Clima de paz e tranquilidade a passos do espetacular pôr do sol nas dunas.",
    "images": [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];
