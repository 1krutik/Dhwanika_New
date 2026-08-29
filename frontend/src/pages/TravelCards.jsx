import { useState } from "react";
import { Link } from "react-router-dom";

// 1. The NEW Rich Data Structure
const premiumPackages = [
  {
    _id: "bali-123",
    title: "Magical Bali Honeymoon Getaway",
    destination: "Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: 45000,
    image: "/images/Bali.jpg",
    description: "Tropical paradise with lush landscapes, private villa stays, and sunset cruises.",
  },
  {
    _id: "maldives-456",
    title: "Luxury Maldives Overwater Retreat",
    destination: "Maldives",
    duration: "4 Nights / 5 Days",
    price: 85000,
    image: "/images/maldives.jpg",
    description: "Luxury overwater villas and crystal-clear waters perfect for honeymooners.",
  },
  {
    _id: "dubai-789",
    title: "Dubai Desert & City Adventure",
    destination: "Dubai, UAE",
    duration: "4 Nights / 5 Days",
    price: 55000,
    image: "/images/dubai.jpg",
    description: "Modern city life mixed with thrilling desert safaris and luxury shopping.",
  },
  {
    _id: "mauritius-101",
    title: "Mauritius Tropical Escape",
    destination: "Mauritius",
    duration: "6 Nights / 7 Days",
    price: 65000,
    image: "/images/mauritius.jpg",
    description: "An exotic island retreat with breathtaking coral reefs and majestic mountains.",
  },
  {
    _id: "andaman-202 ",
    title: "Andaman & Nicobar Paradise",
    destination: "Andaman & Nicobar Islands",
    duration: "5 Nights / 6 Days",
    price: 60000,
    image: "/images/andaman.jpg",
    description: "Pristine beaches, crystal-clear waters, and vibrant marine life for an unforgettable experience.",
  },
];

export default function TravelCards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // Filter & Sort Logic
  const filteredPackages = premiumPackages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto py-4 px-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-teal-600">Popular Holiday Destinations</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect getaway for your next adventure with Dhwanika Overseas.</p>
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-10 gap-4">
        <input
          type="text"
          placeholder="Search destinations (e.g., Bali)..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By: Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Package Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortedPackages.map((pkg) => (
          <div key={pkg._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100">
            
            {/* Image Container */}
            <div className="relative">
              <img src={pkg.image} alt={pkg.title} className="h-48 w-full object-cover" loading="lazy" />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md">
                {pkg.duration}
              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-xs text-blue-600 font-bold mb-1 uppercase tracking-wider">{pkg.destination}</p>
              <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{pkg.title}</h2>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{pkg.description}</p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Starting from</p>
                  <p className="text-blue-600 font-extrabold text-lg">₹{pkg.price.toLocaleString("en-IN")}</p>
                </div>
                
                {/* THIS MAKES IT CLICKABLE */}
                <Link 
                  to={`/holidays/${pkg._id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-semibold transition text-sm shadow-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}