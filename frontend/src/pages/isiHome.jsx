import React, { useState } from 'react';
import Home from './Home';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Shopping from '../assets/icons/Cart-blue.png';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdKeyboardArrowRight } from "react-icons/md";

const isiHome = () => {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const fadeIn = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className='mx-auto w-full overflow-hidden'>
            <Home />
            {/* Kategori */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-blue-100 max-w-7xl mt-5 px-3 rounded-sm shadow-xl mx-auto">
                    <h6 className="font-kanit-bold-k text-left px-8 py-2">KATEGORI</h6>
                    <hr className="border-t-2 mx-8 border-gray-500" />
                    <Kategori />
                </div>
            </motion.section>
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-blue-100 max-w-7xl mt-10 px-3 rounded-sm shadow-xl mx-auto">
                    <h6 className="font-kanit-bold-k text-left px-8 py-2">FLASHSALE</h6>
                    <hr className="border-t-2 mx-8 border-gray-500" />
                    <Flashsale />
                </div>
            </motion.section>

            {/* Produk Unggulan */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-blue-100 max-w-7xl px-3 rounded-sm shadow-xl mx-auto">
                    <h6 className="font-kanit-bold-kd text-center px-8 py-2">PRODUK UNGGULAN KAMI</h6>
                    <hr className="border-t-2 mx-8 border-gray-500" />
                    <Unggulan />
                </div>
            </motion.section>

            {/* Rekomendasi */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.8 }}
            >
                <div className="bg-blue-100 max-w-7xl mb-5 px-3 rounded-sm shadow-xl mx-auto">
                    <h6 className="font-kanit-bold-kd text-center px-8 py-2">REKOMENDASI</h6>
                    <hr className="border-t-2 mx-8 border-gray-500" />
                    <Rekomendasi />
                </div>
            </motion.section>
        </div>
    );
};

const Kategori = () => {
    const kategori = [
        { id: 1, image: 'src/assets/gambar/Kaos/kaos1.jpeg', description: 'Kaos' },
        { id: 2, image: 'src/assets/gambar/Tumbler/tumbler1.jpeg', description: 'Tumbler' },
        { id: 3, image: 'src/assets/gambar/Mugs/mug1.jpg', description: 'Mug' },
        { id: 4, image: 'src/assets/gambar/Bag/ToteBag/tote1.jpeg', description: 'Totebag' },
        { id: 5, image: 'src/assets/gambar/Mugs/mug2.jpeg', description: 'Aksesoris' },
        { id: 6, image: 'src/assets/gambar/Stiker/stiker2.jpg', description: 'Stiker' },
        { id: 7, image: 'src/assets/gambar/Polaroid/foto1.jpeg', description: 'Polaroid' },
        { id: 8, image: 'src/assets/gambar/Bag/GoodieBag/bag7.jpeg', description: 'Tas Punggung' },
    ];

    return (
        <div className="flex flex-wrap justify-center gap-6 mb-8 mt-4">
            {kategori.map((item) => (
                <div key={item.id} className="rounded w-32 h-42 hover:shadow-md transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                        <Link to='/product'>
                            <img
                                src={item.image}
                                alt={item.description}
                                className="w-32 h-32 object-cover mb-4 rounded-t transform hover:scale-105 duration-300"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link to='/product'>
                            <h3 className="font-semibold text-base mb-2 text-black text-center">
                                {item.description}
                            </h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

const FlashsaleCard = ({ image, name }) => {
    return (
        <div className="flex flex-col sm:flex-row rounded-lg space-y-2 space-x-0 sm:space-y-0 sm:space-x-4 mb-6 p-4">
            {/* Gambar Utama */}
            <div className="flex-none w-full sm:w-2/6 aspect-[2/1]  rounded-lg overflow-hidden shadow-lg relative">
                <img
                    src={image[0]} // Gambar utama
                    alt={name}
                    className="w-full h-full object-cover rounded-lg"
                />
                <div className='absolute top-0 right-0 sm:mr-6 sm:mt-3 mr-3 mt-3 text-right'>
                    <h6 className='font-inter-16-600 leading-none '>Produk Baru</h6>
                    <h6 className='font-inter-20-600 leading-7'>Goodie Bag</h6>
                    <h6 className='font-inter-13-400 leading-none'>Diskon 15%</h6>
                    <Link to='/productdetail'><button className='bg-white bg-opacity-35 px-2 font-monster-13-500 rounded-full'>Buy Now</button></Link>
                </div>
            </div>

            {/* Kolom Gambar Tambahan */}
            <div className="flex flex-col flex-grow sm:space-y-4 space-y-2">
                {/* Baris Pertama */}
                <div className="flex space-x-2 sm:space-x-4">
                    <div className="flex-1 aspect-[3/4] rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={image[1]} // Gambar tambahan 1
                            alt={`${name} 1`}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 ml-3 mt-3 text-left'>
                            <h6 className='font-poppins-13-700 leading-none sm:leading-none bg-blue-700 sm:w-[70px] w-[50px] text-white sm:px-2 px-0 py-2 text-center'>10% OFF</h6>
                            <h6 className='font-inter-20-700 leading-5 sm:leading-6'>Tumbler</h6>
                            <div className='leading-3'>
                                <Link to='/productdetail'>
                                    <button>
                                        <div className='flex items-center font-poppins-10-500'>
                                            <h6>Buy Now</h6>
                                            <MdKeyboardArrowRight size={14} className="ml-1" />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 aspect-[3/4] rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={image[2]} // Gambar tambahan 2
                            alt={`${name} 2`}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 ml-3 mt-3 text-left'>
                            <h6 className='font-poppins-13-700 leading-none sm:leading-none bg-blue-700 sm:w-[70px] w-[50px] text-white sm:px-2 px-0 py-2 text-center'>10% OFF</h6>
                            <h6 className='font-inter-20-700 leading-5 sm:leading-6'>Pin Custom</h6>
                            <div className='leading-3'>
                                <Link to='/productdetail'>
                                    <button>
                                        <div className='flex items-center font-poppins-10-500'>
                                            <h6>Buy Now</h6>
                                            <MdKeyboardArrowRight size={14} className="ml-1" />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 aspect-[3/4] rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={image[3]} // Gambar tambahan 3
                            alt={`${name} 3`}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 ml-3 mt-3 text-left'>
                            <h6 className='font-poppins-13-700 leading-none sm:leading-none bg-blue-700 sm:w-[70px] w-[50px] text-white sm:px-2 px-0 py-2 text-center'>10% OFF</h6>
                            <h6 className='font-inter-20-700 leading-5 sm:leading-6'>Kaos</h6>
                            <div className='leading-3'>
                                <Link to='/productdetail'>
                                    <button>
                                        <div className='flex items-center font-poppins-10-500'>
                                            <h6>Buy Now</h6>
                                            <MdKeyboardArrowRight size={14} className="ml-1" />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Baris Kedua */}
                <div className="flex space-x-2 sm:space-x-4">
                    <div className="flex-1 aspect-[16/11] rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={image[4]} // Gambar tambahan 4
                            alt={`${name} 4`}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 ml-3 mt-3 text-left'>
                            <h6 className='font-poppins-13-700 leading-none sm:leading-none bg-blue-700 sm:w-[70px] w-[50px] text-white sm:px-2 px-0 py-2 text-center'>10% OFF</h6>
                            <h6 className='font-inter-20-700-t leading-5 sm:leading-9'>Mugs</h6>
                            <div className='leading-3'>
                                <Link to='/productdetail'>
                                    <button>
                                        <div className='flex items-center font-poppins-10-500'>
                                            <h6>Buy Now</h6>
                                            <MdKeyboardArrowRight size={14} className="ml-1" />
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 aspect-[16/11] rounded-lg shadow-lg overflow-hidden relative">
                        <img
                            src={image[5]} // Gambar tambahan 5
                            alt={`${name} 5`}
                            className="w-full h-full object-cover"
                        />
                        <div className='absolute top-0 left-0 ml-3 mt-3 text-left'>
                            <h6 className='font-poppins-13-700 leading-none sm:leading-none bg-blue-700 sm:w-[70px] w-[50px] text-white sm:px-2 px-0 py-2 text-center'>10% OFF</h6>
                            <h6 className='font-inter-20-700-t leading-5 sm:leading-9'>Aksesoris</h6>
                            <div className='leading-3'>
                                <Link to='/productdetail'>
                                    <button>
                                        <div className='flex items-center font-poppins-10-500'>
                                            <h6>Buy Now</h6>
                                            <MdKeyboardArrowRight size={14} className="ml-1" />
                                        </div>
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

// Contoh Data untuk Satu Komponen
const flashsaleData = {
    name: 'Goodie Bag',
    image: [
        'src/assets/gambar/bag/GoodieBag/bag1.jfif', // Gambar utama
        'src/assets/gambar/bag/GoodieBag/bag2.jfif', // Gambar tambahan 1
        'src/assets/gambar/bag/GoodieBag/bag3.jfif', // Gambar tambahan 2
        'src/assets/gambar/bag/GoodieBag/bag4.jfif', // Gambar tambahan 3
        'src/assets/gambar/bag/GoodieBag/bag5.jfif', // Gambar tambahan 4
        'src/assets/gambar/bag/GoodieBag/bag6.jfif', // Gambar tambahan 5
    ],
};

// Komponen Utama
const Flashsale = () => {
    return (
        <div className="container mx-auto px-4">
            <FlashsaleCard {...flashsaleData} />
        </div>
    );
};



const UnggulanCard = ({ image, description }) => {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

    const handleNext = () => {
        setStartIndex((prevIndex) =>
            prevIndex + itemsPerPage >= unggulan.length ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
            prevIndex === 0 ? unggulan.length - itemsPerPage : prevIndex - 1
        );
    };

    // const displayedItems = unggulan.slice(startIndex, startIndex + itemsPerPage);
    return (
        <div className="relative mb-5 mt-4">
            {/* Carousel Wrapper */}
            <div className="flex flex-wrap justify-center gap-6">
                {/* {displayedItems.map((item) => ( */}
                <div
                    // key={item.id}
                    className="rounded-2xl shadow-lg w-[110px] h-[200px] sm:w-[200px] sm:h-[300px] md:w-[200px] md:h-[300px] overflow-hidden relative hover:shadow-md transition-shadow duration-300"
                >
                    <img
                        src={image}
                        alt={description}
                        className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute bottom-0 w-full text-white font-monster-20-700 text-center py-2 bg-black bg-opacity-10">
                        <h3 className="font-bold text-xs sm:text-sm md:text-base">
                            {description}
                        </h3>
                        <Link to='/productdetail'>
                            <button className="bg-white w-20 h-6 sm:w-24 sm:h-8 text-black bg-opacity-50 mt-2 font-monster-11-500 text-center px-2 rounded-full hover:bg-opacity-80 text-[10px] sm:text-sm">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                </div>
                {/* ))} */}
            </div>

            {/* Navigasi Kiri dan Kanan */}

        </div>
    )
}

const Unggulan = () => {
    const unggulan = [
        { id: 1, image: 'src/assets/gambar/Kaos/kaos13.jpeg', description: 'Kaos Custom' },
        { id: 2, image: 'src/assets/gambar/Mugs/mug4.jpeg', description: 'Mug Custom' },
        { id: 3, image: 'src/assets/gambar/Polaroid/foto4.jpeg', description: 'Polaroid' },
        { id: 4, image: 'src/assets/gambar/Bag/ToteBag/tote3.jpeg', description: 'Totebag' },
        { id: 5, image: 'src/assets/gambar/Bag/GoodieBag/bag5.jfif', description: 'Tas Kecil' },
        { id: 6, image: 'src/assets/gambar/Stiker/stiker4.jpg', description: 'Stiker Custom' },
        { id: 7, image: 'src/assets/gambar/Mugs/mug1.jpg', description: 'Mug Variasi' },
        { id: 8, image: 'src/assets/gambar/Tumbler/tumbler5.jpg', description: 'Tumbler Variasi' },
    ];
    return (
        <div className="flex gap-4 overflow-x-auto px-4 mb-8 scrollbar-hide">
            {unggulan.map((unggulan) => (
                <UnggulanCard key={unggulan.id} {...unggulan} />
            ))}
        </div>
    );
}

const RekomendasiCard = ({ image, name, price }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Fungsi untuk toggle favorite state
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="bg-white rounded-md mb-4 shadow-md hover:bg-gray-100 transition-colors duration-300 ease-out">
            {/* Container Gambar */}
            <div className="relative overflow-hidden aspect-[4/3] rounded-t-md">
                <Link to="/productdetail">
                    <img
                        src={image}
                        alt="Project 1"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform ease-out duration-300"
                    />
                </Link>
                {/* Icon Favorit */}
                <div
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow cursor-pointer"
                    onClick={toggleFavorite}
                >
                    <div className="w-full h-auto transition-transform duration-300 transform hover:scale-110">
                        {isFavorited ? (
                            <MdFavorite className="text-red-500" />
                        ) : (
                            <MdFavoriteBorder className="text-gray-700" />
                        )}
                    </div>
                </div>
            </div>

            {/* Konten */}
            <div className="p-2">
                <Link to="/productdetail">
                    <h3 className="font-poppins-16-product-e text-black text-left truncate">
                        {name}
                    </h3>
                </Link>
                <p className="text-black font-poppins-16-sub-product-e text-left">
                    {price}
                </p>
            </div>
        </div>
    );
};

const Rekomendasi = () => {
    const rekomendasi = [
        { id: 2, name: 'Totebag Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Bag/ToteBag/tote3.jpeg' },
        { id: 3, name: 'Tumbler Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Tumbler/tumbler5.jpg' },
        { id: 4, name: 'Polaroid Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Polaroid/foto4.jpeg' },
        { id: 5, name: 'Tumbler Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Tumbler/tumbler5.jpg' },
        { id: 6, name: 'Tumbler Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Tumbler/tumbler5.jpg' },
        { id: 7, name: 'Polaroid Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Polaroid/foto4.jpeg' },
    ]

    return (
        <div className="flex gap-4 overflow-x-auto px-4 pt-4">
            {rekomendasi.map((rekomendasi) => (
                <RekomendasiCard key={rekomendasi.id} {...rekomendasi} />
            ))}
        </div>
    );
}

export default isiHome;