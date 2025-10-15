import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (to, subject, text) => {
  try {
    const data = await resend.emails.send({
      from: "Your App <devharishjuyal18@gmail.com>", 
      to,
      subject,
      text,
    });

    console.log(`✅ OTP mail sent to ${to}`, data);
  } catch (error) {
    console.error("❌ Resend error:", error.message);
  }
};
