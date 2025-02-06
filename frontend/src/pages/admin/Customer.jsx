import React, { useState, useEffect } from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const ACustomer = () => {

    const [customers, setCustomers] = useState([]);

    const readCustomer = async () => {
        const response = await axios.get('http://localhost:5000/customer/read');
        setCustomers(response.data);
    };

    useEffect(() => {
        readCustomer();
      }, []);

    return (
        <div className="bg-neutral-100 font-poppins min-h-screen">
            <div className="m-4">
                <h4 className="font-extrabold text-xl text-start text-blue-700 mb-4">Daftar Customer</h4>
                <div className="bg-white rounded-lg shadow p-4">
                    {/* Filter and Export */}
                    <div className=" mb-4">
                        <div className="flex gap-5 justify-between">
                            <div className="hidden lg:flex items-center w-full bg-transparent border-2  border-gray-100 focus-within:border-blue-500 rounded-md px-2 py-1 space-x-6 mr-6">
                                <FiSearch className="text-gray-500 w-6 h-6" />
                                <input

                                    type="text"
                                    placeholder="Search Customer"
                                    className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins ml-2"
                                />

                            </div>
                            <button className="flex items-center bg-black text-white px-5  py-2  rounded-lg hover:bg-blue-800">
                                <AiOutlineDownload className="mr-2 size-5 font-bold" /> Export
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto ">
                        <table className="table-auto w-full text-center bg-white border-collapse">
                            <thead className="bg-blue-100 text-black">
                                <tr>
                                    <th className="p-2">No</th>
                                    <th className="p-2">Nama Customer</th>
                                    <th className="p-2">Email</th>
                                    <th className="p-2">No Telepon</th>
                                    <th className="p-2">Alamat</th>
                                    <th className="p-2">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 font-normal">
                                {customers.map((customer, index) => (
                                    <tr key={customer._id} className="border-b hover:bg-gray-100">
                                        <td className='p-2'>{ index + 1 }</td>
                                        <td className="p-2">{customer.fullName}</td>
                                        <td className="p-2">{customer.email}</td>
                                        <td className="p-2">{customer.noTelepon}</td>
                                        <td className="p-2">{customer.alamat}</td>
                                        <td className="p-2 ">
                                            <div className='gap-2'>
                                                <Link to={`/customeredit/${customer._id}`}>
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
