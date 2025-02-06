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
import Profiles from './pages/Profiles';

import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Register from './components/Register';
import Isihome from './pages/isiHome';
import ASidebar from './pages/admin/Navigator';
 import ADashboard from './pages/admin/Dashboard';
import ANavi from './pages/admin/Navigator';
import ScrollToTop from './components/ScrollToTop';
import Productdetails from './components/ProductDetails';
import Keranjang from './components/Keranjang';
import Wishlist from './components/Wishlist';


const App = () => {
    return (
       <Profiles />
       
    );
};
export default App;