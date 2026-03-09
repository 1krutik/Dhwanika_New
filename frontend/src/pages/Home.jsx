import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import Carousel from '../components/Carousel';
import PopupForm from '../components/PopupForm'; // Add this line
import TravelCards from './TravelCards';

const Home = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
            {/* <SearchBar/> */}

      {/* <Carousel /> */}
      

      {/* WhatsApp Icon */}
      <div>
        <a target="_blank" href="http://wa.me/+916359891313">
          <img
            className="w-[50px] h-[50px] fixed bottom-4 right-4 z-50 bg-white border rounded-lg shadow p-2"
            src="./logos/whatsapp.png"
            alt=""
          />
        </a>
      </div>

      {/* PopupForm Component */}
    {/*<PopupForm show={showPopup} onClose={() => setShowPopup(false)} /> */}
<TravelCards/>

    </div>
  );
};

export default Home;
