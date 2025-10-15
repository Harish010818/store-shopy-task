import express from "express";
import { register, login, getMe, logout, sendOtp, verifyOtp } from "../controlers/userController.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const userRout = express.Router();

//  Auth Routes
userRout.route("/register").post(register);
userRout.route("/login").post(login);
userRout.route("/logout").get(logout);

//  OTP Routes
userRout.post("/send-otp", sendOtp);
userRout.post("/verify-otp", verifyOtp);

// Protected Route
userRout.route("/me").get(isAuthenticated, getMe);

export default userRout;
