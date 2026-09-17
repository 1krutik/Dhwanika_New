import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inquiry from "./models/Inquiry.js";

const app = express();

app.use(cors());
app.use(express.json());

/* ================= DATABASE ================= */
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb://krutikpanchal2322002_db_user:CxUsPp7K16nxQ8HM@ac-7qptq0q-shard-00-00.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-01.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-02.fyrea24.mongodb.net:27017/?ssl=true&replicaSet=atlas-isxfi1-shard-0&authSource=admin&appName=Cluster0",
  )
  .then(() => console.log("MongoDB Connected Successfully 😊"))
  .catch((err) => console.log(err));


app.get("/api/google-reviews", async (req, res) => {
  const placeId = "YOUR_GOOGLE_PLACE_ID";
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const url = `https://places.googleapis.com/v1/places/${placeId}`;

  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask":
        "displayName,rating,userRatingCount,reviews,googleMapsUri",
    },
  });

  const data = await response.json();
  res.json(data);
});

/* ================= INQUIRY API ================= */
app.post("/api/inquiry", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service } = req.body;

    /* 1. SAVE TO DATABASE */
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    console.log("✅ INQUIRY SAVED TO MONGODB");

    /* 2. SEND TO GOOGLE SHEETS (Active CRM) */
    try {
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxAR01hf1TR2aXcWI-VA-exm_EI3Yx3z2U9AoSCa4QBvGGjwMWJKqBsL2DPjhpSCx0LoA/exec"; 
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // ADDED redirect: "follow" which is required for Google Apps Script
        redirect: "follow", 
        body: JSON.stringify({
          firstName: `${firstName || ""} ${lastName || ""}`.trim(), 
          phone: phone,
          email: email,
          service: service
        }),
      });
      console.log("✅ INQUIRY SENT TO GOOGLE SHEETS");
    } catch (sheetError) {
      console.log("❌ GOOGLE SHEETS ERROR:", sheetError.message);
    }

    // ✅ ALWAYS SUCCESS RESPONSE IF DB SAVES
    res.status(200).json({
      success: true,
      message: "Inquiry saved successfully",
    });
  } catch (err) {
    console.log("❌ ERROR:", err);

    res.status(500).json({
      success: false,
      message: "Something went wrong ❌",
    });
  }
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});