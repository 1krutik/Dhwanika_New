import nodemailer from "nodemailer";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Inquiry from "./models/Inquiry.js";

const app = express();
// krutikpanchal2322002_db_user
// CxUsPp7K16nxQ8HM
app.use(cors());
app.use(express.json());
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dhwanikaoverseas@gmail.com",
    pass: "cgsejafinammuldd",
  }
});
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

    const { firstName, lastName, email, phone, service } = req.body;

    const mailOptions = {
      from: "dhwanikaoverseas@gmail.com",
      to: "dhwanikaoverseas@gmail.com", // where YOU receive inquiry
      subject: "🔥 New Inquiry - Dhwanika Overseas",
      html: `
        <h2>New Inquiry Received</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    console.log("✅ Inquiry Saved & Email Sent");

    res.json({ message: "Inquiry sent successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
