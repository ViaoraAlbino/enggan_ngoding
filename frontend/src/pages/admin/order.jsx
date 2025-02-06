import React from "react";
import { FaSearch, FaFileExport } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPencilAlt, FaPlus } from "react-icons/fa";

const DaftarPesanan = () => {
  const orders = [
    { id: "151520", customer: "Adam", product: "Tumbler", qty: 1, price: "Rp 50.000", date: "02-01-2025", status: "Diproses" },
    { id: "141210", customer: "Maki Zein", product: "Tumbler", qty: 1, price: "Rp 50.000", date: "02-01-2025", status: "Diproses" },
    { id: "1000", customer: "Nobara Kugisaki", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Diproses" },
    { id: "1000", customer: "Toge Inumaki", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Dikirim" },
    { id: "1000", customer: "Kento Nanami", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Diproses" },
    { id: "1000", customer: "Yuji Itadori", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Diproses" },
    { id: "1000", customer: "Kyojuro Rengoku", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Dikirim" },
    { id: "1000", customer: "Mitsuri Kanjori", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Dikirim" },
    { id: "1000", customer: "Megumi", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Dikirim" },
    { id: "1000", customer: "Violet Evergarden", product: "Tumbler", qty: 100, price: "Rp 50.000", date: "02-01-2025", status: "Dikirim" },
  ];

  return (
    <div className="p-6 bg-gray-100 font-poppins">
      <h1 className="text-2xl font-bold mb-4 text-blue-800 ">Daftar Pesanan</h1>
      <div className="bg-white rounded-lg shadow p-4">
      <div className="flex gap-5 justify-between">
                                        <select className="border border-gray-200 text-gray-200 rounded-md px-4 text-sm focus:text-black focus:outline-blue-500">
                                            <option value="">Kategori</option>
                                        </select>
                                        <div className=" 
                                                  
                                                      hidden lg:flex items-center w-full bg-transparent border-2  border-gray-100 focus-within:border-blue-500 rounded-md px-2 py-1 space-x-6 ">
                                                    <FiSearch className="text-gray-500 w-6 h-6" />
                                                    <input
                                                    
                                                      type="text"
                                                      placeholder="Search Order"
                                                      className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins"
                                                    />
                                                    
                                                  </div>
                                                  <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-800">
          <FaFileExport className="mr-2" />
          Export
        </button>
                                    </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto my-4 bg-white rounded-lg shadow">
          <thead className="bg-blue-200">
            <tr>
              <th className="p-3">Id Pesanan</th>
              <th className="p-3">Nama Customer</th>
              <th className="p-3">Produk</th>
              <th className="p-3">Jumlah</th>
              <th className="p-3">Total Harga</th>
              <th className="p-3">Tanggal Pesan</th>
              <th className="p-3">Status Pesanan</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={index}
                className={`border-b text-center ${index % 2 === 0 ? "bg-gray-100" : ""}`}
              >
                <td className="p-3 text-center">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">{order.product}</td>
                <td className="p-3 text-center">{order.qty}</td>
                <td className="p-3 text-center">{order.price}</td>
                <td className="p-3 text-center">{order.date}</td>
                <td
                  className={`p-2 text-center font-bold ${
                    order.status === "Dikirim"
                      ? "text-green-500"
                      : "text-orange-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default DaftarPesanan;
