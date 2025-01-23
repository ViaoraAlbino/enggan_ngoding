// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Layout from './components/Layout'; // Layout umum
// import Product from './components/Kategori'; // Halaman Produk
// import About from './components/About'; // Halaman About
// import Log from './components/Login'; // Halaman Login
// import Registrasi from './components/Register'; // Halaman Registrasi
// import Home from './pages/isiHome'; // Halaman Home
// import Sebelumfooter from './components/Sebelumfooter';
// import Footer from './components/Footer';
// import Profile from './pages/Profiles';
// import ProductDetails from './components/ProductDetails';
// import Login from './components/Login';
// import Register from './components/Register';
// import Home from './pages/Home';
// import Isihome from './pages/isiHome';
// import ASidebar from './pages/admin/Navigator';
// import ADashboard from './pages/admin/Dashboard';
// import ANavi from './pages/admin/Navigator';
// import ScrollToTop from './components/ScrollToTop';
// import Productdetails from './components/ProductDetails';

// const App = () => {
//     return (
//             // <ANavi/>
//             {/* <ADashboard/> */}
//             {/* <Navbar /> */}
//              {/* <Profile />  */}
//             {/* <Content />  */}
//             {/* <Product /> */}
//             {/* <Login /> */}
//             {/* <Register /> */}
//             {/* <Isihome/> */}
//             {/* <ProductDetails /> */}
//             {/* <Sebelumfooter /> */}
//             {/* <Footer /> */}
//         <Router>
//             <ScrollToTop />
//             <Navbar />
//             <Routes>
//                 {/* Halaman dengan menampilkan Sebelumfooter */}
//                 <Route
//                     path='/'
//                     element={
//                         <Layout>
//                             <Home />
//                         </Layout>
//                     }
//                 />
//                 <Route
//                     path='/product'
//                     element={
//                         <Layout>
//                             <Product />
//                         </Layout>
//                     }
//                 />
//                 <Route
//                     path='/about'
//                     element={
//                         <Layout>
//                             <About />
//                         </Layout>
//                     }
//                 />
//                 <Route
//                     path='/productdetail'
//                     element={
//                         <Layout>
//                             <Productdetails />
//                         </Layout>
//                     }
//                 />
//                 <Route
//                     path='/keranjang'
//                     element={
//                         <Layout>
//                             <Keranjang />
//                         </Layout>
//                     }
//                 />
//                 {/* Halaman tanpa Sebelumfooter ngikut ui/ux */}
//                 <Route path='/login' element={<Log />} />
//                 <Route path='/register' element={<Registrasi />} />
//             </Routes>
//             <Footer />
//         </Router>
//     );
// };

// export default App;

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
import Profile from './pages/Profiles';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Register from './components/Register';
import Home from './pages/Home';
import Isihome from './pages/isiHome';
import ASidebar from './pages/admin/Navigator';
import ADashboard from './pages/admin/Dashboard';
import ANavi from './pages/admin/Navigator';
import ScrollToTop from './components/ScrollToTop';
import Productdetails from './components/ProductDetails';

const App = () => {
    return (
        <div className="App scroll-smooth mx-auto">
            <ANavi/>
            {/* <ADashboard/> */}
            {/* Untuk component dasar */}
            {/* <Navbar /> */}
             {/* <Profile />  */}
            {/* <Content />  */}
            {/* <Product /> */}
            {/* <Login /> */}
            {/* <Register /> */}
            {/* <Isihome/> */}
            {/* <ProductDetails /> */}
            {/* <Sebelumfooter /> */}
            {/* <Footer /> */}
        </div>
    );
};

export default App;