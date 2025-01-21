import React, { useState } from 'react';
import Home from './Home';
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import Shopping from '../assets/icons/Cart-blue.png';

const isiHome = () => {
    return (
        <div className='mx-auto w-full overflow-hidden'>
            <Home />
            {/* Kategori */}
            <div className="bg-blue-200 max-w-7xl mt-5 px-3 rounded-lg shadow-lg mx-auto">
                <h6 className="font-kanit-bold-k text-left px-8 py-2">KATEGORI</h6>
                <hr className="border-t-2 mx-8 border-gray-500" />
                <Kategori />
            </div>

            {/* <div className="bg-blue-200 max-w-7xl mt-10 px-3 rounded-lg shadow-lg mx-auto">
                <h6 className="font-kanit-bold-k text-left px-8 py-2">FLASHSALE</h6>
                <hr className="border-t-2 mx-8 border-gray-500" />
                <Flashsale />
            </div> */}

            {/* Produk Unggulan */}
            <div className="bg-blue-200 max-w-7xl px-3 rounded-lg shadow-lg mx-auto">
                <h6 className="font-kanit-bold-kd text-center px-8 py-2">PRODUK UNGGULAN KAMI</h6>
                <hr className="border-t-2 mx-8 border-gray-500" />
                <Unggulan />
            </div>

            {/* Rekomendasi */}
            <div className="bg-blue-200 max-w-7xl mb-5 px-3 rounded-lg shadow-lg mx-auto">
                <h6 className="font-kanit-bold-kd text-center px-8 py-2">REKOMENDASI</h6>
                <hr className="border-t-2 mx-8 border-gray-500" />
                <Rekomendasi />
            </div>
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
        <div className="flex flex-wrap justify-center gap-6 px-4 mb-8 mt-4">
            {kategori.map((item) => (
                <div key={item.id} className="rounded w-32 h-42 hover:shadow-md transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                        <img
                            src={item.image}
                            alt={item.description}
                            className="w-32 h-32 object-cover mb-4 rounded-t transform hover:scale-105 duration-300"
                        />
                    </div>
                    <div>
                        <h3 className="font-semibold text-base mb-2 text-black text-center">
                            {item.description}
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Flashsale = () => {
    const flashsale = [
        { id: 1, name: 'Goodide', image: 'src/assets/gambar/bag/GoodieBag/bag5.jfif' },
        { id: 2, name: 'Tumbler', image: 'src/assets/gambar/Tumbler/tumbler2.jpeg' },
        { id: 3, name: 'Pin Custom', image: 'src/assets/gambar/Pin/pin2.jpg' },
        { id: 4, name: 'Kaos', image: 'src/assets/gambar/Kaos/kaos2.jpeg' },
        { id: 5, name: 'Mugs', image: 'src/assets/gambar/Mugs/mugs3.jpeg' },
        { id: 6, name: 'Aksesoris', image: 'src/assets/gambar/Mugs/mug2.jpeg' },
    ];

    return (
        <div className="bg-blue-200 max-w-7xl px-3 py-6 rounded-md shadow-md mx-auto mt-10">
            <h6 className="font-kanit-bold-kd text-center px-8 py-2">FLASHSALE</h6>
            <hr className="border-t-2 mx-8 border-gray-500 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-4">
                {flashsale.map((item) => (
                    <div key={item.id} className="relative rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-56 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                            10% OFF
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="font-semibold text-lg text-black mb-2">{item.name}</h3>
                            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700 transition duration-300">
                                Shop Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
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

    const displayedItems = unggulan.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="relative px-4 mb-8 mt-4">
            {/* Carousel Wrapper */}
            <div className="flex justify-center gap-6">
                {displayedItems.map((item) => (
                    <div
                        key={item.id}
                        className="rounded-2xl shadow-lg lg:w-72 lg:h-96 sm:w-10 sm:h-10 mb-10 overflow-hidden relative hover:shadow-md transition-shadow duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.description}
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-0 w-full bg-opacity-60 text-white text-sm font-semibold text-center py-2">
                            <h3 className="font-bold lg:text-base sm:text-sm">{item.description}</h3>
                            <button className='bg-white lg:w-20 lg:h-8 sm:w-10 sm:h-2 bg-opacity-50 mt-2 font-monster-medium-u text-sm text-center  px-2 rounded-full'>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigasi Kiri dan Kanan */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2  transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
            >
                &#9664;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
            >
                &#9654;
            </button>
        </div>
    );
};

const RekomendasiCard = ({ image, name, price }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    // Fungsi untuk toggle favorite state
    const toggleFavorite = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="bg-white rounded-md mb-4 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 hover:bg-gray-100 ease-out delay-150 transition-colors duration-300 shadow-md">
            {/* Container Gambar */}
            <div className="relative overflow-hidden w-full h-2/3 rounded-t-md">
                <img
                    src={image}
                    alt="Project 1"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform ease-out duration-300"
                />
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
            <div className="w-full h-1/5 flex flex-col justify-between p-2">
                <div>
                    <h3 className="font-poppins-judul-product text-black text-sm sm:text-base text-left truncate">
                        {name}
                    </h3>
                    <p className="text-black font-poppins-sub-judul-product font-semibold text-sm sm:text-base text-left">
                        {price}
                    </p>
                </div>
                {/* Ikon Shopping */}
                {/* <img
            src={Shopping}
            alt="shopping"
            className="ml-auto w-6 h-6 cursor-pointer"
        /> */}
            </div>
        </div>
    );
};

const Rekomendasi = () => {
    const rekomendasi = [
        { id: 1, name: 'Kaos Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Kaos/kaos13.jpeg' },
        { id: 2, name: 'Totebag Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Bag/ToteBag/tote3.jpeg' },
        { id: 3, name: 'Tumbler Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Tumbler/tumbler5.jpg' },
        { id: 4, name: 'Polaroid Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Polaroid/foto4.jpeg' },
        { id: 5, name: 'Pin Custom', price: 'Rp 50.000', image: 'src/assets/gambar/Pin/pin3.jpg' },
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