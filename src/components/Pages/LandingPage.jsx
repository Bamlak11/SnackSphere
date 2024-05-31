import React from 'react';
import Navbar from '../Navbar';
import HeroSection from '../HeroSection';
import Products from '../Products';
import Footer from '../Footer';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Products />
      <Footer />
    </div>
  )
}

export default LandingPage
