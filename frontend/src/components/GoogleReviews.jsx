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
      review: "Very caring and efficient service in achieving the target.",
    },
    {
      name: "Rashmi Patel",
      type: "Customer",
      date: "Google Review",
      title: "Excellent support",
      rating: 5,
      review:
        "Excellent support and guidance throughout the visa application process. The team was responsive and made everything easy.",
    },
    {
      name: "Ghanshyam Batheja",
      type: "Customer",
      date: "Google Review",
      title: "Professional service",
      rating: 5,
      review:
        "Very genuinely advised. Arranged all for Bali package including flight, visa, hotel, vehicle, guide and all sightseeing entry fee etc. very cost effectively compared to other travel agencies.",
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
  const [isMobile, setIsMobile] = useState(false);

  /* RESPONSIVE CHECK */
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  /* NUMBER OF CARDS VISIBLE */
  const cardsVisible = isMobile ? 1 : 2;

  /* MAXIMUM SLIDE POSITION */
  const maxSlide = Math.max(googleReviews.length - cardsVisible, 0);

  /* AUTO SLIDE */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= maxSlide) {
          return 0;
        }

        return prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, maxSlide]);

  /* NEXT */
  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev >= maxSlide) {
        return 0;
      }

      return prev + 1;
    });
  };

  /* PREVIOUS */
  const previousSlide = () => {
    setCurrent((prev) => {
      if (prev <= 0) {
        return maxSlide;
      }

      return prev - 1;
    });
  };

  /* DOT CLICK */
  const goToSlide = (index) => {
    setCurrent(Math.min(index, maxSlide));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <div
        className="rounded-3xl bg-white p-5 shadow-sm md:p-8"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* HEADER */}
        <div className="mb-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                Customer Reviews
              </p>

              <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
                What Our Customers Say
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Real experiences from customers who trusted Dhwanika Overseas.
              </p>
            </div>
          </div>
        </div>

        {/* KEYWORDS */}
        <div className="mb-7">
          <p className="mb-3 text-sm font-semibold text-slate-500">
            Common Keywords Found in Reviews
          </p>

          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-700 md:px-4 md:text-sm"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* REVIEW SLIDER */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / cardsVisible)}%)`,
            }}
          >
            {googleReviews.map((item, index) => (
              <div
                key={index}
                className="
                  min-w-full
                  px-1
                  sm:px-2
                  md:min-w-[50%]
                "
              >
                <div className="h-full min-h-[250px] rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-all duration-300 hover:border-blue-200 hover:bg-white hover:shadow-lg">
                  {/* CUSTOMER */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {item.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="text-xs text-slate-500 md:text-sm">
                        {item.type} • {item.date}
                      </p>
                    </div>
                  </div>

                  {/* RATING */}
                  <div className="mt-4 flex items-center gap-1">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>

                    <span className="ml-1 text-xs font-semibold text-slate-500">
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

        {/* DOTS */}
        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: maxSlide + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-7 bg-blue-600"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
        {/* ARROWS */}
        {/* <div className="flex gap-2">
              <button
                onClick={previousSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                aria-label="Previous review"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                aria-label="Next review"
              >
                <ChevronRight size={20} />
              </button>
            </div> */}
      </div>
    </section>
  );
};

export default GoogleReviews;
