import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  otp: {
    type: String
  },
  otpExpiry: {
    type: Date
  }
});

export const User = mongoose.model("User", userSchema);
