import { useParams } from "react-router-dom";
import { useState } from "react";

export default function VisaDetails() {
  const { slug } = useParams();

  const visaData = [
    {
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      type: "E-VISA",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
    },
    {
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      type: "E-VISA",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Accommodation Proof",
    },
    {
      country: "Sri Lanka",
      image: "https://images.unsplash.com/photo-1574611122955-5baa61496637",
      type: "E-VISA",
      valid: "180 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Travel Details",
    },
    {
      country: "Malaysia",
      image: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904",
      type: "E-VISA",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
    },
    {
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      type: "E-VISA",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
    },
    {
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      type: "E-VISA",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Hotel Booking",
    },
    {
      country: "Dubai (UAE)",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      type: "Tourist Visa",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Confirmed Ticket, Hotel Booking",
    },
    {
      country: "Turkey",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      type: "E-VISA",
      valid: "60 Days",
      fees: "",
      docs: "Passport, Valid Visa/Residence Permit, Return Ticket",
    },
    {
      country: "Egypt",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop",
      type: "E-VISA",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Travel Itinerary, Hotel Booking",
    },
    {
      country: "Kenya",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      type: "E-VISA",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Return Ticket, Yellow Fever Certificate",
    },
    {
      country: "Australia",
      image:
        "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop",
      type: "Visitor Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Bank Statement, Employment Proof, Travel Plan",
    },
    {
      country: "New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
      type: "Visitor Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Bank Statement, Return Ticket",
    },
    {
      country: "Japan",
      image:
        "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop",
      type: "Tourist Visa",
      valid: "30 Days",
      fees: "",
      docs: "Passport, Passport Photo, Bank Statement, Flight Booking, Itinerary",
    },
    {
      country: "South Korea",
      image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
      type: "Tourist Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Bank Statement, Employment Proof",
    },
    {
      country: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      type: "Schengen Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Travel Insurance, Bank Statement, Hotel Booking",
    },
    {
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      type: "Schengen Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Travel Insurance, Bank Statement",
    },
    {
      country: "Italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      type: "Schengen Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Travel Insurance, Hotel Booking",
    },
    {
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      type: "Schengen Visa",
      valid: "90 Days",
      fees: "",
      docs: "Passport, Passport Photo, Travel Insurance, Bank Statement",
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      type: "Visitor Visa",
      valid: "180 Days",
      fees: "",
      docs: "Passport, Passport Photo, Bank Statement, Employment Proof",
    },
    {
      country: "USA",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop",
      type: "Tourist Visa",
      valid: "180 Days",
      fees: "",
      docs: "Passport, DS-160 Form, Passport Photo, Bank Statement, Visa Interview",
    },
  ];

  const formatSlug = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[()]/g, "")
      .replace(/[^a-z0-9-]/g, "");

  const visa = visaData.find((item) => formatSlug(item.country) === slug);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("Please fill Name and Phone Number");
      return;
    }

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
            service: `${visa.country} Visa`,
          }),
        },
      );

      // ✅ don't force json parsing
      if (response.ok) {
        alert("🎉 Inquiry Submitted Successfully");

        setFormData({
          name: "",
          phone: "",
          email: "",
        });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }

    setLoading(false);
  };
  const [loading, setLoading] = useState(false);
  if (!visa) {
    return (
      <div className="py-32 text-center text-4xl font-bold">Visa Not Found</div>
    );
  }

  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="relative h-[520px]">
        <img
          src={visa.image}
          alt={visa.country}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="absolute bottom-10 left-6 md:left-16 text-white">
          <p className="text-white-400 tracking-[4px] uppercase text-sm">
            Dhwanika Overseas
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            {visa.country} Visa
          </h1>

          <p className="mt-4 text-lg opacity-90 max-w-2xl">
            Trusted visa assistance with complete documentation support.
          </p>
        </div>
      </div>
      {/* BODY */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-6 rounded-2xl">
              <p className="text-sm text-gray-500">Visa Type</p>
              <h3 className="text-2xl font-bold mt-2">{visa.type}</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <p className="text-sm text-gray-500">Validity</p>
              <h3 className="text-2xl font-bold mt-2">{visa.valid}</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <p className="text-sm text-gray-500">Fees</p>
              <h3 className="text-2xl font-bold mt-2">
                {visa.fees || "Contact Us"}
              </h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl">
              <p className="text-sm text-gray-500">Processing</p>
              <h3 className="text-2xl font-bold mt-2">4 - 7 Working Days</h3>
            </div>
          </div>

          {/* DOCUMENTS */}
          <div className="mt-10 bg-blue-50 p-8 rounded-3xl">
            <h2 className="text-3xl font-bold mb-6">Required Documents</h2>

            <div className="space-y-3">
              {visa.docs.split(",").map((doc, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow">
                  ✔ {doc.trim()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sticky top-28 bg-white shadow-2xl rounded-3xl p-8 border">
          <h2 className="text-3xl font-bold mb-2 text-slate-800">Apply Now</h2>

          <p className="mb-6 text-sm text-gray-500">
            Fill the form for {visa.country} Visa assistance.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              required
              placeholder="Full Name *"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border p-3 rounded-xl mb-4"
            />

            <input
              type="tel"
              required
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full border p-3 rounded-xl mb-4"
            />
            
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border p-3 rounded-xl mb-4"
            />

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center"
            >
              {loading ? "Submitting..." : "Submit Inquiry"}{" "}
            </button>
          </form>
        </div>
      </div>
<div className="container mx-auto px-4 py-5 flex justify-center">
  <img
    src="/images/Process.jpg"
    alt="Visa Process"
    className="w-full max-w-4xl h-auto rounded-3xl shadow-xl object-contain"
  />
</div>
      
    </div>
  );
}
