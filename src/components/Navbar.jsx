import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/snackspherelogo.png';
import usericon from '../assets/User.png';
import shoppingcart from '../assets/ShoppingCart.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="w-full h-12 border-b border-black bg-[#F4DFB6] flex items-center justify-center">
        <h3 className="font-roboto text-black text-xs font-normal leading-normal">SPEND $40 AND GET FREE SHIPPING</h3>
      </div>

        
      <nav className="flex justify-between px-6 items-center w-full border-b border-black bg-white">
      {/* Hamburger Menu */}
        <div className="flex sm:hidden items-center">
          <button onClick={toggleMenu} className=" text-black mr-4 text-3xl">
            ☰
          </button>
        </div>


        <div className={`${
            showMenu ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row mt-4 sm:mt-0`}>
          <Link to="/shop" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">SHOP</Link>
          <Link to="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">ABOUT</Link>
          <Link to="/contact" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">CONTACT</Link>
        </div>

      

        <div className={`z-10 flex justify-center h-[70px] ${showMenu ? 'hidden' : 'flex'}`}>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-[110px]" />
          </Link>
        </div>


            <div className={`sm:hidden ${showMenu ? 'hidden' : 'flex'}`}>
        <div className="flex items-center">
          <a href="#account" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">
          <img src={usericon} alt="account" className="h-[30px]" />
          </a>
        </div>

        <div className="flex items-center">
          <Link to="/cart" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">
          <img src={shoppingcart} alt="cart" className="h-[30px]" />
          </Link>
        </div>
            </div>

        <div className="space-x-4 hidden sm:flex">
          <a href="#search" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">SEARCH</a>
          <a href="#account" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">ACCOUNT</a>
          <Link to="/cart" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">CART</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
