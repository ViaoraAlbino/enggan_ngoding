import React, { useState } from 'react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState(null);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="p-6 bg-blue-100 min-h-screen mt-14">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <img src="src/assets/gambar/test.jpg" alt="Kaos Custom" className="w-80 h-auto" />
            <div className="flex mt-4 space-x-2">
              <img src="src/assets/gambar/me.jpg" alt="Front" className="w-16 h-16" />
              <img src="src/assets/gambar/test.jpg" alt="Back" className="w-16 h-16" />
              <img src="src/assets/gambar/test.jpg" alt="Back" className="w-16 h-16" />
            </div>
          </div>
          <div className="flex-1 mt-6 md:mt-0 md:ml-6">
            <h1 className="text-2xl font-bold">Kaos Custom</h1>
            <p className="text-xl font-bold">Rp 50.000</p>
            <div className="mt-4">
              <div className="flex space-x-6">
                <label className="block text-gray-700">Warna</label>
                <button className="px-4 py-2 bg-gray-200 rounded">
                    <div className='flex space-x-4 items-center'>
                        <img src="src/assets/gambar/test.jpg" alt="white" className='w-15 h-10'/>
                        Putih
                    </div>
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded">
                    <div className='flex space-x-4 items-center'>
                        <img src="src/assets/gambar/me.jpg" alt="black" className='w-15 h-10' />
                        Hitam
                    </div>
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex space-x-6">
                <label className="block text-gray-700">Ukuran</label>
                <button className="px-4 py-2 bg-gray-200 rounded">S</button>
                <button className="px-4 py-2 bg-gray-200 rounded">M</button>
                <button className="px-4 py-2 bg-gray-200 rounded">L</button>
                <button className="px-4 py-2 bg-gray-200 rounded">XL</button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center space-x-6">
                <label className="block text-gray-700">Jumlah</label>
                <button onClick={() => handleQuantityChange(-1)} className="px-4 py-2 bg-gray-200 rounded">-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="px-4 py-2 bg-gray-200 rounded">+</button>
              </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center space-x-6">
                    <label className="block text-gray-700">File Desain</label>
                    <input type="file" onChange={handleFileChange} className="block w-full text-gray-700" />
                    {file && <p className="mt-2 text-gray-600">{file.name}</p>}
                </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="px-6 py-2 bg-sky-200 text-sky-700 rounded-lg">Masukkan Keranjang</button>
              <button className="px-6 py-2 bg-sky-700 text-white rounded-lg">Pesan Sekarang</button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-bold">Deskripsi</h2>
          <p className="mt-2 text-gray-600">
            Bahan: Cotton Combed 24s <br />
            Teknik Cetak: Sablon DTG <br />
            Area Desain: 30x40 cm <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
