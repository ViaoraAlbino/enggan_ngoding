// ini digunankan untuk melakukan penggabungan beberapa komponen
import './App.css';

import Navbar from './components/Navbar';
import Sebelumfooter from './components/Sebelumfooter';
import Content from './components/Kontent';

function App() {
  return(
    <div className='App'>
      <Navbar/>
      <Content/>
      <Sebelumfooter/>
    </div>
  );
}

export default App;