import React from 'react'
import { FiMapPin, FiPhoneCall} from 'react-icons/fi'; // Icon hati,keranjang,search

const Sebelumfooter = () => {
  return (
    <div className='background-abu p-10 mt-10'>
         <h1 className="text-5xl font-normal text-left ml-16 font-nabla-sebelumfooter">UNIVY</h1>
         <div className='items-center'>
            <FiMapPin className="text-gray-500 hover:text-red-500 cursor-pointer" size={24} />
            <FiPhoneCall className="text-gray-500 hover:text-gray-800 cursor-pointer" size={24} />
         </div>
    </div>
  )
}

export default Sebelumfooter;