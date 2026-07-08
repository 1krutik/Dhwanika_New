import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  Phone,
  X,
  Globe,
  Plane,
  Info,
  PhoneCall,
} from "lucide-react";

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
    `flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
        : "text-white/80 hover:text-white hover:bg-white/10 hover:scale-105"
    }`;

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-[200] border-b border-white/10 bg-ink-950/80 backdrop-blur-xl">
        <nav className="container-page flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-xl ring-1 ring-white/10"
              src="/logos/new-logo.png"
              alt="Dhwanika Overseas"
            />

            <div>
              <h2 className="text-white font-bold text-md">
                Dhwanika Overseas
              </h2>

              <p className="text-xs text-white/60">
                Visa • Tours • Passport • Flights
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center">
            <li>
              <NavLink to="/visas" className={navLinkClass}>
                <Globe size={18} />
                Visa Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/holidays" className={navLinkClass}>
                <Plane size={18} />
                Holiday Packages
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                <Info size={18} />
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/enquiry" className={navLinkClass}>
                <PhoneCall size={18} />
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917698551313"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white/85 ring-1 ring-white/15 hover:bg-white/10 transition"
            >
              <Phone size={16} />
              +91 76985 51313
            </a>

            <Link to="/enquiry" className="btn-primary">
              Enquire Now <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 z-[150] bg-black/40 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div className="fixed top-20 left-3 right-3 z-[160] rounded-2xl bg-ink-950/95 border border-white/10 p-5">
            <div className="flex flex-col gap-3">
              <NavLink
                to="/visas"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <Globe size={18} />
                Visa Services
              </NavLink>

              <NavLink
                to="/holidays"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <Plane size={18} />
                Holiday Packages
              </NavLink>

              <NavLink
                to="/about"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <Info size={18} />
                About Us
              </NavLink>

              <NavLink
                to="/enquiry"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <PhoneCall size={18} />
                Contact Us
              </NavLink>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href="tel:+917698551313"
                className="btn-secondary w-full justify-center"
              >
                <Phone size={16} />
                Call Now
              </a>

              <Link
                to="/enquiry"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                Enquire Now<ArrowRight size={16}/>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;