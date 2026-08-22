// src/data/packagesData.js

export const packagesData = [
  {
    _id: "bali-123", // This ID must be unique for every package
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

    // NEW: Day-wise Itinerary added here
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
      // Add more days as needed...
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
  // ⬇️ ADD YOUR CUSTOMIZED PACKAGES DOWN HERE IN THIS SAME FORMAT ⬇️
];
