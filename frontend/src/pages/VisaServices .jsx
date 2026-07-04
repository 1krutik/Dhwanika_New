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
      alert("Please accept terms and conditions.");
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
  const flagMap = {
    vietnam: "🇻🇳",
    thailand: "🇹🇭",
    "sri-lanka": "🇱🇰",
    malaysia: "🇲🇾",
    indonesia: "🇮🇩",
    singapore: "🇸🇬",
    "dubai-uae": "🇦🇪",
    turkey: "🇹🇷",
    egypt: "🇪🇬",
    kenya: "🇰🇪",
    australia: "🇦🇺",
    "new-zealand": "🇳🇿",
    japan: "🇯🇵",
    "south-korea": "🇰🇷",
    germany: "🇩🇪",
    france: "🇫🇷",
    italy: "🇮🇹",
    switzerland: "🇨🇭",
    canada: "🇨🇦",
    usa: "🇺🇸",
  };
  const countryCodeMap = {
    vietnam: "vn",
    thailand: "th",
    "sri-lanka": "lk",
    malaysia: "my",
    indonesia: "id",
    singapore: "sg",
    "dubai-uae": "ae",
    turkey: "tr",
    egypt: "eg",
    kenya: "ke",
    australia: "au",
    "new-zealand": "nz",
    japan: "jp",
    "south-korea": "kr",
    germany: "de",
    france: "fr",
    italy: "it",
    switzerland: "ch",
    canada: "ca",
    usa: "us",
  };

  return (
    <div className="bg-gray-100 py-4 px-4">
      {/* Popular Visa */}
      <div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-blue-600">
            Popular Visa Destinations
          </h2>
          <p className="text-center mb-4 text-gray-600">
            We make your travel dream easy with hassle-free visas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {visaData.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/visa/${item.slug}`)}
              className="relative h-[500px] overflow-hidden rounded-[34px] bg-black shadow-xl transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <img
                src={`${item.image}?auto=format&fit=crop&w=900&q=85`}
                alt={item.country}
                className="absolute inset-0 h-full w-55 object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent transition-all duration-500 group-hover:from-black/75 group-hover:via-black/45" />

              {/* CONTENT */}
              <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-all duration-500 group-hover:-translate-y-3">
                <div className="mx-auto mb-5 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
                  <img
                    src={`https://flagcdn.com/w80/${countryCodeMap[item.slug]}.png`}
                    alt={`${item.country} flag`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h2 className="mb-6 text-center font-serif text-xl font-bold uppercase tracking-wide">
                  {item.country}
                </h2>

                <div className="border-t border-white/20 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Type
                      </p>
                      <p className="mt-2 text-sm font-extrabold uppercase">
                        {item.type}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Valid
                      </p>
                      <p className="mt-2 text-sm font-extrabold uppercase">
                        {item.valid}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Fees
                      </p>
                      <p className="mt-2 text-sm font-extrabold uppercase">
                        {item.fees || "On Request"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* HOVER DOCUMENTS */}
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-60 group-hover:opacity-100">
                  <div className="border-t border-white/20 pt-3">
                    <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                      Documents Needed:
                    </p>

                    <p className="mt-4 line-clamp-2 text-sm font-bold leading-relaxed">
                      {item.docs}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/visa/${item.slug}`);
                      }}
                      className="mt-6 w-full rounded-full bg-white/15 px-4 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white hover:text-black"
                    >
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
      <div className="max-w-7xl mx-auto mt-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-white p-6 md:p-8 shadow-[0_12px_40px_rgba(37,99,235,0.14)]">
        <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8">
          {/* LEFT FORM */}
          <div>
            <div className="mb-7">
              <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-blue-700">
                Get Started
              </span>

              <h2 className="mt-4 text-3xl font-black text-slate-950">
                Visa Inquiry Form
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-500">
                Fill in your details and our visa experts will get in touch with
                you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700">
                  Services
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-600 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option>Visa Services</option>
                  <option>Tour Packages</option>
                  <option>Flight Booking</option>
                  <option>Hotel Booking</option>
                </select>
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />

                <p className="text-sm font-medium leading-6 text-slate-600">
                  By submitting this form, I agree to the{" "}
                  <Link to="/privacy" className="font-bold text-blue-700">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms" className="font-bold text-blue-700">
                    Terms of Use.
                  </Link>
                </p>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-8 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_10px_25px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-[0_14px_35px_rgba(37,99,235,0.45)]"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* RIGHT INFO PANEL */}
          <div className="lg:border-l lg:border-blue-100 lg:pl-8">
            <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                    🛡
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">
                      100% Secure Process
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Your data is safe and protected with us.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                    ⏱
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">
                      Fast & Easy Processing
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Quick visa assistance for your dream trip.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                    👥
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">
                      Expert Consultation
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Get guidance from our visa experts.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                    🏅
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">
                      High Success Rate
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      We ensure the best visa success ratio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-dashed border-blue-200 pt-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-md">
                  ☎
                </div>

                <div>
                  <p className="text-sm font-bold text-blue-700">
                    Need Immediate Help?
                  </p>
                  <a
                    href="tel:+917698551313"
                    className="mt-1 block text-xl font-bold text-blue-700"
                  >
                    +91 76985 51313
                  </a>
                  <p className="mt-1 text-sm text-slate-500">
                    Mon - Sat (10AM - 7PM)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
