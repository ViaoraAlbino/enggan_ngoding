import React, { useState, useEffect } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { FaRegUser } from "react-icons/fa6";
import UnifyIcon from '../assets/gambar/logo_blue.png';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

import { useSnackbar } from 'notistack';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { isLoggedIn, logout } = useAuth();
  let scrollTimeout;
  const location = useLocation(); // Menangkap lokasi saat ini
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  // Fungsi untuk mengatur visibilitas navbar berdasarkan arah scroll
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }
    setLastScrollY(currentScrollY);

    // Deteksi scroll berhenti
    setIsScrolling(true);
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      setIsNavbarVisible(true); // Tampilkan navbar ketika scroll berhenti
    }, 500); // Delay 150 ms
  };

  // Test Notifikasi
  useEffect(() => {
    // Cek apakah token ada di localStorage
    const token = localStorage.getItem('token');

    // Cek apakah notifikasi sudah pernah ditampilkan
    const hasNotified = localStorage.getItem('hasNotified');

    if (token && location.pathname === '/' && !hasNotified) {
      enqueueSnackbar('Welcome back! You are now logged in.', { variant: 'success' });
      localStorage.setItem('hasNotified', 'true'); // Set status notifikasi
    }
  }, [enqueueSnackbar, location.pathname]);

  // Fungsi untuk logout
  const handleLogout = () => {
    localStorage.removeItem('token'); // Hapus token dari localStorage
    localStorage.removeItem('hasNotified');
    logout(); // Ubah status login menjadi false
    navigate('/login'); // Arahkan ke halaman login
    enqueueSnackbar('Logout', { variant: 'error' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('no-scroll'); // Bersihkan efek saat komponen di-unmount
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full bg-white p-4 shadow transition-all duration-300 z-10 scroll-smooth ${isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="container mx-auto flex justify-between items-center">

          {/* Nama Markas */}
          <Link to="/">
            <img src={UnifyIcon} alt="Unify Logo" className="w-[60px] ml-6" />
            {/* <h1 className="text-2xl font-normal ml-6 font-nabla">UNIVY</h1> */}
          </Link>

          {/* Menu Navigasi */}
          <ul className="hidden lg:flex space-x-6 flex-grow justify-center">
            <li>
              <Link
                to="/"
                className={`mx-2 font-poppins hover:text-blue-500 underline-offset-4 ${location.pathname === '/' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`mx-2 font-poppins hover:text-blue-500 underline-offset-4 ${location.pathname === '/product' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`mx-2 font-poppins hover:text-blue-500 underline-offset-4 ${location.pathname === '/about' ? 'text-blue-500' : 'text-gray-500'}`}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Kolom Pencarian */}
          <div className="hidden lg:flex items-center w-1/4 bg-gray-100 rounded-full px-2 py-1 space-x-6 mr-6">
            <input
              type="text"
              placeholder="Mau cari apa..."
              className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins ml-2"
            />
            <FiSearch className="text-gray-500 w-6 h-6" />
          </div>

          {/* Tombol Sign Up dan Login */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/wishlist">
              <FiHeart className={`cursor-pointer hover:text-red-500 ${location.pathname === '/wishlist' ? 'text-red-500' : 'text-gray-500'}`} size={24} />
            </Link>
            <Link to='/keranjang'>
              <FiShoppingCart className={`cursor-pointer hover:text-gray-800 ${location.pathname === '/keranjang' ? 'text-gray-800' : 'text-gray-500'}`} size={24} />
            </Link>
            {isLoggedIn ? (
              // Tampilkan ikon user jika login
              <button onClick={handleLogout} className="text-gray-500 hover:text-gray-800 focus:outline-none">
                <FaRegUser size={24} />
              </button>
            ) : (
              // Tampilkan tombol Sign Up dan Login jika belum user login
              <>
                <Link to="/register">
                  <button className="font-poppins-sign button-sign hover:bg-cyan-200">Sign Up</button>
                </Link>
                <Link to="/login">
                  <button className="font-poppins-login button-login hover:bg-blue-500">
                    Login
                  </button>
                </Link>
              </>
            )}
          </div>

          {/* Tombol Menu Mobile */}
          <div className="lg:hidden flex items-center space-x-4 ml-auto">
            {/* <div className="flex items-center w-36 bg-gray-100 rounded-full px-4 py-1">
              <input
                type="text"
                placeholder="Mau cari apa..."
                className="bg-transparent focus:outline-none text-gray-700 font-poppins flex-grow"
              />
              <FiSearch className="text-gray-500 w-6 h-6" />
            </div> */}
            <Link to='/keranjang'>
              <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
                <FiShoppingCart size={25} />
              </button>
            </Link>
            <button className="text-gray-500 hover:text-gray-800 focus:outline-none">
              <FaRegUser size={24} />
            </button>
            <button
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              onClick={toggleSidebar}
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform z-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b">
          {/* <h2 className="text-2xl font-nabla">UNIVY</h2> */}
          <img src={UnifyIcon} alt="Unify Logo" className="w-[60px] ml-3" />
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiX size={24} />
          </button>
        </div>
        <div className='p-2'>
          <div className="flex items-center w-[240px] bg-gray-100 rounded-full px-3 py-1 mt-3">
            <input
              type="text"
              placeholder="Mau cari apa..."
              className="bg-transparent focus:outline-none text-gray-700 font-poppins flex-grow"
            />
            <FiSearch className="text-gray-500 text-left w-6 h-6" />
          </div>

          {/* Menu Sidebar */}
          <ul className="p-4 space-y-4">
            <li>
              <Link to="/" className="text-gray-700 font-poppins hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link to="/product" className="text-gray-700 font-poppins hover:text-gray-900">
                Product
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 font-poppins hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="text-gray-700 font-poppins hover:text-gray-900">
                Wishlist
              </Link>
            </li>
          </ul>

          {/* Button Sign Up & Login di Sidebar */}
          <div className="flex flex-col space-y-4 px-4 mt-4">
            {isLoggedIn ? (
              // Tampilkan ikon user jika login
              <button onClick={handleLogout} className="font-poppins-login button-logout hover:bg-orange-600">
                Logout
              </button>
            ) : (
              // Tampilkan tombol Sign Up dan Login jika belum user login
              <>
                <Link to="/register" className="font-poppins-sign button-sign hover:bg-cyan-200">
                  Sign Up
                </Link>
                <Link to="/login" className="font-poppins-login button-login hover:bg-blue-500">
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;