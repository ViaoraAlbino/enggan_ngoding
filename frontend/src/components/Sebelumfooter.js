import React from 'react';
import Lokasi from '../asset/gambar/sherlok.png';
import Telepon from '../asset/gambar/telepon.png';

const Sebelumfooter = () => {
  return (
    <div className='background-abu p-10 mt-10 mx-auto justify-between items-start text-left'>
      <div className='ml-10'>
        <h1 className='font-nabla-white text-5xl font-normal mb-10'>UNIVY</h1>
        <ul className='md:flex space-x-14 flex-grow'>
          <li>
            <div className='flex space-x-4'>
              <img src={Lokasi} alt='Sherlok' className='w-10 h-10' />
              <div className='w-96 text-white'>
                <p className='text-base font-poppins font-medium'>SMK N 3 KENDAL</p>
                <p className='text-base font-poppins font-medium'>
                  Jl. Limbangan, Km. 1, Salamsari, Boja, 51381, Salamsari, Kendal, Kabupaten Kendal, Jawa Tengah 51381, Indonesia.
                </p>
              </div>
            </div>
            <div className='flex space-x-4'>
              <img src={Telepon} alt='Telepon' className='w-10 h-10' />
              <p className='text-base font-poppins font-medium mt-1 text-white'>Telepon: (0294) 572623.</p>
            </div>
          </li>
          <li>
            <p className='font-poppins font-bold text-white text-2xl'>Menu</p>
            <p className='font-poppins font-medium text-base text-white mt-1'>Home</p>
            <p className='font-poppins font-medium text-base text-white'>Product</p>
            <p className='font-poppins font-medium text-base text-white'>About</p>
          </li>
          <li>
            <p className='font-poppins font-bold text-white text-2xl'>Category</p>
            <p className='font-poppins font-medium text-base text-white mt-1'>Kaos</p>
            <p className='font-poppins font-medium text-base text-white'>Mug</p>
            <p className='font-poppins font-medium text-base text-white'>Bag</p>
            <p className='font-poppins font-medium text-base text-white'>Tumbler</p>
            <p className='font-poppins font-medium text-base text-white'>Accessories</p>
            <p className='font-poppins font-medium text-base text-white'>Stickers</p>
            <p className='font-poppins font-medium text-base text-white'>Polaroid Studio</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sebelumfooter;
