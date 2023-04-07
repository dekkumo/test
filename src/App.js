import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Auction from './components/Auction/Auction';
import Contact from './components/Contact/Contact';
import Documents from './components/Documents/Documents';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='wrapper'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/auction' element={<Auction />} />
          <Route path='/document' element={<Documents />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
