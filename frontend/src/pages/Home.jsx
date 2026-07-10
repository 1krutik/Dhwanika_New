import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Headphones,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import destinations from "../components/Destinations/data";
import InquiryForm from "../components/InquiryForm";
import VisaServices from "./VisaServices ";
import PartnersMarquee from "../components/PartnersMarquee";
import WhyChooseUs from "../components/whychooseus";

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
    href: "/enquiry",
  },
  {
    title: "Travel Assistance",
    description: "From planning to departure, we stay with you throughout.",
    icon: Headphones,
    href: "/enquiry",
  },
];

export default function Home() {
  return (
    <div className="bg-ink-50">
      <VisaServices />
      <WhyChooseUs />
      <PartnersMarquee />

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
                Premium experiences curated for couples, families, and groups.
                Ask us for a tailored itinerary.
              </p>
            </div>
            <Link to="/holidays" className="btn-primary">
              Explore Packages <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.slice(0, 8).map((d) => (
              <div
                key={`${d.name}-${d.country}`}
                className="group overflow-hidden rounded-2xl ring-1 ring-ink-200"
              >
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
                    Get quote{" "}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-0.5"
                    />
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
                <div
                  key={x.title}
                  className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-200"
                >
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
                <div
                  key={t.name}
                  className="rounded-2xl bg-ink-50 p-5 ring-1 ring-ink-200"
                >
                  <div className="text-sm leading-relaxed text-ink-700">
                    “{t.quote}”
                  </div>
                  <div className="mt-3 text-sm font-bold text-ink-900">
                    {t.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
