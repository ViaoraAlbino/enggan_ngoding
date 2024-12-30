import React, { useState } from "react";
import Foto from "../assets/gambar/me.jpg";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const Profiles = () => {
  const [activeSection, setActiveSection] = useState("profile");

  const sections = {
    profile: (
      <div className="px-6 py-6">
        <h1 className="text-left font-poppins-profil-isi mt-6 text-2xl font-semibold">Profil Saya</h1>
        <div className="mt-8 mb-10 space-y-6">
          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-1/4">Nama</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-1/4">Username</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-1/4">Email</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-1/4">No Telpon</p>
            <input
              type="number"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-pink-500 invalid:text-pink-600
          focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
        </div>
      </div>
    ),
    address: (
      <div>
        <h1 className="text-2xl font-semibold mb-4">Alamat</h1>
        <p>Belum ada data alamat yang tersedia.</p>
      </div>
    ),
    "bank-info": (
      <div className="px-6 py-6">
        <h1 className="text-left font-poppins-profil-isi mt-6 text-2xl font-semibold">Rekening Bank</h1>
        <div className="mt-8 mb-10 space-y-6">
          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Nama Bank</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Nama Cabang</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Nama Lengkap</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Nomor Rekening</p>
            <input
              type="number"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="text-left">
            <button className="font-monster-button-password mt-7 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-6 py-4 rounded-2xl">
              Simpan Data
            </button>
          </div>
        </div>
      </div>
    ),
    "change-password": (
      <div className="px-6 py-6">
        <h1 className="text-left font-poppins-profil-isi mt-6 text-2xl font-semibold">Ganti Password</h1>
        <div className="mt-8 mb-10 space-y-6">
          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Password Lama</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Password Baru</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>

          <div className="flex items-center space-x-4">
            <p className="font-poppins-menu-navigasi-header text-left w-2/4">Konfirmasi Password</p>
            <input
              type="text"
              className="font-poppins-profil-isi-form mt-1 block w-3/4 px-3 py-4 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="text-left">
            <button className="font-monster-button-password mt-7 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-6 py-4 rounded-2xl">
              Simpan Password Baru
            </button>
          </div>
        </div>
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
                    Hi, Adam
                  </h2>
                  <hr className="w-full border-black mb-4" />
                </li>
                <li>
                  <p className="font-poppins-menu-navigasi-header px-4 py-2 text-left">Akun Saya</p>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${activeSection === "profile"
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
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${activeSection === "address"
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
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${activeSection === "bank-info"
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
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${activeSection === "change-password"
                      ? "bg-blue-200 text-blue-800"
                      : "text-gray-700 hover:bg-blue-200 hover:text-blue-800"
                      }`}
                    onClick={() => setActiveSection("change-password")}
                  >
                    Ganti Password
                  </button>
                </li>
                <li>
                  <p className="font-poppins-menu-navigasi-header px-4 py-2 text-left">Pembelian</p>
                </li>
                <li>
                  <button
                    className={`block font-poppins-menu-navigasi-body w-full text-left py-2 px-4 ${activeSection === "purchase-history"
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
          <div className="bg-white px-5 py-5 rounded-xl shadow-lg w-full">
            {sections[activeSection]}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profiles;
