import React, { useState } from 'react';

const ProductDetails = () => {
  const images = [
    "src/assets/gambar/me.jpg",
    "src/assets/gambar/Kaos/kaos5.jpeg",
    "src/assets/gambar/Kaos/kaos1.jpeg"
  ];

  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Indeks gambar yang aktif

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-md mt-20">
        <div className='flex space-x-8'>
          {/* Bagian Gambar */}
          <div>
            <div className="relative lg:w-96 lg:h-96 sm:w-72 sm:h-72">
              <img src={images[currentIndex]} alt="Produk" className='w-full h-full object-cover rounded-lg' />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-full"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-800 text-white rounded-full"
              >
                ❯
              </button>
            </div>
            <div className="flex mt-4 space-x-2">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`lg:w-16 lg:h-16 sm:w-12 sm:h-12 cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Bagian Informasi Produk */}
          <div className='2'>
            <h6 className='font-poppins-produkdetail-h text-left'>KAOS CUSTOM</h6>
            <h6 className='font-poppins-produkdetail-s text-left'>Rp.50.000</h6>
            <table className='border border-none w-full h-64'>
              <tbody>
                <tr className='space-x-5'>
                  <td className='font-poppins-produkdetail-t text-center pr-4'>Warna</td>
                  <td>
                    <div className='flex space-x-5'>
                      <div className='border-2 rounded-md flex w-auto h-auto p-2 space-x-5 justify-center items-center'>
                        <img src="src/assets/gambar/Kaos/kaos5.jpeg" className='w-10 h-10' alt="test" />
                        <button className='font-poppins-produkdetail-t text-center focus:outline-none focus:ring-2 focus:ring-blue-500'>
                          Putih
                        </button>
                      </div>
                      <div className='border-2 rounded-md flex w-auto h-auto p-2 space-x-5 justify-center items-center'>
                        <img src="src/assets/gambar/Kaos/kaos1.jpeg" className='w-10 h-10' alt="test" />
                        <button className='font-poppins-produkdetail-t text-center focus:outline-none focus:ring-2 focus:ring-blue-500'>
                          Hitam
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='space-x-5'>
                  <td className='font-poppins-produkdetail-t text-center pr-4'>Ukuran</td>
                  <td>
                    <div className='flex space-x-5'>
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className='border-2 rounded-md flex w-auto h-auto px-5 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        >
                          <h6 className='font-poppins-produkdetail-t20 text-center'>{size}</h6>
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
                <tr className='space-x-5'>
                  <td className='font-poppins-produkdetail-t text-center pr-4'>Jumlah</td>
                  <td>
                    <div className="flex items-center space-x-6">
                      <div className='border'>
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          className="px-4 py-2 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          -
                        </button>
                        <span className='px-4'>{quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(1)}
                          className="px-4 py-2 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className='space-x-5 mb-4'>
                  <td className='font-poppins-produkdetail-t text-center pr-4'>File Desain</td>
                  <td>
                    <input type="file" onChange={handleFileChange} className="block w-full text-gray-700 border-2 rounded-md p-3" />
                    {file && <p className="mt-2 text-gray-600">{file.name}</p>}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='flex mt-6 space-x-5'>
              <button className="px-6 py-2 transition ease-in-out delay-150 bg-blue-700 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 text-white font-monster-btn-pd rounded-lg">Masukkan Keranjang</button>
              <button className="px-6 py-2 transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-monster-btn-pd rounded-lg">Pesan Sekarang</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=''>
          <button className=''>Deskripsi</button>
          <button>Reviews</button>
        </div>
        <div className='max-w-5xl mx-auto bg-white p-10 rounded-lg shadow-md mt-14'>
          
        </div>
      </div> 
    </div>
  );
};

export default ProductDetails;