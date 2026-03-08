import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header data-aos="fade-up" className="bg-black shadow relative z-[100]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-red-600">
          <img className='w-[70px] h-[70px] rounded-full' src="/logos/dhwanika.jpg" alt="Dhwanika Logo" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
<li><Link to="/visas" className="hover:text-red-600">Visas</Link></li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="hover:text-red-600">Holiday Packages</span>
            {isDropdownOpen && (
              <div className="absolute left-0 top-full z-[999] bg-white text-black shadow-lg p-4 w-[900px]">
                <div className="grid grid-cols-5 gap-6">
                  {/* India */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">India</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Kerala</li>
                      <li>Gujarat</li>
                      <li>Leh</li>
                      <li>Himachal</li>
                      <li>Uttarakhand</li>
                      <li>Rajasthan</li>
                      <li>Kashmir</li>
                      <li>Goa</li>
                      <li>Sikkim</li>
                      <li>Andaman</li>
                    </ul>
                  </div>
                  {/* Asia */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Asia</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Vietnam</li>
                      <li>Bali</li>
                      <li>Singapore</li>
                      <li>Malaysia</li>
                      <li>Thailand</li>
                      <li>Maldives</li>
                      <li>Sri Lanka</li>
                    </ul>
                  </div>
                  {/* Europe */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Europe</h4>
                    <ul className="space-y-1 text-sm">
                      <li>France</li>
                      <li>Italy</li>
                      <li>Germany</li>
                      <li>Switzerland</li>
                      <li>Greece</li>
                      <li>Turkey</li>
                    </ul>
                  </div>
                  {/* Middle East */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Middle East</h4>
                    <ul className="space-y-1 text-sm">
                      <li>Dubai</li>
                      <li>Israel - Jordan</li>
                      <li>Oman</li>
                      <li>Saudi Arabia</li>
                      <li>Uzbekistan</li>
                    </ul>
                  </div>
                  {/* Other Regions */}
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">Other Regions</h4>
                    <ul className="space-y-1 text-sm">
                      <li>USA</li>
                      <li>Australia</li>
                      <li>New Zealand</li>
                      <li>South Africa</li>
                      <li>Mauritius</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>

            
          <li><Link to="/flights" className="hover:text-red-600">Flights</Link></li>
          <li><Link to="/privacy" className="hover:text-red-600">Privacy Policy</Link></li>
          <li><Link to="/terms" className="hover:text-red-600">Terms & Conditions</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/visas" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Visas</Link></li>
            <li><Link to="/holidays" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Holiday Packages</Link></li>
            <li><Link to="/blog" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Blog</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">ContactUs</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center">Login</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
