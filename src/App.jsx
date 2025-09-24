import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "./index.css";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="flex flex-col sm:flex-row justify-center min-h-screen items-center bg-white w-full sm:w-[85%] gap-10 sm:gap-20 p-5 shadow-[6px_6px_12px_rgba(0,0,0,0.2),-6px_-6px_12px_rgba(255,255,255,0.9)]">
        
        {/* Left side UI mockup */}
        <div className="flex flex-col w-full max-w-[500px] p-5 rounded-2xl items-center">
          <div className="w-[300px] h-[90px] rounded-[30px] bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] flex items-center justify-center mb-6 animate-push"></div>

          <div className="flex gap-6 animate-push">
            <div className="w-[80px] sm:w-[100px] h-[280px] sm:h-[360px] rounded-[35px] bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]"></div>

            <div className="flex flex-col items-center gap-6">
              <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] rounded-full bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]"></div>
              <div className="w-[80px] sm:w-[100px] h-[140px] sm:h-[180px] rounded-[35px] bg-gray-100 shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.9)]"></div>
            </div>
          </div>
        </div>

        {/* Right side form */}
        <div className="w-full max-w-[500px]">
          <form className="w-full">
            <h2 className="font-bold text-3xl sm:text-4xl mb-5 text-center sm:text-left">
              Create an account
            </h2>

            {/* Name */}
            <label className="font-bold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-[55px] border rounded-[10px] p-3 mt-1 outline-0"
            />
            <br />
            <br />

            {/* Email */}
            <label className="font-bold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[55px] border rounded-[10px] p-3 mt-1 outline-0"
            />
            <br />
            <br />

            {/* Password with toggle */}
            <label className="font-bold">Password</label>
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full h-[55px] border rounded-[10px] p-3 mt-1 outline-0 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
            <br />

            {/* Terms */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1 cursor-pointer" />
              <p className="text-sm sm:text-base font-bold">
                I agree to all the{" "}
                <a href="#" className="underline">
                  Terms and Policy
                </a>
              </p>
            </div>

            {/* Submit */}
            <button className="w-full h-[50px] bg-black text-white rounded-[10px] mt-5 cursor-pointer">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
