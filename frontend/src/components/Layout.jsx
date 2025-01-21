// Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // import Navbar
import { Outlet } from 'react-router-dom'; // Ini akan menampilkan komponen rute yang aktif

const Layout = () => {
  return (
    <div>
      <Navbar /> {/* Navbar tetap ditampilkan di semua halaman */}
      <main>
        <Outlet /> {/* Bagian ini akan menampilkan halaman yang sesuai dengan rute */}
      </main>
    </div>
  );
};

export default Layout;