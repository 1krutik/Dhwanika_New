import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header data-aos="fade-up" className="bg-black shadow relative z-[100]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="">
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
        
<li><Link to="/visas" className="hover:text-red-600">Visa Services</Link></li>
<li><Link to="/holidays" className="hover:text-red-600">Holiday Packages</Link></li>
  
          <li><Link to="/flights" className="hover:text-red-600">Flights</Link></li>
          
          <li><Link to="/about" className="hover:text-red-600">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-red-600">Contact Us</Link></li>
        </ul>

        <div className="hidden md:block">
          <Link to="/login" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Login</Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-4 pt-4 pb-6 space-y-4">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium">
            <li><Link to="/visas" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Visa Services</Link></li>
            <li><Link to="/holidays" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Holiday Packages</Link></li>
            <li><Link to="/flights" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Flights</Link></li>
            <li><Link to="/privacy" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Privacy & Policy</Link></li>
          <li><Link to="/terms" onClick={() => setMenuOpen(false)} className="hover:text-red-600">Terms & Conditions</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-red-600">ContactUs</Link></li>
            <li><Link to="/login" onClick={() => setMenuOpen(false)} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-center">Login</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
