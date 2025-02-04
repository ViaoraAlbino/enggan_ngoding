import React, { useState, useEffect } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate untuk mengarahkan ke halaman lain
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { enqueueSnackbar, useSnackbar } from 'notistack';
import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from "react-icons/fc";
import { FacebookLogin } from 'react-facebook-login-lite';

const Login = () => {
  const [username, setUsername] = useState(''); // Ganti email menjadi username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Menginisialisasi useNavigate
  const { login } = useAuth();
  const [googleClientId, setGoogleClientId] = useState('');
  // const loginAttempts = 0;
  // const maxAttempts = 5;
  // const blockTime = 15 * 60 * 1000;
  // let isBlocked = false;

  // Fungsi untuk toggle visibility password
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Untuk proses login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // if (isBlocked) {
    //   enqueueSnackbar('Anda diblokir karena terlalu banyak percobaan login. Silahkan coba lagi nanti!', { variant: 'error' });
    //   return;
    // }

    try {
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Mengirim username dan password
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Login Berhasil');

        // Periksa role user
        if (data.user.role === 'user') {
          // Simpan token untuk user
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.user.role);
          login();
          navigate('/'); // Pindah ke halaman Home
        } else if (data.user.role === 'admin') {
          // Tidak menyimpan token untuk admin
          localStorage.setItem('role', data.user.role);
          login();
          navigate('/admin'); // Pindah ke halaman Admin
        } else {
          setError('Role tidak valid');
        }
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Masukkan Username & Password');
    }
  };

  // Handle Google Login
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;

      // Fetch user info from Google API
      const userInfo = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(res => res.json());

      // Store token in localStorage
      localStorage.setItem('token', accessToken);
      localStorage.setItem('role', 'user'); // Role default untuk user
      login();

      // Navigate to home page after login
      navigate('/');
    },
    scope: 'openid email profile',
  });

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="flex items-center justify-center min-h-screen mx-10 bg-white">
      <div className="bg-blue-100 mx-auto sm:mt-0 lg:mt-4 rounded-lg shadow-lg p-10 w-full max-w-md lg:max-w-3xl">
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
              className="w-full px-4 py-2 border rounded-lg font-poppins-16-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
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

          {/* Pesan error/success */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          {success && <p className="text-green-500 text-center mt-4">{success}</p>}

          <div className='flex flex-col justify-center items-center'>
            <div className="flex justify-center items-center h-full">
              <label
                htmlFor="register"
                className="font-sublogin-poppins-r justify-center items-center text-center"
              >
                Don't Have an account? <Link to='/register' className="font-sublogin-poppins-m">Create Now</Link>
              </label>
            </div>
            <label className='font-sublogin-poppins-r text-center'>
              Or login with
            </label>
          </div>
        </form>
        <button
          type="button"
          className="relative flex items-center justify-center mt-5 w-full h-10 bg-white font-btngoogle-monster py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          onClick={() => loginWithGoogle()}
        >
          <span className="absolute left-1/2 transform -translate-x-1/2">Google</span>
          <FcGoogle className="absolute right-4" />
        </button>
        {/* <FacebookLogin
          appId="2001957680270346"
          autoLoad={false}
          fields="name,email,picture"
          callback={responseFacebook}
          render={(renderProps) => (
            <button
              type="button"
              className="relative flex items-center justify-center mt-5 w-full h-10 bg-white font-btngoogle-monster py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
              onClick={renderProps.onClick}
            >
              <span className="absolute left-1/2 transform -translate-x-1/2">Facebook</span>
              <FcFacebook className="absolute right-4" />
            </button>
          )}
        /> */}
        {/* <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />, */}
      </div>
    </div>
  );
};

export default Login;