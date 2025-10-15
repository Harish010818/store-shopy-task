import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [emailForOTP, setEmailForOTP] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!user.username) newErrors.username = "Username is required";
    if (!user.email || !emailRegex.test(user.email)) newErrors.email = "Invalid email";
    if (user.password.length < 5) newErrors.password = "Password must be at least 5 characters";

    return newErrors;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      toast.error("Form validation error");
      return;
    }
   
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/user/register`,
        user,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );

      if (res.data.success) {
        toast.success("Registered successfully! Sending OTP...");
        setEmailForOTP(user.email);

        await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/user/send-otp`, {
          email: user.email,
        });

        toast.success("OTP sent to your email!");
        setOtpSent(true);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    }
  };

  // ✅ OTP verification handler
  const verifyOtpHandler = async (e) => {
    e.preventDefault();

    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/user/verify-otp`, {
        email: emailForOTP,
        otp
      });

      if (res.data.success) {
        toast.success("Email verified successfully!");
        navigate("/login");
      } else {
        toast.error(res.data.message || "Invalid OTP");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-[var(--bg)] text-black px-4'>
      <div className="text-black w-full max-w-96 bg-[var(--homepage-white)] rounded-4xl shadow shadow-gray-300 p-12 space-y-6">
        <h1 className='text-3xl font-bold text-center'>
          {otpSent ? "Verify Email" : "Sign up"}
        </h1>

        {!otpSent ? (
          <form onSubmit={onSubmitHandler} className="space-y-4">
            <div>
              <input
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                placeholder='Username'
              />
              {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
            </div>
            <div>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="text"
                placeholder='Email'
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className='relative'>
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                type="password"
                placeholder='Password'
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <button
                type='submit'
                className="text-white cursor-pointer w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 bg-[var(--primary-purple)]">
                Sign up
              </button>
            </div>
            <p className='text-center my-2'>
              Already have an account? <Link to="/login" className='text-[var(--primary-purple)]'>Login</Link>
            </p>
          </form>
        ) : (
          <form onSubmit={verifyOtpHandler} className="space-y-4">
            <p className="text-center text-gray-700">
              Enter the OTP sent to <span className="font-semibold">{emailForOTP}</span>
            </p>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 text-center"
              type="text"
              placeholder='Enter OTP'
            />
            <button
              type="submit"
              className="text-white cursor-pointer w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 bg-[var(--primary-purple)]">
              Verify OTP
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
