import React from "react";
import
{ Pagination }
from
"antd"
;
import {
  FaUserFriends,
  FaShoppingCart,
  FaShoppingBasket,
  FaRegStar,
} from "react-icons/fa";

const ADashboard = () => {
  return (
    <div className="p-4 py-8 bg-gray-100  font-poppins">
      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-800 text-white p-6 rounded-lg flex items-center justify-between ">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-4xl font-extrabold">150</h4>
            <p>Total Customer</p>
          </div>
          <FaUserFriends className="text-5xl ms-auto" />
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg flex items-center justify-between ">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-4xl font-extrabold">50</h4>
            <p>Total Produk</p>
          </div>
          <FaShoppingBasket className="text-5xl ms-auto" />
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg flex items-center justify-between ">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-4xl font-extrabold">100</h4>
            <p>Total Orders</p>
          </div>
          <FaShoppingCart className="text-5xl ms-auto" />
        </div>
        <div className="bg-blue-800 text-white p-6 rounded-lg flex items-center justify-between ">
          <div className="flex flex-col items-start gap-2">
            <h4 className="text-4xl font-extrabold">100</h4>
            <p>Total Review</p>
          </div>
          <FaRegStar className="text-5xl ms-auto" />
        </div>
      </div>

      {/* Table Section */}
      <h3 className="font-poppins text-blue-500 text-lg font-semibold mb-4">
        Pesanan Masuk
      </h3>
      <div className="overflow-x-auto rounded-lg drop-shadow-lg">
        <table className="table-fixed w-full bg-white  border-none drop-shadow-xl">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="px-2 py-2">Id Pesanan</th>
              <th className="px-2 py-2">Nama Customer</th>
              <th className="px-2 py-2">Produk</th>
              <th className="px-2 py-2">Jumlah</th>
              <th className="px-2 py-2">Total Harga</th>
              <th className="px-2 py-2">Tanggal Pesan</th>
              <th className="px-2 py-2">Status Pesanan</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 1000, nama: "Adam", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Maki Zein", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Nobara Kugisaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Diproses" },
              { id: 1000, nama: "Toge Inumaki", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Dikirim" },
              { id: 1000, nama: "Kento Nanami", produk: "Tumbler", jumlah: 100, harga: "Rp 50.000", tanggal: "2", status: "Dikirim" },
            ].map((row, index) => (
              <tr
                key={index}
                className={`text-center border-b-2 `}
              >
                <td className=" px-2 py-4">{row.id}</td>
                <td className=" px-2 py-4">{row.nama}</td>
                <td className=" px-2 py-4">{row.produk}</td>
                <td className=" px-2 py-4">{row.jumlah}</td>
                <td className=" px-2 py-4">{row.harga}</td>
                <td className=" px-2 py-4">{row.tanggal}</td>
                <td className={` px-2 py-4 font-semibold ${row.status === "Diproses" ? "text-yellow-500" : "text-green-500"}`}>
                  {row.status}
                </td>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ADashboard;
