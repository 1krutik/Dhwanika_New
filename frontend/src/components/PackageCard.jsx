import { Link } from "react-router-dom";

export default function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Image Container with Duration Badge */}
      <div className="relative">
        <img src={pkg.image} alt={pkg.title} className="h-60 w-full object-cover" loading="lazy" />
        <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
          {pkg.duration}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-orange-500 font-bold mb-1 uppercase tracking-wider">{pkg.destination}</p>
        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{pkg.title}</h2>
        
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-orange-600 font-extrabold text-2xl">₹{pkg.price.toLocaleString("en-IN")}</p>
          </div>
          
          {/* Notice we use a Link to go to the Details page */}
          <Link 
            to={`/holidays/${pkg._id}`}
            className="bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-600 font-semibold transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}