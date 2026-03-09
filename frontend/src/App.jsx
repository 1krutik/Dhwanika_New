import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbars from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import TermsConditions from "./pages/TermsConditions";
import About from "./pages/About";

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
  <Navbar/>
    <Routes>    
      <Route path="/" element={<Home />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/about" element={<About/>} />
      <Route path="/terms" element={<TermsConditions />} />
    </Routes>
  <Footer/> 
        </> 

  );
}

export default App;