import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk mengarahkan ke halaman lain
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Login = () => {
  const [username, setUsername] = useState(''); // Ganti email menjadi username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Menginisialisasi useNavigate
  const { login } = useAuth();

  // Fungsi untuk toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Untuk proses login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/masuk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Mengirim username dan password
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login Berhasil');
        localStorage.setItem('token', data.token); // Simpan token ke localStorage
        login();  
        navigate('/'); // Arahkan ke halaman Home setelah login berhasil
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Terjadi Kesalahan Pada Server');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-10 bg-white">
      <div className="bg-blue-100 mx-auto rounded-lg shadow-lg p-10 w-full max-w-md lg:max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-headlogin-poppins text-center mb-5">Login</h2>
        <form className="space-y-6 lg:space-y-8" onSubmit={handleLogin}>
          {/* Input untuk Username */}
          <div>
            <label
              htmlFor="username"
              className="block font-sublogin-poppins mb-2 text-left"
            >
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={username} // Hubungkan dengan state username
              onChange={(e) => setUsername(e.target.value)} // Perbarui state username
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Input untuk Password */}
          <div>
            <label
              htmlFor="password"
              className="block font-sublogin-poppins mb-2 text-left"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
          <div className="flex items-center">
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
            className="w-full bg-blue-600 font-btnlogin-monster py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Login
          </button>
          <div className="flex justify-center items-center h-full">
            <label
              htmlFor="register"
              className="font-sublogin-poppins-r justify-center items-center text-center"
            >
              Don't Have an account? <Link to='/register' className="font-sublogin-poppins-m">Create Now</Link>
            </label>
          </div>
        </form>

        {/* Pesan error/success */}
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {success && <p className="text-green-500 text-center mt-4">{success}</p>}
      </div>
    </div>
  );
};

export default Login;