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
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER || "dhwanikaoverseas@gmail.com",
    pass: process.env.EMAIL_PASS || "cgsejafinammuldd",
  }
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
      from: "dhwanikaoverseas@gmail.com",
      to: "dhwanikaoverseas@gmail.com",
      subject: "Test Email",
      text: "Working ✅"
    });

    console.log("📩 TEST SUCCESS:", info.response);
    res.send("Email Sent ✅");
  } catch (err) {
    console.log("❌ TEST ERROR:", err);
    res.send("Error ❌");
  }
});

/* ================= INQUIRY API ================= */
app.post("/api/inquiry", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();

    const { firstName, lastName, email, phone, service } = req.body;

    const mailOptions = {
      from: "dhwanikaoverseas@gmail.com",
      to: "dhwanikaoverseas@gmail.com",
      subject: "🔥 New Inquiry - Dhwanika Overseas",
      html: `
        <h2>New Inquiry Received</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
      `
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("📩 EMAIL SENT:", info.response);

    res.json({ message: "Inquiry sent successfully" });

  } catch (err) {
    console.log("❌ ERROR:", err);
    res.status(500).json(err);
  }
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});