import { Link } from "react-router-dom";
import { ArrowRight, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-ink-200 bg-ink-950 text-white">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/logos/favicon.jpg"
                alt="Dhwanika Overseas"
                className="h-11 w-11 rounded-xl ring-1 ring-white/10"
                loading="lazy"
              />
              <div className="leading-tight">
                <div className="text-lg font-bold">Dhwanika Overseas</div>
                <div className="text-sm text-white/60">
                  Premium travel planning, done right.
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              Visas, flights, hotels and curated holiday packages—designed for speed,
              clarity, and peace of mind.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-white/75">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-white/70" />
                <span>
                  101 First Floor, Opp. Shambhu’s Cafe, Iconic Airport Road, Sardarnagar,
                  Hansol – 382475, Ahmedabad
                </span>
              </div>
              <a className="flex items-center gap-2 hover:text-white" href="mailto:info@dhwanikaoverseas.in">
                <Mail size={16} className="text-white/70" />
                info@dhwanikaoverseas.in
              </a>
              <a className="flex items-center gap-2 hover:text-white" href="tel:+917698551313">
                <Phone size={16} className="text-white/70" />
                +91 76985 51313
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4">
            <div>
              <h4 className="text-sm font-bold tracking-wide text-white/90">
                Explore
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <Link className="hover:text-white" to="/visas">
                    Visa Services
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/holidays">
                    Packages
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold tracking-wide text-white/90">
                Company
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <Link className="hover:text-white" to="/terms">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-white" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="card border border-white/10 bg-white/5 p-5">
              <h4 className="text-sm font-bold tracking-wide text-white/90">
                Get a call back
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Tell us what you need—we’ll reply quickly with next steps.
              </p>
              <Link to="/contact" className="btn-primary mt-4 w-full justify-center">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/dhwanika_overseas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15 transition hover:bg-white/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/dhwanika-overseas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl ring-1 ring-white/15 transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Dhwanika Overseas. All rights reserved.</div>
          <div className="flex gap-5">
            <Link className="hover:text-white" to="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-white" to="/terms">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;