import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inquiry from "./models/Inquiry.js";

const app = express();
// krutikpanchal2322002_db_user
// CxUsPp7K16nxQ8HM
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb://krutikpanchal2322002_db_user:CxUsPp7K16nxQ8HM@ac-7qptq0q-shard-00-00.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-01.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-02.fyrea24.mongodb.net:27017/?ssl=true&replicaSet=atlas-isxfi1-shard-0&authSource=admin&appName=Cluster0",
  )
  .then(() => console.log("MongoDB Connected Successfully 😊"))
  .catch((err) => console.log(err));

app.post("/api/inquiry", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);

    await newInquiry.save();

    console.log("Inquiry Saved:", req.body);

    res.json({ message: "Inquiry saved successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
