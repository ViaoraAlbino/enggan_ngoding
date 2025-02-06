import React, { useState } from "react";
import Foto from "../assets/gambar/me.jpg";
import MapComponent from '../components/MapComponent';

const Profiles = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = {
    profile: (
      <div className="px-2 py-9  ">
        <h1 className="text-left font-poppins-profil-isi mt-4 ml-5 text-lg font-semibold">Profil Saya</h1>
        <div className="mt-4 mb-6 ml-6  space-y-4 ">
          {["Nama", "Username", "Email", "No Telpon"].map((label, index) => (
            <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-2" key={index}>
              <p className="font-poppins-menu-navigasi-header ml-66 text-left w-full sm:w-1/3 text-xs sm:text-sm">{label}</p>
              <input
                type={label === "No Telpon" ? "number" : "text"}
                className="font-poppins-profil-isi-form mt-1 block w-full sm:w-2/3 px-2 py-1 bg-white border border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
          ))}
        </div>
      </div>
    ),
    address: (
      <div>
        <h1 className="text-lg font-semibold mb-2">Alamat</h1>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <label className="w-1/3 text-left text-sm">Nama Jalan</label>
            <input type="text" className="w-2/3 px-2 py-1 border border-gray-300 rounded-md text-sm" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-1/3 text-left text-sm">Provinsi, Kabupaten, Kecamatan, Kelurahan</label>
            <input type="text" className="w-2/3 px-2 py-1 border border-gray-300 rounded-md text-sm" />
          </div>
          <div className="flex items-center space-x-2">
            <label className="w-1/3 text-left text-sm">Detail Tambahan</label>
            <input type="text" className="w-2/3 px-2 py-1 border border-gray-300 rounded-md text-sm" placeholder="Blok atau patokan" />
          </div>
          <MapComponent />
        </div>
      </div>
    ),
    BankInfo: (
      <div className="px-4 py-4">
        <h1 className="text-left font-poppins-profil-isi mt-4 text-lg font-semibold">Rekening Bank</h1>
        <div className="mt-4 mb-6 space-y-4">
          {["Nama Bank", "Nama Cabang", "Nama Lengkap", "Nomor Rekening"].map((label, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <p className="font-poppins-menu-navigasi-header text-left w-1/3 text-xs sm:text-sm">{label}</p>
              <input
                type={label === "Nomor Rekening" ? "number" : "text"}
                className="font-poppins-profil-isi-form mt-1 block w-2/3 px-2 py-1 bg-white border border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
          ))}
          <div className="text-left">
            <button className="font-monster-button-password mt-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 rounded-lg text-sm">
              Simpan Data
            </button>
          </div>
        </div>
      </div>
    ),
    ChangePassword: (
      <div className="px-4 py-4">
        <h1 className="text-left font-poppins-profil-isi mt-4 text-lg font-semibold">Ganti Password</h1>
        <div className="mt-4 mb-6 space-y-4">
          {["Password Lama", "Password Baru", "Konfirmasi Password"].map((label, index) => (
            <div className="flex items-center space-x-2" key={index}>
              <p className="font-poppins-menu-navigasi-header text-left w-1/3 text-xs sm:text-sm">{label}</p>
              <input
                type="text"
                className="font-poppins-profil-isi-form mt-1 block w-2/3 px-2 py-1 bg-white border border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              />
            </div>
          ))}
          <div className="text-left">
            <button className="font-monster-button-password mt-4 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 rounded-lg text-sm">
              Simpan Password Baru
            </button>
          </div>
        </div>
      </div>
    ),
    purchaseHistory: (
      <div>
        <h1 className="text-lg font-semibold mb-2">Riwayat Pembelian</h1>
        <p>Belum ada data pembelian yang tersedia.</p>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-blue-100">
      <div className="min-h-screen flex mt-16 mb-16 bg-blue-100 font-sans rounded-xl shadow-lg">
        <aside className="bg-blue-100 lg:w-64 rounded-xl flex flex-col items-center">
          <div className="p-4 flex flex-col items-center py-8">
            <img src={Foto} alt="me" className="w-28 h-28 rounded-full mb-4" />
            <nav className="w-full mt-4">
              <ul className="space-y-2 w-full">
                <li>
                  <hr className="w-full border-black" />
                  <h2 className="font-poppins-menu-navigasi-header text-left text-sm font-bold mt-2 w-full border-t border-b px-4 py-4">
                    Hi, Adam
                  </h2>
                  <hr className="w-full border-black mb-2" />
                </li>
                <li>
                  <p className="font-poppins-menu-navigasi-header mr-7 px-4 py-1 text-left text-sm">Akun Saya</p>
                </li>
                {["profile", "address", "bank-info", "change-password", "purchase-history"].map((section) => (
                  <li key={section}>
                    <button
                      className={`block font-poppins-menu-navigasi-body w-full text-left py-1 px-2 text-sm ${activeSection === section
                        ? "bg-blue-200 text-blue-800"
                        : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                        }`}
                      onClick={() => setActiveSection(section)}
                    >
                      {section === "profile" ? "Profil Saya" : section === "address" ? "Alamat" : section === "bank-info" ? "Info Rekening" : section === "change-password" ? "Ganti Password" : "Riwayat Pembelian"}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        <main className="flex-1 pt-12 px-4 mr-4">
          <div className="bg-white px-4 py-4 rounded-xl shadow-lg w-full">
            {sections[activeSection]}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profiles;
