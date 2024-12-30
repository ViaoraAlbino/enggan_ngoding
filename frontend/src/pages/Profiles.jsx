import React, { useState } from "react";
import Foto from "../assets/gambar/me.jpg";

const Profiles = () => {
  // State untuk menentukan konten yang aktif
  const [activeSection, setActiveSection] = useState("profile");

  // Simulasi konten untuk setiap section
  const sections = {
    profile: (
      <div>
        <h1 className="text-left font-poppins-profil-isi mt-6">Profil Saya</h1>
        <table className="border-none">
          <tr>
            <td>
              <p className="font-poppins-menu-navigasi-header">Nama</p>
            </td>
            <td>
            <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
      <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">$</div>
      <input type="text" name="price" id="price" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="0.00" />
      <div class="grid shrink-0 grid-cols-1 focus-within:relative">
        <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
        <svg class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
            </td>
          </tr>
        </table>
        {/* <form className="space-y-4">
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
        </form> */}
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
