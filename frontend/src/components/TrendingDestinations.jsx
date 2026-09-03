// src/components/TrendingDestinations.jsx
import { useRef } from "react";
import { Link } from "react-router-dom";

const trendingDestinations = [
  { name: "Bali", image: "/images/Bali.jpg", startingPrice: 45000, tours: "5+ Tours" },
  { name: "Maldives", image: "/images/maldives.jpg", startingPrice: 85000, tours: "3+ Tours" },
  { name: "Dubai", image: "/images/dubai.jpg", startingPrice: 55000, tours: "7+ Tours" },
  { name: "Mauritius", image: "/images/mauritius.jpg", startingPrice: 65000, tours: "4+ Tours" },
  { name: "Japan", image: "/images/japan.jpg", startingPrice: 120000, tours: "2+ Tours" },
  { name: "Thailand", image: "/images/thailand.jpg", startingPrice: 25000, tours: "8+ Tours" },
  { name: "Singapore", image: "/images/singapore.jpg", startingPrice: 48000, tours: "4+ Tours" },
];

export default function TrendingDestinations() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Top Trending Travel Destinations
        </h2>
        
        {/* Left Arrow */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600 transition hidden md:flex"
          aria-label="Scroll left"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600 transition hidden md:flex"
          aria-label="Scroll right"
        >
          &#10095;
        </button>

        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-4 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {trendingDestinations.map((dest, index) => (
            <Link 
              key={index} 
              to={`/holidays?dest=${dest.name}`} 
              className="min-w-[160px] md:min-w-[220px] snap-start flex flex-col group cursor-pointer"
            >
              <div className="rounded-2xl overflow-hidden h-56 md:h-72 w-full mb-3 shadow-md">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" 
                  loading="lazy"
                />
              </div>
              <div className="flex justify-between items-start px-1">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base">{dest.name}</h3>
                  <p className="text-xs text-gray-500">{dest.tours}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500"> Best Price</p>
                  {/* <p className="font-bold text-teal-600 text-sm md:text-base">
                    ₹{dest.startingPrice.toLocaleString('en-IN')}
                  </p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}