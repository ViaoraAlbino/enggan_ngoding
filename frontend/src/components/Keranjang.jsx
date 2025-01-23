import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Keranjang = () => {
    const [quantity, setQuantity] = useState(1);
    const [file, setFile] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0); // Indeks gambar yang aktif
    const [activeTab, setActiveTab] = useState('Deskripsi');
    const handleQuantityChange = (amount) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
    };
    return (
        // Main content
        <div className="bg-blue-200">
            <div className="container mx-auto flex-grow p-16 pt-20">
                <h2 className="font-poppins-32-500 text-left text-blue-800 mt-2 mb-5">Keranjang Belanja</h2>
                <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="border-b pb-4">
                        <label className="flex items-center space-x-2 font-poppins-24-300">
                            <input type="checkbox" className="form-checkbox w-5 h-5" />
                            <span>Pilih semua</span>
                        </label>
                    </div>

                    {/* item 1 */}
                    <div className="flex items-center space-x-4 py-4 border-b px-5">
                        <input type="checkbox" className="form-checkbox w-4 h-4" />
                        <img src="src/assets/gambar/Kaos/kaos1.jpeg" alt="Kaos Hitam" className="w-36 h-36 object-cover rounded-md" />
                        <div className="flex-grow">
                            <h3 className="text-left font-poppins-24-500">Kaos Custom</h3>
                            <p className="font-poppins-20-400 text-left">Ukuran L</p>
                            <p className="font-poppins-20-400 text-left">Warna Hitam</p>
                            <button className="text-blue-600 font-poppins-20-400">Ubah</button>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <p className="font-poppins-24-600">Rp 50.000</p>
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
                                <button className="text-red-600"><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>

                    {/* item 2 */}
                    <div className="flex items-center space-x-4 py-4 border-b px-5">
                        <input type="checkbox" className="form-checkbox w-4 h-4" />
                        <img src="src/assets/gambar/Kaos/kaos2.jpeg" alt="Kaos Hitam" className="w-36 h-36 object-cover rounded-md" />
                        <div className="flex-grow">
                            <h3 className="text-left font-poppins-24-500">Kaos Custom</h3>
                            <p className="font-poppins-20-400 text-left">Ukuran L</p>
                            <p className="font-poppins-20-400 text-left">Warna Hitam</p>
                            <button className="text-blue-600 font-poppins-20-400">Ubah</button>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <p className="font-poppins-24-600">Rp 50.000</p>
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
                                <button className="text-red-600"><FaTrashAlt /></button>
                            </div>
                        </div>
                    </div>

                    {/* summary */}
                    <div className="bg-gray-200 rounded-lg shadow-md p-4 mt-4 mx-auto w-3/5">
                        <div className="flex justify-between p-4 font-moster-24-600">
                            <p className="px-4">Total Barang 1</p>
                            <p className="">Rp 50.000</p>
                        </div>
                        <button className="bg-blue-300 text-blue-600 hover:text-white transition ease-in-out delay-150 hover:hover:-translate-y-1 hover:scale-100 hover:bg-sky-700 duration-300 w-full font-moster-20-600 rounded-lg py-2 px-4 mt-auto">Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Keranjang;