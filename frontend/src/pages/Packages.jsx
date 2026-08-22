import { useEffect, useState } from "react";
import PackageCard from "../components/PackageCard";// import { singleDummyPackage } from "../data"; // Use this if API is down

export default function Packages() {
  const [packages, setPackages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    // For now, let's pretend this fetches an array containing our rich dummy data
    fetch("https://dhwanikaoverseas.onrender.com/api/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((err) => console.log("Fetch error, use dummy data here"));
  }, []);

  // 1. Filter by Search
  const filteredPackages = packages.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    pkg.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 2. Sort the filtered results
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Explore Our Holiday Packages</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Find the perfect getaway for your next adventure with Dhwanika Overseas.</p>
      </div>

      {/* Search & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-xl shadow-md mb-10 gap-4">
        <input
          type="text"
          placeholder="Search destinations or packages..."
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select 
          className="w-full md:w-auto p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Sort By: Recommended</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Package Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {sortedPackages.length > 0 ? (
          sortedPackages.map((pkg) => <PackageCard key={pkg._id} pkg={pkg} />)
        ) : (
          <p className="text-center col-span-3 text-gray-500">No packages found matching your search.</p>
        )}
      </div>
    </div>
  );
}