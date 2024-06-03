import React from 'react';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div
        className="w-52 h-52 flex-shrink-0 border border-black bg-lightgray bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${image})`}}
      ></div>

      <div className="px-6 py-4">
        <h3 className="flex font-roboto font-bold text-xl mb-2 w-[205px] text-black">
          {name}
        </h3>
        <p className="font-roboto text-gray-700 mb-2 w-[79px] text-[22px] font-light">
          ${price}
        </p>
        <button className="bg-white flex justify-center items-center gap-2 border border-black px-4 py-3 rounded">
          Add to Cart
        </button>
      </div>
      
    </div>
  );
};

export default ProductCard;
