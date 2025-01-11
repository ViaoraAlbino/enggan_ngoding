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

function App() {
    return (
        <div className="App scroll-smooth">
            {/* Untuk component dasar */}
            <Navbar />
            <Profile />
            <Content />
            {/* <Product /> */}
            {/* <Login />
            <Register /> */}
            <ProductDetails />
            <Sebelumfooter />
            <Footer />
        </div>
    );
}

export default App;