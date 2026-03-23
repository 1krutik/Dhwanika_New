import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, phone, service } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "krutikpanchal2322002@gmail.com",
        pass: "tlgs fhst juyw gmsp",
        // tlgs fhst juyw gmsp

      },
    });

    const mailOptions = {
      from: "krutikpanchal2322002@gmail.com",
      to: "krutikpanchal2322002@gmail.com",
      subject: "🚀 New Inquiry - Dhwanika Overseas",
      html: `
        <h2>New Inquiry Received</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Email failed" });
  }
}