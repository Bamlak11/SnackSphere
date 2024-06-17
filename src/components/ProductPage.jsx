import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ProductPage = ({products, addToCart, showConfirmation}) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }


  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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

      <div className='flex flex-col md:flex-row justify-center items-center md:items-start m-10 p-10 md:space-x-20'>

        <div className="relative w-full md:max-w-[400px] h-auto">
          <img className='w-full h-auto' src={product.image} alt={product.name} />
          <div className='absolute top-0 right-0 m-4 flex space-x-2'>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" fill="white" stroke="black" />
                <text x="20" y="24" textAnchor="middle" fontSize="18" fill="black">GF</text>
              </svg>
            </div>
            <div className='flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19.5" fill="white" stroke="black" />
                <text x="20" y="24" textAnchor="middle" fontSize="18" fill="black">V</text>
              </svg>
            </div>
          </div>

          <p className='pt-6 font-semibold'>INGREDIENTS LIST</p>
          <p className='py-6'>This is a GLUTEN FREE & VEGAN pack. Fruits included: freeze dried oranges, cherries, blueberries, and raspberries. Floral notes include: dandelion root, mint, and lavender. Vegan chocolate.</p>
        </div>

        <div>
          <h1 className='font-bold pb-8 flex justify-center'>{product.name}</h1>
          <p className='px-20 pb-6 flex justify-center'>{product.price}</p>

          <div className='mt-2 flex justify-center md:justify-center space-x-4'>
            <button
              onClick={() => addToCart(product)}
              className='flex items-center gap-2 px-4 py-2 rounded border-2 border-black bg-white'>
              Add to Cart
            </button>

            <div className='flex items-center gap-2 p-2 rounded-full border border-black bg-white'>
              <button onClick={handleDecrease} className='px-2'>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease} className='px-2'>+</button>
            </div>
          </div>
          {showConfirmation && <CartConfirmation />}

          <h3 className=' pt-8 font-semibold'>HIGH QUALITY, HIGH VARIETY.</h3>
          <p className='py-6'>One of our best selling Discovery Packs, {product.name} brings a whole new meaning to indulging. <br></br>No guilt, No shame, because this vegan and gluten free snack will actually have you feeling great afterwards. <br></br> Whether you enjoy it as an after-exercise pick me up or a late bed time fix, this is the Pack for you! </p>

          <h3 className=' pt-8 font-semibold'>WHAT'S INSIDE</h3>
          <p className='py-6'>A box of {product.name}!</p>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductPage;