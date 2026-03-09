// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <main className="bg-gray-50 text-slate-800">
      {/* Hero + Founder Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              At <span className="font-semibold">Dhwanika Overseas</span>, we
              believe travel is not just about visiting destinations — it is
              about creating experiences, memories, and stories that last a
              lifetime.
            </p>
          </div>

          {/* Founder & Image */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image (replace src with your own image path) */}
            <div className="flex justify-center">
           <div className="relative w-full max-w-sm mx-auto">
  {/* Glow background */}
  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-sky-400/20 to-cyan-400/20 blur-lg" />

  <div className="relative w-full aspect-square overflow-hidden rounded-3xl shadow-xl">
    <img
      src="/images/Jagdish-Bulchandani.png"
      alt="Founder - Dhwanika Overseas"
      className="
        w-full 
        h-full 
        object-cover 
        object-center
      "
    />
  </div>
</div>

            </div>

            {/* Founder Text */}
            <div>
              
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
                Jagdish Bulchandani
              </h3>
              <p className="mt-1 text-sm md:text-base font-medium text-slate-500">
                Founder - Dhwanika Overseas
              </p>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                As Founder of <span className="font-semibold">Dhwanika Overseas</span>, 
                Jagdish Bulchandani leads the company with deep expertise in the travel 
                industry, focusing on curated holidays, customer satisfaction, and strong 
                relationships with every traveller.
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                With rich experience in international and domestic tours, group travel, 
                and personalised itineraries, he ensures every journey is thoughtfully 
                planned, transparent, and value-driven for all customers. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-700">
                <span className="font-semibold">Dhwanika Overseas</span> is a
                Gujarat-based travel company dedicated to offering seamless
                travel experiences for families, couples, groups, and solo
                travellers. 
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                We specialise in well-planned holidays that balance comfort,
                value, and memorable experiences, backed by professional support
                at every step of the journey. 
              </p>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-slate-700">
                From discovering new destinations to revisiting your favourite
                ones, our mission is to make travel simple, safe, and enjoyable
                with honest guidance and transparent service.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-blue-50 border border-blue-100 p-5">
                <h3 className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                  Experience
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-700">
                  Strong industry knowledge in planning international and
                  domestic trips, group departures, and customised itineraries
                  for different types of travellers. 
                </p>
              </div>
              <div className="rounded-2xl bg-sky-50 border border-sky-100 p-5">
                <h3 className="text-sm font-semibold text-sky-700 uppercase tracking-wide">
                  Customer Focus
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-700">
                  We focus on personalised service, clear communication, and
                  dependable support before, during, and after your trip.
                </p>
              </div>
              <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                <h3 className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">
                  Trust & Safety
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-700">
                  Reliable partners, carefully selected hotels, and transparent
                  pricing so you can travel with complete peace of mind. 
                </p>
              </div>
              <div className="rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                <h3 className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                  Complete Solutions
                </h3>
                <p className="mt-2 text-sm md:text-base text-slate-700">
                  One-stop assistance for your end-to-end travel needs, from
                  planning to booking and on-trip support. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Our Services
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
              We offer complete travel solutions so you can plan your next
              journey with ease and confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "International & Domestic Tour Packages",
              "Customized Holidays (Family, Couple, Group & Solo)",
              "Group Tours & Fixed Departures",
              "Honeymoon & Special Occasion Trips",
              "Visa & Documentation Assistance",
              "Flight Ticket Booking",
              "Hotel & Resort Reservations",
              "Corporate & Business Travel Solutions",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow p-4 flex"
              >
                <span className="mt-1 mr-3 h-2 w-2 rounded-full bg-blue-500 flex-shrink-0" />
                <p className="text-sm md:text-base text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Strip (like small icons text) */}
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 grid md:grid-cols-4 gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase text-slate-500">
              Tour Packages
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Discover exclusive domestic and international tour packages with
              carefully planned itineraries.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase text-slate-500">
              Visa Services
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Hassle-free visa guidance and documentation support for your
              international travel plans. 
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase text-slate-500">
              Hotel Booking
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              From luxury resorts to budget stays, we help you find the right
              place to stay.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold uppercase text-slate-500">
              Flight Booking
            </h3>
            <p className="mt-2 text-sm text-slate-700">
              Convenient flight options with support to ensure a smooth journey
              from take-off to landing.
            </p>
          </div>
        </div>
      </section>

     

    </main>
  );
};

export default About;
