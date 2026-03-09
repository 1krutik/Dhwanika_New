import { useState } from "react";

export default function InquiryForm() {

const [formData,setFormData]=useState({
firstName:"",
lastName:"",
email:"",
phone:"",
service:"Tour Packages",
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

alert("Form Submitted Successfully");

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
 <a
                  href="/terms"
                  className="text-orange-600 hover:underline"
                  target="_blank"
                >
                  Terms and Conditions
                </a>{" "} and{" "}
 <a
                  href="/privacy"
                  className="text-orange-600 hover:underline"
                  target="_blank"
                >
                  Privacy Policy
                </a>{" "}
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

</div>

</div>

);

}