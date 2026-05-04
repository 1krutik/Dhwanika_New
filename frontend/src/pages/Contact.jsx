import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enquiry Submitted Successfully");
  };

  return (
    <div className="bg-ink-50">
      <section className="container-page py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <p className="text-sm font-bold text-brand-700">Contact</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Let’s plan your next trip.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
              Share your details and we’ll guide you with next steps for visas,
              packages, bookings, and tailored itineraries.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="card p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-ink-900">
                  <Mail size={16} className="text-brand-700" />
                  Email
                </div>
                <a
                  className="mt-2 block text-sm text-ink-600 hover:text-ink-900"
                  href="mailto:info@dhwanikaoverseas.in"
                >
                  info@dhwanikaoverseas.in
                </a>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-ink-900">
                  <Phone size={16} className="text-brand-700" />
                  Phone
                </div>
                <a
                  className="mt-2 block text-sm text-ink-600 hover:text-ink-900"
                  href="tel:+916359891313"
                >
                  +91 63598 91313
                </a>
              </div>

              <div className="card p-5 sm:col-span-2">
                <div className="flex items-center gap-2 text-sm font-bold text-ink-900">
                  <MapPin size={16} className="text-brand-700" />
                  Office
                </div>
                <p className="mt-2 text-sm text-ink-600">
                  101 First Floor, Opp. Shambhu’s Cafe, Iconic Airport Road,
                  Sardarnagar, Hansol – 382475, Ahmedabad.
                </p>
                <a
                  href="https://www.google.com/maps/place/Dhwanika+Overseas/@23.0827893,72.6175731,801m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e85c515a80aad:0x5ff1daa115ad9ff9!8m2!3d23.0827893!4d72.620148!16s%2Fg%2F11vymrv2w7?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:underline"
                >
                  View on Maps <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="mt-10 card overflow-hidden">
              <div className="bg-ink-950 p-6 text-white">
                <div className="text-sm font-bold text-white/85">A note from us</div>
                <div className="mt-2 text-base leading-relaxed text-white/70">
                  “From planning to exploring — we make journeys easy.”
                </div>
              </div>
              <div className="p-6 text-sm leading-relaxed text-ink-600">
                Dhwanika Overseas is a trusted travel partner based in Ahmedabad,
                delivering seamless domestic and international holiday experiences—covering
                visas, tours, hotels, and flight bookings with a premium support experience.
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="card p-6 sm:p-7">
              <div className="text-sm font-bold text-brand-700">Lead form</div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
                Get a quick callback
              </h2>
              <p className="mt-2 text-sm text-ink-600">
                We’ll respond quickly with pricing and next steps.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="text-sm font-semibold text-ink-800">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-200 bg-white p-3 text-sm outline-none transition focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/25"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink-800">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-200 bg-white p-3 text-sm outline-none transition focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/25"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-ink-800">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91..."
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-ink-200 bg-white p-3 text-sm outline-none transition focus:border-brand-500/60 focus:ring-2 focus:ring-brand-500/25"
                    required
                  />
                </div>

                <button className="btn-primary w-full justify-center" type="submit">
                  Submit enquiry <ArrowRight size={16} />
                </button>

                <p className="text-xs text-ink-500">
                  We’ll only use your information to contact you about your enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

