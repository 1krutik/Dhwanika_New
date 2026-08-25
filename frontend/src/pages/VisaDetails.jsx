import { useParams } from "react-router-dom";
import { useState } from "react";
import VisaInfoCard from "../components/VisaInfoCard"; // Ensure this matches your path
import GoogleReviews from "../components/GoogleReviews"; // Ensure this matches your path

export default function VisaDetails() {
  const { slug } = useParams();

  // 1. ACTUAL REAL-WORLD VISA DATA
  const visaData = [
    {
      country: "Vietnam",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592",
      type: "E-Visa",
      valid: "30 Days",
      fees: "",
      processing: "4 - 5 Working Days",
      docs: "Passport Front & Back, 4x6cm White Background Photo, Return Flight Tickets.",
      pdfUrl: "/visa-checklists/vietnam.pdf", 
    },
    {
      country: "Thailand",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      type: "E-Visa / Sticker",
      valid: "30 - 60 Days",
      fees: "",
      processing: "3 - 4 Working Days",
      docs: "Original Passport, 35x45mm White Background Photo, 6 Months Bank Statement, Confirmed Flights & Hotel.",
      pdfUrl: "/visa-checklists/thailand.pdf",
    },
    {
      country: "Sri Lanka",
      image: "https://images.unsplash.com/photo-1574611122955-5baa61496637",
      type: "E-Visa (ETA)",
      valid: "30 Days",
      fees: "",
      processing: "1 - 2 Working Days",
      docs: "Passport Copy, Passport Size Photo, Return Flight Tickets.",
    },
    {
      country: "Malaysia",
      image: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904",
      type: "E-Visa",
      valid: "30 Days",
      fees: "",
      processing: "3 - 5 Working Days",
      docs: "Passport Copy, 35x50mm Matte Photo, Confirmed Return Flight, Hotel Booking.",
    },
    {
      country: "Indonesia",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      type: "E-VOA / B211A",
      valid: "30 - 60 Days",
      fees: "",
      processing: "2 - 3 Working Days",
      docs: "Passport Color Copy, Passport Size Photo, Confirmed Return Flight Ticket.",
    },
    {
      country: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
      type: "E-Visa",
      valid: "30 Days",
      fees: "",
      processing: "4 - 5 Working Days",
      docs: "Original Passport, Form 14A, 35x45mm Matte Photo, 6 Months Bank Statement, Flight & Hotel.",
    },
    {
      country: "Dubai (UAE)",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      type: "Tourist Visa",
      valid: "30 / 60 Days",
      fees: "",
      processing: "3 - 4 Working Days",
      docs: "Passport Front & Back Copy, Passport Size Photo, PAN Card Copy.",
    },
    {
      country: "Turkey",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
      type: "Sticker Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "10 - 15 Working Days",
      docs: "Original Passport, 50x50mm White BG Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Travel Insurance.",
    },
    {
      country: "Egypt",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop",
      type: "Tourist Visa",
      valid: "30 Days",
      fees: "",
      processing: "5 - 7 Working Days",
      docs: "Original Passport, 2 White Background Photos, 6 Months Bank Statement, Flight & Hotel Bookings.",
    },
    {
      country: "Kenya",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      type: "ETA",
      valid: "90 Days",
      fees: "",
      processing: "2 - 3 Working Days",
      docs: "Passport Copy, Photo, Flight Ticket, Hotel Booking (Yellow Fever Vaccination recommended).",
    },
    {
      country: "Australia",
      image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop",
      type: "Visitor Visa (Subclass 600)",
      valid: "Up to 1 Year",
      fees: "",
      processing: "15 - 25 Working Days",
      docs: "Notarized Passport Copies, 6 Months Bank Statement, 3 Years ITR, Employment/Business Proof, Travel Plan.",
    },
    {
      country: "New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
      type: "Visitor Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "20 - 30 Working Days",
      docs: "Notarized Passport Copies, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Medical/PCC (if requested).",
    },
    {
      country: "Japan",
      image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop",
      type: "E-Visa / Sticker",
      valid: "30 Days",
      fees: "",
      processing: "5 - 7 Working Days",
      docs: "Original Passport, 2x2 inch White BG Photo, 6 Months Bank Statement, 3 Years ITR, Flight & Hotel.",
    },
    {
      country: "South Korea",
      image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
      type: "Tourist Visa",
      valid: "90 Days",
      fees: "",
      processing: "7 - 10 Working Days",
      docs: "Original Passport, 35x45mm Photo, 6 Months Bank Statement (Attested), 3 Years ITR, Employment Proof, Cover Letter.",
    },
    {
      country: "Germany",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      type: "Schengen Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "15 - 20 Working Days",
      docs: "Original Passport, 35x45mm Matte Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Travel Insurance (€30,000 coverage), Flight & Hotel.",
    },
    {
      country: "France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      type: "Schengen Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "15 - 20 Working Days",
      docs: "Original Passport, 35x45mm Matte Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Travel Insurance (€30,000 coverage), Flight & Hotel.",
    },
    {
      country: "Italy",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
      type: "Schengen Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "15 - 20 Working Days",
      docs: "Original Passport, 35x45mm Matte Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Travel Insurance (€30,000 coverage), Flight & Hotel.",
    },
    {
      country: "Switzerland",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      type: "Schengen Visa",
      valid: "Up to 90 Days",
      fees: "",
      processing: "15 - 20 Working Days",
      docs: "Original Passport, 35x45mm Matte Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof, Travel Insurance (€30,000 coverage), Flight & Hotel.",
    },
    {
      country: "Canada",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      type: "Visitor Visa",
      valid: "Up to 10 Years (Passport Validity)",
      fees: "",
      processing: "30 - 45 Working Days",
      docs: "Original Passport, 35x45mm White BG Photo, 6 Months Bank Statement, 3 Years ITR, Employment/Business Proof, Property Papers (Optional).",
    },
    {
      country: "USA",
      image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop",
      type: "B1/B2 Tourist Visa",
      valid: "10 Years",
      fees: "",
      processing: "Appointment Based",
      docs: "Original Passport, DS-160 Form, 2x2 inch Photo, 6 Months Bank Statement, 3 Years ITR, Employment Proof (Carried to Interview).",
    },
  ];

  // 2. RESTORED FAQ FUNCTION
  const getVisaFaqs = (visa) => [
    {
      question: `Do I need a visa for ${visa.country}?`,
      answer: `Visa requirements for ${visa.country} depend on your nationality, passport type, travel purpose, and stay duration. Our team can help you check the correct requirement before you apply.`,
    },
    {
      question: `What type of visa can I apply for ${visa.country}?`,
      answer: `For ${visa.country}, we currently assist with ${visa.type}. Eligibility may vary depending on your travel profile and immigration rules.`,
    },
    {
      question: `How long is the ${visa.country} visa valid?`,
      answer: `The listed validity for ${visa.country} is ${visa.valid}. Final validity and stay permission are decided by the respective immigration authority.`,
    },
    {
      question: `What documents are required for ${visa.country} visa?`,
      answer: `Commonly required documents include: ${visa.docs}. Additional documents may be needed based on your profile, visa type, and embassy or immigration requirements.`,
    },
    {
      question: `What is the visa fee for ${visa.country}?`,
      answer: visa.fees
        ? `The listed visa fee for ${visa.country} is ${visa.fees}. Fees may change depending on embassy, immigration, service charges, and processing options.`
        : `Visa fees for ${visa.country} may vary depending on visa type, embassy or immigration charges, service charges, and processing options. Please contact our team for the latest fee details.`,
    },
    {
      question: `How long does ${visa.country} visa processing take?`,
      answer: `Processing time for ${visa.country} visa can vary based on visa type, application volume, document accuracy, and immigration or embassy decisions. We will guide you with the expected timeline before submission.`,
    },
    {
      question: `Can I apply for ${visa.country} visa online?`,
      answer: `Online application availability for ${visa.country} depends on the visa type, nationality, and current immigration rules. Our team will confirm the correct process before starting your application.`,
    },
    {
      question: `Can Dhwanika Overseas guarantee my ${visa.country} visa approval?`,
      answer: `No travel agency can guarantee visa approval. Final approval is always decided by the embassy, consulate, or immigration authority. We help you prepare and submit your application correctly to improve clarity and reduce avoidable mistakes.`,
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
  
  const [phoneError, setPhoneError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Phone Validation
    let cleanNumber = formData.phone.replace(/\D/g, '');
    if (cleanNumber.length > 10) {
      cleanNumber = cleanNumber.slice(-10);
    }
    const isValidPhone = /^[6-9]\d{9}$/.test(cleanNumber);

    if (!isValidPhone) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return; 
    }
    setPhoneError("");

    if (!formData.name) {
      alert("Please fill your Name");
      return;
    }

    setLoading(true);

    // TRIGGER PDF DOWNLOAD INSTANTLY
    if (visa.pdfUrl) {
      const link = document.createElement("a");
      link.href = visa.pdfUrl || "#"; 
      link.setAttribute("download", visa.pdfUrl.split('/').pop()); 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    // BACKGROUND SAVE
    fetch("https://dhwanikaoverseas.onrender.com/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: formData.name,
        lastName: "", 
        email: formData.email,
        phone: cleanNumber,
        service: `${visa.country} Visa Checklist Download`, 
        agree: true
      }),
    }).catch((error) => console.log(error));

    // INSTANT SUCCESS FEEDBACK
    setTimeout(() => {
      alert(visa.pdfUrl ? "🎉 Checklist Downloading! Our team will contact you soon." : "🎉 Inquiry Submitted Successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
      });
      setLoading(false);
    }, 500);
  };

  if (!visa) {
    return (
      <div className="py-32 text-center text-4xl font-bold">Visa Not Found</div>
    );
  }

  const faqs = getVisaFaqs(visa);
  
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
              {/* NOW USING DYNAMIC PROCESSING DATA */}
              <h3 className="text-2xl font-bold mt-2">{visa.processing}</h3>
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

        {/* RIGHT (Sticky Form) */}
        <div className="sticky top-28 bg-white shadow-2xl rounded-3xl p-8 border h-fit">
          <h2 className="text-3xl font-bold mb-2 text-slate-800">Get Checklist</h2>

          <p className="mb-6 text-sm text-gray-500">
            Fill the form to download the {visa.country} Visa document checklist & get assistance.
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
              className="w-full border border-gray-300 p-3 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="tel"
              required
              placeholder="WhatsApp Number *"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setPhoneError(""); 
              }}
              className={`w-full border p-3 rounded-xl focus:outline-none focus:ring-2 ${
                phoneError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {phoneError && <p className="text-red-500 text-xs font-semibold mt-1 mb-4">{phoneError}</p>}
            {!phoneError && <div className="mb-4"></div>}

            <input
              type="email"
              placeholder="Email (Optional)"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-gray-300 p-3 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full justify-center font-bold py-3 rounded-xl transition ${
                loading 
                  ? "bg-slate-400 cursor-not-allowed text-white" 
                  : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
              }`}
            >
              {loading ? "Processing..." : "📄 Download PDF Checklist"}
            </button>
          </form>
        </div>
      </div>
      
      {/* Services Card */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-10">
        <div className="rounded-2xl bg-[#f3f3f3] px-4 py-8 md:rounded-[28px] md:px-10 md:py-12">
          <h2 className="mx-auto mb-8 max-w-3xl text-center font-serif text-3xl font-semibold leading-tight text-black sm:text-3xl md:text-3xl">
            Visa application made simple and reliable
          </h2>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <div className="grid grid-cols-[1.4fr_0.8fr_0.6fr] sm:grid-cols-[1.7fr_0.8fr_0.7fr]">
              <div className="min-h-16 sm:min-h-20"></div>

              <div className="flex min-h-16 items-center justify-center border-x border-gray-200 bg-white px-2 text-center sm:min-h-20">
                <span className="text-sm font-bold leading-tight text-black sm:text-base md:text-lg">
                  Dhwanika Overseas
                </span>
              </div>

              <div className="flex min-h-16 items-center justify-center px-2 text-sm font-semibold text-gray-500 sm:min-h-20 sm:text-base">
                Others
              </div>
            </div>

            {[
              "Real-time tracking of your visa",
              "Precise ETA, no guesswork",
              "Transparent pricing, no hidden fees",
              "100% digital process",
            ].map((text, index) => (
              <div
                key={index}
                className="grid grid-cols-[1.4fr_0.8fr_0.6fr] border-t border-gray-100 even:bg-gray-50 sm:grid-cols-[1.7fr_0.8fr_0.7fr]"
              >
                <div className="flex min-h-[66px] items-center px-4 text-sm font-medium leading-snug text-slate-950 sm:min-h-[76px] sm:px-6 sm:text-base md:text-lg">
                  {text}
                </div>

                <div className="flex min-h-[66px] items-center justify-center border-x border-gray-200 bg-white sm:min-h-[76px]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xl font-semibold text-white sm:h-10 sm:w-10 sm:text-2xl">
                    ✓
                  </span>
                </div>

                <div className="flex min-h-[66px] items-center justify-center sm:min-h-[76px]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-red-200 bg-red-100 text-lg font-medium text-red-500 sm:h-10 sm:w-10 sm:text-xl">
                    ×
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Visa Process Image */}
      <div className="container mx-auto px-4 py-4 flex justify-center">
        <img
          src="/images/Process.jpg"
          alt="Visa Process"
          className="mb-3 rounded-3xl shadow-xl object-contain"
        />
      </div>

      <GoogleReviews />

      {/* FAQ's */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-slate-500">
            Everything you need to know about {visa.country} visa.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {faq.question}
                <span className="text-2xl text-blue-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    
    </div>
  );
}