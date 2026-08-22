import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { packagesData } from "../components/data/packagesData"; 

export default function PackageDetails() {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "" });
  
  const [phoneError, setPhoneError] = useState("");
  
  // NEW: Add a loading state to stop multiple clicks!
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const foundPackage = packagesData.find((p) => p._id === id);
    setPkg(foundPackage);
  }, [id]);

  const handleDownloadSubmit = (e) => { // Removed 'async'
    e.preventDefault();
    
    // 1. Clean and Validate Number
    let cleanNumber = formData.phone.replace(/\D/g, '');
    if (cleanNumber.length > 10) {
      cleanNumber = cleanNumber.slice(-10);
    }
    const isValidPhone = /^[6-9]\d{9}$/.test(cleanNumber);

    if (!isValidPhone) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      return; 
    }
    setPhoneError("");

    // Start loading briefly just to prevent double clicks
    setIsSubmitting(true);

    const nameParts = formData.name.trim().split(" ");
    const fName = nameParts[0];
    const lName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

    // 2. INSTANT DOWNLOAD: Don't wait for the backend!
    const link = document.createElement("a");
    link.href = pkg.pdfUrl || "#"; 
link.setAttribute("download", pkg.pdfUrl.split('/').pop());
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 3. BACKGROUND SAVE: Send to database silently in the background
    fetch("https://dhwanikaoverseas.onrender.com/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: fName,
        lastName: lName,
        email: "", 
        phone: cleanNumber,
        service: `Itinerary Download: ${pkg.title}`, 
        agree: true 
      }),
    })
    .then(res => {
        if (!res.ok) console.error("Database save issue");
    })
    .catch(err => console.error("Background save failed:", err));

    // 4. INSTANT CLEANUP
    setShowModal(false);
    setFormData({ name: "", phone: "" });
    setIsSubmitting(false);
    
    // Optional: A quick success message
    alert("Thanks! Your itinerary is downloading.");
  };

  if (!pkg) return <div className="text-center py-20 text-2xl font-bold">Package not found.</div>;

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      {/* ... Hero Section, Overview, Highlights, and Day-Wise Itinerary remain exactly the same as before ... */}
      <img src={pkg.image} alt={pkg.title} className="w-full h-[400px] object-cover rounded-3xl shadow-lg mb-8" />
      
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{pkg.title}</h1>
          <p className="text-lg text-blue-600 font-semibold mb-6">{pkg.duration} • {pkg.destination}</p>
          
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{pkg.description}</p>
          
          {pkg.highlights && (
            <>
              <h2 className="text-2xl font-bold mb-4">Highlights</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {pkg.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700 bg-blue-50 p-3 rounded-lg">
                    ✨ {highlight}
                  </li>
                ))}
              </ul>
            </>
          )}

          {pkg.itinerary && (
            <>
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">Day-wise Itinerary</h2>
              <div className="space-y-6 mb-10 pl-4 border-l-2 border-blue-200">
                {pkg.itinerary.map((dayData) => (
                  <div key={dayData.day} className="relative">
                    <div className="absolute -left-[21px] top-1 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow"></div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="text-blue-600">Day {dayData.day}:</span> {dayData.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {dayData.description}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="relative">
          <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
            <p className="text-gray-500 mb-1">Package Price</p>
            <h3 className="text-4xl font-extrabold text-blue-600 mb-6">₹{pkg.price.toLocaleString("en-IN")}</h3>
            
            <button 
              onClick={() => setShowModal(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-lg shadow-blue-500/30"
            >
              📄 Download Detailed Itinerary
            </button>
            <p className="text-xs text-gray-400 text-center mt-3">Requires Name & Number</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl max-w-md w-full shadow-2xl relative">
            <button 
              onClick={() => {
                setShowModal(false);
                setPhoneError(""); 
              }} 
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
            >
               ✕
            </button>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Get the Itinerary</h3>
            <p className="text-gray-500 mb-6">Enter your details to instantly download the complete day-by-day plan.</p>
            
            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  disabled={isSubmitting} // Disable while loading
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">WhatsApp Number</label>
                <input 
                  type="tel" required
                  className={`w-full p-3 border rounded-lg focus:ring-2 outline-none ${
                    phoneError ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
                  }`}
                  value={formData.phone} 
                  onChange={(e) => {
                    setFormData({...formData, phone: e.target.value});
                    setPhoneError(""); 
                  }}
                  disabled={isSubmitting} // Disable while loading
                />
                {phoneError && <p className="text-red-500 text-xs font-semibold mt-1">{phoneError}</p>}
              </div>
              
              {/* NEW: Button changes appearance and disables when clicked */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full font-bold py-3 rounded-lg transition mt-4 ${
                  isSubmitting 
                    ? "bg-gray-400 cursor-not-allowed text-gray-200" 
                    : "bg-gray-900 hover:bg-black text-white"
                }`}
              >
                {isSubmitting ? "Processing..." : "Download PDF Now"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}