import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import packageRoutes from "./routes/packages.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/packages",packageRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/dhwanika")
.then(()=>console.log("MongoDB Connected Successfully😊"))
.catch(err=>console.log(err));

app.post("/api/inquiry", async (req,res)=>{
  try{
    console.log(req.body);
    res.json({message:"Data received"});
  }catch(err){
    res.status(500).json(err);
  }
});

app.listen(5000, ()=>{
  console.log("Server running");
});