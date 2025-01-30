import React, { useState } from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ACustomer = () => {
    const [customers] = useState([
        { id: 10010, name: 'Jonathan Joestar', email: 'jonathan@gmail.com', phone: '0888-8888-8888', address: 'Mansion Joestar, London' },
        { id: 10009, name: 'Joseph Joestar', email: 'joseph@gmail.com', phone: '0888-8888-8888', address: 'Cairo, Egypt' },
        { id: 10008, name: 'Jotaro Kujo', email: 'jotaro@gmail.com', phone: '0888-8888-8888', address: 'Shibuya, Tokyo' },
        { id: 10007, name: 'Josuke Higashikata', email: 'josuke@gmail.com', phone: '0888-8888-8888', address: 'Morioh, Japan' },
        { id: 10006, name: 'Giorno Giovanna', email: 'giorno@gmail.com', phone: '0888-8888-8888', address: 'Naples, Italy' },
        { id: 10005, name: 'Jolyne Cujoh', email: 'jolyne@gmail.com', phone: '0888-8888-8888', address: 'Green Dolphin Street Prison, USA' },
        { id: 10004, name: 'Johnny Joestar', email: 'johnny@gmail.com', phone: '0888-8888-8888', address: 'Various Locations in America' },
        { id: 10003, name: 'Josuke Higashikata (Part 8)', email: 'josuke8@gmail.com', phone: '0888-8888-8888', address: 'Morioh, Japan' },
        { id: 10002, name: 'Gyro Zeppeli', email: 'gyro@gmail.com', phone: '0888-8888-8888', address: 'Various Locations, America' },
        { id: 10001, name: 'Dio Brando', email: 'dio@gmail.com', phone: '0888-8888-8888', address: 'Castle Konoha, Egypt' },
        // Added AMP members
        { id: 10011, name: 'Rohan Kishibe', email: 'rohan@gmail.com', phone: '0888-8888-8888', address: 'Morioh, Japan' },
        { id: 10012, name: 'Koichi Hirose', email: 'koichi@gmail.com', phone: '0888-8888-8888', address: 'Morioh, Japan' },
        { id: 10013, name: 'Yasuho Hirose', email: 'yasuho@gmail.com', phone: '0888-8888-8888', address: 'Morioh, Japan' },
    ]);

    return (
        <div className="bg-neutral-100 font-poppins min-h-screen">
            <div className="m-4">
                <h4 className="font-extrabold text-xl text-start text-blue-700 mb-4">Daftar Customer</h4>
                <div className="bg-white rounded-lg shadow p-4">
                    {/* Filter and Export */}
                    <div className=" mb-4">
                        <div className="flex gap-5 justify-between">
                            <select className="border w- border-gray-200 text-gray-200 rounded-md px-4 text-sm focus:text-black focus:outline-blue-500">
                                <option value="">Kategori</option>
                            </select>
                            <div className=" 
                                      
                                          hidden lg:flex items-center w-full bg-transparent border-2  border-gray-100 focus-within:border-blue-500 rounded-md px-2 py-1 space-x-6 mr-6">
                                <FiSearch className="text-gray-500 w-6 h-6" />
                                <input

                                    type="text"
                                    placeholder="Search Customer"
                                    className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins ml-2"
                                />

                            </div>
                            <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-800">
                                <AiOutlineDownload className="mr-2 size-5 font-bold" /> Export
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto ">
                        <table className="table-auto w-full text-left bg-white border-collapse">
                            <thead className="bg-blue-100 text-black">
                                <tr>
                                    <th className="p-2">ID</th>
                                    <th className="p-2">Nama Customer</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">No Telepon</th>
                                    <th className="p-2">Alamat</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 font-normal">
                                {customers.map((customer) => (
                                    <tr key={customer.id} className="border-b hover:bg-gray-100">
                                        <td className="p-2">{customer.id}</td>
                                        <td className="p-2">{customer.name}</td>
                                        <td className="p-2">{customer.email}</td>
                                        <td className="p-2">{customer.phone}</td>
                                        <td className="p-2">{customer.address}</td>
                                        <td className="p-2 ">
                                            <div className='gap-2'>
                                                <Link to="/admin/customers/customer_edit">
                                                    <button className="text-black mr-2 bg-neutral-100 rounded-md p-2 hover:text-blue-900">
                                                        <FaPencilAlt />
                                                    </button>
                                                </Link>
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
    );
};

export default ACustomer;
