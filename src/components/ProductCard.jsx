import React from 'react';

const ProductCard = ({addToCart, image, name, price, showConfirmation }) => {
  const CartConfirmation = () => {
    return (
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-green-600 text-white text-center">
        Item added to cart!
      </div>
    );
  };
  
  return (
    <div className="max-w-sm rounded-sm shadow-xl space-x-2">
      <div
        className="w-60 h-52 border border-black bg-lightgray bg-cover bg-center"
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
        <button onClick={() => addToCart(product)} className="bg-white flex justify-center items-center gap-2 border border-black px-4 py-3 rounded">
          Add to Cart
        </button>
      {showConfirmation && <CartConfirmation />}
      </div>
      
    </div>
  );
};

export default ProductCard;
