import { useState } from "react";
import { Link } from "react-router-dom";

export default function VisaInquiryForm({ defaultService = "Visa Services" }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: defaultService,
    agree: false,
  });

  // NEW: State to manage the button's loading appearance
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // NEW: Lightning fast submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept terms and conditions.");
      return;
    }

    // Instantly disable button and show "Sending..."
    setIsSubmitting(true);

    // Send data to backend silently in the background
    fetch("https://dhwanikaoverseas.onrender.com/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).catch((err) => console.log(err));

    // Wait 0.5s for a natural feel, then show success instantly
    setTimeout(() => {
      alert("🎉 Thank You for Contacting Us!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: defaultService,
        agree: false,
      });
      setIsSubmitting(false); // Reset button
    }, 500);
  };

  return (
    <section
      id="inquiry-form"
      className="max-w-7xl mx-auto mt-10 rounded-2xl border border-blue-100 bg-gradient-to-br from-white via-blue-50/40 to-white p-6 md:p-8  shadow-[0_12px_40px_rgba(37,99,235,0.14)] mb-8"
    >
      <div className="grid lg:grid-cols-[1.7fr_1fr] gap-8">
        <div>
          <div className="mb-7">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-blue-700">
              Get Started
            </span>

            <h2 className="mt-4 text-3xl font-black text-slate-950">
              Inquiry Form
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Fill in your details and our visa experts will get in touch with you.
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

            {/* NEW: Updated Button with loading styles */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex items-center justify-center rounded-lg px-8 py-4 text-sm font-black uppercase tracking-wide text-white transition ${
                isSubmitting
                  ? "bg-slate-400 cursor-not-allowed shadow-none"
                  : "bg-blue-700 shadow-[0_10px_25px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-[0_14px_35px_rgba(37,99,235,0.45)]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit Inquiry"}
            </button>
          </form>
        </div>

        <div className="lg:border-l lg:border-blue-100 lg:pl-8">
          <div className="rounded-2xl border border-blue-100 bg-white/80 p-6 shadow-sm">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xl text-blue-600">
                  🛡
                </div>
                <div>
                  <h3 className="font-bold text-blue-700">100% Secure Process</h3>
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
                  <h3 className="font-bold text-blue-700">Fast & Easy Processing</h3>
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
                  <h3 className="font-bold text-blue-700">Expert Consultation</h3>
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
                  <h3 className="font-bold text-blue-700">High Success Rate</h3>
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
                <p className="text-sm font-bold text-blue-700">Need Immediate Help?</p>
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
    </section>
  );
}