
import React from 'react';
import React, { useState } from 'react';
import Pa from '../assets/gambar/test.jpg';
import Shopping from '../assets/icons/Cart-blue.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import H1 from '../assets/icons/heart-regular.svg';
// import H2 from '../assets/icons/heart-solid.svg';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";

// Ini untuk ukuran card produk
const ProductCard = ({ image, title, price, description }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  // Fungsi untuk toggle favorite state
  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-white rounded mb-8 w-full h-auto hover:bg-gray-100 ease-out delay-150 transition-colors duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt="Project 1"
          className="w-full h-72 object-cover mb-4 rounded transform hover:scale-105 transition-transform ease-out duration-300"
        />
        {/* Icon Favorit */}
        <div
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow cursor-pointer"
          onClick={toggleFavorite}
        >
          <div className='w-full h-full transition-transform duration-300 transform hover:scale-110'>
            <span>
              {isFavorited ? <MdFavorite className='text-red-500' /> : <MdFavoriteBorder />}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div>
          <h3 className="font-poppins-judul-products mb-2 text-black text-left ml-2">{title}</h3>
          <p className="text-black font-poppins-sub-judul-products text-left ml-2 font-semibold mb-2.5">{price}</p>
        </div>
        <img
          src={Shopping}
          alt="shopping"
          className="ml-auto mr-4 w-6 h-6 cursor-pointer mb-4"
        />
      </div>

    </div>
  );
};

// Ini digunakan untuk menampilkan produk
const Product = () => {
  const products = [
    {
      id: 1,
      image: "src/assets/gambar/Kaos/kaos1.jpeg",
      title: "Nike Air Zoom",
      price: "Rp.50.000",
      description: "Lightweight running shoes."
    },
    {
      id: 2,
      image: "src/assets/gambar/Kaos/kaos2.jpeg",
      title: "Nike Training Pro",
      price: "Rp.65.000",
      description: "Versatile training gear."
    },
    {
      id: 3,
      image: "src/assets/gambar/Kaos/kaos3.jpeg",
      title: "Nike Training Kroco",
      price: "Rp.35.000",
      description: "Versatile training gear."
    },
    {
      id: 4,
      image: "src/assets/gambar/Kaos/kaos4.jpeg",
      title: "Nike Kw",
      price: "Rp.100.000",
      description: "Versatile training gear."
    },
    {
      id: 5,
      image: "src/assets/gambar/Kaos/kaos5.jpeg",
      title: "Nike Beladiri",
      price: "Rp.1.000",
      description: "Versatile training gear."
    },
    {
      id: 6,
      image: "src/assets/gambar/Kaos/kaos6.jpeg",
      title: "Nike Belasungkawa",
      price: "Rp.999.999",
      description: "Versatile training gear."
    },
    {
      id: 7,
      image: "src/assets/gambar/Kaos/kaos7.jpeg",
      title: "Nike Asli Nganjuk",
      price: "Rp.24.000",
      description: "Versatile training gear."
    },
    {
      id: 8,
      image: "src/assets/gambar/Kaos/kaos8.jpeg",
      title: "Nike Belasungkawa Lagi",
      price: "Rp.999.999",
      description: "Versatile training gear."
    },
    {
      id: 9,
      image: "src/assets/gambar/Kaos/kaos9.jpeg",
      title: "Nike Belasungkawa Lagi",
      price: "Rp.999.999",
      description: "Versatile training gear."
    },
  ];

  // Ini jumlah kolom produk yang akan ditampilkan kembali
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Product;