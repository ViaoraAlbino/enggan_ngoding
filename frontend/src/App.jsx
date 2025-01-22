import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Layout from './components/Layout'; // Layout umum
import Product from './components/Kategori'; // Halaman Produk
import About from './components/About'; // Halaman About
import Log from './components/Login'; // Halaman Login
import Registrasi from './components/Register'; // Halaman Registrasi
import Home from './pages/isiHome'; // Halaman Home
import Sebelumfooter from './components/Sebelumfooter';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Productdetails from './components/ProductDetails';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />
            <Routes>
                {/* Halaman dengan menampilkan Sebelumfooter */}
                <Route
                    path='/'
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path='/product'
                    element={
                        <Layout>
                            <Product />
                        </Layout>
                    }
                />
                <Route
                    path='/about'
                    element={
                        <Layout>
                            <About />
                        </Layout>
                    }
                />
                <Route
                    path='/productdetail'
                    element={
                        <Layout>
                            <Productdetails />
                        </Layout>
                    }
                />
                {/* Halaman tanpa Sebelumfooter ngikut ui/ux */}
                <Route path='/login' element={<Log />} />
                <Route path='/register' element={<Registrasi />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;