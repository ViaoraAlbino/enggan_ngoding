// ini digunankan untuk melakukan penggabungan beberapa komponen
import './App.css';

import Navbar from './components/Navbar';
import Content from './components/Kontent';
import Sebelumfooter from './components/Sebelumfooter';
import Footer from './components/Footer';

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Content/>
      <Sebelumfooter/>
      <Footer/>
    </div>
  );
}

export default App;