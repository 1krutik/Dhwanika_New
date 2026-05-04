import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsConditions from "./pages/TermsConditions";
import About from "./pages/About";
import TravelCards from "./pages/TravelCards";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import VisaServices from "./pages/VisaServices ";
import VisaDetails from "./pages/VisaDetails";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/visas" element={<VisaServices />} />
        {/* ✅ THIS FIXES CLICKED VISA PAGE */}
        <Route path="/visa/:slug" element={<VisaDetails />} />

        <Route path="/holidays" element={<TravelCards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
      <a
  href="https://wa.me/916359891313?text=I want more information about your services."
  target="_blank"
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "white",
    color: "white",
    padding: "10px 10px",
    borderRadius: "50px",
    textDecoration: "none"
  }}
>
<img
          className="h-8 w-8"
          src="/logos/whatsapp.png"
          alt=""
          loading="lazy"
        />
</a>

      <Footer />
    </>
  );
}

export default App;
