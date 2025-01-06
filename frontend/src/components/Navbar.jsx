import React, { useState, useEffect } from 'react';
import { FiHeart, FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Fungsi toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full bg-white p-4 shadow transition-transform duration-300 z-10 scroll-smooth ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Nama Markas */}
          <h1 className="text-2xl font-normal ml-6 font-nabla">UNIVY</h1>

          {/* Menu Navigasi */}
          <ul className="hidden lg:flex space-x-6 flex-grow justify-center">
            <li>
              <a
                href="#"
                className="hover:text-zinc-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-blue-500 underline-offset-4"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-blue-500 underline-offset-4"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-blue-500 underline-offset-4"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-blue-500 underline-offset-4"
              >
                About
              </a>
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

          {/* Button Sign Up, Login, dan Ikon */}
          <div className="hidden lg:flex items-center space-x-4">
            <FiHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
            <FiShoppingCart className="text-gray-500 hover:text-gray-800 cursor-pointer" size={24} />
            <button className="font-poppins-sign button-sign hover:bg-cyan-200 ">Sign Up</button>
            <button className="font-poppins-login button-login hover:bg-blue-500">Login</button>
          </div>

          {/* Tombol Hamburger */}
          <button
            className="lg:hidden text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiMenu size={24} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow transform transition-transform z-20 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-2xl font-nabla">UNIVY</h2>
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={toggleSidebar}
          >
            <FiX size={24} />
          </button>
        </div>
        <div className='p-2'>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-1 mt-3">
            <input
              type="text"
              placeholder="Mau cari apa..."
              className="bg-transparent focus:outline-none text-gray-700 font-poppins flex-grow"
            />
            <FiSearch className="text-gray-500" size={20} />
          </div>

          {/* Menu Sidebar */}
          <ul className="p-4 space-y-4">
            <li>
              <a href="#" className="text-gray-700 font-poppins hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-poppins hover:text-gray-900">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-poppins hover:text-gray-900">
                Product
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 font-poppins hover:text-gray-900">
                About
              </a>
            </li>
          </ul>

          {/* Icon Favorit dan Keranjang */}
          <div className="flex items-center justify-center space-x-4 my-4">
            <FiHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
            <FiShoppingCart className="text-gray-500 hover:text-gray-800 cursor-pointer" size={24} />
          </div>
          {/* Button Sign Up & Login */}
          <div className="flex flex-col space-y-4 px-4 mt-4">
            <button className="font-poppins-sign button-sign hover:bg-cyan-200">Sign Up</button>
            <button className="font-poppins-login button-login hover:bg-blue-500">Login</button>
          </div>
        </div>
      </div>

      {/* Overlay untuk menutup sidebar */}
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
