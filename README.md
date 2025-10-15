# MERN Stack Assignment: Email OTP Authentication & Dashboard UI

A full-stack MERN app implementing **email-based OTP authentication** and a **protected dashboard UI** using Tailwind CSS.

## 🚀 Tech Stack
- **MongoDB** + **Mongoose**
- **Express.js** + **Node.js**
- **React (Vite)** + **Tailwind CSS**
- **Axios** (with `withCredentials` for HTTP-only cookies)
- **Nodemailer** (used for sending OTP emails – since no domain for Mailgun/Resend)
- **HTTP-only cookies** for secure session handling

## ✨ Features
- **Signup:** Create account with name, email, and password  
  → Sends a 6-digit OTP to verify email before registration completes.
- **Email Verification:** OTP valid for 10 minutes.
- **Login:** Authenticates user via email/password and sets secure HTTP-only cookie.
- **Session Persistence:** Auto-fetch user on page load if cookie is valid.
- **Protected Dashboard:** Accessible only after successful login.
- **Logout:** Clears session cookie and redirects to login.

## ⚙️ Backend Highlights
- Secure OTP generation and verification.
- Passwords hashed using bcrypt.
- JWT-based session stored in HTTP-only cookies.
- **Nodemailer** used to send real OTP emails from local environment.

## 💻 Frontend Highlights
- Built with **React + Vite** and **Tailwind CSS**.
- Includes pages for **Signup**, **OTP Verification**, **Login**, and **Dashboard**.
- Uses React Router for protected routes.
- Axios handles authentication with cookies for auto-login.

## 🧠 Note
Due to lack of a custom domain, email delivery was implemented using **Nodemailer** instead of external services like Resend or Mailgun.

---

✅ **All core assignment requirements implemented successfully.**
