import dotenv from "dotenv";
import nodemailer from "nodemailer";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});


// ✅ Function to send OTP email
export const sendMail = async (to, subject, otp) => {
  try {
    const mailOptions = {
      from: `"Secure Auth App" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #4B70E2;">🔐 Email Verification - OTP</h2>
          <p>Hi there 👋,</p>
          <p>We received a request to verify your email address for your account.</p>
          <p style="font-size: 18px; margin: 20px 0;">Your One-Time Password (OTP) is:</p>
          <h1 style="color: #4B70E2; letter-spacing: 3px;">${otp}</h1>
          <p>This OTP will expire in <strong>10 minutes</strong>. Please do not share it with anyone.</p>
          <p style="margin-top: 30px;">Best regards,<br/>Secure Auth Team 🚀</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ OTP mail sent successfully to ${to}: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Error sending OTP mail:", error.message);
  }
};
