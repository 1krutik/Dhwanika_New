export default function PackageCard({pkg}){

return(

<div className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden">

<img src={pkg.image} className="h-52 w-full object-cover"/>

<div className="p-4">

<h2 className="text-xl font-bold">{pkg.title}</h2>

<p className="text-gray-500">{pkg.days}</p>

<p className="text-orange-600 font-bold text-lg">
₹{pkg.price}
</p>

<button className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
View Details
</button>

</div>

</div>

);

}