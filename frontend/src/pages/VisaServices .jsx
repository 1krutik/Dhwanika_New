// src/pages/VisaServices.jsx
import React, { useState } from "react";

const VisaServices = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!form.termsAccepted) {
      setMessage("Please accept the Terms and Conditions.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/visa-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("Form submitted successfully.");
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          termsAccepted: false,
        });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Visa Services
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Services *
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">- Select -</option>
                <option value="Tour Packages">Tour Packages</option>
                <option value="Flights">Flights</option>
                <option value="Visa">Visa</option>
                <option value="Hotel">Hotel</option>
              </select>
            </div>

            <div className="flex items-start gap-3">
              <input
                id="termsAccepted"
                type="checkbox"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                required
              />
              <label
                htmlFor="termsAccepted"
                className="text-xs md:text-sm text-slate-700"
              >
                I have read and <span className="font-semibold">agree</span> to
                the{" "}
                <a
                  href="/terms"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {message && (
              <p className="text-sm text-red-600">
                {message}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Submitting..." : "SUBMIT FORM"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default VisaServices;
