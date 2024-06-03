import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const ShopPage = () => {
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

  // product data
  const products = [
    { id: 1, name: 'SESAME PRETZELS', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/ec67/1078/83e00f3dc13216cce47637a271f8369b?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AECR3GA7tHFwmC-ZF3WTzqltx52Gg4p5aoTUDro8GJ-KkAavytxBl8qLOUsdVs9Ewc5jtG7O8U7sFB61cfdiYBXdMas3cV47Fs8vsBPBF9RrL9tMjzx3ZilnXo-OGQxCFJ9DOsR5LzKvT89ucvH5qiZ9iQDtVNxAcrmkaRTPSuKwRkf2quW6E71ESz5Eup3KwHBOOTMnnkZsUBX4HBbyQonFnS77YqsP2DBoDSmmNwn36hqIgD542GVPCcqeiTcoItv2e46u73g14GlpA7tZUA1QeVksBgRo2fB5i4vH6P8XcWIx0WgBXoSQp0Z99hU18uyBu6xaX-QXcSBGXv0bzA__' },
    { id: 2, name: 'SOUR VEGAN BEARS', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/7951/9da3/bc8040ea88c0414e28ed58d2bf4ddba4?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Aw1tnqdG7ByS~KSq-scGlYnhbOYepwySragVet96Qo1VntYIC2U-tebr1FdAirfsI3PGEWlPX55EGNURt~cx51sU2n50vX0kRdf7IMc13eCabUvIBJuZLzwZrqYXRP7NSlfYo~3tRMCeyJS9BeqCZGcALyWoD9cMR3jYH9cULjW0Vkyunct5RYgrAqibfPNuyHTilgVC6Biv3WH2HthQ-gG3t5kcIJtmHEdjLUhAf1YPqqv7zpKRZyqazVu6HGl-wLkOolbyh2PXRUnw7Q2EeNLjjIFhtjosaTCWhNSqHQMQd700cIFUj5w4KaEuxG4178Mn1Itx~6AiiMlNyQ7BmQ__' },
    { id: 3, name: 'FLORAL NOTES TEA PACK', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/98b7/0529/c392f28789f1f26d143313c8d33c389a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHj50-wnHtqPu2zNAmTtdsIxHcTZ1W14nEG~6w9QXCkaLhx81jST2v1XuQPeEKWgSKmFoBqmi81YVDgenjcDLWwgdbUttYMf6jj-Uf52Fw56FsB7ITX1NHqCoCsePVru412VE3JUTn4sPFRFaAlnSiuYJsskOKBGicAGiZjmzDY65P4DBzuMIp7krhsh3oRpsVn0iBSPPCiU8dR86Z6GxiD-rJevJBzFdnAyymHX8VZeiHZuZLReR2yZdMjFJD1lrKOtwaLOtB-9asMjQVxUu1yzBHylomM~Chdy8PkKm1oeTezs9ihcEH9EoJklvOliLppLqHmoV~mYi~g4tk-lwQ__' },
    { id: 4, name: 'OVEN-BAKED SWEET POTATO CHIPS', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/499a/de6d/d0309a1ce7cea4fe2867cfa5ed48d747?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g6yOxl8T04MfBjtDZhB0oqS1y52XPDlNc613R33iU4BuK-1h4KJs1CpiS-HX56VP3lkd2m~V0qfOlh0uBvlgNyjyNWLrf1EXt-3cms0qSYOB0HKTrxF9QrdK2YkpH4-xGXdoyEGEHwr3bLZ6B-NUkOsELMRuFUe6HxVkUw6TWLIGVLosmxU~Xsk0TzZB2IAHC6S8P7WnFJSb72gXJkuGcvWkzAvRYJv9AmiL71zQ49JbfXRHCpuu1OUwyyZxlCdp3uqwI1zeorrRDZOgq7XAsgXsGN1AmJuGdqrqHAoE5R5McbgK3FCmNLsAuJdLzpsPrRK3xfNYNwB9pwHLC7-EVA__' },
    { id: 5, name: 'GUMMY FOREST', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/c1d6/db97/e0c975f0567ecf68b6b568858e14753d?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gpzVMGi5bZccY789zmrB4xsP6ECuH5BOlfh2Lwi3ajNRsI7bJvwUCWCOr3Zeg4pVhpHhagk~Sp4am9J3dbxy7RCpQfHUMjJ3brOKfDvA0AaF0ax284w5gyqaRN~febsymCcT7S7NbPumFgAqI0osl42EkIq6jbW2NBjYlUHkqDBLTKnDX1e3crdDoI8lA0Iq-5PUq2QZBv9gCbVy2dMGP~mc50-nxerv8I9R0MJ5AYS7Fb2ZcJqIXEMzMeFFNyXylzKoDBpkXtXAa110X-p2Sw4Xbm9zzJlcXiJu8CqAwAxseC5MJkSW1rkFdaE6ZrQPml99rb5UxAhQpp2hGl3OuQ__' },
    { id: 6, name: 'CANDIED KIWI', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/4bd0/a8db/1399413f06eddb9cb54414ef71356a1f?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fTMF0G3fctdqdc9HT5fIrdZYAbGX5bi-4B3~Sk9FiOe~9UOrQKZrgYeYtcFxucGcNuJTqRlvgznLdLF863vHTn9r8SvMD7w4RsCh1ynL3LUJvolt-zUHj4pa9XX4rYIEUML5D-jVfSwUBOVuMWa~8bsyS6uNBHa0I35D4-3KXOSke83DcoFSWDgZq-niEywRkPFDCmxjw7hbIIrrt5AvLlyH2mb7357pIB1h8m0CDlHSYUxQOiPFHlxtpC9vxDrm-NWk7ri59rXLBp1q~rIWbfNMAE9gI8VR1f2fO6Xj5o2cOjixH~IgmFzI3bqrPHiGpm9WIeEdp2DeNxNZFiKOiA__' },
    { id: 7, name: 'PISTACHIO CREAM LOAF', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/2416/af2e/c12be68e122dbda6760adac13ab3fcff?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCk8qhJSM2dsV5sme8EwsTc4TNIfJHXUH3uCmhLtIxxsktCBXVecNWfusTEKgXP3RHRBBNgiOkIeP-lkFW32c6DRPIupqOxONbT2fQPrCDigfgRoSLvg9I1jY7r10t3Togonmh9849xnIQZVmMxwG~UHcrapVysztDuyRHuTa6MZc4H5k2-jsi5EhqSSUDdRXlLnL9vs6sHLid2o3uWabXCRlYOPkunjAKR6oBFNoiWSH8o3L1Wa6Ti64rJCShKEKesgaBIPWEaqps0L-CCS09aK0ZygAWs-OcxghP8bOiCLzngRQbWWpyCeuZlOjHVOFuF8j4qQlSPwWfJAdYHqYw__' },
    { id: 8, name: 'PEPPERCORN POPCORN', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/e052/14ef/e7fcc675f86cb76f0365bb26fae497fe?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iZbUkV24sypkGxc0MstfD-U0Q5OeZfCl4xrv2U-1kmH-IuK8cXpI2ygbpqxFJYSPDkIuzN9vQutNsIEwapWevQnkeUvVE4111NgxL8eHsIqwj~Rop8rJR51ydQt0o~CGzGOkT~Mcggggzm0wQdZrX68T4Lkos2KfaKyoYG2O1sQ~dsB1wQqgIjbzvVHX7F6RyUiLfE6ziBhzxIupuXfOfuUvUPDIfSh~rp6aNf3zq18nngqgHuYM0JEeJ1LhGDAUywOAPUENRUctWZ6IuLssqUUPxcJLHKt5pNXvDGTpBJtPV2WsQhj2jsHWvqhY8bC6BJcUwl6s~iQ4sM2u4prvtA__' },
    { id: 9, name: 'RAINBOW MACARONS', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/80c1/141f/4e18fcc7302e64dbfdb2bc5a6418b3e8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lf79Ik8MI6E45h7jw25XsASyySsz~lu1PEb5jrlqlUR4zleTM4CHIeVdukTgA837BdfUX0g5tKwPXNZ3HavF3jiZrOltuFCG2CtA8KglHdacSc5YTXZPxhVQ9AvSfuimmME73hAxktjjkpnZJkaJOcq5diD3e47MUD1NCGJnre~NRKO4H~YxB7pOSX2PhBk57oMY0Ltec81M1E7NX72F9yOEPdBuCNTRsuXVK2I44y2PqtxUXVkLFmnJJU3QlVbZJL4S~DOH5RU1JyxWn1bZqwaMs3pkxy4I1mWjgSVUv3Y24QcIFmdKXZCz06oF0kkgleM2VctS0VF2D~AV3RjU4A__' },
    { id: 10, name: 'PASTEL TRAIL MIX', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/48f7/7048/050b35f23fa77554a005737ab7070da9?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L1ZbQRulOV2QGNHjf3VbyohxATEoKMMm2y2CyMjaEkxY25g4cQnaPAWB7y2jHF92AucIZg8Cc41N0YIeTMMP5ydTiveGuXn96hWNpFzcD9eXWYGZv-ZmpVNfYHAa9iVqM2lxR0o173FUw973S3auchiYh0JTPkb0Sijq8WwiN04tle7YzxZCaAJOtGYcCaCv9tq0wDOr9eRPIT9lplCBccBZdvjyiPX9eKKhKdeBRWU9jJjk0S5VsL1C5EQkgD2ZzNClePLbODWRgfachGLQEEhPiVbGWXCzLv9y0ya4RTq3qnyTNHPnn-XZc7xIYDJD7-64oTknouDK7P7W8Wh~FQ__' },
    { id: 11, name: 'EVERYTHING BAGEL CRISPS', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/f558/f4fe/7cd33e48750df55fb420da6c18365f91?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZKunuOmKsVKoKSbfU7IwkPt4zQW846yiLIL-1NcYMITc1Qq2JF~rp0yMKpXPb3Kf3UYMpB9c4zsFmCNPs85Y4h-JrUDYb480CG~kqW4FUGdQZ7jCsPrYZhoeym~z17QYQwodXODJ60r0RyDlVWJUUNwumO1Y81VBlnMvaQP1COm3n8i5AVbye-5YRXrJONGN8wKErXSpuLuv4JkuUHE3vy0uqmh6sH6kPeARM-Jq281WKjNsloWB9bpr1jc7kSBrHclDfjvtEOgZWJsjdX3Yhycop6pSFhxOrdM4PutTem4cyPT2acVSP0hiKOJkMywHtQcrH~Fx3UIDMcUy0ZFOKw__' },
    { id: 12, name: 'COFFEE CUTTER COOKIES', price: '$12.99', image: 'https://s3-alpha-sig.figma.com/img/1bd9/892f/bcb8d85fb51a1dcb67619401f6c214ad?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MmVjpDTGYXREbiMxeHyabDLEcHwxUoBgmxBcQ8xwCn8JsXOF4bIVavMuLMD5mR4dfzFfeo8vCNsXv-FIBWG-smPU2DU5udeIkeOQN4adQOL5ff~gThiPlnlZUcOZGPWxgJUuRbhv3Ei50L0JjFuhAoI8QvCYzI4myHzdCgGGJVo~ngiE8SjKcs5M2cMk19F5GKKtud11ozZppKr8c9ohFbw1bGST-ta859VFWOPfCMOkXJmFAg4811a53VS5EdbIsy9XK24rWpfwkOSQWktIkkFrMQsLgnuhSATP7HeZUjzBCPpsZrpLXFvEBa9~jjGD5C7yVcpGuo3Xff8W7i0XNA__' },
  ];

  const handleAddToCart = (productName) => {
    console.log('Add to Cart clicked for product Name:', productName);
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

      
      <div className='flex items-center'>
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

      {/* Product showcase */}
      <div className='flex flex-wrap gap-5 sm:gap-8 mt-8'>
        {products.map((product) => (
          <div key={product.id} className='w-[45%] sm:w-[30%] md:w-[25%] lg:w-[20%] flex-shrink-0'>
            <div className='relative overflow-hidden border border-black'>
            <Link to={`/product/${product.id}`}>
              <div
                className='w-full h-52 bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              </Link>
            </div>

            {/* product details */}
            <div className='mt-2'>
              <Link to={`/product/${product.id}`}>
                <h3 className='text-black font-roboto text-lg sm:text-xl font-bold cursor-pointer'>{product.name}</h3>
              </Link>
            </div>

            <div className='mt-1'>
              <p className='w-[21.925px] h-[20.249px] text-[#787878]'>{product.price}</p>
            </div>

            <div className='mt-2'>
              <button
                onClick={() => handleAddToCart(product.name)}
                className='flex items-center justify-center gap-2 px-4 py-2 rounded border-2 border-black bg-white'
                style={{ padding: '13px 15px' }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
        <div className="flex justify-center mt-10">
          <button className="flex justify-center items-center gap-2 rounded-full border border-black bg-white py-3.5 px-8">
            <p>LOAD MORE</p>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopPage;
