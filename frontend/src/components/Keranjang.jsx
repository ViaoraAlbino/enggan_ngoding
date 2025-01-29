import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Keranjang = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className="bg-blue-200 min-h-screen">
      <div className="container mx-auto flex-grow p-4 sm:p-16 pt-10">
        {/* Header */}
        <h2 className="font-poppins-32-500 text-blue-800">
          Keranjang Belanja
        </h2>

        {/* Container utama */}
        <div className="bg-white rounded-lg shadow-md p-4">
          {/* Pilih Semua */}
          <div className="border-b pb-4">
            <label className="flex items-center space-x-2 ">
              <input type="checkbox" className="form-checkbox w-4 sm:w-5 h-4 sm:h-5" />
              <span className="font-poppins-24-400">Pilih semua</span>
            </label>
          </div>

          {/* Item 1 */}
          <div className="flex items-center space-x-4 py-4 border-b px-2 sm:px-5">
            {/* Checkbox */}
            <input type="checkbox" className="form-checkbox w-4 h-4" />

            {/* Gambar */}
            <img
              src="src/assets/gambar/Kaos/kaos1.jpeg"
              alt="Kaos Hitam"
              className="w-20 h-20 sm:w-36 sm:h-36 object-cover rounded-md"
            />

            {/* Detail Produk */}
            <div className="flex-grow">
              <h3 className="font-poppins-24-500">Kaos Custom</h3>
              <p className="font-poppins-20-400">Ukuran L</p>
              <p className="font-poppins-20-400">Warna Hitam</p>
              <button className="text-blue-600 font-poppins-20-400">Ubah</button>
            </div>

            {/* Harga dan Jumlah */}
            <div className="flex flex-col items-center space-y-3">
              <p className="font-poppins-24-600">Rp 50.000</p>
              <div className="flex items-center space-x-2 sm:space-x-6">
                <div className="border flex items-center">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-2 py-1 sm:px-4 sm:py-2 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    -
                  </button>
                  <span className="px-2 sm:px-4">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-2 py-1 sm:px-4 sm:py-2 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    +
                  </button>
                </div>
                <button className="text-red-600">
                  <FaTrashAlt size={16} className="sm:text-[18px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-200 rounded-lg shadow-md p-4 mt-4 mx-auto w-full sm:w-3/5">
            <div className="flex justify-between p-4 font-moster-24-600">
              <p>Total Barang 1</p>
              <p>Rp 50.000</p>
            </div>
            <button className="bg-blue-300 text-blue-600 hover:text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:bg-sky-700 duration-300 w-full font-moster-20-600 rounded-lg py-2 px-4 mt-auto">
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keranjang;