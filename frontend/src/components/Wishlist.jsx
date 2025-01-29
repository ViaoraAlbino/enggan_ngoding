import React from 'react';
import { Select, Space } from 'antd';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className="bg-blue-200 min-h-screen">
            <div className="container mx-auto flex-grow p-4 sm:p-16 pt-10">
                {/* Header */}
                <h2 className="font-poppins-32-500 text-blue-800 text-center sm:text-left">
                    Wishlist Saya
                </h2>

                {/* Container utama */}
                <div className="bg-white rounded-lg p-6 sm:p-10 shadow-md">
                    <div className="bg-white rounded-sm border-2 shadow-lg p-4 mb-2">
                        {/* Item */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 py-4 px-2 sm:px-5">
                            {/* Gambar */}
                            <img
                                src="src/assets/gambar/Kaos/kaos1.jpeg"
                                alt="Kaos Hitam"
                                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-md"
                            />

                            {/* Detail Produk */}
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-poppins-24-500">Kaos Custom</h3>
                                <p className="font-poppins-20-400">Warna: Hitam, Putih</p>
                                <button className="font-poppins-20-400 text-red-500">
                                    Remove
                                </button>
                            </div>

                            {/* Harga dan Jumlah */}
                            <div className="flex flex-col items-center sm:items-start space-y-3">
                                {/* Warna & Ukuran */}
                                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-6">
                                    <Space wrap>
                                        <Select
                                            defaultValue="Warna"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'Hitam',
                                                    label: 'Hitam',
                                                },
                                                {
                                                    value: 'Putih',
                                                    label: 'Putih',
                                                },
                                            ]}
                                        />
                                        <Select
                                            defaultValue="Ukuran"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'S',
                                                    label: 'S',
                                                },
                                                {
                                                    value: 'M',
                                                    label: 'M',
                                                },
                                                {
                                                    value: 'L',
                                                    label: 'L',
                                                },
                                                {
                                                    value: 'XL',
                                                    label: 'XL',
                                                },
                                                {
                                                    value: 'XXL',
                                                    label: 'XXL',
                                                },
                                            ]}
                                        />
                                    </Space>
                                </div>

                                <p className="font-poppins-16-400 text-green-500">Tersedia</p>

                                {/* Button Masukkan Keranjang */}
                                <Link to="/keranjang">
                                    <button className="w-full px-6 py-3 transition ease-in-out delay-150 bg-blue-200 text-white hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 font-monster-btn-pd-3 rounded-lg">
                                        Masukkan Keranjang
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-sm border-2 shadow-lg p-4 mb-2">
                        {/* Item */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 py-4 px-2 sm:px-5">
                            {/* Gambar */}
                            <img
                                src="src/assets/gambar/Kaos/kaos1.jpeg"
                                alt="Kaos Hitam"
                                className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-md"
                            />

                            {/* Detail Produk */}
                            <div className="flex-grow text-center sm:text-left">
                                <h3 className="font-poppins-24-500">Kaos Custom</h3>
                                <p className="font-poppins-20-400">Warna: Hitam, Putih</p>
                                <button className="font-poppins-20-400 text-red-500">
                                    Remove
                                </button>
                            </div>

                            {/* Harga dan Jumlah */}
                            <div className="flex flex-col items-center sm:items-start space-y-3">
                                {/* Warna & Ukuran */}
                                <div className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-6">
                                    <Space wrap>
                                        <Select
                                            defaultValue="Warna"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'Hitam',
                                                    label: 'Hitam',
                                                },
                                                {
                                                    value: 'Putih',
                                                    label: 'Putih',
                                                },
                                            ]}
                                        />
                                        <Select
                                            defaultValue="Ukuran"
                                            style={{
                                                width: 120,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'S',
                                                    label: 'S',
                                                },
                                                {
                                                    value: 'M',
                                                    label: 'M',
                                                },
                                                {
                                                    value: 'L',
                                                    label: 'L',
                                                },
                                                {
                                                    value: 'XL',
                                                    label: 'XL',
                                                },
                                                {
                                                    value: 'XXL',
                                                    label: 'XXL',
                                                },
                                            ]}
                                        />
                                    </Space>
                                </div>

                                <p className="font-poppins-16-400 text-green-500">Tersedia</p>

                                {/* Button Masukkan Keranjang */}
                                <Link to="/keranjang">
                                    <button className="w-full px-6 py-3 transition ease-in-out delay-150 bg-blue-200 text-white hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 font-monster-btn-pd-3 rounded-lg">
                                        Masukkan Keranjang
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;
