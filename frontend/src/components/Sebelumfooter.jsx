import React, { useState, useEffect } from 'react';
import Lokasi from '../assets/gambar/sherlok.png';
import Telepon from '../assets/gambar/telepon.png';

const Sebelumfooter = () => {
  const [isReady, setIsReady] = useState(false);

  // Simulasi menunggu semua konten sebelumnya selesai ditampilkan
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true); // Tampilkan komponen setelah 1 detik (bisa disesuaikan)
    }, 1000);
    return () => clearTimeout(timer); // Bersihkan timer jika komponen di-unmount
  }, []);

  return (
    <>
      {isReady && (
        <div className="background-abu p-10 mx-auto flex justify-between items-start text-left w-full sebelumfooter-container">
          <div className="ml-10 sebelumfooter-content">
            <h1 className="font-nabla-white text-5xl font-normal mb-10">UNIVY</h1>
            <ul className="md:flex space-x-14 flex-grow">
              {/* Informasi Lokasi dan Kontak */}
              <li className="sebelumfooter-item">
                <div className="flex space-x-4 mb-6">
                  <img src={Lokasi} alt="Sherlok" className="w-10 h-10" />
                  <div className="w-96 text-white">
                    <p className="text-base font-poppins font-medium">SMK N 3 KENDAL</p>
                    <p className="text-base font-poppins font-medium">
                      Jl. Limbangan, Km. 1, Salamsari, Boja, 51381, Salamsari, Kendal, Kabupaten Kendal, Jawa Tengah 51381, Indonesia.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <img src={Telepon} alt="Telepon" className="w-10 h-10" />
                  <p className="text-base font-poppins font-medium mt-1 text-white">
                    Telepon: (0294) 572623
                  </p>
                </div>
              </li>

              {/* Menu */}
              <li className="sebelumfooter-item">
                <p className="font-poppins font-bold text-white text-2xl mb-2">Menu</p>
                <p className="font-poppins font-medium text-base text-white mt-1">Home</p>
                <p className="font-poppins font-medium text-base text-white">Product</p>
                <p className="font-poppins font-medium text-base text-white">About</p>
              </li>

              {/* Category */}
              <li className="sebelumfooter-item">
                <p className="font-poppins font-bold text-white text-2xl mb-2">Category</p>
                <p className="font-poppins font-medium text-base text-white mt-1">Kaos</p>
                <p className="font-poppins font-medium text-base text-white">Mug</p>
                <p className="font-poppins font-medium text-base text-white">Bag</p>
                <p className="font-poppins font-medium text-base text-white">Tumbler</p>
                <p className="font-poppins font-medium text-base text-white">Accessories</p>
                <p className="font-poppins font-medium text-base text-white">Stickers</p>
                <p className="font-poppins font-medium text-base text-white">Polaroid Studio</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sebelumfooter;
