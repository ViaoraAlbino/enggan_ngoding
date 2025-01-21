// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout'; // import Layout
import Product from './components/Kategori'; // Halaman Produk
import About from './components/About'; //Halaman About
import Log from './components/Login'; // Halaman Login
import Registrasi from './components/Register' // Halaman Registrasi
import Home from './pages/isiHome'; // Halaman Home // Halaman About (jika ada)
import Sebelumfooter from './components/Sebelumfooter';
import Footer from './components/Footer';

const App = () => {
    return (

        <Router> {/* Router hanya ada di sini */}
            <Navbar /> {/* Navbar hanya digunakan di sini */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/product' element={<Product />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Log />} />
                <Route path='/register' element={<Registrasi />} />
            </Routes>
            <Sebelumfooter/>
            <Footer/>
        </Router>
    );
};

export default App;