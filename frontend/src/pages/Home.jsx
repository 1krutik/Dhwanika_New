import { ArrowRight, BadgeCheck, Globe2, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import destinations from "../components/Destinations/data";
import InquiryForm from "../components/InquiryForm";

const stats = [
  { label: "Fast responses", value: "Under 30 min" },
  { label: "Visa destinations", value: "20+ countries" },
  { label: "Trusted support", value: "Real humans" },
];

const services = [
  {
    title: "Visa Services",
    description: "Clear documentation, quick guidance, and end-to-end support.",
    icon: ShieldCheck,
    href: "/visas",
  },
  {
    title: "Holiday Packages",
    description: "Curated itineraries built around comfort, value, and time.",
    icon: Globe2,
    href: "/holidays",
  },
  {
    title: "Flights & Hotels",
    description: "Smart options with transparent pricing—no confusion.",
    icon: Sparkles,
    href: "/contact",
  },
  {
    title: "Travel Assistance",
    description: "From planning to departure, we stay with you throughout.",
    icon: Headphones,
    href: "/contact",
  },
];

export default function Home() {
  return (
    <div className="bg-ink-50">
      {/* HERO */}
      <section className="relative overflow-hidden bg-ink-950 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="absolute inset-0 opacity-25">
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-500 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-accent-500 blur-3xl" />
        </div>

        <div className="container-page relative py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7" data-aos="fade-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                <BadgeCheck size={14} className="text-accent-500" />
                Premium travel planning from Ahmedabad
              </div>

              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Travel with confidence.
                <span className="block bg-brand-gradient bg-clip-text text-transparent">
                  Visas, packages, and bookings—simplified.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Dhwanika Overseas helps you plan international and domestic trips with
                faster support, clean documentation, and a premium experience that
                builds trust.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contact" className="btn-primary">
                  Book Now <ArrowRight size={16} />
                </Link>
                <Link to="/holidays" className="btn-secondary">
                  Explore Packages
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-base font-bold sm:text-lg">{s.value}</div>
                    <div className="mt-1 text-xs text-white/60 sm:text-sm">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5" data-aos="fade-left">
              <div className="card border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-sm font-bold text-white/90">
                  <Sparkles size={16} className="text-accent-500" />
                  Get a quick callback
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Share your details and we’ll contact you with the next steps.
                </p>
                <div className="mt-5">
                  <InquiryForm />
                </div>
                <p className="mt-3 text-xs text-white/50">
                  By submitting, you agree to our Terms & Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-14 sm:py-16" data-aos="fade-up">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-bold text-brand-700">Services</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything you need for a smooth journey
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-ink-600 sm:text-base">
              Clear process, premium support, and quick turnaround—so you can focus
              on the trip, not the paperwork.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.title}
                to={s.href}
                className="group card p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-700 ring-1 ring-brand-600/15 transition group-hover:bg-brand-600 group-hover:text-white">
                  <Icon size={20} />
                </div>
                <div className="mt-4 text-base font-bold">{s.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-ink-600">
                  {s.description}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                  Learn more <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED PACKAGES */}
      <section className="container-page pb-14 sm:pb-16" data-aos="fade-up">
        <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-ink-200 sm:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold text-brand-700">Featured</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Best-selling destinations
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-ink-600 sm:text-base">
                Premium experiences curated for couples, families, and groups. Ask us
                for a tailored itinerary.
              </p>
            </div>
            <Link to="/holidays" className="btn-primary">
              Explore Packages <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 8).map((d) => (
              <div key={`${d.name}-${d.country}`} className="group overflow-hidden rounded-2xl ring-1 ring-ink-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.country}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink-900">
                    {d.duration}
                  </div>
                </div>
                <div className="bg-white p-4">
                  <div className="text-base font-bold">{d.name}</div>
                  <div className="mt-1 text-sm text-ink-600">{d.country}</div>
                  <div className="mt-3 text-sm text-ink-700/90 line-clamp-2">
                    {d.description}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-700">
                    Get quote <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / TESTIMONIALS */}
      <section className="container-page pb-16" data-aos="fade-up">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="card p-7 lg:col-span-7">
            <p className="text-sm font-bold text-brand-700">Why Dhwanika</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A premium experience with real support
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Documentation clarity",
                  desc: "We simplify what’s needed and what to expect—no guesswork.",
                },
                {
                  title: "Fast, human replies",
                  desc: "Talk to a real person for planning, pricing, and next steps.",
                },
                {
                  title: "Transparent flow",
                  desc: "Clear steps from inquiry → confirmation → travel support.",
                },
                {
                  title: "Premium hygiene",
                  desc: "Clean UI, clean process, clean communication.",
                },
              ].map((x) => (
                <div key={x.title} className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-200">
                  <div className="text-base font-bold">{x.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-ink-600">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-7 lg:col-span-5">
            <p className="text-sm font-bold text-brand-700">Testimonials</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight">
              People trust us for peace of mind
            </h3>
            <div className="mt-6 space-y-4">
              {[
                {
                  quote:
                    "Quick response and very clear guidance. The process felt smooth and professional.",
                  name: "Client from Ahmedabad",
                },
                {
                  quote:
                    "Great support for packages and bookings—everything was handled end-to-end.",
                  name: "Family traveler",
                },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-200">
                  <div className="text-sm leading-relaxed text-ink-700">
                    “{t.quote}”
                  </div>
                  <div className="mt-3 text-sm font-bold text-ink-900">{t.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://wa.me/917698551313"
        className="fixed bottom-4 right-4 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-ink-200 transition hover:-translate-y-0.5"
        aria-label="Chat on WhatsApp"
      >
        <img className="h-6 w-6" src="/logos/whatsapp.png" alt="" loading="lazy" />
      </a>
    </div>
  );
}
