import { AlignVerticalJustifyStart } from "lucide-react";

const logos = [
  "https://cdn.worldvectorlogo.com/logos/emirates-airlines-1.svg",
  "https://digistore.co.in/wp-content/uploads/2024/07/YbgoLZ0vEO7TibbY.png",
    "https://cdn.worldvectorlogo.com/logos/etihad-airways-1.svg",
    "https://cdn.worldvectorlogo.com/logos/air-india-1.svg",
    "https://cdn.worldvectorlogo.com/logos/air-france-1.svg",
    "https://cdn.worldvectorlogo.com/logos/klm-1.svg",
    "https://cdn.worldvectorlogo.com/logos/lufthansa-1.svg",
      




];
export default function PartnersMarquee() {
  return (
    <div className="bg-white py-8 mt-12 border-t border-gray-200 overflow-hidden">
      
      {/* Heading */}
      <h3 className="text-center text-xl md:text-2xl font-bold text-gray-700 mb-6">
        We Work With Trusted Partners
      </h3>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 animate-marquee items-center">

          {/* First Set */}
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="partner"
              className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}

          {/* Duplicate for seamless loop */}
          {logos.map((logo, index) => (
            <img
              key={`dup-${index}`}
              src={logo}
              alt="partner"
              className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}

        </div>
      </div>
    </div>
  );
}