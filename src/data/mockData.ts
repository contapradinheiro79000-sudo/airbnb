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
    "title": "Casa de Praia com Varanda e Churrasqueira na Praia Central",
    "location": "Guaratuba, Paraná",
    "distance": "A 150m da Praia Central",
    "dates": "26 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 190,
    "discountBadge": "34% OFF · Réveillon Guaratuba",
    "rating": 4.96,
    "reviewCount": 78,
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
      "Quintal fechado e seguro para família e pets",
      "Varanda arejada com ganchos para rede",
      "Ventiladores e ar-condicionado",
      "Estacionamento para 3 carros",
      "Duchão externo pós-praia"
    ],
    "description": "Casa de praia agradável e bem arejada na Praia Central de Guaratuba. Espaço perfeito para a família passar a virada do ano com tranquilidade a poucos passos do mar.",
    "images": [
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "2",
    "title": "Sobrado Familiar no Brejatuba a 100m da Areia",
    "location": "Guaratuba, Paraná",
    "distance": "Praia do Brejatuba · Perto do Morro do Cristo",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 175,
    "discountBadge": "34% OFF · Brejatuba Réveillon",
    "rating": 4.92,
    "reviewCount": 65,
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
      "Sacada arejada com vista lateral do mar",
      "Churrasqueira individual no pátio",
      "Ventiladores de teto nos quartos",
      "Garagem fechada para 2 carros",
      "Cadeiras de praia inclusas"
    ],
    "description": "Sobrado fresco e bem cuidado no Brejatuba. Bairro calmo, ideal para caminhar até a praia e assistir aos fogos na orla de Guaratuba.",
    "images": [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "3",
    "title": "Casa Térrea com Quintal e Varanda na Praia Brava",
    "location": "Matinhos, Paraná",
    "distance": "A 120m da orla da Praia Brava",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 105,
    "originalPrice": 160,
    "discountBadge": "34% OFF · Fim de Ano Matinhos",
    "rating": 4.9,
    "reviewCount": 59,
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
      "Varanda espaçosa com rede de descanso",
      "Churrasqueira na área de lazer",
      "Cozinha completa com geladeira duplex",
      "Vaga interna para 2 veículos",
      "Ducha no quintal"
    ],
    "description": "Casa térrea acolhedora em Matinhos. Rua tranquila de moradores, ambiente seguro e familiar perto da orla revitalizada.",
    "images": [
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "4",
    "title": "Apartamento Confortável a 100m da Praia Mansa",
    "location": "Caiobá, Paraná",
    "distance": "A 100m das águas calmas da Praia Mansa",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 205,
    "discountBadge": "34% OFF · Caiobá Réveillon",
    "rating": 4.95,
    "reviewCount": 94,
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
      "Sacada ventilada com churrasqueira",
      "Ar-condicionado nos quartos",
      "Garagem privativa coberta",
      "Cozinha com micro-ondas e cafeteira",
      "Prédio familiar sossegado"
    ],
    "description": "Localização privilegiada na Praia Mansa de Caiobá. Perfeito para famílias com crianças, águas calmas sem ondas fortes e fácil acesso a pé.",
    "images": [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "5",
    "title": "Chalé Rústico e Sossegado sob as Árvores em Encantadas",
    "location": "Ilha do Mel, Paraná",
    "distance": "A 60m da Praia de Encantadas",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 95,
    "originalPrice": 150,
    "discountBadge": "36% OFF · Ilha do Mel",
    "rating": 4.96,
    "reviewCount": 68,
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
      "Varanda de madeira com rede sob coqueiros e árvores nativas",
      "Ventilador e brisa do mar fresca",
      "Wi-Fi para conexão",
      "Cozinha compacta para café e lanches",
      "Chuveiro quente a gás"
    ],
    "description": "Chalé autêntico na mágica Ilha do Mel. Sem carros e sem barulho, caminho de areia até a praia e contato puro com a natureza preservada.",
    "images": [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "6",
    "title": "Apartamento Prático e Familiar a 2 Quadras da Praia Central",
    "location": "Balneário Camboriú, Santa Catarina",
    "distance": "A 180m da Avenida Atlântica",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 145,
    "originalPrice": 220,
    "discountBadge": "34% OFF · Réveillon BC",
    "rating": 4.93,
    "reviewCount": 112,
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
      "Sacada com churrasqueira integrada",
      "Ar-condicionado nos dormitórios",
      "Garagem no edifício",
      "Wi-Fi e TV na sala",
      "Portaria 24 horas"
    ],
    "description": "Apartamento confortável e sem luxos desnecessários em Balneário Camboriú. Dá para fazer tudo a pé até a praia e curtir a virada do ano com economia.",
    "images": [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "7",
    "title": "Casa de Praia Aconchegante em Quatro Ilhas",
    "location": "Bombinhas, Santa Catarina",
    "distance": "A 200m da Praia de Quatro Ilhas",
    "dates": "27 de dez. – 3 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Bombinhas Verão",
    "rating": 4.94,
    "reviewCount": 86,
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
      "Varanda arejada com churrasqueira",
      "Quintal com árvores e sombra para relaxar",
      "Ar-condicionado e ventiladores",
      "Vaga para 2 carros",
      "Duchão externo pós-mar"
    ],
    "description": "Casa tranquila em Bombinhas, pertinho do mar cristalino de Quatro Ilhas e das trilhas ecológicas. Ideal para descanso em família.",
    "images": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80"
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
    "reviewCount": 54,
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
      "Churrasqueira portátil para churrasco",
      "Ventiladores e telas nas janelas",
      "Vaga privativa para carro",
      "Cadeiras de praia e guarda-sol"
    ],
    "description": "Chalé simples, limpo e prático pertinho da areia branca de Mariscal. Clima de paz e simplicidade para curtir a virada do ano sem estresse.",
    "images": [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "9",
    "title": "Casa Térrea com Quintal Gramado no Campeche",
    "location": "Florianópolis, Santa Catarina",
    "distance": "A 250m da Praia do Campeche",
    "dates": "26 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 210,
    "discountBadge": "35% OFF · Campeche Floripa",
    "rating": 4.95,
    "reviewCount": 82,
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
      "Quintal murado com churrasqueira",
      "Varanda fresca com ganchos de rede",
      "Ar-condicionado no dormitório",
      "Estacionamento para 2 carros",
      "Cozinha com fogão e geladeira"
    ],
    "description": "Casa térrea acolhedora no sul da ilha de Florianópolis. Bairro tranquilo, perto da praia e dos barcos para a Ilha do Campeche.",
    "images": [
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "10",
    "title": "Sobrado Arejado a 150m da Praia em Canasvieiras",
    "location": "Florianópolis, Santa Catarina",
    "distance": "A 150m da Praia de Canasvieiras",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Canasvieiras Réveillon",
    "rating": 4.91,
    "reviewCount": 67,
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
      "Ar-condicionado nos dormitórios",
      "Garagem coberta privativa",
      "Wi-Fi para a família",
      "Cozinha com geladeira e fogão"
    ],
    "description": "Hospedagem confortável no norte de Florianópolis. Mar calmo e quentinho, perfeito para caminhadas e lazer com as crianças.",
    "images": [
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "11",
    "title": "Casa Rústica com Varanda e Rede na Ferrugem",
    "location": "Garopaba, Santa Catarina",
    "distance": "A 180m da Praia da Ferrugem",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 95,
    "originalPrice": 155,
    "discountBadge": "38% OFF · Garopaba Réveillon",
    "rating": 4.93,
    "reviewCount": 74,
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
      "Churrasqueira no pátio",
      "Ventiladores e duchão pós-praia",
      "Pátio para estacionar carro",
      "Cozinha com fogão e utensílios básicos"
    ],
    "description": "Estilo autêntico praiano de Garopaba. Sem luxo, com muita paz, natureza e frescor para aproveitar a Praia da Ferrugem.",
    "images": [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "12",
    "title": "Apartamento Familiar Confortável em Meia Praia",
    "location": "Itapema, Santa Catarina",
    "distance": "A 150m do calçadão de Meia Praia",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "35% OFF · Itapema Réveillon",
    "rating": 4.92,
    "reviewCount": 91,
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
      "Vaga de garagem no prédio",
      "Edifício familiar com elevador",
      "Wi-Fi e TV"
    ],
    "description": "Excelente custo-benefício em Itapema. Prédio tranquilo, perto da praia, padarias, farmácias e do calçadão.",
    "images": [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "13",
    "title": "Casa Caiçara Fresca com Varanda em Maresias",
    "location": "Maresias, São Sebastião - SP",
    "distance": "A 200m da Praia de Maresias",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Réveillon Maresias",
    "rating": 4.94,
    "reviewCount": 85,
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
      "Ventiladores e ar-condicionado",
      "Estacionamento para 2 carros",
      "Ducha externa no jardim"
    ],
    "description": "Casa aconchegante cercada por vegetação tropical em Maresias. Local sossegado e seguro para desfrutar o verão com a família.",
    "images": [
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "14",
    "title": "Casa Familiar com Churrasqueira na Praia Grande",
    "location": "Ubatuba, São Paulo",
    "distance": "A 180m da Praia Grande de Ubatuba",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 175,
    "discountBadge": "34% OFF · Ubatuba Réveillon",
    "rating": 4.93,
    "reviewCount": 97,
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
      "Churrasqueira coberta na área externa",
      "Varanda fresca para descansar à tarde",
      "Ventiladores de teto em todos os quartos",
      "Garagem fechada para 2 carros",
      "Cozinha com geladeira duplex"
    ],
    "description": "Casa prática e espaçosa em Ubatuba. Rua com moradores, perto dos quiosques e das praias do Tenório e Praia Grande.",
    "images": [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "15",
    "title": "Chalé Rústico com Varanda e Rede na Praia do Curral",
    "location": "Ilhabela, São Paulo",
    "distance": "A 250m da Praia do Curral",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Ilhabela Verão",
    "rating": 4.96,
    "reviewCount": 92,
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
      "Deck de madeira com rede e sombra de coqueiro",
      "Ventiladores e brisa constante da mata",
      "Wi-Fi para conexão",
      "Vaga para carro no terreno",
      "Cozinha compacta equipada"
    ],
    "description": "Chalé sossegado em Ilhabela, perfeito para desconectar da rotina e descansar com os sons da natureza e do mar.",
    "images": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "16",
    "title": "Apartamento Prático a 100m da Praia de Pitangueiras",
    "location": "Guarujá, São Paulo",
    "distance": "A 100m da orla de Pitangueiras",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 110,
    "originalPrice": 170,
    "discountBadge": "35% OFF · Guarujá Réveillon",
    "rating": 4.91,
    "reviewCount": 105,
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
      "Cozinha montada para refeições caseiras",
      "Perto de tudo: feira, padaria e praia"
    ],
    "description": "Acomodação familiar no centro de Pitangueiras no Guarujá. Esqueça o carro na garagem e faça tudo a pé até a areia.",
    "images": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "17",
    "title": "Casa Térrea Aconchegante com Jardim em Juquehy",
    "location": "Juquehy, São Sebastião - SP",
    "distance": "A 250m da Praia de Juquehy",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 205,
    "discountBadge": "34% OFF · Juquehy Réveillon",
    "rating": 4.94,
    "reviewCount": 71,
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
      "Quintal fechado com grama e sombra fresca",
      "Churrasqueira com mesa para almoço ao ar livre",
      "Ventiladores e ar-condicionado no quarto",
      "Vaga interna para 2 veículos",
      "Ducha externa pós-praia"
    ],
    "description": "Casa tranquila em Juquehy para desfrutar o verão em família. Praia com águas limpas e infraestrutura excelente para caminhar.",
    "images": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "18",
    "title": "Casa Simples com Quintal e Churrasqueira em Bertioga",
    "location": "Bertioga, São Paulo",
    "distance": "A 200m da Praia da Enseada",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 105,
    "originalPrice": 165,
    "discountBadge": "36% OFF · Bertioga Réveillon",
    "rating": 4.9,
    "reviewCount": 77,
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
      "Churrasqueira de tijolo na área coberta",
      "Varanda arejada com rede",
      "Ventiladores e ar-condicionado",
      "Garagem fechada para 2 carros",
      "Cozinha com utensílios e geladeira"
    ],
    "description": "Excelente opção econômica em Bertioga. Quintal seguro para crianças brincarem e proximidade da praia e do canal.",
    "images": [
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "19",
    "title": "Casa Buziana Tradicional com Varanda Arejada",
    "location": "Búzios, Rio de Janeiro",
    "distance": "A 200m da Praia de Geribá",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 210,
    "discountBadge": "35% OFF · Réveillon Búzios",
    "rating": 4.96,
    "reviewCount": 99,
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
      "Varanda com rede e jardim típico de Búzios",
      "Churrasqueira de alvenaria",
      "Ventiladores e ar-condicionado nos quartos",
      "Vaga para 2 carros no terreno",
      "Wi-Fi e cozinha equipada"
    ],
    "description": "Casa aconchegante e cheia de estilo descontraído em Geribá. Rua sem saída super calma, ideal para descansar depois de curtir a praia.",
    "images": [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "20",
    "title": "Casa Arejada com Vista das Colinas na Prainha",
    "location": "Arraial do Cabo, Rio de Janeiro",
    "distance": "A 150m da Prainha de Arraial",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 110,
    "originalPrice": 170,
    "discountBadge": "35% OFF · Arraial Réveillon",
    "rating": 4.95,
    "reviewCount": 91,
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
      "Cozinha com geladeira e fogão"
    ],
    "description": "Casa fresca e tranquila em Arraial do Cabo. Fácil acesso à água turquesa da Prainha e aos barcos para as praias do Farol e Forno.",
    "images": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "21",
    "title": "Casa Familiar com Quintal a 150m da Praia do Forte",
    "location": "Cabo Frio, Rio de Janeiro",
    "distance": "A 150m da Praia do Forte",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 105,
    "originalPrice": 160,
    "discountBadge": "34% OFF · Cabo Frio Fim de Ano",
    "rating": 4.92,
    "reviewCount": 84,
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
      "Quintal murado com churrasqueira de tijolo",
      "Varandinha fresca com rede",
      "Ventiladores de teto nos quartos",
      "Garagem para 2 carros",
      "Cozinha com utensílios completos"
    ],
    "description": "Casa aconchegante para reunir a família no Réveillon em Cabo Frio. Areia branca fininha e mar cristalino a poucos passos.",
    "images": [
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "22",
    "title": "Chalé Rústico e Acolhedor em Trindade",
    "location": "Paraty, Rio de Janeiro",
    "distance": "A 90m da Praia do Meio",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 90,
    "originalPrice": 145,
    "discountBadge": "38% OFF · Paraty Réveillon",
    "rating": 4.94,
    "reviewCount": 63,
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
      "Cozinha simples para café e lanches",
      "Ducha natural externa",
      "Espaço para estacionar 1 carro"
    ],
    "description": "Chalé rústico na tranquila vila de pescadores de Trindade em Paraty. Mar limpo e trilhas leves para a Piscina Natural do Caixa D’Aço.",
    "images": [
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "23",
    "title": "Casa Arejada com Varanda na Vila do Abraão",
    "location": "Angra dos Reis, Rio de Janeiro",
    "distance": "Ilha Grande · Vila do Abraão",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "36% OFF · Angra Réveillon",
    "rating": 4.95,
    "reviewCount": 79,
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
      "Cozinha com geladeira e fogão para refeições",
      "Wi-Fi para comunicação",
      "Chuveiro quente pós-passeio"
    ],
    "description": "Casa tranquila na mágica Ilha Grande. Sem barulho de trânsito, perfeita para caminhar descalço até a praia e fazer passeios de barco.",
    "images": [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "24",
    "title": "Apartamento Silencioso a 2 Quadras de Copacabana",
    "location": "Copacabana, Rio de Janeiro",
    "distance": "A 180m da praia de Copacabana · Posto 4",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 140,
    "originalPrice": 220,
    "discountBadge": "36% OFF · Réveillon Copacabana",
    "rating": 4.94,
    "reviewCount": 145,
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
      "Apartamento de fundos muito silencioso e fresco",
      "Ar-condicionado nos dormitórios",
      "Portaria 24 horas segura",
      "Cozinha equipada com geladeira e micro-ondas",
      "Wi-Fi rápido"
    ],
    "description": "Ponto de apoio seguro em Copacabana para a noite da virada. Prédio residencial a poucos minutos a pé da queima de fogos.",
    "images": [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "25",
    "title": "Casa Rústica e Arejada com Redes na Varanda",
    "location": "Trancoso, Porto Seguro - Bahia",
    "distance": "A 250m do Quadrado Histórico",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 135,
    "originalPrice": 215,
    "discountBadge": "37% OFF · Trancoso Réveillon",
    "rating": 4.96,
    "reviewCount": 89,
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
      "Cozinha com fogão a gás e utensílios",
      "Estacionamento privativo"
    ],
    "description": "Casa térrea charmosa no estilo tradicional de Trancoso. Ambiente simples, muito fresco e acolhedor perto do Quadrado e da Praia dos Coqueiros.",
    "images": [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "26",
    "title": "Bangalô Simples e Sossegado no Coqueiral",
    "location": "Praia do Forte, Mata de São João - BA",
    "distance": "A 120m da praia e piscinas naturais",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 125,
    "originalPrice": 195,
    "discountBadge": "36% OFF · Praia do Forte Réveillon",
    "rating": 4.93,
    "reviewCount": 76,
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
      "Varanda sob sombra de coqueiro com rede",
      "Ar-condicionado e ventiladores",
      "Cozinha com geladeira duplex e fogão",
      "Vaga privativa para 1 carro",
      "Wi-Fi para a família"
    ],
    "description": "Hospedagem agradável e tranquila na Praia do Forte. Próxima às piscinas de corais de águas mornas, ideal para relaxar.",
    "images": [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "27",
    "title": "Casa Familiar na Praia de Antunes em Maragogi",
    "location": "Maragogi, Alagoas",
    "distance": "A 100m da areia da Praia de Antunes",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Maragogi Réveillon",
    "rating": 4.95,
    "reviewCount": 84,
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
    "description": "Casa caseira e confortável pertinho do mar calmo e azul-turquesa de Antunes. Perfeita para passar a virada do ano com tranquilidade.",
    "images": [
      "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1584738766473-61c083514bf4?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    "id": "28",
    "title": "Apartamento Confortável a 100m das Piscinas Naturais",
    "location": "Porto de Galinhas, Ipojuca - PE",
    "distance": "A 100m das piscinas naturais da vila",
    "dates": "28 de dez. – 2 de jan.",
    "pricePerNight": 120,
    "originalPrice": 185,
    "discountBadge": "35% OFF · Porto de Galinhas",
    "rating": 4.92,
    "reviewCount": 98,
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
      "Cozinha com utensílios para refeições",
      "Wi-Fi rápido"
    ],
    "description": "Acomodação prática e aconchegante em Porto de Galinhas. Caminhe descalço até as piscinas de corais e quiosques da vila.",
    "images": [
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?auto=format&fit=crop&w=1200&q=80",
      "https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6872303/pexels-photo-6872303.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    "id": "29",
    "title": "Casa Térrea Arejada com Varanda e Rede em Pipa",
    "location": "Praia da Pipa, Tibau do Sul - RN",
    "distance": "A 180m da Praia do Centro e Praia do Amor",
    "dates": "27 de dez. – 2 de jan.",
    "pricePerNight": 115,
    "originalPrice": 180,
    "discountBadge": "36% OFF · Pipa Réveillon",
    "rating": 4.94,
    "reviewCount": 73,
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
    "description": "Casa aconchegante em rua calma de Pipa. Perto da vila, mas longe do barulho para dormir em paz com o som da brisa.",
    "images": [
      "https://images.pexels.com/photos/20049160/pexels-photo-20049160.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/15501517/pexels-photo-15501517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/17004835/pexels-photo-17004835.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  },
  {
    "id": "30",
    "title": "Chalé Aconchegante na Areia da Vila de Jeri",
    "location": "Jericoacoara, Jijoca - Ceará",
    "distance": "A 100m da praia e da Duna do Pôr do Sol",
    "dates": "28 de dez. – 3 de jan.",
    "pricePerNight": 130,
    "originalPrice": 200,
    "discountBadge": "35% OFF · Jericoacoara",
    "rating": 4.96,
    "reviewCount": 86,
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
      "Chuveiro quente solar",
      "Wi-Fi para conexão",
      "Cafeteira e frigobar"
    ],
    "description": "Chalé rústico e acolhedor nas ruas de areia de Jericoacoara. Clima de tranquilidade a passos da praia e do pôr do sol inesquecível.",
    "images": [
      "https://images.pexels.com/photos/19694689/pexels-photo-19694689.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/261410/pexels-photo-261410.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/29693417/pexels-photo-29693417.jpeg?auto=compress&cs=tinysrgb&w=1200"
    ]
  }
];
