import nodemailer from "nodemailer";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inquiry from "./models/Inquiry.js";

const app = express();

app.use(cors());
app.use(express.json());

/* ================= EMAIL CONFIG ================= */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
    pass: process.env.EMAIL_PASS || "cgsejafinammuldd",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/* 🔍 CHECK SMTP CONNECTION */
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ SMTP ERROR:", error);
  } else {
    console.log("✅ SMTP READY");
  }
});

/* ================= DATABASE ================= */
mongoose
  .connect(
    process.env.MONGO_URI ||
      "mongodb://krutikpanchal2322002_db_user:CxUsPp7K16nxQ8HM@ac-7qptq0q-shard-00-00.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-01.fyrea24.mongodb.net:27017,ac-7qptq0q-shard-00-02.fyrea24.mongodb.net:27017/?ssl=true&replicaSet=atlas-isxfi1-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connected Successfully 😊"))
  .catch((err) => console.log(err));

/* ================= TEST EMAIL ROUTE ================= */
app.get("/test-email", async (req, res) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
      to: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
      subject: "✅ Test Email - Dhwanika Overseas",
      text: "Email system working successfully 🚀",
    });

    console.log("📩 TEST SUCCESS:", info.response);

    res.send("Email Sent Successfully ✅");
  } catch (err) {
    console.log("❌ TEST ERROR:", err);

    res.status(500).send("Email Failed ❌");
  }
});

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

    /* 2. SEND TO GOOGLE SHEETS (NEW FEATURE) */
    try {
      // ⚠️ IMPORTANT: Paste your copied Google Apps Script Web App URL right here inside the quotes!
      const GOOGLE_SCRIPT_URL = "PASTE_YOUR_WEB_APP_URL_HERE"; 
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: `${firstName || ""} ${lastName || ""}`.trim(), // Combines first and last name for the sheet
          phone: phone,
          email: email,
          service: service
        }),
      });
      console.log("✅ INQUIRY SENT TO GOOGLE SHEETS");
    } catch (sheetError) {
      console.log("❌ GOOGLE SHEETS ERROR:", sheetError.message);
      // We don't throw an error here so the user still gets a success message if DB & Email work.
    }

    /* 3. EMAIL TEMPLATE */
    const mailOptions = {
      from: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
      to: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
      subject: "🔥 New Inquiry - Dhwanika Overseas",
      html: `
        <div style="font-family: Arial; padding:20px;">
          <h2 style="color:#0b57d0;">New Inquiry Received 🚀</h2>
          <p><b>Name:</b> ${firstName} ${lastName || ""}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Service:</b> ${service}</p>
          <hr />
          <p style="color:gray;">
            Dhwanika Overseas Website Inquiry
          </p>
        </div>
      `,
    };

    /* 4. SEND EMAIL */
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("📩 EMAIL SENT:", info.response);
    } catch (mailError) {
      console.log("❌ EMAIL ERROR:", mailError);
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