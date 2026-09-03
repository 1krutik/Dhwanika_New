import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { packagesData } from "../components/data/packagesData";
import TrendingDestinations from "../components/TrendingDestinations";

export default function TravelCards() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("dest") || "";

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    setSearchTerm(searchParams.get("dest") || "");
  }, [searchParams]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSearchParams({ dest: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredPackages = packagesData.filter(
    (pkg) =>
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="bg-gray-50/50 min-h-screen pb-16 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* 1. TITLE (Always at the top) */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">
            Popular Holiday Destinations 
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the perfect getaway for your next adventure with Dhwanika
            Overseas.
          </p>
        </div>

        {/* 2. SEARCH & FILTER BAR (Always visible right under the title) */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100  gap-4">
          <input
            type="text"
            placeholder="Search destinations (e.g., Bali)..."
            className="w-full md:w-1/2 p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <select
            className="w-full md:w-auto p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="default">Sort By: Recommended</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        {/* 3. TRENDING CAROUSEL (Hides when searching) */}
        {!searchTerm && (
          <div className="mb-8">
            <TrendingDestinations />
          </div>
        )}

        {/* 4. PACKAGE GRID (Shows the filtered results) */}
        {sortedPackages.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sortedPackages.map((pkg) => (
              <div
                key={pkg._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-teal-900/80 backdrop-blur-sm text-white text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                    {pkg.duration}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-teal-600 font-bold mb-1 uppercase tracking-wider">
                    {pkg.destination}
                  </p>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {pkg.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                    {pkg.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Starting from</p>
                      <p className="text-teal-600 font-extrabold text-lg">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </p>
                    </div>

                    <Link
                      to={`/holidays/${pkg._id}`}
                      className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-semibold transition text-sm shadow-md shadow-teal-500/20"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* 5. EMPTY STATE (If search has no results) */
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              No packages found
            </h2>
            <p className="text-gray-500">
              We couldn't find any packages matching "{searchTerm}". Try another
              destination!
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSearchParams({});
              }}
              className="mt-6 text-teal-600 font-bold hover:underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
