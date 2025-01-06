import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Fungsi untuk toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white mt-6">
      <div className="bg-blue-100 rounded-lg shadow-lg  p-20 w-3/5">
        <h2 className="text-4xl font-headlogin-poppins text-center mb-5">Login</h2>
        <form className='w-full mt-10 space-y-8'>
          {/* Input untuk Username atau Email */}
          <div className="">
            <label htmlFor="email" className="block font-sublogin-poppins mb-2 text-left">
              Username or Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your username or email address"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Input untuk Password */}
          <div className="">
            <label htmlFor="password" className="block font-sublogin-poppins mb-2 text-left">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Checkbox Remember Me */}
          <div className=" flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="text-blue-600 focus:ring-blue-500 h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 font-sublogin-poppins">
              Remember me
            </label>
          </div>

          {/* Tombol Login */}
          <button
            type="submit"
            className="w-full lg:w-[359px] mx-auto block bg-blue-600 font-btnlogin-monster py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;