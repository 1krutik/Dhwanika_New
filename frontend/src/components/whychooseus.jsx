import {
  FaBolt,
  FaSmile,
  FaUserTie,
  FaTags,
  FaHeadset,
  FaAward,
} from "react-icons/fa";

const whyChooseUsItems = [
  { icon: FaBolt, title: "Instant Confirmation" },
  { icon: FaSmile, title: "Happy Clients" },
  { icon: FaUserTie, title: "Trained Team" },
  { icon: FaTags, title: "Best Price" },
  { icon: FaHeadset, title: "24/7 Support" },
  { icon: FaAward, title: "Quality Service" },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[linear-gradient(135deg,#f4fbfb_0%,#e8f7f6_45%,#fff7e8_100%)] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-extrabold text-[#10363a] md:text-4xl">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-5">
          {whyChooseUsItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[22px] border border-[rgba(12,118,125,0.10)] bg-white px-4 py-7 text-center shadow-[0_14px_35px_rgba(10,92,97,0.10)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(10,92,97,0.16)]"
              >
                <div className="absolute left-0 top-0 h-1 w-full bg-[linear-gradient(90deg,#0f766e,#f4b942)]" />

                <div className="mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#0f766e_0%,#159895_100%)] text-[28px] text-white shadow-[0_10px_22px_rgba(15,118,110,0.24)]">
                  <Icon />
                </div>

                <h6 className="text-base font-bold leading-6 text-[#1f2937]">
                  {item.title}
                </h6>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}