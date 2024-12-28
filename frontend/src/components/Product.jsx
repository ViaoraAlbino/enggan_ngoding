import React from 'react';

const ProductCard = ({ image, title, price, description }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Gambar Produk */}
      <div className="w-full h-80 bg-gray-200 group-hover:opacity-80 transition-opacity duration-300">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>

      {/* Informasi Produk */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
        <p className="text-lg font-medium text-gray-700 mt-2">{price}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>

        {/* Tombol Add to Cart */}
        <button className="mt-4 w-full py-2 bg-black text-white font-semibold rounded-md transform group-hover:scale-105 transition-all duration-300">
          Add to Cart
        </button>
      </div>

      {/* Hover Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-center w-full h-full text-white text-xl">
          Quick View
        </div>
      </div>
    </div>
  );
};

const Product = () => {
    const products = [
      {
        id: 1,
        image: "https://via.placeholder.com/300",
        title: "Nike Air Zoom",
        price: "$120",
        description: "Lightweight running shoes."
      },
      {
        id: 2,
        image: "https://via.placeholder.com/300",
        title: "Nike Training Pro",
        price: "$150",
        description: "Versatile training gear."
      },
      // Tambahkan produk lainnya sesuai kebutuhan
    ];
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  };
  

export default Product;
