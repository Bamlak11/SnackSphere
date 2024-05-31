import React from 'react';
import LandingPage from './components/Pages/LandingPage';
import ShopPage from './components/Pages/ShopPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
