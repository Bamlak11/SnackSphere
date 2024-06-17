import React from 'react';
import ProductCard from './ProductCard';
import BestSellers from './BestSellers';
import { Link } from 'react-router-dom';
import chips from '../assets/chips.png'
import sweetsphere from '../assets/sweetsphere.png'
import soursphere from '../assets/soursphere.png'
import spicesphere from '../assets/spicesphere.png'
import pretzels from '../assets/sesamepretzels.png'
import rainbowmacarons from '../assets/rainbowmacarons.png'
import pistachio from '../assets/pistachio.png'

const Products = () => {
  return (
    
    <div className="text-black text-center font-roboto font-bold text-2xl mt-20">
      
      <h2>Discover New Flavors</h2>
      <p className="text-base font-light mt-6">
      Discover a variety of our flavors and snacks in one adventurous pack!
      </p>   

      <div className="flex justify-center text-black text-center font-roboto font-light">
      
      <div className="m-6 overflow-x-auto">
          <div className="flex space-x-0 flex-nowrap">
            <ProductCard
              image={chips}
              name="CHIPS"
              price="10.00"
            />
            <ProductCard
              image={sweetsphere}
              name="GUMMY WORMS"
              price="10.00"
            />
            <ProductCard
              image={soursphere}
              name="JELLIES PACK"
              price="10.00"
            />
            <ProductCard
              image={spicesphere}
              name="SPICY PEANUTS"
              price="10.00"
            />
          </div>
        </div>

    </div>
      <div className="flex justify-center mt-6">
        
          <button className="flex justify-center font-light items-center gap-2 rounded-full border border-black bg-white py-3.5 px-6">
          <a href="#best-sellers">
      <p>DISCOVER MORE</p>
    </a>

          </button>
        </div>

    <div id='best-sellers' className='mt-12'>
        <h2>BESTSELLERS</h2>

        <div className="overflow-x-auto space-x-10 mb-20">
          <div className="inline-flex space-x-4 p-4">
        <BestSellers 
        mainImage={pretzels} 
        sideImage1={rainbowmacarons}
        sideImage2={pistachio}
      />
        </div>
        </div>

        <div className="w-full bg-[#F4DFB6]">
          <h2 className="flex justify-center text-black font-roboto font-bold text-2xl p-4">
            WHAT WE DO
          </h2>
          <p className="text-black text-center font-roboto text-base font-light w-full mx-auto mt-4 mb-8 px-4 lg:w-[625px]">
            We are an emerging snack startup looking to add a futuristic and dynamic approach to the market. We have Discovery Packs prioritizing variety, and we do monthly pop-ups in our state to make sure we hit every target preference.
            <br /><br />
            We pride ourselves on the quality of our ingredients but also on the out-of-this-world fun we still showcase throughout this business and our products. We’re glad you're here!
          </p>
          <div className="flex justify-center">
            <Link to="/about">
              <button className="gap-2 mb-4 rounded-full font-light border border-black bg-white p-2">
                LEARN MORE
              </button>
            </Link>
          </div>
    </div>

    </div>
    </div>
    
  );
};

export default Products;
