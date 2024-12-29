import React, { useState } from "react";
import Foto from "../assets/gambar/me.jpg";

const Profiles = () => {
  // State untuk menentukan konten yang aktif
  const [activeSection, setActiveSection] = useState("profile");

  // Simulasi konten untuk setiap section
  const sections = {
    profile: (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Profil Saya</h1>
        <form className="space-y-4">
          <div>
            <label className="block font-medium text-gray-700">Nama</label>
            <input
              type="text"
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Adam"
              value="Adam"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Adam"
              value="Adam"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="adam@gmail.com"
              value="adam@gmail.com"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">No Telepon</label>
            <input
              type="text"
              className="w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="0888 - 8888 - 8888"
              value="0888 - 8888 - 8888"
            />
          </div>
        </form>
      </div>
    ),
    address: (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Alamat</h1>
        <p>Belum ada data alamat yang tersedia.</p>
      </div>
    ),
    "bank-info": (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Info Rekening</h1>
        <p>Belum ada data rekening yang tersedia.</p>
      </div>
    ),
    "change-password": (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Ganti Password</h1>
        <p>Form untuk mengganti password akan ditambahkan nanti.</p>
      </div>
    ),
    "purchase-history": (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Riwayat Pembelian</h1>
        <p>Belum ada data pembelian yang tersedia.</p>
      </div>
    ),
  };

  return (
    <div className="px-14 py-28">
      <div className="min-h-screen flex bg-blue-100 font-sans rounded-xl shadow-lg">
        {/* Sidebar */}
        <aside className="bg-blue-100 w-80 rounded-xl flex flex-col items-center">
          <div className="p-4 flex flex-col items-center py-16">
            <img src={Foto} alt="me" className="w-48 h-48 rounded-full mb-4" />
            <nav className="w-full mt-6">
              <ul className="space-y-2.5 w-full">
                <li>
                  <hr className="w-full border-black" />
                  <h2 className="font-poppins-menu-navigasi-header text-left text-lg font-bold mt-2 w-full border-t border-b px-4 py-6">
                    Adam
                  </h2>
                  <hr className="w-full border-black mb-4" />
                </li>
                <li>
                  <p className="font-poppins-menu-navigasi-header px-4 py-2 text-left">Akun Saya</p>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${
                      activeSection === "profile"
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveSection("profile")}
                  >
                    Profil Saya
                  </button>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${
                      activeSection === "address"
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveSection("address")}
                  >
                    Alamat
                  </button>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${
                      activeSection === "bank-info"
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveSection("bank-info")}
                  >
                    Info Rekening
                  </button>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${
                      activeSection === "change-password"
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveSection("change-password")}
                  >
                    Ganti Password
                  </button>
                </li>
                <li>
                  <p className="font-poppins-menu-navigasi-header px-4 py-2 text-left">Akun Saya</p>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${
                      activeSection === "purchase-history"
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                    }`}
                    onClick={() => setActiveSection("purchase-history")}
                  >
                    Riwayat Pembelian
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pt-16 px-8 mr-8">
          <div className="bg-white px-6 py-6 rounded-lg shadow-lg w-full">
            {sections[activeSection]}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profiles;
