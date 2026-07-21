import { useState } from "react";

export default function Flights() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    from: "",
    to: "",
    travelDate: "",
    passengers: "",
  });

  const flights = [
    {
      id: 1,
      airline: "Emirates",
      route: "Ahmedabad → Dubai",
      from: "Ahmedabad",
      to: "Dubai",
      date: "Daily Flights",
      time: "03h 15m",
      price: "₹18,999",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
      badge: "BEST VALUE",
    },
    {
      id: 2,
      airline: "Singapore Airlines",
      route: "Mumbai → Singapore",
      from: "Mumbai",
      to: "Singapore",
      date: "Daily Flights",
      time: "05h 40m",
      price: "₹24,999",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df",
      badge: "POPULAR",
    },
    {
      id: 3,
      airline: "Qatar Airways",
      route: "Delhi → London",
      from: "Delhi",
      to: "London",
      date: "Daily Flights",
      time: "09h 30m",
      price: "₹42,999",
      image:
        "https://images.unsplash.com/photo-1473445361085-b9a07f55608b",
      badge: "PREMIUM",
    },
    {
      id: 4,
      airline: "Thai Airways",
      route: "Mumbai → Bangkok",
      from: "Mumbai",
      to: "Bangkok",
      date: "Daily Flights",
      time: "04h 25m",
      price: "₹16,999",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      badge: "HOT DEAL",
    },
    {
      id: 5,
      airline: "Malaysia Airlines",
      route: "Delhi → Kuala Lumpur",
      from: "Delhi",
      to: "Kuala Lumpur",
      date: "Daily Flights",
      time: "05h 10m",
      price: "₹21,999",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      badge: "LIMITED OFFER",
    },
    {
      id: 6,
      airline: "Etihad Airways",
      route: "Ahmedabad → Paris",
      from: "Ahmedabad",
      to: "Paris",
      date: "Daily Flights",
      time: "10h 20m",
      price: "₹49,999",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      badge: "LUXURY",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://dhwanikaoverseas.onrender.com/api/inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.name,
            lastName: "",
            email: formData.email,
            phone: formData.phone,
            service: `Flight Booking - ${selectedFlight.airline} (${selectedFlight.route})`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("✈️ Flight Inquiry Submitted Successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          from: "",
          to: "",
          travelDate: "",
          passengers: "",
        });

        setSelectedFlight(null);
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server Error");
    }

    setLoading(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* HERO */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          className="w-full h-full object-cover"
          alt="Flight Booking"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="tracking-[5px] uppercase text-sm mb-4">
              Dhwanika Overseas
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Fly Beyond <span className="text-blue-400">Boundaries</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl">
              Your journey starts with the right flight.
            </p>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-widest">
            Book Your Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Popular Flight Routes
          </h2>

          <p className="text-gray-500 mt-4">
            Best routes. Better fares. Complete travel assistance.
          </p>
        </div>

        {/* FLIGHTS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {flights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={flight.image}
                  alt={flight.route}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-full">
                  {flight.badge}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-blue-600 font-semibold">
                  {flight.airline}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                  {flight.route}
                </h3>

                <div className="flex justify-between text-sm text-gray-500 mt-5">
                  <span>✈️ {flight.date}</span>
                  <span>⏱ {flight.time}</span>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-xs text-gray-400">Starting From</p>
                    <p className="text-2xl font-bold text-gray-800">
                      {flight.price}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedFlight(flight)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                  >
                    Enquire ✈️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FLIGHT MODAL */}
      {selectedFlight && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 mt-16">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedFlight(null)}
              className="absolute right-5 top-4 text-2xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-gray-800">
              ✈️ Flight Inquiry
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              {selectedFlight.airline} • {selectedFlight.route}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                required
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from"
                  placeholder="From"
                  value={formData.from}
                  onChange={handleChange}
                  className="border p-3 rounded-xl"
                />

                <input
                  type="text"
                  name="to"
                  placeholder="To"
                  value={formData.to}
                  onChange={handleChange}
                  className="border p-3 rounded-xl"
                />
              </div>

              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              />

              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Number of Passengers</option>
                <option>1 Passenger</option>
                <option>2 Passengers</option>
                <option>3-5 Passengers</option>
                <option>6+ Passengers</option>
              </select>

              <button
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold"
              >
                {loading ? "Submitting..." : "Submit Flight Inquiry ✈️"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}