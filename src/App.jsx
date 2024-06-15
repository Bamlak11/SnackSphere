import React, { useState } from 'react';
import LandingPage from './components/Pages/LandingPage';
import ShopPage from './components/Pages/ShopPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import AboutPage from './components/Pages/AboutPage';
import ContactPage from './components/Pages/ContactPage';
import ShoppingCart from './components/checkout/ShoppingCart';

function App() {
  const [products, setProducts] = useState( [
    { id: 1, name: 'SESAME PRETZELS', price: '$12.99', category: 'SALTY', image: 'https://s3-alpha-sig.figma.com/img/ec67/1078/83e00f3dc13216cce47637a271f8369b?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ly1PCUAUtiuB8cDd5kPvCalxQlCwVV2NPsR84EJNGljelgrlH3-~9Gr2ze~9n4BYVObNwLgByz1WrapZD2AxL9psR7v-sjjzBlcrmpFn01vN5aUiaiyn5QXKmTtHxcE33GsQ~euBgsQ67OUs28nU4xx4ljk20jV6aQhR3GzaHqqrMYYE0ZnYrKc2-TpvL-CRjfMezxnsqcgCmiBsF0NilEy5Al5p4-Jo8OWzkeOivZlJmHnLHREpmBU5m6TIr-DUb-Nq802Rkq9DyTcjDxn0T~o452u~L~7U1ll-gudphsl5o9MYHf~w8w78VwriK6WTq2EEvOwKir8IrJdgcHJcEQ__' },
    { id: 2, name: 'SOUR VEGAN BEARS', price: '$12.99',  category: 'SPICY & SOUR', image: 'https://s3-alpha-sig.figma.com/img/7951/9da3/bc8040ea88c0414e28ed58d2bf4ddba4?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NOIHEh4UX-LGizbS3YV06jek4aoI52ndLjQz0BCDi4XRJXif7ct8YoDMAe8v4huWOCdNzAYakv9tc-TnZ5a09x1KRdRUYA094nIrQZ5BMQja9DibU~A-YTCv0GPOWJdZaVknY6P-dtTcwn-xLVfRmaTI4N0OouHkvb5kuAqnm6Rk2Qhw9NTBujzS4wszmpCiujWdvtjArmvtLvHfiE18gXhWdh7NxE4fuW9NSHRos9Qs~NCxu~frdBrourdy6eLS9N5aRHDUDSl0cGxlETQAXMK6EYVf2whTrActHxfXsPHIJ~h3zbwUgSA1-vZ7mist4zaoc-CyIIrFjYoMhcN87A__' },
    { id: 3, name: 'FLORAL NOTES TEA PACK', price: '$12.99', category: 'EARTHY', image: 'https://s3-alpha-sig.figma.com/img/98b7/0529/c392f28789f1f26d143313c8d33c389a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdNk5Yrn56FGl3nO23NOHy5R1A5cE3iogdnMNYyFYQz6ads9o32CRY376MHlP3Gplejd24ZuOhlDDP8gHBndJW06ez0eVZCenAAINsfGVGnDlbsKvZ2CUv1RY8kvJzsZg6jpbVR6KOxBSGu2qQX-33kMzlhaPd9IsU6tvoIYr9a3AXl2sVfd7KGSblKxNDQQ0IdvgBlXkpHLYFMbxomv1BXhEqGTgNu-FosY-ZV-6XynN4O7ph-JnSF1mY8-higQG9QrSiK64PJMou2oXh2gY1CEdROAHTJ1HeZMGDGTKH0xdXje-O7u5mq9X30PdS27HcWX46ns6m1JLZQLGOcPYg__' },
    { id: 4, name: 'OVEN-BAKED SWEET POTATO CHIPS', price: '$12.99',  category: 'SALTY', image: 'https://s3-alpha-sig.figma.com/img/499a/de6d/d0309a1ce7cea4fe2867cfa5ed48d747?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KvQRvorOhgz0M3nDyVfVT3FGDIn0TemzkeyH-0GUFFezLLHTjFWWhI8xH~26eLqrtuDKoaJvJA1-2pVx1u5fAllMJpqTwEfmyoZ24TJzP80Qij1yYKzqzSXaUpIvYRm~uh89gb4EfpIbSNv7WBtoiK7dIlyBsssqCQZ20KpNpRHAyaSsH3QDJ9ZzupenASk-vB18NH7ToYsV60V0PmgmpCzmMPuVC0Ndf2vb0Y82SZ8CbbnjxIxTvGhIfP7roe3igMbH0R-BZT90YU9TZZvZhquOd4rE4Oa0am5GKHuHSDi1yrLcWN5quxXQZTe4YUHaB3SKSeuOri22hPf94FdyfQ__' },
    { id: 5, name: 'GUMMY FOREST', price: '$12.99', category: 'EARTHY', image: 'https://s3-alpha-sig.figma.com/img/c1d6/db97/e0c975f0567ecf68b6b568858e14753d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UKRj4Z9ZIhhXhEjAHorhV8xF1PZXoc2ijcJlAveKCyn0qTkaXuCoCH6qpjH05VsIs6iDx39~NPMQxT2g10Vd0XjeSIh5e72Ahw5CktR7-WQpM8T50iHrW-e57w~9701PlQ3N00GzFl-WUkADp2zSd0lZt795S-1WH4zOAFpDAbyJHNSBpwcthyFNMm1lraerDmb3wH7shmtMTM1Jp4Xel22X~DV3i6WBFMDIZgYiW0DwVx3~uIz4SRT6mzKs~VdY46Y~au6M5dKIultQHq9Wqbw3~6TlT-zm6s97zjXqE2nrJCLlKmstp40FpObJhbLvrQzIJbRMJl-cNFCo5C5dKg__' },
    { id: 6, name: 'CANDIED KIWI', price: '$12.99', category: 'SPICY & SOUR', image: 'https://s3-alpha-sig.figma.com/img/4bd0/a8db/1399413f06eddb9cb54414ef71356a1f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnfnU7RYGAXd5GqEGuLzjs4k7zsEME1F3~Okfjp8MQ9sewEmRTqzfdtryVEK4zbR232Mm5Hi7mMBNQP1G8bKt7Ura6ZvVaaMJtrR4GjjOU90Es3FyqES~NUoyJDBfTY~QgwCO2W7-Ho5DQWA2NC-TreqPeXNsWNo45JnRaN5K424oOv~BZd3jx8ui1dlfZvn8PtD5zWovXRm4oCijP3aJz2tmiJXIlLoUs6VUop9jsBwabkIkzXGxO0eZKDDkhNJ8FKjzRdnVu2EFZ6oqfLlf92gmaOnSZOghkxF1Kb3OxeCg2PHVzGkIGEMALiSkwyJWB~VqZVmroxNZsxRhfw5jw__' },
    { id: 7, name: 'PISTACHIO CREAM LOAF', price: '$12.99', category: 'SWEET', image: 'https://s3-alpha-sig.figma.com/img/2416/af2e/c12be68e122dbda6760adac13ab3fcff?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQsOkm3fYvzirUIiEg-0Xm3grkORImo8lk9InE0YnH8pFuiPNlzFht3DlYs-KJ1hVC6Qbt6979YGkDcesb22SjFaCpp4uBTIoiHzxngljxC78gvPbofqrhnNpDmMiVjdnajwnHmUkGZNAjAs9gx92RGfUQt9AEGbc79WnsQ0QZ1Qwdueb27Hhs8MugvqvFyqs-uKZ0iPv-TuJk57bu8KcMxDuT5Qe9iUIfohzHYLDlpGqBWrkUeObzZEAHSJiLxLprxmeOF7aktFdloP8yTdJmGDYKihxn1jJNRBVTX2SBbacxRneJhTz~muG8eM9mhmYEhrrgo7sYluNSSneypaqQ__' },
    { id: 8, name: 'PEPPERCORN POPCORN', price: '$12.99', category: 'DISCOVERY PACKS', image: 'https://s3-alpha-sig.figma.com/img/e052/14ef/e7fcc675f86cb76f0365bb26fae497fe?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TKKZ1fq~4n4Qe0Bk2MnONXt3llF4c7qv-JqQxP8K551mbvoasq7oje2-aRURzAQVTzTaa-2Tqy-ho2QMIrToK~10KECH3Nvn-gT~PN6X1cSNBrx7Zh-ExdgIz1rQ8lR0Zu8FEJyMpRuOhpBeBl4YyvfrXrV8YcnC~I6wppAyD~2W9j2veO1z~bMKKsgHZjT~YBBsUR0wD2zbm2lRZJI68KHxrMrRp6W3su~IDWQXF-12NxvyRpFR4-liUiOcUXQeFKWYKw95Db7MRnwggO33B6NYoQGo0bO0nC3pHC59GuxDulYkF92x8oDLnwOcV7nW2oX8km1ZluxVA44wFRarYQ__' },
    { id: 9, name: 'RAINBOW MACARONS', price: '$12.99', category: 'SWEET', image: 'https://s3-alpha-sig.figma.com/img/80c1/141f/4e18fcc7302e64dbfdb2bc5a6418b3e8?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fory8YtlhVxR553fcVDyPpqrYoCuj-MYlfTS5HdAkeyoBQRUQHp-s-KZ9ksCe5PDT-RUKMS4Joxr-TmFOtHtchl36MQvooJ96kXkdEHNBbwPJhaFD7uhJpNvxp1Cz4T9Z2ichSvs1ViGUqxWeAICIX8TcNtXM42c0twDq~1N1gyhOEVCpHGwglsMC0qlEUTW~YMQr4B-ANVMDgvLYkBe1TJSpV9U0VVqVVWkMBX0lBbnP9bucHIViTMjysqETNhTv0bEx4i2dHH1hOXWxgdpzj6jIBB8kp6I5CY5opL-HZwVtbCM~uLmZZ0QaFWtK~ca~9E1Q~mvCDRBXfecouKTGQ__' },
    { id: 10, name: 'PASTEL TRAIL MIX', price: '$12.99', category: 'DISCOVERY PACKS', image: 'https://s3-alpha-sig.figma.com/img/48f7/7048/050b35f23fa77554a005737ab7070da9?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0RPNA2vOVFOZMicWka542j~7o1iMh3VYtNR04GyBI5Q9n27q5w8w0TgJMrP5F~rnVh2FUx3JGPiDEbV37FNUOvfXbs1Zl7Ag1jJkV5JISY9-9UyEFGo1VVtxdHxvR6ffpjKeCJEC6fyJ7H2jUl-OikELM9RIIEs1uwGTyBfdqZ0S1t5qiNFfjXZlmN~-EwfXoi-iZomb9DlWxhhawMpw~whilz4puf~BKhxlUm1MWPWhyw7wmj41yIIkrRzUcuRAQstvObdMjfyfELjrKlUz0FjcnQn6jttnnywAUhg-G-20mLzfN5mp03HSa1FbOaXzrsN9fh2waP20PUew4iAIA__' },
    { id: 11, name: 'EVERYTHING BAGEL CRISPS', price: '$12.99', category: 'SALTY', image: 'https://s3-alpha-sig.figma.com/img/f558/f4fe/7cd33e48750df55fb420da6c18365f91?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YuAWDpyQV1rV5JMo6hpeok8lP4-OnOIACiV2rnbrokdI5oj5vlw9rKlYA9CCN~hJrGSWjzu63IghlZb7uHIZa7e4cC9NaEcTjAyqkNnR6u7WZmwfHDsQZCPHaRGC5HpZUb1YalWBYZGQ1muUymHLZuW-5lrvg97lP1yl6chBCONhclXDvK4lm9amhfS3SX5heZAhFvJqp7feM59Lh5mBGhZYTF0JhamJdYo7TCilAumoIdBmWui306MnP6GP42dxz2ooMF7y-eAhZVpNpkIFb6ngYVPhMKg578Xub~gyUXmRxxfYv~AC1saDUwab9846DwLvQj3FpNWslZia~-k1GA__' },
    { id: 12, name: 'COFFEE CUTTER COOKIES', price: '$12.99', category: 'SWEET', image: 'https://s3-alpha-sig.figma.com/img/1bd9/892f/bcb8d85fb51a1dcb67619401f6c214ad?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F32lIhmXXBMOQS2Gd5ZYzlDBkD2KaMZwQUS2EzXx~tqZeoKnLK3qs7vg2xp9-R9b1We9AeftqBkQiEKwP5yPbi-2GoFuzpHlxO94iGEImWND1~fTq4fa2rxJ-dvlM213~66FM0EJxgqrEknhL5FsMEnhWnCP-YDTocZPOF9rkcBkuTuakyxiKppWVqRdiyLxqdyulqQAw2aG-GwzKi9yHT3CrMjEILVcf6l3FcHmsCZioz03UwitPGmdXt8VcdDuoIQpfo9Zpe~v-FuqKkeKstjsZ0EdStIkEde-YcuxAI2~iq5-wc8z3QZIkAyvhgE-HotlBSNlv9xPnm1H5xvA6w__' },
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
