import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowUpRight,
  Menu,
  Phone,
  X,
  Globe2,
  PlaneTakeoff,
  Hotel,
  Ship,
  Info,
  PhoneCall,
  ChevronDown,
  Globe,
} from "lucide-react";
import { FaUmbrellaBeach } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `group flex items-center gap-2 rounded-xl px-3 py-3 text-[14px] font-medium
   transition-[background-color,color] duration-150 ease-out
   ${
     isActive
       ? "bg-[#0F62FE] text-white"
       : "text-gray-800 hover:bg-[#EEF5FF] hover:text-[#0F62FE]"
   }`;
  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-[200] bg-white/90 backdrop-blur-xl border-b border-black/[0.06]">
        <nav className="container-pag flex items-center justify-between h-[82px] p-6">
          {/* ================= LOGO ================= */}
          <Link to="/" className="group flex items-center gap-4 shrink-0">
            <img
              src="/logos/new-logo.png"
              alt="Dhwanika Overseas"
              className="h-[58px] w-[58px] rounded-full object-contain transition-transform duration-500 group-hover:scale-105"
            />

            <div className="hidden sm:block leading-tight">
              <h2 className="text-[19px] font-extrabold tracking-[-0.5px] text-red-600">
                Dhwanika
                <span className="text-red-600"> Overseas</span>
              </h2>

              <p className="text-[10px] uppercase tracking-[2px] font-bold text-black">
               For Holidays & Visas
              </p>
            </div>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <ul className="hidden xl:flex items-center">
            <li className="">
              <NavLink to="/visas" className={navLinkClass}>
                <Globe
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-150 ease-out group-hover:scale-110 group-hover:rotate-6"
                />

                <span>Visa Services</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/holidays" className={navLinkClass}>
                <FaUmbrellaBeach
                  size={17}
                  className="transition-transform duration-150 ease-out group-hover:scale-110 group-hover:-rotate-6"
                />
                <span>Holiday Packages</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/flights" className={navLinkClass}>
                <PlaneTakeoff
                  size={18}
                  strokeWidth={1.8}
                  className="transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:scale-110"
                />

                <span>Flights</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/Cruise" className={navLinkClass}>
                <Ship
                  size={17}
                  strokeWidth={1.8}
                  className="transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110"
                />

                <span>Cruises</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/hotels" className={navLinkClass}>
                <Hotel
                  size={17}
                  strokeWidth={1.8}
                  className="transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />

                <span>Hotels</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                <Info
                  size={17}
                  strokeWidth={1.8}
                  className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                />

                <span>About</span>
              </NavLink>
            </li>
          </ul>

          {/* ================= RIGHT SIDE ================= */}
          <div className="hidden xl:flex items-center gap-3">
            {/* Phone */}
            <a
              href="tel:+917698551313"
              className="group flex items-center gap-2 text-[13px] font-semibold text-black/70 hover:text-black transition"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/[0.04] transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                <Phone size={15} />
              </span>

              <span>+91 76985 51313</span>
            </a>

            {/* CTA */}
            <Link
              to="/enquiry"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-black px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20"
            >
              <span className="relative z-10">Plan Your Journey</span>

              <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 active:scale-90"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[150] bg-black/30 backdrop-blur-sm xl:hidden"
            onClick={() => setMenuOpen(false)}
          />

          {/* Menu */}
          <div className="fixed left-4 right-4 top-[95px] z-[160] rounded-[28px] border border-black/[0.06] bg-white p-5 shadow-2xl xl:hidden animate-[slideDown_.35s_ease]">
            <div className="flex flex-col gap-1">
              <MobileNavLink
                to="/visas"
                icon={<Globe2 size={18} />}
                label="Visa Services"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/holidays"
                icon={<FaUmbrellaBeach size={17} />}
                label="Holiday Packages"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/flights"
                icon={<PlaneTakeoff size={18} />}
                label="Flights"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/Cruise"
                icon={<Ship size={18} />}
                label="Cruises"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/hotels"
                icon={<Hotel size={18} />}
                label="Hotels"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/about"
                icon={<Info size={18} />}
                label="About Us"
                closeMenu={() => setMenuOpen(false)}
              />

              <MobileNavLink
                to="/enquiry"
                icon={<PhoneCall size={18} />}
                label="Contact Us"
                closeMenu={() => setMenuOpen(false)}
              />
            </div>

            {/* Mobile Bottom Actions */}
            <div className="mt-5 grid gap-3 border-t border-black/[0.06] pt-5">
              <a
                href="tel:+917698551313"
                className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 py-3 text-sm font-semibold text-black"
              >
                <Phone size={16} />
                Call +91 76985 51313
              </a>

              <Link
                to="/enquiry"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-black py-3 text-sm font-semibold text-white"
              >
                Plan Your Journey
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

/* ================= MOBILE NAV LINK ================= */

const MobileNavLink = ({ to, icon, label, closeMenu }) => {
  return (
    <NavLink
      to={to}
      onClick={closeMenu}
      className={({ isActive }) =>
        `flex items-center justify-between rounded-2xl px-4 py-4 text-[15px] font-semibold transition-all duration-150 ${
          isActive
            ? "bg-black text-white"
            : "text-black/70 hover:bg-black/[0.04] hover:text-black"
        }`
      }
    >
      <span className="flex items-center gap-3">
        {icon}
        {label}
      </span>

      <ArrowUpRight size={16} />
    </NavLink>
  );
};

export default Navbar;
