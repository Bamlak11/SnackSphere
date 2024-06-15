import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          <a href="/">
            <img src="https://s3-alpha-sig.figma.com/img/ead6/7870/f08b28526bae6d5474faf0a4799a99e4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MlpWVxlpRk0kpZWPZBWkaNwbIdZWUKeCvDba0RqCmEkmng9cNPmzmNhoTBG8pVIR5ebRsmrywb9~cHI9Jg3n3gfSBhKqnBYs64jy9mEVraC0EHRTwd~QooPYyJ4m31e9iAC7JMl9L0gFhRK8QZlp1ySXS0WrvvD-H3Vux7~FpSryTUlHt0OgjjR7WsokO~vTlHKUJYGmXQ~62Azu-nuk78-dd53oZlvR0pMmcYWsrhkdjZ~ybQIahaRRpcAy7zGUUesNcODJZNx12aQSk2z7YvxQvciWrY7qi84tlNa~Ohu5ww0ueFlfXZraYP~Y~z9UDVZVOrhBwJIe-GLUA3W3CA__" alt="Logo" className="h-[140px]" />
          </a>
        </div>


            <div className={`sm:hidden ${showMenu ? 'hidden' : 'flex'}`}>
        <div className="flex items-center">
          <a href="#account" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">
          <img src="https://s3-alpha-sig.figma.com/img/9bf6/36cf/8915757d93729c9a1e753fa4e5f0cc67?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vdi5AI0-VqxiaYmV3tsdDY5Z~p1DPhu-O6SFId2J8CiaHlSazBEzweoCCnBzkorcZWnmNT6X7zPllcBPAlFUOhI~1LBpvGqtTZM70jX0DD638ppQ3TpIZDoQNChQqnVRvF8EoepFugVnVi9wzuUV~BYjgTqByS5hyQTlNuh7YcNTY-znP8GRHToVTSS3Y8YWB7p2A5D5g~4a2ykTkMhJeqeZvWNkVYmyy1UG7OclEiLBzM1eUUuMUDNhUTCoIXQ0hNKqF4GCrxPKwfl-bL07bHb5xJU7DDlUlyW03EvLKO4QXT~r6FfnSievAa8MIdfOmwf77FxKXjegHaXpPcHrkA__" alt="account" className="h-[30px]" />
          </a>
        </div>

        <div className="flex items-center">
          <Link a="/cart" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md">
          <img src="https://s3-alpha-sig.figma.com/img/a272/6a7d/ff14f3828457d02e0fd3ff1dac0b1706?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RpfW-Huc5VTeIYLwdwcbmS79iY36syyPjBZGVHvk9f9SVYdDy-87LtBs-O5yeiMotCA~scJXHxuLTiTIjICAFdxa7lK9qZDmPwWl7aC-dzAFX2r695wIbutuZSrKtCm1H5XMUhO0t~p33F0JDhbPusKwrEBwlg-VuBUSIb5GLFRqpT~IhIfrt6s8kYZtuC9H-6oPl9eOJoqNqQBpuno30LD2W7~dCpFlW7VYOXADCmNJl~a5GDRmoV3kdE051pdMj62BHwrv-7bSspB4b~lI0AhBr-qUJ1fjgJSAHBoNi4MWXg6Jze-LjKEFqgMHdG-NZahlaGY-V606Hc95yd-11A__" alt="cart" className="h-[30px]" />
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
