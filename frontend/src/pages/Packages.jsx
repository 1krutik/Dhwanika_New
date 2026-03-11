import {useEffect,useState} from "react";
import PackageCard from "../components/PackageCard";

export default function Packages(){

const [packages,setPackages]=useState([]);

useEffect(()=>{

fetch("https://dhwanikaoverseas.onrender.com/api/packages")
.then(res=>res.json())
.then(data=>setPackages(data));

},[]);

return(

<div className="max-w-7xl mx-auto py-16 px-4">

<h1 className="text-3xl font-bold mb-10 text-center">
Holiday Packages
</h1>

<div className="grid md:grid-cols-3 gap-8">

{packages.map(pkg=>(
<PackageCard key={pkg._id} pkg={pkg}/>
))}

</div>

</div>

);

}