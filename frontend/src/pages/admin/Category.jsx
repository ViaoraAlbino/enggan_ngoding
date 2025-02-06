import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Gambar yang diimpor
import aksessoris from '../../assets/gambar/Admin/aksessoris.jpg';
import kaos from '../../assets/gambar/Admin/kaos.jpg';
import mug from '../../assets/gambar/Admin/mug.jpg';
import polaroid from '../../assets/gambar/Admin/polaroid.jpg';
import tumbler from '../../assets/gambar/Admin/tumbler.jpg';
import totebag from '../../assets/gambar/Admin/totebag.jpg';
import sticker from '../../assets/gambar/Admin/sticker.jpg';
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

const ACategory = () => {
    const categories = [
        { name: 'Kaos', count: 14, image: kaos },
        { name: 'Mug', count: 14, image: mug },
        { name: 'Tas', count: 14, image: totebag },
        { name: 'Aksesoris', count: 14, image: aksessoris },
        { name: 'Tumbler', count: 14, image: tumbler },
        { name: 'Stiker', count: 14, image: sticker },
        { name: 'Polaroid', count: 14, image: polaroid },
    ];

    return (

            <div className="font-poppins p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-blue-800 font-bold text-2xl">Daftar Kategori</h1>
                    <button className="text-white bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-700">
                        Tambah Kategori
                    </button>
                </div>
                <hr className="w-full h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded-lg dark:bg-gray-400" />

                {/* Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                        >
                            {/* Gambar */}
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-full h-48 object-cover"
                            />
                            {/* Keterangan */}
                            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white p-2 flex  justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold">{category.name}</h2>
                                    <p className="text-sm">{category.count} Produk</p>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <button>
                                        <FaPencilAlt className=' size-5 font-bold' />
                                    </button>
                                    <button>
                                        <FaTrashAlt className=' size-5 font-bold'/>
                                    </button>          
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

    );
};

export default ACategory;
