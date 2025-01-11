import React, { useRef, useEffect, useState } from 'react';
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Kategori = () => {

    // Menggunakan useRef, dan useState
    const containerRef = useRef(null);
    const sidebarRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    // Untuk isi category sidebar
    const categories = [
        { name: 'Kaos', subcategories: ['Kaos', 'Kaos Custom Desain'] },
        { name: 'Mugs', subcategories: ['Mugs Custom'] },
        { name: 'Bags', subcategories: ['Bag 1', 'Bag 2'] },
        { name: 'Tumbler', subcategories: ['Tumbler 1', 'Tumbler 2'] },
        { name: 'Accessories', subcategories: ['Accessories 1', 'Accessories 2'] },
        { name: 'Stickers', subcategories: ['Stickers 1', 'Stickers 2'] },
        { name: 'Polaroid', subcategories: ['Polaroid 1', 'Polaroid 2'] },
    ];

    // Untuk set isi sidebar tutup
    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

    //UseEffect
    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current && sidebarRef.current) {
                const containerTop = containerRef.current.getBoundingClientRect().top;
                const containerBottom = containerRef.current.getBoundingClientRect().bottom;
                const sidebarHeight = sidebarRef.current.offsetHeight;

                if (containerTop < 0 && containerBottom > sidebarHeight) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }
            }
        };

        // Ini untuk menghilangkan gambar scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container mx-auto flex space-x-4 p-7 mt-10 mb-10 scroll-smooth" ref={containerRef}>
            {/* Sidebar */}
            <div className='hidden lg:flex'>
                <div
                    className={`w-52 bg-white p-4 text-left ${isSticky ? 'sticky top-0' : 'relative'
                        }`}
                    ref={sidebarRef}
                    style={{
                        maxHeight: 'calc(100vh - 20px)', // Membatasi tinggi maksimal saat sticky
                        overflowY: 'auto',
                    }}
                >
                    <h2 className="mb-4 font-poppins-category-header">Category</h2>
                    <ul className="space-y-6">
                        {categories.map((category) => (
                            <li key={category.name}>
                                <a
                                    href={`#${category.name.toLowerCase()}`}
                                    className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === category.name
                                        ? 'text-blue-600 font-bold'
                                        : 'text-gray-600'
                                        }`}
                                    onClick={(e) => {
                                        e.preventDefault(); // Mencegah navigasi default
                                        toggleCategory(category.name);
                                    }}
                                >
                                    <span className="flex-1">{category.name}</span>
                                    <span className="ml-18">
                                        {activeCategory === category.name ? (
                                            <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                        ) : (
                                            <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                        )}
                                    </span>
                                </a>
                                {activeCategory === category.name && (
                                    <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                        {category.subcategories.map((sub, idx) => (
                                            <li key={idx}>
                                                <a
                                                    href={`#${sub.toLowerCase().replace(/\s+/g, '-')}`}
                                                    className="hover:text-blue-600"
                                                >
                                                    {sub}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <hr className="my-2 border-gray-300" />
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
            {/* Untuk tampilan produk disamping sidebar */}
            <div
                className="w-11/12 sticky top-10 bg-white p-4 overflow-y-scroll scrollbar-hide"
                style={{
                    maxHeight: 'calc(100vh - 20px)',
                }}
            >
                <h2 className="mb-4 font-poppins-category-header text-left">| Ini Hasil Pencarian</h2>
                <Product />
            </div>
        </div>
    );
};

export default Kategori;