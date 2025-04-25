import { Routes, Route } from 'react-router-dom';

// COMPONENTS
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//PAGES
import Home from './pages/Home';
import Products from './pages/Products';
import Single from './pages/Single';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

import './App.css';

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />

    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<Products />}/>
      <Route path='/single/:id' element={<Single />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/cart' element={<Cart />}/>
      <Route path='/admin' element={<Admin />}/>
      <Route path='/*' element={<NotFound />}/>
      
      
    </Routes>

      <Footer />
   
    </div>
  );
}

export default App;
