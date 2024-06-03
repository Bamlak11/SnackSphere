import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="w-full h-12 border-b border-black bg-[#F4DFB6] flex items-center justify-center">
      <h3 className="font-roboto text-black text-xs font-normal leading-normal">SPEND $40 AND GET FREE SHIPPING</h3>
      </div>
      <nav className="flex flex-col sm:flex-row justify-between items-center w-full h-19 sm:h-20 border-b border-black bg-white px-6">
        <div className="flex space-x-4">
          <a href="/shop" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">SHOP</a>
          <a href="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">ABOUT</a>
          <a href="/contact" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">CONTACT</a>
        </div>
        <div className="z-10 flex justify-center items-end h-[170px]">
          <a href="/">
            <img src="https://s3-alpha-sig.figma.com/img/ead6/7870/f08b28526bae6d5474faf0a4799a99e4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlpWVxlpRk0kpZWPZBWkaNwbIdZWUKeCvDba0RqCmEkmng9cNPmzmNhoTBG8pVIR5ebRsmrywb9~cHI9Jg3n3gfSBhKqnBYs64jy9mEVraC0EHRTwd~QooPYyJ4m31e9iAC7JMl9L0gFhRK8QZlp1ySXS0WrvvD-H3Vux7~FpSryTUlHt0OgjjR7WsokO~vTlHKUJYGmXQ~62Azu-nuk78-dd53oZlvR0pMmcYWsrhkdjZ~ybQIahaRRpcAy7zGUUesNcODJZNx12aQSk2z7YvxQvciWrY7qi84tlNa~Ohu5ww0ueFlfXZraYP~Y~z9UDVZVOrhBwJIe-GLUA3W3CA__" alt="Logo" className="h-[130px]" />
          </a>
        </div>
        <div className="space-x-4">
          <a href="#search" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">SEARCH</a>
          <a href="#account" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">ACCOUNT</a>
          <a href="#cart" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">CART</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
