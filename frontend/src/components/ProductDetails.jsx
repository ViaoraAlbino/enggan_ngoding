import { FiHeart } from 'react-icons/fi';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';

const ProductDetails = () => {

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const images = [
    "src/assets/gambar/me.jpg",
    "src/assets/gambar/Kaos/kaos5.jpeg",
    "src/assets/gambar/Kaos/kaos1.jpeg"
  ];

  const [quantity, setQuantity] = useState(1);
  const [file, setFile] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('Deskripsi');

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-blue-100 min-h-screen">
      {/* Kontainer utama */}
      <div className="max-w-7xl mx-auto bg-white p-6 md:p-10 rounded-lg shadow-md mt-14">
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Bagian Gambar */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative w-full sm:w-64 sm:h-64 lg:w-96 lg:h-96">
              <img
                src={images[currentIndex]}
                alt="Produk"
                className="w-96 h-96 md:w-full md:h-full sm:w-64 sm:h-64 object-cover rounded-lg"
              />
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-700 text-white rounded-full"
              >
                ❮
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-blue-700 text-white rounded-full"
              >
                ❯
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className={`w-16 h-16 cursor-pointer ${currentIndex === index ? 'border-2 border-blue-500' : ''
                    }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>

          {/* Bagian Informasi Produk */}
          <div className="flex-1">
            <div className="flex justify-between items-center mt-2">
              <h6 className="font-poppins-18-400-p">KAOS CUSTOM</h6>
              <FiHeart className="text-gray-500 hover:text-red-500 cursor-pointer" size={28} />
            </div>
            <h6 className="font-poppins-20-600-p">Rp.50.000</h6>
            <table className="w-full mt-4">
              <tbody>
                {/* Warna */}
                <tr>
                  <td className="py-2 font-poppins-produkdetail-t">Warna</td>
                  <td className="py-2">
                    <div className="flex flex-wrap space-x-4">
                      <button className="text-sm border rounded-md hover:border-blue-500 focus:ring focus:ring-blue-300 flex items-center space-x-2">
                        <img
                          src="src/assets/gambar/Kaos/kaos5.jpeg"
                          className="w-10 h-10"
                          alt="Putih"
                        />
                        <p className="mx-1 p-1">Putih</p>
                      </button>
                      <button className="text-sm border rounded-md hover:border-blue-500 focus:ring focus:ring-blue-300 flex items-center space-x-2">
                        <img
                          src="src/assets/gambar/Kaos/kaos1.jpeg"
                          className="w-10 h-10"
                          alt="Hitam"
                        />
                        <p className="mx-1 p-1">Hitam</p>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* Ukuran */}
                <tr>
                  <td className="py-2 font-poppins-produkdetail-t">Ukuran</td>
                  <td className="py-2">
                    <div className="grid grid-cols-4 gap-2">
                      {['S', 'M', 'L', 'XL'].map((size) => (
                        <button
                          key={size}
                          className="px-4 py-2 border rounded-md hover:border-blue-500 focus:ring focus:ring-blue-300"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Jumlah */}
                <tr>
                  <td className="py-2 font-poppins-produkdetail-t">Jumlah</td>
                  <td className="py-2">
                    <div className="flex items-center space-x-4 border rounded-md w-36">
                      <button
                        onClick={() => handleQuantityChange(-1)}
                        className="px-4 py-2 border rounded-l-md hover:border-blue-500"
                      >
                        -
                      </button>
                      <span className='w-11 text-center'>{quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(1)}
                        className="px-4 py-2 border rounded-r-md hover:border-blue-500"
                      >
                        +
                      </button>
                    </div>
                  </td>
                </tr>

                {/* File Desain */}
                <tr>
                  <td className="py-2 font-poppins-produkdetail-t">File Desain</td>
                  <td className="py-2">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="block w-full text-gray-700 border rounded-md p-2"
                    />
                    {file && <p className="mt-2 text-sm">{file.name}</p>}
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Tombol Aksi */}
            <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/keranjang">
                <button className="w-full px-6 py-3 transition ease-in-out delay-150 bg-blue-200 hover:-translate-y-1 hover:scale-105 hover:bg-blue-200 duration-300 font-monster-btn-pd-1 rounded-lg">
                  Masukkan Keranjang
                </button>
              </Link>
              <button className=" px-6 py-3 transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-105 hover:bg-sky-700 duration-300 text-white font-monster-btn-pd-2 rounded-lg">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Tabs */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className="mt-10 mx-auto max-w-7xl">
          <div className="flex space-x-1 max-w-md justify-start">
            <button
              onClick={() => handleTabClick('Deskripsi')}
              className={`w-28 px-2 py-2 rounded-t-lg transition-all font-poppins-btn-d duration-300 ${activeTab === 'Deskripsi' ? 'bg-blue-800 text-white' : 'bg-transparent text-black'
                }`}
            >
              Deskripsi
            </button>
            <button
              onClick={() => handleTabClick('Review')}
              className={`w-28 px-2 py-2 rounded-t-lg transition-all font-poppins-btn-d duration-300 ${activeTab === 'Review' ? 'bg-blue-800 text-white' : 'bg-transparent text-black'
                }`}
            >
              Review
            </button>
          </div>

          {/* Content Section */}
          <div className="bg-white p-6 max-w-7xl rounded-lg shadow-md mx-auto">
            {activeTab === 'Deskripsi' && (
              <div className='w-4/5 ml-2'>
                <h3 className="text-left font-poppins-24-500">Kaos Custom UNIVY</h3>
                <p className='text-left'>
                  Kaos custom UNIVY adalah solusi terbaik bagi Anda yang ingin tampil beda dan unik. Dengan layanan custom desain,
                  Anda bisa menciptakan kaos yang sesuai dengan kepribadian, kreativitas, atau kebutuhan spesifik Anda.
                  Cocok untuk berbagai acara seperti komunitas, seragam kantor, merchandise, atau sekadar mengekspresikan diri.
                  Kami menggunakan bahan berkualitas seperti Cotton Combed yang lembut, nyaman, dan tahan lama. Teknologi cetak
                  modern kami memastikan hasil desain tajam, detail, dan tidak mudah luntur, meskipun dicuci berulang kali.
                </p>
                <h3 className="text-left mt-8 font-poppins-24-500">Spesifikasi</h3>
                <ul className="list-disc ml-6">
                  <li className='text-left'>Ukuran Kaos <br />
                    S (Width: 46 cm, Length: 64 cm)<br />
                    M (Width: 50 cm, Length: 67 cm)<br />
                    L (Width: 54 cm, Length: 70 cm)<br />
                    XL (Width: 58 cm, Length: 73 cm)<br />
                    XXL (Width: 62 cm, Length: 76 cm)
                  </li><br />
                  <li className='text-left'>
                    Ukuran Area Desain:
                    <ul className='list-disc ml-6'>
                      <li className='text-left'>Depan: Maksimal 30 x 40 cm</li>
                      <li className='text-left'>Belakang: Maksimal 30 x 40 cm</li>
                      <li className='text-left'>Lengan: Maksimal 10 x 10 cm</li>
                    </ul>
                  </li><br />
                  <li className='text-left'>
                    Bahan Kaos:
                    <ul className='list-disc ml-6'>
                      <li className='text-left'>
                        Cotton Combed 24s/30s
                        <ul className='list-disc ml-6'>
                          <li className='text-left'>Lembut, nyaman, dan menyerap keringat, cocok untuk pemakaian sehari-hari.</li>
                          <li className='text-left'>Pilihan warna lengkap: Putih, Hitam, Navy, Merah, Abu Muda, dan lainnya.</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>

                <h3 className='text-left mt-8 font-poppins-24-500'>Keunggulan:</h3>
                <ul className='list-disc ml-6'>
                  <li className='text-left'>Dapat mencetak desain full-color berkualitas tinggi.</li>
                  <li className='text-left'>Tinta tahan lama dan ramah lingkungan.</li>
                  <li className='text-left'>Cocok untuk berbagai keperluan, seperti acara komunitas, seragam, atau hadiah spesial.</li>
                </ul><br />

                <h3 className='text-left mt-8 font-poppins-24-500'>Catatan Penting:</h3>
                <ul className='list-disc ml-6'>
                  <li className='text-left'>Harap unggah desain dalam format PNG/JPEG dengan resolusi minimal 300 dpi untuk hasil terbaik.</li>
                  <li className='text-left'>Proses pengerjaan 2-5 hari kerja tergantung jumlah pesanan.</li>
                </ul><br />
                <p className='text-left font-light'>Pesan Sekarang dan Wujudkan Kaos Impianmu di UNIVY!</p>
                <p className="mt-4">
                  Ukuran polaroid 6x9 cm<br />
                  rasio foto 3:4 (tanpa crop)<br />
                  Bahan Kertas Art Carton 260 gr<br />
                  (TEBAL DAN TAHAN AIR)<br />
                  Minimal cetak 25 foto
                </p>
              </div>
            )}

            {activeTab === 'Review' && (
              <div>
                <h3 className="font-semibold text-lg mb-4">Ulasan Produk</h3>
                <p>Belum ada ulasan untuk produk ini.</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductDetails;