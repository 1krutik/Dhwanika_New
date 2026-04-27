import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function VisaServices() {
  const navigate = useNavigate();

  const visaData = [
  {
    country: "Vietnam",
    slug: "vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    type: "E-VISA",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
  },
  {
    country: "Thailand",
    slug: "thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    type: "E-VISA",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Accommodation Proof",
  },
  {
    country: "Sri Lanka",
    slug: "sri-lanka",
    image: "https://images.unsplash.com/photo-1574611122955-5baa61496637",
    type: "E-VISA",
    valid: "180 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Travel Details",
  },
  {
    country: "Malaysia",
    slug: "malaysia",
    image: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904",
    type: "E-VISA",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
  },
  {
    country: "Indonesia",
    slug: "indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    type: "E-VISA",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
  },
  {
    country: "Singapore",
    slug: "singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    type: "E-VISA",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
  },
  {
    country: "Dubai (UAE)",
    slug: "dubai-uae",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    type: "Tourist Visa",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Confirmed Ticket, Hotel Booking",
  },
  {
    country: "Turkey",
    slug: "turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    type: "E-VISA",
    valid: "60 Days",
    fees: "",
    docs: "Passport, Valid Visa/Residence Permit, Return Ticket",
  },
  {
    country: "Egypt",
    slug: "egypt",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop",
    type: "E-VISA",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Travel Itinerary, Hotel Booking",
  },
  {
    country: "Kenya",
    slug: "kenya",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    type: "E-VISA",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Return Ticket, Yellow Fever Certificate",
  },
  {
    country: "Australia",
    slug: "australia",
    image:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop",
    type: "Visitor Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Bank Statement, Employment Proof, Travel Plan",
  },
  {
    country: "New Zealand",
    slug: "new-zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
    type: "Visitor Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Bank Statement, Return Ticket",
  },
  {
    country: "Japan",
    slug: "japan",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop",
    type: "Tourist Visa",
    valid: "30 Days",
    fees: "",
    docs: "Passport, Passport Photo, Bank Statement, Flight Booking, Itinerary",
  },
  {
    country: "South Korea",
    slug: "south-korea",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    type: "Tourist Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Bank Statement, Employment Proof",
  },
  {
    country: "Germany",
    slug: "germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Travel Insurance, Bank Statement, Hotel Booking",
  },
  {
    country: "France",
    slug: "france",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Travel Insurance, Bank Statement",
  },
  {
    country: "Italy",
    slug: "italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Travel Insurance, Hotel Booking",
  },
  {
    country: "Switzerland",
    slug: "switzerland",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Passport Photo, Travel Insurance, Bank Statement",
  },
  {
    country: "Canada",
    slug: "canada",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    type: "Visitor Visa",
    valid: "180 Days",
    fees: "",
    docs: "Passport, Passport Photo, Bank Statement, Employment Proof",
  },
  {
    country: "USA",
    slug: "usa",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop",
    type: "Tourist Visa",
    valid: "180 Days",
    fees: "",
    docs: "Passport, DS-160 Form, Passport Photo, Bank Statement, Visa Interview",
  },
];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "Visa Services",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept terms");
      return;
    }

    try {
      await fetch("https://dhwanikaoverseas.onrender.com/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      alert("🎉 Thank You for Contacting Us!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "Visa Services",
        agree: false,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-gray-100 py-4 px-4">

      {/* Popular Visa */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-600">
          Popular Visa Destinations
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visaData.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/visa/${item.slug}`)}
              className="relative rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.country}
                
                className="h-[400px] w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 group-hover:bg-black/60 transition"></div>

              {/* CONTENT */}
              <div className="absolute bottom-0 p-4 text-white w-full">
                <h2 className="text-lg font-bold mb-2">{item.country}</h2>

                <div className="flex justify-between text-xs opacity-90">
                  <span>{item.type}</span>
                  <span>{item.valid}</span>
                  <span>{item.fees}</span>
                </div>

                {/* HOVER DOCUMENTS */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2">
                  <div className="text-xs mt-3 border-t border-white/30 pt-2">
                    <p className="opacity-80">Documents Needed:</p>
                    <p className="font-semibold">{item.docs}</p>

                    <button className="mt-3 bg-white text-black w-full py-2 rounded-lg font-semibold">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="max-w-6xl mx-auto bg-white mt-8 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Visa Inquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="w-full mt-2 border rounded-lg p-3"
              />
            </div>
          </div>

          <div>
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-semibold">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="font-semibold">Services</label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full mt-2 border rounded-lg p-3"
            >
              <option>Visa Services</option>
              <option>Tour Packages</option>
              <option>Flight Booking</option>
              <option>Hotel Booking</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />

            <p className="text-sm">
              I agree to{" "}
              <Link to="/terms" className="text-orange-600">
                Terms
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-orange-600">
                Privacy Policy
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
          >
            SUBMIT FORM
          </button>
        </form>
      </div>
    </div>
  );
}