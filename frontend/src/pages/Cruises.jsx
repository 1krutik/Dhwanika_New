import { useState } from "react";

export default function Cruises() {
  const [selectedCruise, setSelectedCruise] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    travelMonth: "",
    travellers: "",
    cabin: "",
  });

  const cruises = [
    {
      id: 1,
      name: "Mediterranean Escape",
      destination: "Italy • Greece • Spain",
      duration: "7 Nights / 8 Days",
      price: "₹89,999",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      badge: "BEST SELLER",
    },
    {
      id: 2,
      name: "Dubai & Oman Cruise",
      destination: "Dubai • Muscat • Abu Dhabi",
      duration: "5 Nights / 6 Days",
      price: "₹59,999",
      image:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13",
      badge: "POPULAR",
    },
    {
      id: 3,
      name: "Caribbean Paradise",
      destination: "Bahamas • Jamaica • Mexico",
      duration: "8 Nights / 9 Days",
      price: "₹1,29,999",
      image:
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      badge: "LUXURY",
    },
    {
      id: 4,
      name: "Alaska Glacier Cruise",
      destination: "Alaska • Canada",
      duration: "7 Nights / 8 Days",
      price: "₹1,49,999",
      image:
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1",
      badge: "ADVENTURE",
    },
    {
      id: 5,
      name: "Singapore & Malaysia Cruise",
      destination: "Singapore • Kuala Lumpur • Penang",
      duration: "4 Nights / 5 Days",
      price: "₹69,999",
      image:
        "https://images.unsplash.com/photo-1544550285-f813152fb2fd",
      badge: "HOT DEAL",
    },
    {
      id: 6,
      name: "Norwegian Fjords",
      destination: "Norway • Denmark • Sweden",
      duration: "10 Nights / 11 Days",
      price: "₹1,79,999",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7",
      badge: "PREMIUM",
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
            service: `Cruise Booking - ${selectedCruise.name}`,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("🚢 Cruise Inquiry Submitted Successfully!");

        setFormData({
          name: "",
          phone: "",
          email: "",
          travelMonth: "",
          travellers: "",
          cabin: "",
        });

        setSelectedCruise(null);
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
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5"
          className="w-full h-full object-cover"
          alt="Cruise Holidays"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
          <div>
            <p className="tracking-[5px] uppercase text-sm mb-4">
              Dhwanika Overseas
            </p>

            <h1 className="text-5xl md:text-7xl font-bold">
              Sail Into <span className="text-cyan-400">Adventure</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl">
              Luxury, adventure and unforgettable journeys at sea.
            </p>
          </div>
        </div>
      </section>

      {/* TITLE */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <p className="text-cyan-600 font-semibold uppercase tracking-widest">
            Explore The Ocean
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Cruise Holidays
          </h2>

          <p className="text-gray-500 mt-4">
            Wake up somewhere new every morning.
          </p>
        </div>

        {/* CRUISES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cruises.map((cruise) => (
            <div
              key={cruise.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cruise.image}
                  alt={cruise.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute top-4 left-4 bg-cyan-600 text-white text-xs font-bold px-3 py-2 rounded-full">
                  {cruise.badge}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-cyan-600 font-semibold">
                  {cruise.destination}
                </p>

                <h3 className="text-2xl font-bold text-gray-800 mt-2">
                  {cruise.name}
                </h3>

                <p className="text-gray-500 mt-3">
                  🛳️ {cruise.duration}
                </p>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-xs text-gray-400">At Best Price✨</p>
                    <p className="text-2xl font-bold text-gray-800">
                      
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedCruise(cruise)}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-3 rounded-xl font-semibold transition"
                  >
                    Enquire Now 🛳️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CRUISE MODAL */}
      {selectedCruise && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 mt-16">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedCruise(null)}
              className="absolute right-5 top-4 text-2xl text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-3xl font-bold text-gray-800">
              🚢 Cruise Inquiry
            </h2>

            <p className="text-gray-500 mt-2 mb-6">
              {selectedCruise.name}
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

              <select
                name="travelMonth"
                value={formData.travelMonth}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Preferred Travel Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

              <select
                name="travellers"
                value={formData.travellers}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Number of Travellers</option>
                <option>1-2 Travellers</option>
                <option>3-5 Travellers</option>
                <option>6-10 Travellers</option>
                <option>10+ Travellers</option>
              </select>

              <select
                name="cabin"
                value={formData.cabin}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
              >
                <option value="">Preferred Cabin</option>
                <option>Interior Cabin</option>
                <option>Ocean View Cabin</option>
                <option>Balcony Cabin</option>
                <option>Suite</option>
              </select>

              <button
                disabled={loading}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-bold"
              >
                {loading ? "Submitting..." : "Submit Cruise Inquiry 🚢"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}