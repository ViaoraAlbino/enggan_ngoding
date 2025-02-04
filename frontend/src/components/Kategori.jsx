import React, { useRef, useEffect, useState } from 'react';
import Product from './Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'; // Import Framer Motion

const Kategori = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Refs dan State
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobile, setIsMobile] = useState(false); // Deteksi mode mobile

  // Isi kategori
  const categories = [
    { name: 'Kaos', subcategories: ['Kaos', 'Kaos Custom Desain'] },
    { name: 'Mugs', subcategories: ['Mugs Custom'] },
    { name: 'Bags', subcategories: ['Bag 1', 'Bag 2'] },
    { name: 'Tumbler', subcategories: ['Tumbler 1', 'Tumbler 2'] },
    { name: 'Accessories', subcategories: ['Accessories 1', 'Accessories 2'] },
    { name: 'Stickers', subcategories: ['Stickers 1', 'Stickers 2'] },
    { name: 'Polaroid', subcategories: ['Polaroid 1', 'Polaroid 2'] },
  ];

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  useEffect(() => {
    // Deteksi apakah dalam mode mobile
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="container mx-auto flex space-x-4 p-7 scroll-smooth" ref={containerRef}>
      {/* Sidebar untuk Desktop */}
      {!isMobile && (
        <div className="hidden lg:flex mt-10">
          <div
            className={`w-52 bg-white p-4 text-left ${isSticky ? 'sticky top-0' : 'relative'}`}
            ref={sidebarRef}
            style={{
              maxHeight: 'calc(100vh - 20px)',
              overflowY: 'auto',
            }}
            id="custom-scrollbar"
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
                      e.preventDefault();
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
      )}

      {/* Navbar Mengambang untuk Mobile */}
      {isMobile && (
        <motion.nav
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg rounded-t-3xl border-t border-gray-300 flex justify-around items-center py-4 z-10 lg:hidden"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <a
              key={category.name}
              href={`#${category.name.toLowerCase()}`}
              className={`flex flex-col items-center text-white transition-transform duration-300 ${activeCategory === category.name ? 'scale-110 font-bold text-yellow-300' : 'hover:scale-105'}`}
              onClick={(e) => {
                e.preventDefault();
                toggleCategory(category.name);
              }}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-2 ${activeCategory === category.name ? 'bg-yellow-300 text-blue-600' : 'bg-white text-blue-500'}`}
              >
                {/* Tambahkan ikon untuk kategori jika diperlukan */}
                {category.name[0]} {/* Misalnya inisial kategori */}
              </div>
              <span className="text-xs sm:text-sm">{category.name}</span>
            </a>
          ))}
        </motion.nav>
      )}

      {/* Produk */}
      <div
        className="w-11/12 mt-10 items-center justify-around bg-white p-4 overflow-y-scroll scrollbar-hide"
        style={{
          maxHeight: 'calc(100vh - 20px)',
        }}
      >
        {/* Bagian Header dan Span */}
        <div className="sticky top-0 bg-white z-8">
          <h2 className="font-poppins-category-header text-left lg:mb-4">
            | Ini Hasil Pencarian
          </h2>
          {isMobile && (
            <div className="mb-2 flex flex-row space-x-4 text-center font-poppins-12-400 overflow-x-auto py-2 scrollbar-hide">
              <span className="flex-shrink-0">Kaos</span>
              <span className="flex-shrink-0">Tumbler</span>
              <span className="flex-shrink-0">Mugs</span>
              <span className="flex-shrink-0">Bag</span>
              <span className="flex-shrink-0">Accesories</span>
              <span className="flex-shrink-0">Polaroid</span>
              <span className="flex-shrink-0">Sticker</span>
            </div>
          )}
        </div>

        {/* Konten Produk */}
        <motion.nav
          className="relative z-0 mt-3 scrollbar-hide" // Tambahkan margin atas agar ada jarak dengan header
          style={{
            maxHeight: 'calc(100vh - 130px)', // Kurangi tinggi total (header + margin)
            overflowY: 'auto', // Tambahkan scroll untuk konten produk jika tinggi terbatas
          }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <Product />
        </motion.nav>
      </div>

    </div>
  );
};

export default Kategori;