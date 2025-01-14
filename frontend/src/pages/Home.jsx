import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
    const images = [
        './src/assets/gambar/carousel/4.png',
        './src/assets/gambar/carousel/2.jpg',
        './src/assets/gambar/carousel/3.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(1); // Mulai dari index ke-1 (slide pertama asli)
    const [isAnimating, setIsAnimating] = useState(false);
    const transitionRef = useRef();

    const totalSlides = images.length;

    // Tambahkan duplikasi slide awal dan akhir
    const slides = [images[totalSlides - 1], ...images, images[0]];

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex - 1);
    };

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    // Handle animasi selesai
    useEffect(() => {
        if (isAnimating) {
            transitionRef.current = setTimeout(() => {
                setIsAnimating(false);

                // Jika mencapai slide duplikat di akhir, lompat ke slide pertama asli tanpa animasi
                if (currentIndex === totalSlides + 1) {
                    setCurrentIndex(1); // Lompat ke slide pertama asli
                }

                // Jika mencapai slide duplikat di awal, lompat ke slide terakhir asli tanpa animasi
                if (currentIndex === 0) {
                    setCurrentIndex(totalSlides); // Lompat ke slide terakhir asli
                }
            }, 500); // Waktu animasi sesuai dengan CSS transition
        }

        return () => clearTimeout(transitionRef.current);
    }, [currentIndex, totalSlides, isAnimating]);

    return (
        <div className="relative w-full h-1/2 mx-auto mt-16 overflow-hidden">
            {/* Container untuk slides */}
            <div
                className={`flex transition-transform ${isAnimating ? 'duration-500 ease-in-out' : 'duration-0'}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className="w-full flex-shrink-0"
                    />
                ))}
            </div>

            {/* Tombol navigasi kiri */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full focus:outline-none"
            >
                ❮
            </button>

            {/* Tombol navigasi kanan */}
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full focus:outline-none"
            >
                ❯
            </button>

            {/* Indikator di bawah carousel, berada di dalam div carousel */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full ${currentIndex === index + 1
                                ? 'bg-black outline outline-white'
                                : 'bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;