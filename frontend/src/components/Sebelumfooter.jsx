import React, { useState, useEffect } from 'react';
import Lokasi from '../assets/gambar/sherlok.png';
import Telepon from '../assets/gambar/telepon.png';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const Sebelumfooter = () => {
  const [isReady, setIsReady] = useState(false);

  // dari ChatGPT
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true); // Tampilkan komponen setelah 1 detik (bisa disesuaikan)
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isReady && (
        <div className='background-abu'>
          <div className=" container mx-auto flex justify-between items-start text-left w-full sebelumfooter-container scroll-smooth">
            <div className="ml-10 sebelumfooter-content py-10 mb-10">
              <h1 className="font-nabla-white-sebelumfooter font-normal mb-10">UNIVY</h1>
              <ul className="lg:flex lg:space-x-16 sm:space-x-10 flex-grow">
                {/* Informasi Lokasi dan Kontak */}
                <li className="sebelumfooter-item mb-4">
                  <div className="flex space-x-4 mb-6">
                    <img src={Lokasi} alt="Sherlok" className="w-6 h-6" />
                    <div className="lg:w-96 sm:w-72 text-white flex flex-col">
                      <Link to="https://g.co/kgs/nVFJQwi" className="text-base font-poppins font-medium">SMK N 3 KENDAL</Link>
                      <Link to="https://g.co/kgs/nVFJQwi" className="text-base font-poppins font-medium">
                        Jl. Limbangan, Km. 1, Salamsari, Boja, 51381, Kendal, Kabupaten Kendal, Jawa Tengah, Indonesia.
                      </Link>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <img src={Telepon} alt="Telepon" className="w-6 h-6" />
                    <p className="text-base font-poppins font-medium mt-1 text-white">
                      Telepon: (0294) 572623
                    </p>
                  </div>
                </li>

                {/* Menu */}
                <li className="sebelumfooter-item mb-6 flex flex-col">
                  <p className="font-poppins font-bold text-white text-2xl mb-2">Menu</p>
                  <Link to="/" className="font-poppins font-medium text-base text-white mt-1">Home</Link>
                  <Link to="/product" className="font-poppins font-medium text-base text-white">Product</Link>
                  <Link to="/about" className="font-poppins font-medium text-base text-white">About</Link>
                </li>

                {/* Category */}
                <li className="sebelumfooter-item mb-6">
                  <p className="font-poppins font-bold text-white text-2xl mb-2">Category</p>
                  <p className="font-poppins font-medium text-base text-white mt-1">Kaos</p>
                  <p className="font-poppins font-medium text-base text-white">Mug</p>
                  <p className="font-poppins font-medium text-base text-white">Bag</p>
                  <p className="font-poppins font-medium text-base text-white">Tumbler</p>
                  <p className="font-poppins font-medium text-base text-white">Accessories</p>
                  <p className="font-poppins font-medium text-base text-white">Stickers</p>
                  <p className="font-poppins font-medium text-base text-white">Polaroid Studio</p>
                </li>
                
                {/* services */}
                <li className="sebelumfooter-item mb-6">
                  <p className="font-poppins font-bold text-white text-2xl mb-2">Service</p>
                  <p className="font-poppins font-medium text-base text-white mt-1">Mug Costume</p>
                  <p className="font-poppins font-medium text-base text-white">T-shirt Costume</p>
                  <p className="font-poppins font-medium text-base text-white">Totebag Costume</p>
                  <p className="font-poppins font-medium text-base text-white">Printing</p>
                  <p className="font-poppins font-medium text-base text-white">Polaroid Printing</p>
                </li>

                 {/* follow us */}
                 <li className="sebelumfooter-item mb-6 flex flex-col">
                  <p className="font-poppins font-bold text-white text-2xl mb-2">Follow Us</p>
                  <Link to="https://www.instagram.com/univy.skg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="font-poppins font-medium text-base text-white mt-1">Instagram</Link>
                  <Link to="https://web.facebook.com/profile.php?id=61562563003345&locale=id_ID" className="font-poppins font-medium text-base text-white">Facebook</Link>
                  <Link to="https://www.tiktok.com/@univy.skg" className="font-poppins font-medium text-base text-white">Tik Tok</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sebelumfooter;
