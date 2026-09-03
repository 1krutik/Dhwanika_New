// src/data/packagesData.js

export const packagesData = [
  // --- YOUR ORIGINAL DATA (Kept exactly as you had it) ---
  {
    _id: "bali-123",
    title: "Magical Bali Honeymoon Getaway",
    destination: "Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: 45000,
    image: "/images/Bali.jpg",
    description:
      "Tropical paradise with lush landscapes, private villa stays, and sunset cruises.",
    highlights: [
      "Private Pool Villa",
      "Ubud Swing",
      "Nusa Penida Island Tour",
      "Romantic Candlelight Dinner",
    ],
    pdfUrl: "/bali-itinerary.pdf",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Bali & Leisure Day",
        description:
          "Arrive at Ngurah Rai International Airport. Our representative will transfer you to your private pool villa. Spend the rest of the day relaxing.",
      },
      {
        day: 2,
        title: "Kintamani Volcano & Ubud Tour",
        description:
          "After breakfast, head to Kintamani to view Mount Batur. Later, visit the famous Tegalalang Rice Terrace and the Bali Swing.",
      },
      {
        day: 3,
        title: "Nusa Penida Island Exploration",
        description:
          "Take a fast boat to Nusa Penida. Visit Kelingking Beach, Broken Beach, and Angel's Billabong. Return to Bali by evening.",
      },
    ],
  },
  {
    _id: "andaman-202",
    title: "Andaman & Nicobar Islands Paradise",
    destination: "Andaman & Nicobar Islands, India",
    duration: "5 Nights / 6 Days",
    price: 55000,
    image: "/images/andaman.jpg",
    description:
      "Experience the untouched beauty of the Andaman & Nicobar Islands with pristine beaches and rich biodiversity.",
    highlights: [
      "Beach Relaxation",
      "Diving Adventures",
      "Tropical Rainforest Trekking",
    ],
    pdfUrl: "/itinerarys/andaman/andamanparadise.pdf",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Port Blair",
        description:
          "Arrive at Veer Savarkar International Airport. Transfer to your beachfront resort.",
      },
      {
        day: 2,
        title: "Cellular Jail & Marine Activity",
        description: "Visit the historic Cellular Jail and enjoy water sports.",
      },
    ],
  },
  {
    _id: "maldives-456",
    title: "Luxury Maldives Overwater Retreat",
    destination: "Maldives",
    duration: "4 Nights / 5 Days",
    price: 85000,
    image: "/images/maldives.jpg",
    description:
      "Luxury overwater villas and crystal-clear waters perfect for honeymooners.",
    highlights: ["Overwater Villa", "Scuba Diving", "Dolphin Cruise"],
    pdfUrl: "/maldives-itinerary.pdf",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Maldives",
        description: "Speedboat transfer to your luxury resort.",
      },
      {
        day: 2,
        title: "Water Sports & Spa",
        description: "Enjoy snorkeling or a relaxing spa session.",
      },
    ],
  },
  {
    _id: "dubai-789",
    title: "Luxury Dubai City Tour",
    destination: "Dubai, UAE",
    duration: "4 Nights / 5 Days",
    price: 75000,
    image: "/images/dubai.jpg",
    description:
      "Luxury overwater villas and crystal-clear waters perfect for honeymooners.",
    highlights: ["Overwater Villa", "Scuba Diving", "Dolphin Cruise"],
    pdfUrl: "/itinerarys/dubai/wondersdubai.pdf",
    itinerary: [
      {
        day: 1,
        title: "Welcome to Dubai",
        description:
          "Arrival at Dubai International Airport. Transfer to your luxury hotel.",
      },
      {
        day: 2,
        title: "City Tour & Shopping",
        description:
          "Explore the iconic landmarks and indulge in world-class shopping.",
      },
    ],
  },
  {
    _id: "mauritius-101",
    title: "Mauritius Tropical Escape",
    destination: "Mauritius",
    duration: "6 Nights / 7 Days",
    price: 65000,
    image: "/images/mauritius.jpg",
    description:
      "An exotic island retreat with breathtaking coral reefs and majestic mountains.",
    highlights: ["Beachfront Resort", "Snorkeling Adventure", "Island Hopping"],
    pdfUrl: "/AndamanNicobarParadise.pdf",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Mauritius",
        description:
          "Arrive at Sir Seewoosagur Ramgoolam International Airport. Transfer to your beachfront resort.",
      },
      {
        day: 2,
        title: "Snorkeling Adventure",
        description:
          "Explore the vibrant marine life with a guided snorkeling tour.",
      },
      {
        day: 3,
        title: "Island Hopping",
        description:
          "Take a boat trip to nearby islands and enjoy the pristine beaches.",
      },
      {
        day: 4,
        title: "Explore Port Louis",
        description:
          "Visit the capital city, explore local markets, and enjoy the cultural heritage.",
      },
    ],
  },

  // --- NEW DUMMY DATA FOR TESTING ---

  // Extra Dubai Packages
  {
    _id: "dubai-desert-202",
    title: "Dubai Desert Safari Adventure",
    destination: "Dubai, United Arab Emirates",
    duration: "3 Nights / 4 Days",
    price: 45000,
    image: "/images/dubai.jpg", // Reusing image for testing
    description:
      "Experience the thrill of dune bashing and a traditional Bedouin camp.",
    highlights: ["Dune Bashing", "BBQ Dinner", "Camel Ride"],
    pdfUrl: "",
    itinerary: [{ day: 1, title: "Arrival", description: "Welcome to Dubai" }],
  },
  {
    _id: "dubai-shopping-303",
    title: "Dubai Shopping Festival Special",
    destination: "Dubai, UAE",
    duration: "5 Nights / 6 Days",
    price: 68000,
    image: "/images/dubai.jpg",
    description: "Shop till you drop at the world's biggest malls.",
    highlights: ["Dubai Mall", "Gold Souk", "Burj Khalifa"],
    pdfUrl: "",
    itinerary: [{ day: 1, title: "Arrival", description: "Welcome to Dubai" }],
  },

  // Extra Maldives Packages
  {
    _id: "maldives-budget-505",
    title: "Maldives Beach Villa Getaway",
    destination: "Maldives",
    duration: "3 Nights / 4 Days",
    price: 55000,
    image: "/images/maldives.jpg",
    description: "A beautiful and affordable stay in a beachfront villa.",
    highlights: ["Beachfront Access", "Snorkeling", "Sunset Cruise"],
    pdfUrl: "",
    itinerary: [
      { day: 1, title: "Arrival", description: "Welcome to Maldives" },
    ],
  },
  {
    _id: "maldives-honeymoon-606",
    title: "Ultimate Maldives Honeymoon Package",
    destination: "Maldives Islands",
    duration: "7 Nights / 8 Days",
    price: 145000,
    image: "/images/maldives.jpg",
    description: "The ultimate luxury experience for couples.",
    highlights: ["Private Pool", "Spa Day", "Romantic Dinner"],
    pdfUrl: "",
    itinerary: [
      { day: 1, title: "Arrival", description: "Welcome to Maldives" },
    ],
  },

  // Extra Bali Packages
  {
    _id: "bali-adventure-707",
    title: "Bali Surf & Adventure Tour",
    destination: "Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: 38000,
    image: "images/NewBali.jpg",
    description: "Catch the best waves and hike active volcanoes.",
    highlights: ["Surfing Lessons", "Mt. Batur Hike", "Waterfalls"],
    pdfUrl: "/itinerarys/Bali/Bali07days.pdf",
    itinerary: [
      {
        day: 1,
        title: "KUTA • ARRIVAL / STAY",
        description:
          " Begin the Bali package with thefirst scheduled night in Kuta -> The supplied source does not state an arrival time or specific transfer arrangement. ",
      },
      {
        day: 2,
        title: "NORTH BALI • WANAGIRI & ULUNDANU",
        description:
          " • Proceedf or the listed Wanagiri Hidden Hills experience and Ulundanu Temple Tour • Overnight stay in Ubud. ",
      },
      {
        day: 3,
        title: "UBUD • ALAS HARUM EXPERIENCE",
        description:
          " • Visit Alas Harum Tegalang including entrance fee,coffee tour and rice terrace selfie spot • Enjoy 1x of Angel Swing OR Sky Bike OR Flying Fox, as listed in the package.",
      },
      {
        day: 4,
        title: "UBUD • TANAH LOT / KUTA",
        description:
          " • Cover Tanah Lot Temple from the listed sightseeing inclusions • Continue the accommodation plan with a night in Kuta.",
      },
      {
        day: 5,
        title: "KUTA • TANJUNG BENOA",
        description:
          " • Visit Tanjung Benoa Beach for water activities • Water activity charges are on own cost as stated in the source.",
      },
      {
        day: 6,
        title: "KUTA • LEISURE / STAY",
        description:
          " • Continuethe finalKutastay underthe 03-night accommodation plan • No additional sightseeing is specified in the supplied source for this day.",
      },
      {
        day: 7,
        title: " KUTA • FINAL DAY / DEPARTURE",
        description:
          "• Complete the07-day package.• The source does not provide a departure time; please follow the confirmed operational schedule.",
      },
    ],
  },
];
