import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Kategori';
import Product from './components/Product';
import Sebelumfooter from './components/Sebelumfooter';
import Footer from './components/Footer';
import Profile from './pages/Profiles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      {/* <Content /> */}
      {/* <Product /> */}
      <Sebelumfooter />
      <Footer />
    </div>
  );
}

export default App;
