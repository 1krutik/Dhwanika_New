import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const GoogleReviews = () => {
  const googleReviews = [
    {
      name: "Meena Modi",
      type: "Customer",
      date: "Google Review",
      title: "Best visa service",
      rating: 5,
      review:
        "We are very pleased n satisfied with Dhwanika ..very cooperative staff, replying within no time at odd hours too. Sincerely appreciate all your efforts..Thanks.",
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
    {
      name: "Nitin Raval",
      type: "Customer",
      date: "Google Review",
      title: "Highly recommended",
      rating: 5,
      review:
        "Very caring and efficient service in achieving the target.",
    },
  ];

  const keywords = [
    "Quick Support",
    "Easy Process",
    "Customer Support",
    "Documentation",
    "On Time",
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /*
    Duplicate reviews so the slider can continue moving
    without reaching an empty area.
  */
  const slides = [...googleReviews, ...googleReviews];

  /*
    AUTO SCROLL
  */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /*
    RESET POSITION AFTER DUPLICATED SLIDES
  */
  useEffect(() => {
    if (current >= googleReviews.length) {
      const timer = setTimeout(() => {
        setCurrent(0);
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, [current, googleReviews.length]);

  /*
    NEXT
  */
  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  /*
    PREVIOUS
  */
  const previousSlide = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return googleReviews.length - 1;
      }

      return prev - 1;
    });
  };

  /*
    DOT CLICK
  */
  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <div
        className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* ================= HEADER ================= */}

        <div className="mb-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Customer Reviews
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                What Our Customers Say
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Real experiences from customers who trusted Dhwanika Overseas.
              </p>
            </div>

            {/* ================= ARROWS ================= */}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={previousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= KEYWORDS ================= */}

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold text-slate-500">
            Common Keywords Found in Reviews
          </p>

          <div className="flex flex-wrap gap-3">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* ================= REVIEW SLIDER ================= */}

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 50}%)`,
            }}
          >
            {slides.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="min-w-full px-2 md:min-w-[50%]"
              >
                <div className="h-full rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg">

                  {/* CUSTOMER */}

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {item.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="text-sm text-slate-500">
                        {item.type} • {item.date}
                      </p>
                    </div>
                  </div>

                  {/* RATING */}

                  <div className="mt-4 flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={17}
                          fill="currentColor"
                        />
                      ))}
                    </div>

                    <span className="ml-1 text-sm font-semibold text-slate-500">
                      {item.rating}.0
                    </span>
                  </div>

                  {/* TITLE */}

                  <h5 className="mt-3 font-bold text-slate-900">
                    {item.title}
                  </h5>

                  {/* REVIEW */}

                  <p className="mt-2 line-clamp-4 text-sm leading-6 text-slate-600">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= DOTS ================= */}

        <div className="mt-7 flex justify-center gap-2">
          {googleReviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current % googleReviews.length === index
                  ? "w-7 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;