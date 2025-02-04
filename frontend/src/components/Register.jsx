import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  // Fungsi untuk toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Fungsi untuk mengirim data ke backend
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setErrorMessage('');
    setSuccessMessage('');

    // Validasi sederhana
    if (!formData.fullName || !formData.username || !formData.email || !formData.password) {
      setErrorMessage('Semua Kolom Wajib di Isi!');
      return;
    }

    try {
      // Contoh endpoint API
      const response = await fetch('http://localhost:5000/auth/registrasi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Gagal Pembuatan Akun');
      }

      const data = await response.json();
      enqueueSnackbar('Akun Berhasil dibuat!', { variant: 'success' });
      // setSuccessMessage('Akun Berhasil dibuat!');
      setFormData({ fullName: '', username: '', email: '', password: '' }); // Reset form
    } catch (error) {
      setErrorMessage(error.message || 'Server Error');
    }
  };

  return (
    <div className="flex items-center justify-center mx-10 min-h-screen bg-white lg:mb-10 px-4">
      <div className="bg-blue-100 rounded-lg shadow-lg p-10 w-full max-w-3xl lg:mt-12">
        <h2 className="text-3xl lg:text-4xl font-headlogin-poppins text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit} className="w-full text-left space-y-6">
          {/* Input untuk Nama Lengkap */}
          <div>
            <label htmlFor="fullName" className="block font-sublogin-poppins mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border rounded-lg font-poppins-16-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Input untuk Username */}
          <div>
            <label htmlFor="username" className="block font-sublogin-poppins mb-2">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg font-poppins-16-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Input untuk Email */}
          <div>
            <label htmlFor="email" className="block font-sublogin-poppins mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg font-poppins-16-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Input untuk Password */}
          <div>
            <label htmlFor="password" className="block font-sublogin-poppins mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg font-poppins-16-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

          {/* Error/Sukses Pesan */}
          {/* {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>} */}

          {/* Tombol Sign Up */}
          <button
            type="submit"
            className="w-full bg-blue-600 font-btnlogin-monster py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Sign Up
          </button>
          <div className="flex justify-center items-center h-full">
            <label
              htmlFor="register"
              className="font-sublogin-poppins-r justify-center items-center text-center"
            >
              Have an account? <Link to='/login' className="font-sublogin-poppins-mg">Login Now</Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;