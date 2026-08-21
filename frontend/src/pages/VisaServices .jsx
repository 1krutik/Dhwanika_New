import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VisaInquiryForm from "../components/InquiryForm";

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
            Popular Holiday & Visa Destinations
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
              className="relative h-[460px] overflow-hidden rounded-[34px] bg-black shadow-xl transition-all duration-500 group cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
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
                <div className="mx-auto mb-5 flex h-6 w-6 items-center justify-center overflow-hidden rounded-full bg-white shadow-lg">
                  <img
                    src={`https://flagcdn.com/w80/${countryCodeMap[item.slug]}.png`}
                    alt={`${item.country} flag`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <h2 className="mb-3 text-center font-serif text-xl font-bold uppercase tracking-wide">
                  {item.country}
                </h2>

                <div className="border-t border-white/20 pt-5">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Type
                      </p>
                      <p className="mt-1 text-sm font-extrabold uppercase">
                        {item.type}
                      </p>
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-widest text-white/50">
                        Valid
                      </p>
                      <p className="mt-1 text-sm font-extrabold uppercase">
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
     
      <VisaInquiryForm/>
    </div>
  );
}
