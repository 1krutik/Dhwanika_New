import { useState } from "react";
import { Link } from "react-router-dom";

export default function VisaServices() {
const visaData = [
  {
    country: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592",
    type: "E-VISA",
    valid: "30 Days",
    fees: "₹2,500",
    docs: "Photo, Passport",
  },
  {
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    type: "E-VISA",
    valid: "90 Days",
    fees: "₹1,500",
    docs: "Passport",
  },
  {
    country: "Sri Lanka",
    image: "https://images.unsplash.com/photo-1574611122955-5baa61496637",
    type: "E-VISA",
    valid: "180 Days",
    fees: "₹1,200",
    docs: "Passport, Photo",
  },
  {
    country: "Malaysia",
    image: "https://images.unsplash.com/photo-1597148543182-830ef7bbb904",
    type: "E-VISA",
    valid: "30 Days",
    fees: "₹1,800",
    docs: "Passport",
  },
  {
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    type: "E-VISA",
    valid: "90 Days",
    fees: "₹2,950",
    docs: "Passport",
  },
  {
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    type: "E-VISA",
    valid: "30 Days",
    fees: "₹2,000",
    docs: "Passport",
  },
  {
    country: "Dubai (UAE)",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    type: "Tourist Visa",
    valid: "30 Days",
    fees: "₹7,000",
    docs: "Passport, Photo",
  },
  {
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200",
    type: "E-VISA",
    valid: "60 Days",
    fees: "₹4,500",
    docs: "Passport",
  },
  {
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "E-VISA",
    valid: "30 Days",
    fees: "₹3,500",
    docs: "Passport, Photo",
  },
  {
    country: "Kenya",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    type: "E-VISA",
    valid: "90 Days",
    fees: "₹4,000",
    docs: "Passport",
  },
  {
    country: "Australia",
    image: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Visitor Visa",
    valid: "90 Days",
    fees: "₹10,000",
    docs: "Passport, Bank Statement",
  },
  {
    country: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
    type: "Visitor Visa",
    valid: "90 Days",
    fees: "",
    docs: "Passport, Photo",
  },
  {
    country: "Japan",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Tourist Visa",
    valid: "30 Days",
    fees: "₹3,000",
    docs: "Passport, Bank Proof",
  },
  {
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1549693578-d683be217e58",
    type: "Tourist Visa",
    valid: "90 Days",
    fees: "₹4,500",
    docs: "Passport",
  },
  {
    country: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "₹7,500",
    docs: "Passport, Insurance",
  },
  {
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "₹7,500",
    docs: "Passport",
  },
  {
    country: "Italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "₹7,500",
    docs: "Passport",
  },
  {
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    type: "Schengen Visa",
    valid: "90 Days",
    fees: "₹8,000",
    docs: "Passport",
  },
  {
    country: "Canada",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    type: "Visitor Visa",
    valid: "180 Days",
    fees: "₹8,500",
    docs: "Passport, Bank Proof",
  },
  {
    country: "USA",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "Tourist Visa",
    valid: "180 Days",
    fees: "₹12,000",
    docs: "Passport, Interview",
  }
];
const [formData,setFormData]=useState({
firstName:"",
lastName:"",
email:"",
phone:"",
service:"Visa Services",
agree:false
});

const handleChange=(e)=>{
const {name,value,type,checked}=e.target;

setFormData({
...formData,
[name]:type==="checkbox"?checked:value
});
};

const handleSubmit=async(e)=>{
e.preventDefault();

if(!formData.agree){
alert("Please accept terms");
return;
}

try{

await fetch("https://dhwanikaoverseas.onrender.com/api/inquiry",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(formData)
});

alert(" 🎉 Thank You for Contacting Us! Form Submitted Successfully");

setFormData({
firstName:"",
lastName:"",
email:"",
phone:"",
service:"Tour Packages",
agree:false
});

}catch(err){
console.log(err);
}

};

return(

<div className="bg-gray-100 py-16 px-4">

<div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">

<form onSubmit={handleSubmit} className="space-y-6">

{/* Name row */}

<div className="grid md:grid-cols-2 gap-6">

<div>
<label className="font-semibold">First Name</label>
<input
type="text"
name="firstName"
value={formData.firstName}
onChange={handleChange}
placeholder="Enter Your First Name"
className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
</div>

<div>
<label className="font-semibold">Last Name</label>
<input
type="text"
name="lastName"
value={formData.lastName}
onChange={handleChange}
placeholder="Enter Your Last Name"
className="w-full mt-2 border rounded-lg p-3"
/>
</div>

</div>

{/* Email */}

<div>
<label className="font-semibold">Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Email Address"
className="w-full mt-2 border rounded-lg p-3"
/>
</div>

{/* Phone */}

<div>
<label className="font-semibold">
Phone Number <span className="text-red-500">*</span>
</label>
<input
type="tel"
name="phone"
required
value={formData.phone}
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3"
/>
</div>

{/* Services */}

<div>
<label className="font-semibold">
Services <span className="text-red-500">*</span>
</label>

<select
name="service"
value={formData.service}
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3"
>
<option>Visa Services</option>
<option>Tour Packages</option>
<option>Flight Booking</option>
<option>Hotel Booking</option>

</select>

</div>

{/* Terms */}

<div className="flex items-center gap-2">

<input
type="checkbox"
name="agree"
checked={formData.agree}
onChange={handleChange}
/>

<p className="text-sm">
I have read and agree to the{" "}
<Link
to="/terms"
className="text-orange-600 hover:underline"
>
Terms and Conditions
</Link>{" "}
and{" "}
<Link
to="/privacy"
className="text-orange-600 hover:underline"
>
Privacy Policy
</Link>
</p>

</div>
{/* Button */}

<button
type="submit"
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
>

SUBMIT FORM

</button>

</form>

{/* VISA CARDS SECTION */}



</div>
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6 text-center">
    Popular Visa Destinations
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

    {visaData.map((item, index) => (
      <div
        key={index}
        className="relative rounded-3xl overflow-hidden group cursor-pointer "
      >

        {/* IMAGE */}
        <img
          src={item.image}
          alt={item.country} loading="lazy"
          className="h-[330px] w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0  group-hover:bg-black/60 transition"></div>

        {/* CONTENT */}
        <div className="absolute bottom-0 p-4 text-white w-full">

          <h2 className="text-lg font-bold mb-2">
            {item.country}
          </h2>

          <div className="flex justify-between text-xs opacity-90">
            <span>{item.type}</span>
            <span>{item.valid}</span>
            <span>{item.fees}</span>
          </div>

          {/* HOVER DOCUMENTS */}
          <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2">

            <div className="text-xs mt-3 border-t border-white/30 pt-2">
              <p className="opacity-80">Documents Needed:</p>
              <p className="font-semibold">{item.docs}</p>
            </div>

          </div>

        </div>

      </div>
    ))}

  </div>
</div>
</div>

);

}