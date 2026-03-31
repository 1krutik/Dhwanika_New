import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Loader2 } from "lucide-react";

export default function InquiryForm() {

const [formData,setFormData]=useState({
firstName:"",
lastName:"",
email:"",
phone:"",
service:"Tour Packages",
agree:false
});

const [isSubmitting, setIsSubmitting] = useState(false);

const serviceOptions = useMemo(
  () => ["Visa Services", "Tour Packages", "Flight Booking", "Hotel Booking"],
  []
);

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
setIsSubmitting(true);

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
} finally {
  setIsSubmitting(false);
}

};

return(

<form onSubmit={handleSubmit} className="space-y-6">

{/* Name row */}

<div className="grid md:grid-cols-2 gap-6">

<div>
<label className="text-sm font-semibold text-white/80">First Name</label>
<input
type="text"
name="firstName"
value={formData.firstName}
onChange={handleChange}
placeholder="Enter Your First Name"
className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-brand-500/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/30"
/>
</div>

<div>
<label className="text-sm font-semibold text-white/80">Last Name</label>
<input
type="text"
name="lastName"
value={formData.lastName}
onChange={handleChange}
placeholder="Enter Your Last Name"
className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-500/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/30"
/>
</div>

</div>

{/* Email */}

<div>
<label className="text-sm font-semibold text-white/80">Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
placeholder="Email Address"
className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-500/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/30"
/>
</div>

{/* Phone */}

<div>
<label className="text-sm font-semibold text-white/80">
Phone Number <span className="text-rose-300">*</span>
</label>
<input
type="tel"
name="phone"
required
value={formData.phone}
onChange={handleChange}
className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-brand-500/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/30"
/>
</div>

{/* Services */}

<div>
<label className="text-sm font-semibold text-white/80">
Services <span className="text-rose-300">*</span>
</label>

<select
name="service"
value={formData.service}
onChange={handleChange}
className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white outline-none transition focus:border-brand-500/60 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/30"
>
{serviceOptions.map((opt) => (
  <option key={opt} value={opt} className="text-ink-900">
    {opt}
  </option>
))}

</select>

</div>

{/* Terms */}

<div className="flex items-start gap-3">

<input
type="checkbox"
name="agree"
checked={formData.agree}
onChange={handleChange}
className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-brand-600"
/>

<p className="text-xs text-white/70">
I have read and agree to the{" "}
<Link
to="/terms"
className="font-semibold text-white hover:underline"
>
Terms and Conditions
</Link>{" "}
and{" "}
<Link
to="/privacy"
className="font-semibold text-white hover:underline"
>
Privacy Policy
</Link>
</p>

</div>
{/* Button */}

<button
type="submit"
disabled={isSubmitting}
className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
>
{isSubmitting ? (
  <>
    <Loader2 size={16} className="animate-spin" />
    Submitting…
  </>
) : (
  <>
    Submit <ArrowRight size={16} />
  </>
)}

</button>

</form>

);

}