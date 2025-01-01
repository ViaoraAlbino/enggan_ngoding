import React from 'react';
import Pa from '../assets/gambar/test.jpg';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="bg-white rounded mb-8 w-full h-auto hover:bg-gray-100 transition-colors duration-300">
    <div className='overflow-hidden'>
      <img src={Pa} alt="Project 1" className="w-full h-80 object-cover mb-4 rounded" />
    </div>
      
      <h3 className="font-poppins-judul-product mb-2 text-black text-left ml-2">{title}</h3>
      <p className="text-black font-poppins-sub-judul-product text-left ml-2 font-semibold mb-2.5">{price}</p>
  </div>  
  )
};

const Product = () => {
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/300",
      title: "Nike Air Zoom",
      price: "Rp.50.000",
      description: "Lightweight running shoes."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Nike Training Pro",
      price: "Rp.65.000",
      description: "Versatile training gear."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Nike Training Kroco",
      price: "Rp.35.000",
      description: "Versatile training gear."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Nike Kw",
      price: "Rp.100.000",
      description: "Versatile training gear."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Nike Beladiri",
      price: "Rp.1.000",
      description: "Versatile training gear."
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300",
      title: "Nike Belasungkawa",
      price: "Rp.999.999",
      description: "Versatile training gear."
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};


export default Product;
