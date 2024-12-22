import React from 'react';
import { FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi'; // Icon hati,keranjang,search

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* NAMA MARKAS */}
        <h1 className="text-2xl font-normal ml-6 font-nabla">UNIVY</h1>

        {/* Menu Navigasi Home, Shop, Product, About */}
        <ul className="flex space-x-6 flex-grow justify-center">
          <li>
            <a
              href="#"
              className="hover:text-zinc-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-gray-400 underline-offset-4">
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-gray-400 underline-offset-4">
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-gray-400 underline-offset-4">
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-gray-950 mx-2 text-gray-500 font-poppins hover:underline decoration-2 decoration-gray-400 underline-offset-4">
              About
            </a>
          </li>
        </ul>

        {/* Kolom Pencarian */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-1 space-x-6 mr-6">
          <input
            type="text"
            placeholder="Mau cari apa..."
            className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins"
          />
          <FiSearch className="text-gray-500" size={20} />
        </div>

        {/* Icon Favorit dan Keranjang */}
        <div className="flex items-center space-x-4 mr-6">
          <FiHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
          <FiShoppingCart className="text-gray-500 hover:text-gray-800 cursor-pointer" size={24} />
        </div>

        {/* Button Sign Up & Login */}
        <div className="flex items-center space-x-4">
            <button className='font-poppins-sign button-sign'>Sign Up</button>
            <button className='font-poppins-login button-login'>Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
