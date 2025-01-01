import React, { useRef, useEffect, useState } from 'react';
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

const Kategori = () => {
    const containerRef = useRef(null);
    const sidebarRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };

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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="flex space-x-10 p-7 mt-10 scroll-smooth" ref={containerRef}>
            {/* Sidebar */}
            <div
                className={`w-52 bg-white p-4 text-left ${isSticky ? 'sticky top-0' : ''}`}
                ref={sidebarRef}
                style={{
                    maxHeight: 'calc(100vh - 20px)', // Membatasi tinggi maksimal saat sticky
                    overflowY: 'auto',
                }}
            >
                <h2 className="mb-4 font-poppins-category-header">Category</h2>
                <ul className="space-y-6">
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'kaos' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('kaos')}
                        >
                            <span className="flex-1">Kaos</span>
                            <span className="ml-20">
                                {activeCategory === 'kaos' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'kaos' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Kaos</li>
                                <li>Kaos Custom Desain</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'mugs' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('mugs')}
                        >
                            <span className="flex-1">Mugs</span>
                            <span className="ml-20">
                                {activeCategory === 'mugs' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'mugs' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Mugs Custom</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'bags' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('bags')}
                        >
                            <span className="flex-1">Bags</span>
                            <span className="ml-20">
                                {activeCategory === 'bags' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'bags' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Bag 1</li>
                                <li>Bag 2</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'tumbler' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('tumbler')}
                        >
                            <span className="flex-1">Tumbler</span>
                            <span className="ml-18">
                                {activeCategory === 'tumbler' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'tumbler' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Tumbler 1</li>
                                <li>Tumbler 2</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'acc' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('acc')}
                        >
                            <span className="flex-1">Accessories</span>
                            <span className="ml-18">
                                {activeCategory === 'acc' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'acc' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Accessories 1</li>
                                <li>Accessories 2</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'stiker' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('stiker')}
                        >
                            <span className="flex-1">Stickers</span>
                            <span className="ml-18">
                                {activeCategory === 'stiker' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'stiker' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Stickers 1</li>
                                <li>Stickers 2</li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <button
                            className={`w-full flex justify-between items-center text-left font-poppins-category-body-judul ${activeCategory === 'polaroid' ? 'text-blue-600 font-bold' : 'text-gray-600'
                                }`}
                            onClick={() => toggleCategory('polaroid')}
                        >
                            <span className="flex-1">Polaroid</span>
                            <span className="ml-18">
                                {activeCategory === 'polaroid' ? (
                                    <FontAwesomeIcon icon={faCircleChevronUp} style={{ color: '#334eac' }} />
                                ) : (
                                    <FontAwesomeIcon icon={faCircleChevronDown} style={{ color: '#bbbcbe' }} />
                                )}
                            </span>
                        </button>
                        {activeCategory === 'polaroid' && (
                            <ul className="mt-2 space-y-2 text-gray-600 font-poppins-category-body">
                                <li>Polaroid 1</li>
                                <li>Polaroid 2</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>

            {/* Produk */}
            <div className="w-4/5 mt-4">
                <h2 className="mb-4 font-poppins-category-header text-left">| Ini Hasil Pencarian</h2>
                <Product />
            </div>
        </div>
    );
};

export default Kategori;
