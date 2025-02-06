import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Layout umum
import LayoutA from './components/LayoutA'; // Layout tanpa footer
import Product from './components/Kategori'; // Halaman Produk
import About from './components/About'; // Halaman About
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/isiHome';
import ProductDetails from './components/ProductDetails';
import Keranjang from './components/Keranjang';
import Wishlist from './components/Wishlist';
import ScrollToTop from './components/ScrollToTop';

// Halaman Admin
import ANavi from './pages/admin/Navigator';
import ADashboard from './pages/admin/Dashboard';
import Customer from './pages/admin/Customer';
import CustomerE from './pages/admin/CustomerEdit';
import ACategory from './pages/admin/Category';
import AProduct from './pages/admin/Product';
import AEditCustomer from './pages/admin/CustomerEdit';
import AProductadd from './pages/admin/Productadd';
import DaftarPesanan from './pages/admin/order';
import ProductEdit from './pages/admin/ProductEdit';
import AProductEdit from './pages/admin/ProductEdit';

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Halaman User dengan Layout */}
                <Route path='/' element={<Layout><Home /></Layout>} />
                <Route path='/product' element={<Layout><Product /></Layout>} />
                <Route path='/about' element={<Layout><About /></Layout>} />
                <Route path='/productdetail' element={<Layout><ProductDetails /></Layout>} />
                <Route path='/keranjang' element={<Layout><Keranjang /></Layout>} />
                <Route path='/wishlist' element={<Layout><Wishlist /></Layout>} />

                {/* Halaman Auth tanpa Layout */}
                <Route path='/login' element={<LayoutA><Login /></LayoutA>} />
                <Route path='/register' element={<LayoutA><Register /></LayoutA>} />

                {/* Halaman Admin dengan `ANavi` sebagai layout */}
                <Route path='/admin' element={<ANavi />}>
                    <Route index element={<ADashboard />} /> {/* Default halaman admin */}
                    <Route path='dashboard' element={<ADashboard />} />
                    <Route path='customers' element={<Customer />} />
                    <Route path='customeredit' element={<AEditCustomer />} />
                    <Route path='category' element={<ACategory />} />
                    <Route path='products' element={<AProduct />} />
                    <Route path='productadd' element={<AProductadd />} />
                    <Route path='productedit' element={<AProductEdit />} />
                    <Route path='orders' element={<DaftarPesanan />} />
                </Route>
            </Routes>
        </Router>
    );
};
export default App;
