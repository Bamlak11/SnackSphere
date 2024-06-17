import React, { useState } from 'react';
import LandingPage from './components/Pages/LandingPage';
import ShopPage from './components/Pages/ShopPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ShoppingCart from './components/checkout/ShoppingCart';
import pretzels from './assets/sesamepretzels.png'
import bears from './assets/sourveganbears.png'
import tea from './assets/teapack.png'
import potatochips from './assets/potatochips.png'
import gummyforest from './assets/gummyforest.png'
import candiedkiwi from './assets/CANDIEDKIWI.png'
import pistachio from './assets/pistachio.png'
import popcorn from './assets/peppermintpopcorn.png'
import rainbowmacarons from './assets/rainbowmacarons.png'
import trailmix from './assets/pastel.png'
import bagelcrisps from './assets/bagelcrisps.png'
import cookies from './assets/coffeecookies.png'

function App() {
  const [products, setProducts] = useState( [
    { id: 1, name: 'SESAME PRETZELS', price: '12.99', category: 'SALTY', image: pretzels },
    { id: 2, name: 'SOUR VEGAN BEARS', price: '12.99',  category: 'SPICY & SOUR', image: bears },
    { id: 3, name: 'FLORAL NOTES TEA PACK', price: '12.99', category: 'EARTHY', image: tea },
    { id: 4, name: 'OVEN-BAKED SWEET POTATO CHIPS', price: '12.99',  category: 'SALTY', image: potatochips },
    { id: 5, name: 'GUMMY FOREST', price: '12.99', category: 'EARTHY', image: gummyforest },
    { id: 6, name: 'CANDIED KIWI', price: '12.99', category: 'SPICY & SOUR', image: candiedkiwi },
    { id: 7, name: 'PISTACHIO CREAM LOAF', price: '12.99', category: 'SWEET', image: pistachio },
    { id: 8, name: 'PEPPERCORN POPCORN', price: '12.99', category: 'DISCOVERY PACKS', image: popcorn },
    { id: 9, name: 'RAINBOW MACARONS', price: '12.99', category: 'SWEET', image: rainbowmacarons },
    { id: 10, name: 'PASTEL TRAIL MIX', price: '12.99', category: 'DISCOVERY PACKS', image: trailmix },
    { id: 11, name: 'EVERYTHING BAGEL CRISPS', price: '12.99', category: 'SALTY', image: bagelcrisps },
    { id: 12, name: 'COFFEE CUTTER COOKIES', price: '12.99', category: 'SWEET', image: cookies },
  ]);

  const [cart, setCart] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    const existingProductIndex = cart.findIndex(cartProduct => cartProduct.id === product.id);
  
    if (existingProductIndex !== -1) {
      // If the product already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If the product doesn't exist in the cart, add it with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
    }, 2000); // Hide confirmation after 2 seconds
  
    console.log("Updated Cart:", cart); // Add this line
  
    // Log the product being added
    console.log("Product added to cart:", product);
  };
  
  
  
  // Remove from cart function
  const removeFromCart = (product) => {
    setCart(cart.filter(cartProduct => cartProduct.id !== product.id));
  };
  
  // Update quantity function
  const updateQuantity = (productId, action) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          quantity: action === 'increment' ? product.quantity + 1 : product.quantity - 1
        };
      }
      return product;
    });
  
    if (action === 'decrement') {
      // Remove products with 0 quantity from the cart
      const filteredCart = updatedCart.filter((product) => product.quantity > 0);
      setCart(filteredCart);
    } else {
      setCart(updatedCart);
    }
  };
  

  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage products={products} addToCart={addToCart} removeFromCart={removeFromCart} showConfirmation={showConfirmation} />} />
          <Route path="/shop/:id" element={<ProductPage  products={products} addToCart={addToCart} showConfirmation={showConfirmation} />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<ShoppingCart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
