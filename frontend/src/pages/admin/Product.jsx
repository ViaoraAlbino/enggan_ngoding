import React, {useState} from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt, FaPlus } from "react-icons/fa";


const AProduct = () =>{
    const [products] = useState([
        { id: '001', name: 'Tumbler', category: 'Tumbler', stock: 100, price: 'Rp 50.000', sold: 2 },
        { id: '002', name: 'Kaos', category: 'Kaos', stock: 100, price: 'Rp 50.000', sold: 2 },
        { id: '003', name: 'Stiker', category: 'Stiker', stock: 100, price: 'Rp 10.000', sold: 2 },
        { id: '004', name: 'Goodie Bag', category: 'Bag', stock: 100, price: 'Rp 10.000', sold: 2 },
        { id: '005', name: 'Keychain', category: 'Accessories', stock: 100, price: 'Rp 5.000', sold: 2 },
        { id: '006', name: 'Tumbler', category: 'Tumbler', stock: 100, price: 'Rp 50.000', sold: 2 },
        { id: '007', name: 'Polaroid', category: 'Polaroid', stock: 100, price: 'Rp 15.000', sold: 2 },
        { id: '008', name: 'Pin', category: 'Accessories', stock: 100, price: 'Rp 5.000', sold: 2 },
        { id: '009', name: 'Tote Bag', category: 'Bag', stock: 100, price: 'Rp 20.000', sold: 2 },
        { id: '010', name: 'Mug', category: 'Mug', stock: 100, price: 'Rp 50.000', sold: 2 },
    ]);
    
    return (
        <div>
            <div className="bg-neutral-100 font-poppins min-h-screen">
                        <div className="m-4">
                            <h4 className="font-extrabold text-xl text-start text-blue-700 mb-4">Daftar Produk</h4>
                            <div className="bg-white rounded-lg shadow p-4">
                                {/* Filter and Export */}
                                <div className=" mb-4">
                                    <div className="flex gap-5 justify-between">
                                        <select className="border border-gray-200 text-gray-200 rounded-md px-4 text-sm focus:text-black focus:outline-blue-500">
                                            <option value="">Kategori</option>
                                        </select>
                                        <div className=" 
                                                  
                                                      hidden lg:flex items-center w-full bg-transparent border-2  border-gray-100 focus-within:border-blue-500 rounded-md px-2 py-1 space-x-6 ">
                                                    <FiSearch className="text-gray-500 w-6 h-6" />
                                                    <input
                                                    
                                                      type="text"
                                                      placeholder="Search Customer"
                                                      className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins"
                                                    />
                                                    
                                                  </div>
                                        <button className="flex items-center bg-black text-white px-4 w-1/3 py-2  rounded-lg hover:bg-blue-800">
                                            <FaPlus className="mr-2 size-5 font-bold" /> Tambah Produk
                                        </button>
                                    </div>
                                </div>
            
                                {/* Table */}
                                <div className="overflow-x-auto ">
                                    <table className="table-auto w-full text-center bg-white border-collapse">
                                        <thead className="bg-blue-100 text-black">
                                            <tr>
                                                <th className="p-2">ID</th>
                                                <th className="p-2">Nama Produk</th>
                                                <th className="p-2">Kategori</th>
                                                <th className="p-2">Stok</th>
                                                <th className="p-2">Harga</th>
                                                <th className="p-2">Terjual</th>
                                                <th className="p-2">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-gray-700 font-normal">
                                            {products.map((products) => (
                                                <tr key={products.id} className="border-b hover:bg-gray-100">
                                                    <td className="p-2">{products.id}</td>
                                                    <td className="p-2">{products.name}</td>
                                                    <td className="p-2">{products.category}</td>
                                                    <td className="p-2">{products.stock}</td>
                                                    <td className="p-2">{products.price}</td>
                                                    <td className="p-2">{products.sold}</td>
                                                    <td className="p-2 ">
                                                        <div className='gap-2'>
                                                        <button className="text-black mr-2 bg-neutral-100 rounded-md p-2 hover:text-blue-900">
                                                            <FaPencilAlt  />
                                                        </button>
                                                        <button className="text-blue-700 bg-blue-100 rounded-md p-2 hover:text-blue-900">
                                                            <RiDeleteBin5Fill />
                                                        </button>
                                                        </div>
                                                       
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    );
};

export default AProduct;