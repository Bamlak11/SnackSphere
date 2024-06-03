import React from 'react';

const BestSellers = ({ mainImage, sideImage1, sideImage2 }) => {
  return (
    <div className="flex flex-col items-center mt-10 overflow-x-hidden">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative w-full md:w-[461px] h-[461px] flex-shrink-0 border border-black bg-cover bg-center"
          style={{
            backgroundImage: `url(${mainImage})`
          }}>
          <div className="absolute inset-0 flex justify-center items-center">
                <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute bottom-0 left-0 mb-4 ml-4 text-white font-roboto font-extrabold">
               <p className='text-2xl'>SESAME PRETZELS</p>
               <p className="w-[79px] text-[#e8e7e7] font-roboto text-2xl font-light">
                  $5.00
                </p>
                <button className="bg-white font-normal flex justify-center items-center text-black gap-2 border border-black p-2 rounded border-1.5px">
                Add to Cart
                </button>
                </div>
          </div>

        </div>
        <div className="flex flex-col gap-10">
          <div className="flex gap-4">
            <div className="w-full md:w-[210px] h-[210px] border border-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${sideImage1})`
              }}>
            </div>
            <div className="flex flex-col">
              <p className="text-black font-roboto text-lg font-bold mb-4">RAINBOW MACARONS</p>
              <p className="text-[#787878] flex text-2xl font-light mb-4">$5.00</p>
              <button className="bg-white font-normal text-black border border-black px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-full md:w-[210px] h-[210px] border border-black bg-cover bg-center"
              style={{
                backgroundImage: `url(${sideImage2})`
              }}>
            </div>
            <div className="flex flex-col">
              <p className="text-black font-roboto text-lg font-bold mb-4">PISTACHIO CREAM LOAF</p>
              <p className="text-[#787878] flex text-2xl font-light mb-4">$5.00</p>
              <button className="bg-white font-normal text-black border border-black px-4 py-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
