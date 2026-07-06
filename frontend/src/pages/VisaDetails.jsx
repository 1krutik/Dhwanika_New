import { useParams } from "react-router-dom";
import { useState } from "react";
import VisaInfoCard from "../components/VisaInfoCard";

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
  const googleReviews = [
    {
      name: "Meena Modi",
      type: "Customer",
      date: "Google Review",
      title: "Best visa service",
      rating: 5,
      review:
        "We are very pleased n satisfied with Dhwanika ..very cooperative staff , replying within no time at odd hours too.Sincerely appreciate all your efforts..Thanks.",
    },
    {
      name: "Krutik Panchal",
      type: "Customer",
      date: "Google Review",
      title: "Excellent visa service",
      rating: 5,
      review:
        "Excellent visa service with proper guidance at every step. The team explained the documents clearly and made the process very smooth.",
    },
    {
      name: "Jagdish Bulchandani",
      type: "Customer",
      date: "Google Review",
      title: "Very helpful team",
      rating: 5,
      review:
        "Very helpful and professional team. They responded quickly, checked all documents carefully, and gave clear updates throughout the process.",
    },
    {
      name: "Nikki Asrani",
      type: "Customer",
      date: "Google Review",
      title: "Stress-free experience",
      rating: 5,
      review:
        "Great experience with Dhwanika Overseas. The staff was supportive, polite, and made the visa application process easy and stress-free.",
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
        {/* Google Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Rating Across All Platforms
            </h2>
          </div>

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold text-slate-500">
              Common Keywords Found in Reviews
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Quick Support",
                "Easy Process",
                "Customer Support",
                "Documentation",
                "On Time",
              ].map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>


{/* Buttons */}
          {/* <div className="mb-4 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">
              Popular Reviews
            </h3>

            <div className="flex gap-2">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
                ‹
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
                ›
              </button>
            </div>
          </div> */}

          <div className="grid gap-5 md:grid-cols-2">
            {googleReviews.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {item.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")
                      .slice(0, 2)}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-500">
                      {item.type} • {item.date}
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-yellow-400">
                  {"★".repeat(item.rating)}
                </div>

                <h5 className="mt-3 font-bold text-slate-900">{item.title}</h5>

                <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-600">
                  {item.review}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7">
            <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100">
              View More
            </button>
          </div>
        </div>
      </section>
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
