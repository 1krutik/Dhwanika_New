// pages/TravelCards.jsx or a section in Home.jsx
import React from "react";
import DestinationCard from "../components/DestinationCard";
import destinations from "../components/Destinations/data";

const TravelCards = () => {
  return (
    <div className="px-4 md:px-10 py-3 bg-gray-50 min-h-screen">
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-5 text-blue-600">Popular Holiday Destinations</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default TravelCards;
