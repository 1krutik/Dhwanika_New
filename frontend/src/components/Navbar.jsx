import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, Phone, X } from "lucide-react";

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
    [
      "text-sm font-semibold transition-colors",
      isActive ? "text-white" : "text-white/80 hover:text-white",
    ].join(" ");

  return (
    <header className="sticky top-0 z-[100] border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <nav className="container-page flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-xl ring-1 ring-white/10"
            src="/logos/favicon.jpg"
            alt="Dhwanika Overseas"
            loading="eager"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold text-white">Dhwanika Overseas</div>
            <div className="text-xs text-white/60">Visa • Tours • Flights</div>
          </div>
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2 text-white/90 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden items-center gap-7 md:flex">
          <li>
            <NavLink to="/visas" className={navLinkClass}>
              Visa Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/holidays" className={navLinkClass}>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917698551313"
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white/85 ring-1 ring-white/15 transition hover:bg-white/10 hover:text-white"
            aria-label="Call Dhwanika Overseas"
          >
            <Phone size={16} />
            +91 76985 51313
          </a>
          <Link to="/contact" className="btn-primary">
            Book Now <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={[
          "md:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        aria-hidden={!menuOpen}
      >
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div className="fixed left-0 right-0 top-[64px] mx-3 rounded-2xl border border-white/10 bg-ink-950/95 p-4 shadow-soft">
          <div className="flex flex-col gap-2">
            <NavLink
              to="/visas"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Visa Services
            </NavLink>
            <NavLink
              to="/holidays"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Packages
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>
          </div>

          <div className="mt-4 grid gap-3">
            <a
              href="tel:+917698551313"
              className="btn-secondary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={16} />
              Call now
            </a>
            <Link
              to="/contact"
              className="btn-primary w-full justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
