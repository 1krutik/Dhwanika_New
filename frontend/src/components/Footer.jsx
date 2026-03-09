import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-gray-900 text-white py-10">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Dhwanika Overseas</h3>
          <p className="text-sm text-gray-400">
            Your trusted travel partner for unforgettable journeys worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/about" className="hover:text-red-500">About Us</Link></li>
            <li><Link to="/terms" className="hover:text-red-500">Terms & Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-red-500">Privacy Policy</Link></li>
            <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
          </ul>
        </div>

        {/* Tours */}
        <div>
          <h4 className="font-semibold mb-3">Tours</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/tours/domestic" className="hover:text-red-500">Domestic</Link></li>
            <li><Link to="/tours/international" className="hover:text-red-500">International</Link></li>
            <li><Link to="/plan-trip" className="hover:text-red-500">Plan a Trip</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="https://www.facebook.com/dhwanikaoverseas" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Facebook</a></li>
            <li><a href="https://www.instagram.com/dhwanika_overseas/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Instagram</a></li>
            <li><a href="https://twitter.com/dhwanika_overseas" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">Twitter</a></li>
            <li><a href="https://www.linkedin.com/company/dhwanika-overseas" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">LinkedIn</a></li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Dhwanika Overseas Travel Limited. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;