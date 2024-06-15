import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="w-full h-full bg-[#D6D46D]">
      <div className="flex justify-between items-start px-4 py-6 mb-40">
        
        <div className='mx-20 text-left'>
          <h3 className="text-black font-roboto font-medium text-lg">Company</h3>
          <div className="mt-2 flex flex-col">
            <Link to="/shop" className="text-black font-roboto text-base font-light">Shop</Link>
            <Link to="/about" className="text-black font-roboto text-base font-light">About Us</Link>
            <Link to="/contact" className="text-black font-roboto text-base font-light">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-black mx-10"></div>
      <p className="flex text-black font-roboto text-base font-light text-center px-28 py-4">2024</p>
    </div>
  );
};

export default Footer;
