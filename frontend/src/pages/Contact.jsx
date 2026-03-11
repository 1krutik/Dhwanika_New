import { useState } from "react";

export default function Contact() {

const [formData,setFormData] = useState({
name:"",
email:"",
phone:""
})

const handleChange = (e)=>{
setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
e.preventDefault();
alert("Enquiry Submitted Successfully")
}

return(

<div className="bg-gray-100 py-16 px-6">

<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

{/* LEFT SIDE */}

<div>

<h2 className="text-3xl font-bold text-red-700 mb-6">
Leave us your info
</h2>

<p className="mb-4 text-gray-700 leading-relaxed">
<strong>Dhwanika Overseas</strong> is a trusted travel-and-tour partner based in Ahmedabad, Gujarat,
delivering seamless domestic and international holiday experiences. Since its
founding, the company has grown to serve thousands of families, planning
memorable vacations with expert care.
</p>

<p className="mb-4 text-gray-700 leading-relaxed">
Fueled by years of industry experience, <strong>Dhwanika Overseas </strong> 
 combines deep travel expertise with personal attention — curating everything
from tours and hotel bookings to flights, visas, and tailored holiday packages
for solo travellers, couples, families, and groups.
</p>

<p className="mb-4 text-gray-700 leading-relaxed">
With a dedicated team and a track record of satisfied travellers,
<strong> Dhwanika Overseas</strong> is committed to making every journey
effortless, comfortable, and unforgettable.
</p>

<p className="mb-4 text-gray-700 leading-relaxed">
Whether you're dreaming of a scenic getaway, a global adventure, or a family
vacation — Dhwanika Overseas handles it all, end-to-end.
</p>

<p className="italic font-semibold mt-6">
“From planning to exploring — we make journeys easy. With years of
travel-industry experience and thousands of happy families, Dhwanika Overseas
turns your travel dreams into reality.”
</p>

</div>


{/* RIGHT SIDE */}

<div>

<h2 className="text-3xl font-bold text-red-700 mb-6">
Location
</h2>

<p className="text-gray-700 mb-6">
Head Office :101 First Floor Opp. Shambhu's Cafe Iconic Airport Road Sardarnagar Hansol – 382475, Ahmedabad.
</p> <a href="https://www.google.com/maps/place/Dhwanika+Overseas/@23.0827893,72.6175731,801m/data=!3m2!1e3!4b1!4m6!3m5!1s0x395e85c515a80aad:0x5ff1daa115ad9ff9!8m2!3d23.0827893!4d72.620148!16s%2Fg%2F11vymrv2w7?entry=ttu&g_ep=EgoyMDI2MDMwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
     View on Maps
</a>
<div className="space-y-3 mb-10">

<p className="flex items-center gap-3">
📧 info@dhwanikaoverseas.in
</p>

<p className="flex items-center gap-3">
📞 +91 7698551313
</p>

</div>

</div>

</div>


{/* FORM */}

<div className="max-w-3xl mx-auto mt-16">

<form onSubmit={handleSubmit} className="space-y-6">

<input
type="text"
name="name"
placeholder="Full Name"
value={formData.name}
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="email"
name="email"
placeholder="Email"
value={formData.email}
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<input
type="tel"
name="phone"
placeholder="Contact Number"
value={formData.phone}
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<button
className="bg-red-700 text-white px-8 py-4 font-bold hover:bg-red-800"
>
SUBMIT ENQUIRY
</button>

</form>

</div>

</div>

)

}