import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const trendingDestinations = [
  { name: "Bali", image: "/images/Bali.jpg", startingPrice: 45000, tours: "5+ Tours" },
  { name: "Maldives", image: "/images/maldives.jpg", startingPrice: 85000, tours: "3+ Tours" },
  { name: "Dubai", image: "/images/dubai.jpg", startingPrice: 55000, tours: "7+ Tours" },
  { name: "Mauritius", image: "/images/mauritius.jpg", startingPrice: 65000, tours: "4+ Tours" },
  { name: "Japan", image: "/images/japan.jpg", startingPrice: 120000, tours: "2+ Tours" },
  { name: "Thailand", image: "/images/thailand.jpg", startingPrice: 25000, tours: "8+ Tours" },
  { name: "Singapore", image: "/images/singapore.jpg", startingPrice: 48000, tours: "4+ Tours" },
  { name: "Kerala", image: "/images/ScennicKerala.jpg", startingPrice: 30000, tours: "6+ Tours" },
  { name: "Azerbaijan", image: "/images/StuningBaku.jpg", startingPrice: 60000, tours: "3+ Tours" },
  { name: "Georgia", image: "/images/tbilisibatumi.jpg", startingPrice: 55000, tours: "4+ Tours" },
];

export default function TrendingDestinations() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Manual scroll function for the arrows
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350; 
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-12 px-4 overflow-hidden">
      
      {/* 
        This style block injects the CSS animation directly into the component.
        It moves the track left by exactly half its width, then resets seamlessly.
      */}
      <style>{`
        @keyframes smoothScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 1rem)); } /* -1rem accounts for the gap */
        }
        
        .animate-smooth-scroll {
          /* Adjust the '40s' here to make it faster or slower! */
          animation: smoothScroll 40s linear infinite; 
          will-change: transform;
        }

        .animate-smooth-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 relative">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
          Top Trending Travel Destinations
        </h2>
        
        {/* Left Arrow */}
        <button 
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600 transition hidden md:flex"
          aria-label="Scroll left"
        >
          &#10094;
        </button>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:text-teal-600 transition hidden md:flex"
          aria-label="Scroll right"
        >
          &#10095;
        </button>

        {/* 
          Outer Scroll Container.
          We use ref here so the manual arrows still work. 
        */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* 
            Inner Animation Track. 
            We duplicate the array so it can loop seamlessly!
          */}
          <div className={`flex gap-4 w-max ${isHovered ? 'paused' : ''} animate-smooth-scroll`}>
            
            {/* First Set of Cards */}
            {trendingDestinations.map((dest, index) => (
              <DestinationCard key={`set1-${index}`} dest={dest} />
            ))}

            {/* Second Set of Cards (Identical, for the seamless loop) */}
            {trendingDestinations.map((dest, index) => (
              <DestinationCard key={`set2-${index}`} dest={dest} />
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted the card into a small component to keep the map clean
function DestinationCard({ dest }) {
  return (
    <Link 
      to={`/holidays?dest=${dest.name}`} 
      className="w-[160px] md:w-[220px] flex-shrink-0 flex flex-col group cursor-pointer"
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
          <p className="text-xs text-gray-500">Best Price</p>
        </div>
      </div>
    </Link>
  );
}