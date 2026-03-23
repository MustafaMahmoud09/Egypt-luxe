// ============================================
// EGYPT LUXE - Data Store
// ============================================

const AppData = {
  villages: [
    {
      id: 'sahel',
      name: 'North Coast – Sahel',
      location: 'Matrouh Governorate',
      description: 'The crown jewel of Egypt\'s Mediterranean coast, Sahel offers pristine white-sand beaches, crystal-clear turquoise waters, and a vibrant summer scene that draws Egypt\'s elite. From ultra-luxury resorts to charming beach chalets, Sahel is where the Mediterranean meets Egyptian luxury.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
      rating: 4.8,
      reviewCount: 1240,
      tags: ['Beach', 'Luxury', 'Summer'],
      highlights: ['White Sand Beaches', 'Crystal Waters', 'Luxury Resorts', 'Nightlife'],
    },
    {
      id: 'sharm',
      name: 'Sharm El Sheikh',
      location: 'South Sinai Governorate',
      description: 'Nestled between the mountains of the Sinai and the Red Sea, Sharm El Sheikh is a world-renowned diving destination and resort city. Year-round sunshine, vibrant coral reefs, and luxury resorts make it one of Egypt\'s premier tourist destinations.',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
      rating: 4.9,
      reviewCount: 3480,
      tags: ['Diving', 'Coral Reef', 'Year-round'],
      highlights: ['Red Sea Diving', 'Naama Bay', 'Desert Safaris', 'World-Class Resorts'],
    },
    {
      id: 'hurghada',
      name: 'Hurghada',
      location: 'Red Sea Governorate',
      description: 'A vibrant Red Sea resort city that has transformed from a small fishing village into a major international tourist hub. Known for its stunning coral reefs, water sports, and lively promenade, Hurghada offers something for every type of traveler.',
      image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80',
      rating: 4.7,
      reviewCount: 2890,
      tags: ['Water Sports', 'Coral', 'Nightlife'],
      highlights: ['Snorkeling', 'Kite Surfing', 'Giftun Island', 'Marina Walk'],
    },
  ],

  categories: [
    { id: 'hotels', name: 'Hotels', icon: '🏨', emoji: '🏨' },
    { id: 'chalets', name: 'Chalets', icon: '🏡', emoji: '🏡' },
    { id: 'apartments', name: 'Apartments', icon: '🏢', emoji: '🏢' },
    { id: 'restaurants', name: 'Restaurants', icon: '🍽', emoji: '🍽' },
    { id: 'cafes', name: 'Cafes', icon: '☕', emoji: '☕' },
    { id: 'activities', name: 'Activities', icon: '🎯', emoji: '🎯' },
  ],

  services: {
    sahel: {
      hotels: [
        {
          id: 'sah-hot-1',
          name: 'Marassi Beach Resort',
          price: 2800,
          currency: 'EGP',
          unit: 'night',
          rating: 4.9,
          reviewCount: 342,
          description: 'Perched on the shores of the Mediterranean, Marassi Beach Resort offers an unmatched luxury experience. With its private beach, infinity pools, and world-class dining, it is the pinnacle of North Coast elegance.',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
            'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
          ],
          amenities: ['🏊 Pool', '🏖 Beach', '🍽 Restaurant', '💆 Spa', '🏋 Gym', '📶 WiFi', '🅿 Parking', '🍸 Bar'],
          available: true,
          tags: ['Beachfront', 'Luxury', 'Pool'],
          village: 'sahel',
          category: 'hotels',
        },
        {
          id: 'sah-hot-2',
          name: 'Hacienda Bay Hotel',
          price: 1950,
          currency: 'EGP',
          unit: 'night',
          rating: 4.7,
          reviewCount: 218,
          description: 'A luxurious Mediterranean retreat in the heart of Hacienda Bay. The hotel features stunning sea views, lush gardens, and impeccable service that define the North Coast summer experience.',
          image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
            'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80',
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
          ],
          amenities: ['🏊 Pool', '🏖 Beach', '🍽 Restaurant', '📶 WiFi', '🅿 Parking'],
          available: true,
          tags: ['Sea View', 'Garden', 'Family'],
          village: 'sahel',
          category: 'hotels',
        },
        {
          id: 'sah-hot-3',
          name: 'Amwaj Blue Beach Resort',
          price: 3200,
          currency: 'EGP',
          unit: 'night',
          rating: 4.8,
          reviewCount: 156,
          description: 'The ultimate in beachfront luxury, Amwaj offers private villas, direct beach access, and personalized butler service for the most discerning guests.',
          image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
          ],
          amenities: ['🏊 Pool', '🏖 Beach', '🍽 Restaurant', '💆 Spa', '🏋 Gym', '📶 WiFi', '🍸 Bar', '🛎 Butler'],
          available: true,
          tags: ['Ultra-Luxury', 'Villas', 'Butler'],
          village: 'sahel',
          category: 'hotels',
        },
      ],
      chalets: [
        {
          id: 'sah-cha-1',
          name: 'Sandy Beach Chalet',
          price: 1200,
          currency: 'EGP',
          unit: 'night',
          rating: 4.6,
          reviewCount: 89,
          description: 'A charming beachfront chalet with stunning sea views, a fully equipped kitchen, and a private terrace. Perfect for families or couples seeking a cozy yet luxurious retreat.',
          image: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&q=80',
            'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800&q=80',
          ],
          amenities: ['🏖 Beach Access', '📶 WiFi', '🅿 Parking', '🍳 Kitchen', '🌅 Sea View'],
          available: true,
          tags: ['Beachfront', 'Family', 'Self-catering'],
          village: 'sahel',
          category: 'chalets',
        },
        {
          id: 'sah-cha-2',
          name: 'Marassi Premium Chalet',
          price: 1800,
          currency: 'EGP',
          unit: 'night',
          rating: 4.8,
          reviewCount: 124,
          description: 'Nestled within the prestigious Marassi compound, this luxury chalet offers resort facilities access, a private garden, and a beautifully designed interior.',
          image: 'https://images.unsplash.com/photo-1464890100898-a385f744067f?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1464890100898-a385f744067f?w=800&q=80',
          ],
          amenities: ['🏊 Pool Access', '🏖 Beach', '📶 WiFi', '🅿 Parking', '🌿 Garden', '🍳 Kitchen'],
          available: true,
          tags: ['Compound', 'Premium', 'Garden'],
          village: 'sahel',
          category: 'chalets',
        },
      ],
      apartments: [
        {
          id: 'sah-apt-1',
          name: 'Sea View Studio – Amwaj',
          price: 850,
          currency: 'EGP',
          unit: 'night',
          rating: 4.5,
          reviewCount: 67,
          description: 'A modern studio apartment with breathtaking sea views in the heart of Amwaj compound. Features a fully equipped kitchenette and access to all compound amenities.',
          image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
            'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
          ],
          amenities: ['🏊 Pool', '🌊 Sea View', '📶 WiFi', '🅿 Parking', '🍳 Kitchenette'],
          available: true,
          tags: ['Studio', 'Sea View', 'Budget-friendly'],
          village: 'sahel',
          category: 'apartments',
        },
      ],
      restaurants: [
        {
          id: 'sah-res-1',
          name: 'Blue Nile Seafood',
          price: 350,
          currency: 'EGP',
          unit: 'person',
          rating: 4.8,
          reviewCount: 445,
          description: 'Fresh Mediterranean seafood with a stunning panoramic sea view. Our chefs source the finest local catch daily, creating exquisite dishes that celebrate the flavors of the Mediterranean.',
          image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
          ],
          amenities: ['🌊 Sea View', '🍷 Wine', '🌿 Outdoor', '🅿 Valet', '🎵 Live Music'],
          available: true,
          tags: ['Seafood', 'Sea View', 'Fine Dining'],
          village: 'sahel',
          category: 'restaurants',
        },
        {
          id: 'sah-res-2',
          name: 'La Mer Brasserie',
          price: 280,
          currency: 'EGP',
          unit: 'person',
          rating: 4.6,
          reviewCount: 312,
          description: 'A chic French-Mediterranean brasserie offering an elegant dining experience with a vibrant atmosphere, curated wine list, and creative seasonal menu.',
          image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
          ],
          amenities: ['🍷 Bar', '🌿 Terrace', '📶 WiFi', '🎵 Music'],
          available: true,
          tags: ['French', 'Brasserie', 'Terrace'],
          village: 'sahel',
          category: 'restaurants',
        },
      ],
      cafes: [
        {
          id: 'sah-caf-1',
          name: 'Sunrise Beach Café',
          price: 120,
          currency: 'EGP',
          unit: 'person',
          rating: 4.7,
          reviewCount: 289,
          description: 'Start your morning with artisan coffee and freshly baked pastries right on the beach. The perfect spot to watch the Mediterranean sunrise with a perfect cup in hand.',
          image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80',
          ],
          amenities: ['🏖 Beachfront', '☕ Specialty Coffee', '🥐 Pastries', '📶 WiFi'],
          available: true,
          tags: ['Beachfront', 'Breakfast', 'Coffee'],
          village: 'sahel',
          category: 'cafes',
        },
      ],
      activities: [
        {
          id: 'sah-act-1',
          name: 'Private Yacht Charter',
          price: 4500,
          currency: 'EGP',
          unit: 'day',
          rating: 4.9,
          reviewCount: 98,
          description: 'Explore the stunning North Coast aboard a private luxury yacht. Includes a professional skipper, snorkeling equipment, gourmet lunch, and unlimited soft drinks.',
          image: 'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=800&q=80',
          ],
          amenities: ['⚓ Private', '🤿 Snorkeling', '🍱 Lunch', '🎣 Fishing', '🌅 Sunset'],
          available: true,
          tags: ['Yacht', 'Private', 'Luxury'],
          village: 'sahel',
          category: 'activities',
        },
        {
          id: 'sah-act-2',
          name: 'Beach Club Day Pass',
          price: 750,
          currency: 'EGP',
          unit: 'person',
          rating: 4.6,
          reviewCount: 534,
          description: 'Full-day access to North Coast\'s most exclusive beach club. Includes sun lounger, umbrella, towel service, water sports access, and a welcome drink.',
          image: 'https://images.unsplash.com/photo-1548678276-fdf3a1b2c037?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1548678276-fdf3a1b2c037?w=800&q=80',
          ],
          amenities: ['🏖 Beach', '🏊 Pool', '🏄 Water Sports', '🍹 Welcome Drink', '🛌 Lounger'],
          available: true,
          tags: ['Day Pass', 'Beach Club', 'Water Sports'],
          village: 'sahel',
          category: 'activities',
        },
      ],
    },

    sharm: {
      hotels: [
        {
          id: 'sha-hot-1',
          name: 'Four Seasons Sharm',
          price: 4500,
          currency: 'EGP',
          unit: 'night',
          rating: 5.0,
          reviewCount: 876,
          description: 'The iconic Four Seasons Sharm El Sheikh offers unparalleled luxury on the shores of the Red Sea. With its private beach, multiple pools, and world-class spa, this is the definitive Sharm experience.',
          image: 'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=800&q=80',
            'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
          ],
          amenities: ['🏊 4 Pools', '🏖 Private Beach', '🍽 5 Restaurants', '💆 Spa', '🏋 Gym', '🎾 Tennis', '🅿 Valet', '🤿 Diving Center'],
          available: true,
          tags: ['5-Star', 'Beachfront', 'Iconic'],
          village: 'sharm',
          category: 'hotels',
        },
        {
          id: 'sha-hot-2',
          name: 'Hyatt Regency Sharm',
          price: 2900,
          currency: 'EGP',
          unit: 'night',
          rating: 4.8,
          reviewCount: 542,
          description: 'Overlooking the breathtaking Red Sea, the Hyatt Regency offers a perfect blend of modern luxury and natural beauty. Steps from Naama Bay, the hub of Sharm\'s vibrant nightlife.',
          image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
          ],
          amenities: ['🏊 Pool', '🏖 Beach', '🍽 Restaurant', '💆 Spa', '📶 WiFi', '🤿 Diving'],
          available: true,
          tags: ['Naama Bay', 'Luxury', 'Diving'],
          village: 'sharm',
          category: 'hotels',
        },
      ],
      chalets: [
        {
          id: 'sha-cha-1',
          name: 'Coral Bay Chalet',
          price: 1600,
          currency: 'EGP',
          unit: 'night',
          rating: 4.7,
          reviewCount: 134,
          description: 'A stunning private chalet nestled between mountains and sea. Features direct beach access, breathtaking views of Tiran Island, and a fully-equipped private kitchen.',
          image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&q=80',
          ],
          amenities: ['🌊 Sea View', '🏖 Beach', '🍳 Kitchen', '🌄 Mountain View', '📶 WiFi'],
          available: true,
          tags: ['Mountain & Sea', 'Private', 'Views'],
          village: 'sharm',
          category: 'chalets',
        },
      ],
      apartments: [
        {
          id: 'sha-apt-1',
          name: 'Naama Bay Apartment',
          price: 900,
          currency: 'EGP',
          unit: 'night',
          rating: 4.5,
          reviewCount: 198,
          description: 'Modern, stylish apartment in the heart of Naama Bay. Walk to restaurants, shops, and the beach. Perfect for travelers who want to be at the center of Sharm\'s vibrant scene.',
          image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80',
          ],
          amenities: ['📍 Central', '🏖 Walk to Beach', '📶 WiFi', '🏊 Pool', '🅿 Parking'],
          available: true,
          tags: ['Central', 'Walkable', 'Modern'],
          village: 'sharm',
          category: 'apartments',
        },
      ],
      restaurants: [
        {
          id: 'sha-res-1',
          name: 'Farsha Cliff Restaurant',
          price: 400,
          currency: 'EGP',
          unit: 'person',
          rating: 4.9,
          reviewCount: 678,
          description: 'An iconic cliffside dining experience with jaw-dropping views of the Red Sea. Farsha offers a magical atmosphere, eclectic menu, and an experience unlike any other in Sharm.',
          image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80',
          ],
          amenities: ['🌊 Sea View', '🌿 Outdoor', '🎵 Live Music', '🍷 Bar', '🌅 Sunset'],
          available: true,
          tags: ['Iconic', 'Cliffside', 'Sea View'],
          village: 'sharm',
          category: 'restaurants',
        },
      ],
      cafes: [
        {
          id: 'sha-caf-1',
          name: 'Camel Bar & Café',
          price: 150,
          currency: 'EGP',
          unit: 'person',
          rating: 4.6,
          reviewCount: 456,
          description: 'A legendary Sharm institution, the Camel Bar is the perfect spot for after-dive relaxation. Great cocktails, live music, and a vibrant crowd in the heart of Naama Bay.',
          image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
          ],
          amenities: ['🎵 Live Music', '🍹 Cocktails', '📍 Naama Bay', '🌙 Nightlife'],
          available: true,
          tags: ['Iconic', 'Nightlife', 'Music'],
          village: 'sharm',
          category: 'cafes',
        },
      ],
      activities: [
        {
          id: 'sha-act-1',
          name: 'Scuba Diving – Ras Mohammed',
          price: 850,
          currency: 'EGP',
          unit: 'person',
          rating: 5.0,
          reviewCount: 1240,
          description: 'Dive into one of the world\'s most spectacular diving sites. Ras Mohammed National Park offers incredible coral walls, vibrant marine life, and crystal visibility. Suitable for all levels.',
          image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
          ],
          amenities: ['🤿 Equipment', '👨‍🏫 Instructor', '🚤 Boat', '📸 Photos', '🍱 Lunch'],
          available: true,
          tags: ['Diving', 'World-class', 'All Levels'],
          village: 'sharm',
          category: 'activities',
        },
        {
          id: 'sha-act-2',
          name: 'Desert Safari & Bedouin Dinner',
          price: 650,
          currency: 'EGP',
          unit: 'person',
          rating: 4.8,
          reviewCount: 867,
          description: 'Experience the magic of Sinai\'s desert. Ride quads or camels through golden sand dunes, watch a spectacular sunset over the mountains, and enjoy an authentic Bedouin dinner under the stars.',
          image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
          ],
          amenities: ['🐪 Camel Ride', '🏍 Quad Bike', '🌅 Sunset', '🍽 Dinner', '🔭 Stargazing'],
          available: true,
          tags: ['Desert', 'Bedouin', 'Sunset'],
          village: 'sharm',
          category: 'activities',
        },
      ],
    },

    hurghada: {
      hotels: [
        {
          id: 'hur-hot-1',
          name: 'Steigenberger Al Dau Beach',
          price: 2200,
          currency: 'EGP',
          unit: 'night',
          rating: 4.8,
          reviewCount: 654,
          description: 'An all-inclusive luxury resort set on a stunning Red Sea beach. The Steigenberger Al Dau offers a world of relaxation, with multiple pools, gourmet dining, and an award-winning spa.',
          image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&q=80',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
          ],
          amenities: ['🏊 5 Pools', '🏖 Beach', '🍽 All-Inclusive', '💆 Spa', '🤿 Water Sports', '🎾 Tennis'],
          available: true,
          tags: ['All-Inclusive', 'Beachfront', 'Family'],
          village: 'hurghada',
          category: 'hotels',
        },
        {
          id: 'hur-hot-2',
          name: 'Sheraton Soma Bay',
          price: 1800,
          currency: 'EGP',
          unit: 'night',
          rating: 4.7,
          reviewCount: 432,
          description: 'Set on the pristine Soma Bay peninsula, this elegant resort features stunning coral reef access right from the beach, multiple restaurants, and a spectacular thalassotherapy spa.',
          image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80',
          ],
          amenities: ['🏖 Private Beach', '🤿 Reef Access', '💆 Thalasso Spa', '🍽 Restaurant', '⛵ Water Sports'],
          available: true,
          tags: ['Soma Bay', 'Reef', 'Spa'],
          village: 'hurghada',
          category: 'hotels',
        },
      ],
      chalets: [
        {
          id: 'hur-cha-1',
          name: 'Marina View Chalet',
          price: 1100,
          currency: 'EGP',
          unit: 'night',
          rating: 4.6,
          reviewCount: 87,
          description: 'A charming chalet overlooking Hurghada Marina. Perfect for those who want to be in the heart of Hurghada\'s vibrant dining and entertainment scene.',
          image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
          ],
          amenities: ['⚓ Marina View', '📍 Central', '🍳 Kitchen', '📶 WiFi', '🅿 Parking'],
          available: true,
          tags: ['Marina', 'Central', 'Stylish'],
          village: 'hurghada',
          category: 'chalets',
        },
      ],
      apartments: [
        {
          id: 'hur-apt-1',
          name: 'Red Sea View Apartment',
          price: 700,
          currency: 'EGP',
          unit: 'night',
          rating: 4.4,
          reviewCount: 156,
          description: 'A well-appointed apartment with stunning Red Sea views on El Mamsha promenade. Features a large balcony, modern kitchen, and walking distance to restaurants and shops.',
          image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
          ],
          amenities: ['🌊 Sea View', '🌅 Balcony', '📍 El Mamsha', '🍳 Kitchen', '📶 WiFi'],
          available: true,
          tags: ['Promenade', 'Sea View', 'Budget'],
          village: 'hurghada',
          category: 'apartments',
        },
      ],
      restaurants: [
        {
          id: 'hur-res-1',
          name: 'Pier 88 – Marina Restaurant',
          price: 320,
          currency: 'EGP',
          unit: 'person',
          rating: 4.7,
          reviewCount: 567,
          description: 'A spectacular dining experience right on Hurghada Marina. Fresh seafood, international cuisine, and unbeatable sunset views over the marina make this the most popular restaurant in the city.',
          image: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
          ],
          amenities: ['⚓ Marina View', '🍹 Bar', '🎵 Music', '🌅 Sunset', '🍷 Wine'],
          available: true,
          tags: ['Marina', 'Seafood', 'Sunset'],
          village: 'hurghada',
          category: 'restaurants',
        },
      ],
      cafes: [
        {
          id: 'hur-caf-1',
          name: 'Le Pacha Coffee House',
          price: 100,
          currency: 'EGP',
          unit: 'person',
          rating: 4.5,
          reviewCount: 234,
          description: 'A sophisticated coffee house aboard the iconic Le Pacha boat-restaurant in Hurghada Marina. Specialty coffees, light bites, and a relaxed marina atmosphere.',
          image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80',
          ],
          amenities: ['⚓ Boat Café', '☕ Specialty Coffee', '⛵ Marina', '📶 WiFi'],
          available: true,
          tags: ['Marina', 'Boat', 'Unique'],
          village: 'hurghada',
          category: 'cafes',
        },
      ],
      activities: [
        {
          id: 'hur-act-1',
          name: 'Snorkeling – Giftun Island',
          price: 450,
          currency: 'EGP',
          unit: 'person',
          rating: 4.9,
          reviewCount: 2340,
          description: 'Discover the spectacular coral gardens of Giftun Island, one of the most biodiverse marine areas in the Red Sea. Swim alongside turtles, colorful fish, and stunning coral formations.',
          image: 'https://images.unsplash.com/photo-1682687220063-4742bd7c8f1c?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1682687220063-4742bd7c8f1c?w=800&q=80',
          ],
          amenities: ['🤿 Equipment', '🚤 Boat Transfer', '🏖 Beach', '🍱 Lunch', '🐠 Marine Life'],
          available: true,
          tags: ['Snorkeling', 'Island', 'Wildlife'],
          village: 'hurghada',
          category: 'activities',
        },
        {
          id: 'hur-act-2',
          name: 'Kitesurfing Lessons',
          price: 1200,
          currency: 'EGP',
          unit: 'person',
          rating: 4.8,
          reviewCount: 234,
          description: 'Learn kitesurfing from certified IKO instructors on Hurghada\'s perfect kitesurfing spots. The Red Sea\'s consistent winds make this one of the world\'s best learning destinations.',
          image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
          images: [
            'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
          ],
          amenities: ['🪁 Equipment', '👨‍🏫 IKO Instructor', '📸 Photos', '🏖 Beach', '🎓 Certificate'],
          available: true,
          tags: ['Kitesurfing', 'Lessons', 'Adventure'],
          village: 'hurghada',
          category: 'activities',
        },
      ],
    },
  },

  reviews: [
    { id: 1, name: 'Sarah Mitchell', rating: 5, date: 'December 2024', text: 'Absolutely breathtaking experience. The service was impeccable and the views were unlike anything I\'ve ever seen. Will definitely be returning next summer.' },
    { id: 2, name: 'Ahmed Hassan', rating: 5, date: 'November 2024', text: 'A truly world-class experience. Every detail was perfect, from the beautifully designed rooms to the exceptional dining. Egypt\'s finest.' },
    { id: 3, name: 'Emma Thompson', rating: 4, date: 'October 2024', text: 'Wonderful stay with stunning surroundings. The staff were incredibly warm and attentive. The only minor issue was the WiFi speed, but everything else was perfect.' },
    { id: 4, name: 'Omar Khalid', rating: 5, date: 'September 2024', text: 'Exceeded all my expectations. The private beach was immaculate, the food was outstanding, and the spa treatments were truly therapeutic. Highly recommend.' },
  ],

  offers: [
    { id: 1, title: 'Summer Early Bird', subtitle: 'Book 30 days ahead', discount: '25% OFF', description: 'Save 25% on any beachfront property when you book 30 days in advance.', code: 'EARLY25', expiry: '31 Jul 2025', serviceId: 'sah-hot-1', village: 'sahel' },
    { id: 2, title: 'Romantic Getaway', subtitle: 'Couples package', discount: 'FREE DINNER', description: 'Book a 3-night stay and receive a complimentary romantic dinner at our signature restaurant.', code: 'ROMANCE', expiry: '31 Dec 2025', serviceId: 'sha-hot-1', village: 'sharm' },
    { id: 3, title: 'Dive & Stay', subtitle: 'Adventure combo', discount: '20% OFF', description: 'Combine a hotel stay with diving lessons and save 20% on the total package.', code: 'DIVE20', expiry: '31 Aug 2025', serviceId: 'sha-act-1', village: 'sharm' },
  ],

  getAllServices() {
    const all = [];
    Object.entries(this.services).forEach(([village, cats]) => {
      Object.entries(cats).forEach(([cat, items]) => {
        items.forEach(item => all.push(item));
      });
    });
    return all;
  },

  getServiceById(id) {
    return this.getAllServices().find(s => s.id === id) || null;
  },

  getServicesByVillage(villageId) {
    return this.services[villageId] || {};
  },

  getServicesByVillageAndCategory(villageId, category) {
    const village = this.services[villageId];
    if (!village) return [];
    return village[category] || [];
  },

  getVillageById(id) {
    return this.villages.find(v => v.id === id) || null;
  },

  searchServices(query) {
    const q = query.toLowerCase();
    return this.getAllServices().filter(s =>
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q) ||
      s.tags.some(t => t.toLowerCase().includes(q))
    );
  },

  getFeaturedServices(limit = 6) {
    const all = this.getAllServices();
    return all.sort((a, b) => b.rating - a.rating).slice(0, limit);
  },

  getRecommended(bookings) {
    const all = this.getAllServices();
    if (!bookings || !bookings.length) return all.slice(0, 4);
    const categories = [...new Set(bookings.map(b => b.category))];
    const recommended = all.filter(s => categories.includes(s.category) && !bookings.find(b => b.serviceId === s.id));
    return recommended.length ? recommended.slice(0, 4) : all.slice(0, 4);
  },
};
