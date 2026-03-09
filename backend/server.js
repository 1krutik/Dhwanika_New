import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inquiry from "./model.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/dhwanikaDB")
.then(()=>console.log("MongoDB Connected"));

app.post("/api/inquiry",async(req,res)=>{

try{

const data = new Inquiry(req.body);
await data.save();

res.json({message:"Saved"});

}catch(err){
res.status(500).json(err);
}

});

app.listen(5000,()=>{
console.log("Server running on port 5000");
});