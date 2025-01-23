import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Kategori';
import Product from './components/Product';
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

function App() {
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
}

export default App;