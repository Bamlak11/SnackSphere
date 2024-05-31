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
            <img src="https://s3-alpha-sig.figma.com/img/ead6/7870/f08b28526bae6d5474faf0a4799a99e4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n-bpDX7N9Ta8aJMDxrAq0UIoxwnFv8hckspvEyos1d~b3qx2WyZ-FhHj8T7nzZ~CaFYFyur4MJrtWDKumEeDLe~ytcMlnIgaQjMguxcc8lIxJrcQKfVJAAE2KbgG~GaGDyHTcepgMmi0tAZ0h5RIWceJmjM-BuL2yMfxknHpIzr1zDbJZi7lkTW0CwIeLtx3AwnIjIrzFZFdhtA4~L2shlISCtkMRTXif5IWM3StZHANzRHKbzaF7DQQJivEiBGFvESCDA4uPXJgpESuGlAuvmMIkh4vssYfZ4-RFkDigwaovM~9TZOESqLTEPW2YFEGcfCkF8VvUKoqhZnZv9XiMQ__" alt="Logo" className="h-[130px]" />
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
