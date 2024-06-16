import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const ShopPage = ({products, addToCart, showConfirmation}) => {
  const [activeTab, setActiveTab] = useState('ALL');
  const [sortBy, setSortBy] = useState('Featured');


  const tabs = [
    'ALL',
    'SALTY',
    'SWEET',
    'SPICY & SOUR',
    'EARTHY',
    'DISCOVERY PACKS',
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  const sortingOptions = ['', 'Price: Low to High', 'Price: High to Low', 'Newest Arrivals'];
  

  const getFilteredProducts = () => {
    if (activeTab === 'ALL') {
      return products;
    }
    return products.filter(product => product.category === activeTab);
  };

  const CartConfirmation = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-green-600 text-white text-center">
        Item added to cart!
      </div>
    );
  };

  return (
    <div>
    <Navbar />
    <div className='flex flex-col m-5 sm:m-10 lg:m-20'>
      <h1 className='font-bold text-2xl mb-4'>SHOP</h1>
      <p className='font-light'>Welcome! Here you will find all of the available products on <br />SnackSphere that should meet any and all of your snacking needs!</p>
      <div className='flex space-x-5 sm:space-x-10 mt-4 mb-8'>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19.5" fill="white" stroke="black" />
          <text x="20" y="24" textAnchor="middle" fontSize="14" fill="black">V</text>
        </svg>
        <p className='flex items-center'>VEGAN</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40 40" fill="none">
          <circle cx="20" cy="20" r="19.5" fill="white" stroke="black" />
          <text x="20" y="24" textAnchor="middle" fontSize="14" fill="black">GF</text>
        </svg>
        <p className='flex items-center'>GLUTEN FREE</p>
      </div>
      
      <div className='flex flex-wrap gap-2 mt-4'>
          {tabs.map((tab) => (
            <p
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex items-center px-3 py-1 rounded-full border cursor-pointer ${
                activeTab === tab ? 'bg-[#d6d46d] border-black text-black' : 'bg-white border-gray-300 text-gray-700'
              }`}
            >
              {tab}
            </p>
          ))}
        </div>

      
      <div className='flex items-center mt-4'>
        <p className='font-roboto'>SORT BY</p>
        <div className='relative'>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='ml-2 p-2 border border-black rounded-full w-7 h-7 text-center appearance-none bg-white'
          >
            {sortingOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className='pointer-events-none absolute top-[7px] right-[-2px] flex items-center px-2 text-gray-700'>
            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
            </svg>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap gap-5 sm:gap-8 mt-8'>
          {getFilteredProducts().map((product) => (
            <div
              key={product.id}
              className='w-[45%] sm:w-[30%] md:w-[25%] lg:w-[20%] flex-shrink-0'
            >
              <div className='relative overflow-hidden border border-black'>
                <Link to={`/shop/${product.id}`}>
                  <div
                    className='w-full h-52 bg-cover bg-no-repeat'
                    style={{ backgroundImage: `url(${product.image})` }}
                  ></div>
                </Link>
              </div>
              <div className='p-2'>
                <h3 className='text-lg font-semibold'>{product.name}</h3>
                <p className='text-gray-500'>{product.price}</p>
              </div>
              <div className='mt-2'>
                <button
                  onClick={() => addToCart(product)}
                  className='flex items-center justify-center gap-2 px-4 py-2 rounded border-2 border-black bg-white'
                  style={{ padding: '13px 15px' }}
                >
                  Add to Cart
                </button>
                {/* <button onClick={() => removeFromCart(product)} className='flex items-center justify-center gap-2 px-4 py-2 rounded border-2 border-black bg-white'>Remove from Cart</button> */}
              </div>
            </div>
          ))}
        </div>
  
        {showConfirmation && <CartConfirmation />}
        <div className='flex justify-center mt-10'>
          <button className='flex justify-center items-center gap-2 rounded-full border border-black bg-white py-3.5 px-8'>
            <p>LOAD MORE</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
