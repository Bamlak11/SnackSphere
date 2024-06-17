import React, { useState } from "react";
import { Link } from "react-router-dom";
import cartlogo from '../../assets/carticon.png'

const ShoppingCart = ({ cart, updateQuantity, removeFromCart }) => {
  const [discountCode, setDiscountCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(0);


  const applyDiscount = () => {
    if (discountCode === "FIRSTORDER15") {

      const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);
      const discountAmount = subtotal * 0.15; // 15% discount
      setAppliedDiscount(discountAmount);
      console.log(`Applied a discount of ${discountAmount.toFixed(2)}`);
    } else {
      // Handle invalid discount code or display a message
      alert("Invalid discount code. Please try again.");
    }
  };

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

   // Calculate the subtotal
   const subtotal = cart.reduce((total, product) => total + (product.price * product.quantity), 0);

  return (
    <div className="font-roboto">
      <nav className="flex justify-between items-center py-4 px-6 bg-white shadow">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={cartlogo}
              alt="Logo"
              className="h-[60px]"
            />
            <p className="ml-4 text-xl font-semibold">SNACKSPHERE</p>
          </Link>
        </div>
        <Link
          to="/cart"
          className="text-black font-semibold hover:bg-gray-200 px-3 py-2 rounded-md hidden sm:block"
        >
          CART
        </Link>
      </nav>

      <div className="flex justify-center items-center flex-col">
        <h1 className="font-bold my-8 text-xl">CHECKOUT</h1>
        <div className="flex space-x-4">
          <p className="relative">
            <span className="absolute top-0 left-0 my-[-6px] w-full h-1 bg-black"></span>
            Your Info
          </p>
          <p className="relative">
            <span className="absolute top-0 left-0 my-[-6px] w-full h-1 bg-gray-300"></span>
            Shipping
          </p>
          <p className="relative">
            <span className="absolute top-0 left-0 my-[-6px] w-full h-1 bg-gray-300"></span>
            Payment
          </p>
        </div>
      </div>



      <div className="mt-20 px-10 flex flex-col lg:flex-row lg:justify-around">
        <div className="flex flex-col w-full lg:w-[30%]">
          <h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
          <div className="bg-[#F4DFB6] border border-black overflow-hidden">
          <ul className="overflow-x-auto">
            {cart.length === 0 ? (
              <li>Your cart is empty</li>
            ) : (
              cart.map((product) => (
                <li className="border border-black p-2" key={product.id}>
                <div className="flex w-20 h-20 mr-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover border border-black" />
                  </div>
                  <p>{product.name} - {product.price} - Quantity: {product.quantity}</p>
                  <div className="flex px-2 space-x-1">
                  <button className="border border-black px-1" onClick={() => updateQuantity(product.id, 'increment')}>+</button>
                  <button className="border border-black px-1"  onClick={() => updateQuantity(product.id, 'decrement')}>-</button>
                  <button className="border border-black px-1"  onClick={() => removeFromCart(product)}>Remove</button>
                  </div>
                </li>
              ))
            )}
          </ul>
          <div className="m-4 flex flex-col">
              <div className="flex flex-col">
                <h3 className="text-lg">Discount Code:</h3>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="border border-black p-2 w-[250px]"
                    placeholder="Enter discount code"
                    value={discountCode}
                    onChange={handleDiscountCodeChange}
                  />
                  <button className="bg-black text-white py-[9.2px] px-4" onClick={applyDiscount}>
                    APPLY
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center font-semibold mt-2 border-t border-gray-600 pt-2">
                <p>TOTAL:</p>
                <p>${subtotal.toFixed(2)}</p> {/* Display the subtotal here */}
              </div>
              {appliedDiscount > 0 && (
                <div className="flex justify-between items-center font-semibold mt-2">
                  <p>DISCOUNT:</p>
                  <p>-${appliedDiscount.toFixed(2)}</p> {/* Display the discount amount */}
                </div>
              )}
              <div className="flex justify-between items-center font-semibold mt-2">
                <p>SUBTOTAL:</p>
                <p>${(subtotal - appliedDiscount).toFixed(2)}</p> {/* Display the total after discount */}
              </div>

          </div>

        </div>
          </div>


        <div className="flex flex-col w-full lg:w-[30%] mt-10 lg:mt-0">
          <h3 className="text-2xl font-bold mb-4">Express Checkout</h3>
          <button className="border bg-[#5A31F4] w-full h-[45px] mb-4 text-white text-lg font-semibold">
            Shop
          </button>
          <div className="flex space-x-2">
            <button className="border bg-yellow-500 w-1/3 h-[45px] text-white text-lg font-semibold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="17" viewBox="0 0 61 17" fill="none">
            <path d="M7.68331 0.50061H3.01305C2.69346 0.50061 2.42167 0.732792 2.37182 1.04828L0.482961 13.0241C0.445402 13.2603 0.628415 13.4734 0.868108 13.4734H3.09773C3.41732 13.4734 3.68911 13.2412 3.73896 12.925L4.24839 9.69498C4.29756 9.37881 4.57003 9.14663 4.88894 9.14663H6.36739C9.44379 9.14663 11.2193 7.65794 11.683 4.70787C11.8919 3.41722 11.6918 2.40313 11.0875 1.69293C10.4237 0.913073 9.24643 0.50061 7.68331 0.50061ZM8.2221 4.87449C7.9667 6.55029 6.68629 6.55029 5.44822 6.55029H4.74348L5.2379 3.42063C5.26726 3.23147 5.43115 3.09216 5.62236 3.09216H5.94536C6.78873 3.09216 7.58429 3.09216 7.99539 3.57291C8.24054 3.85973 8.31566 4.28585 8.2221 4.87449Z" fill="#253B80"/>
            <path d="M21.6434 4.82056H19.4069C19.2164 4.82056 19.0518 4.95987 19.0225 5.14903L18.9234 5.77455L18.7671 5.54783C18.2829 4.84514 17.2032 4.61023 16.1257 4.61023C13.6543 4.61023 11.5435 6.48202 11.1324 9.10771C10.9187 10.4175 11.2225 11.6699 11.9655 12.5433C12.647 13.3464 13.6222 13.681 14.7824 13.681C16.7737 13.681 17.8779 12.4006 17.8779 12.4006L17.7782 13.022C17.7407 13.2597 17.9237 13.4727 18.162 13.4727H20.1765C20.4968 13.4727 20.7672 13.2405 20.8178 12.9244L22.0265 5.2699C22.0647 5.0343 21.8824 4.82056 21.6434 4.82056ZM18.526 9.17327C18.3102 10.451 17.2961 11.3087 16.0027 11.3087C15.3533 11.3087 14.8343 11.1004 14.5011 10.7057C14.1706 10.3137 14.0449 9.75577 14.1501 9.13435C14.3515 7.86759 15.3827 6.98189 16.6563 6.98189C17.2913 6.98189 17.8076 7.1929 18.1477 7.59103C18.4884 7.99324 18.6236 8.55458 18.526 9.17327Z" fill="#253B80"/>
            <path d="M33.5542 4.82056H31.3069C31.0924 4.82056 30.891 4.92709 30.7694 5.10532L27.6698 9.67109L26.3559 5.28355C26.2733 5.00903 26.02 4.82056 25.7331 4.82056H23.5247C23.2563 4.82056 23.0699 5.08279 23.1552 5.33545L25.6307 12.6L23.3034 15.8854C23.1204 16.1442 23.3048 16.5 23.621 16.5H25.8656C26.0787 16.5 26.2781 16.3962 26.399 16.2213L33.8738 5.43174C34.0527 5.17361 33.869 4.82056 33.5542 4.82056Z" fill="#253B80"/>
            <path d="M40.9952 0.50061H36.3243C36.0054 0.50061 35.7336 0.732792 35.6837 1.04828L33.7949 13.0241C33.7573 13.2603 33.9403 13.4734 34.1787 13.4734H36.5756C36.7982 13.4734 36.9887 13.3109 37.0236 13.0896L37.5596 9.69498C37.6088 9.37881 37.8813 9.14663 38.2002 9.14663H39.6779C42.755 9.14663 44.5298 7.65794 44.9942 4.70787C45.2039 3.41722 45.0024 2.40313 44.398 1.69293C43.735 0.913073 42.5584 0.50061 40.9952 0.50061ZM41.534 4.87449C41.2793 6.55029 39.9989 6.55029 38.7601 6.55029H38.0561L38.5512 3.42063C38.5805 3.23147 38.7431 3.09216 38.935 3.09216H39.258C40.1006 3.09216 40.8969 3.09216 41.308 3.57291C41.5531 3.85973 41.6276 4.28585 41.534 4.87449Z" fill="#179BD7"/>
            <path d="M54.9548 4.82056H52.7197C52.5278 4.82056 52.3646 4.95987 52.3359 5.14903L52.2369 5.77455L52.0798 5.54783C51.5957 4.84514 50.5167 4.61023 49.4391 4.61023C46.9678 4.61023 44.8576 6.48202 44.4465 9.10771C44.2335 10.4175 44.536 11.6699 45.279 12.5433C45.9619 13.3464 46.9357 13.681 48.0959 13.681C50.0872 13.681 51.1914 12.4006 51.1914 12.4006L51.0917 13.022C51.0541 13.2597 51.2372 13.4727 51.4768 13.4727H53.4907C53.8096 13.4727 54.0814 13.2405 54.1312 12.9244L55.3406 5.2699C55.3775 5.0343 55.1945 4.82056 54.9548 4.82056ZM51.8374 9.17327C51.623 10.451 50.6075 11.3087 49.3141 11.3087C48.6661 11.3087 48.1457 11.1004 47.8125 10.7057C47.482 10.3137 47.3577 9.75577 47.4615 9.13435C47.6643 7.86759 48.6941 6.98189 49.9677 6.98189C50.6027 6.98189 51.119 7.1929 51.4591 7.59103C51.8012 7.99324 51.9364 8.55458 51.8374 9.17327Z" fill="#179BD7"/>
            <path d="M57.5916 0.829151L55.6747 13.0241C55.6371 13.2604 55.8202 13.4735 56.0585 13.4735H57.9856C58.3059 13.4735 58.5777 13.2413 58.6268 12.9251L60.517 0.950022C60.5546 0.713743 60.3716 0.5 60.1333 0.5H57.9753C57.7848 0.500683 57.6209 0.639991 57.5916 0.829151Z" fill="#179BD7"/>
            </svg>
            </button>

            <button className="border bg-black w-1/3 h-[45px] text-white text-lg font-semibold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="19" viewBox="0 0 45 19" fill="none">
            <path d="M21.3125 9.30034V14.406H19.6927V1.79723H23.9886C24.5013 1.78652 25.0111 1.87747 25.4886 2.06482C25.966 2.25217 26.4016 2.53221 26.7703 2.8888C27.1426 3.22373 27.439 3.63449 27.6394 4.09347C27.8398 4.55245 27.9397 5.04902 27.9323 5.54979C27.9429 6.05325 27.8446 6.55306 27.644 7.01496C27.4435 7.47687 27.1454 7.88995 26.7703 8.22588C26.0191 8.94219 25.0919 9.30001 23.9886 9.29934H21.3125V9.30034ZM21.3125 3.34957V7.75103H24.0288C24.3266 7.75986 24.6229 7.70643 24.8989 7.59418C25.1749 7.48192 25.4244 7.3133 25.6314 7.09911C25.8374 6.89884 26.0012 6.65931 26.113 6.39466C26.2248 6.13002 26.2824 5.84564 26.2824 5.55835C26.2824 5.27105 26.2248 4.98667 26.113 4.72203C26.0012 4.45739 25.8374 4.21785 25.6314 4.01758C25.427 3.79888 25.1783 3.62613 24.902 3.51079C24.6257 3.39545 24.3281 3.34015 24.0288 3.34856H21.3125V3.34957Z" fill="white"/>
            <path d="M31.6648 5.49744C32.862 5.49744 33.807 5.81736 34.4999 6.45721C35.1927 7.09705 35.5388 7.97433 35.5381 9.08903V14.406H33.9888V13.2088H33.9184C33.2477 14.1947 32.3556 14.6877 31.2423 14.6877C30.2919 14.6877 29.4968 14.406 28.8569 13.8426C28.5499 13.584 28.3044 13.2602 28.1383 12.8947C27.9723 12.5292 27.8899 12.1313 27.8972 11.7299C27.8972 10.8372 28.2345 10.1273 28.9092 9.6001C29.584 9.07293 30.4847 8.80868 31.6115 8.80734C32.5733 8.80734 33.3654 8.98339 33.9878 9.33551V8.96529C33.9896 8.69166 33.9305 8.42105 33.8148 8.17309C33.6991 7.92513 33.5296 7.70602 33.3188 7.53167C32.8904 7.14522 32.3322 6.93436 31.7554 6.94112C30.8506 6.94112 30.1346 7.32274 29.6074 8.086L28.1809 7.1876C28.9656 6.06082 30.1269 5.49744 31.6648 5.49744ZM29.5692 11.7651C29.5681 11.9713 29.6163 12.1747 29.7098 12.3584C29.8032 12.5422 29.9392 12.7009 30.1064 12.8215C30.4647 13.1033 30.9093 13.2525 31.365 13.244C32.0485 13.2429 32.7037 12.9708 33.187 12.4875C33.7235 11.9824 33.9918 11.3899 33.9918 10.7098C33.4868 10.3074 32.7825 10.1061 31.8791 10.1061C31.2211 10.1061 30.6725 10.2648 30.2332 10.582C29.7895 10.9039 29.5692 11.2953 29.5692 11.7651Z" fill="white"/>
            <path d="M44.4318 5.77942L39.0232 18.2091H37.3512L39.3583 13.86L35.8019 5.77942H37.5625L40.1329 11.9767H40.1681L42.6682 5.77942H44.4318Z" fill="white"/>
            <path d="M14.7672 8.19954C14.7678 7.70592 14.7261 7.21317 14.6425 6.72668H7.81139V9.51646H11.7239C11.6438 9.96202 11.4744 10.3868 11.2258 10.7651C10.9771 11.1434 10.6545 11.4674 10.2772 11.7177V13.5286H12.6122C13.9795 12.268 14.7672 10.4038 14.7672 8.19954Z" fill="#4285F4"/>
            <path d="M7.81159 15.2781C9.76634 15.2781 11.4122 14.6363 12.6124 13.5296L10.2774 11.7187C9.6275 12.1594 8.79047 12.4109 7.81159 12.4109C5.92223 12.4109 4.31859 11.1372 3.74514 9.4209H1.33968V11.2871C1.94257 12.4868 2.86704 13.4953 4.00987 14.2001C5.1527 14.9048 6.46893 15.2781 7.81159 15.2781Z" fill="#34A853"/>
            <path d="M3.74501 9.42112C3.44185 8.52175 3.44185 7.54781 3.74501 6.64845V4.78223H1.33955C0.832373 5.79145 0.568237 6.90529 0.568237 8.03478C0.568237 9.16427 0.832373 10.2781 1.33955 11.2873L3.74501 9.42112Z" fill="#FBBC04"/>
            <path d="M7.81159 3.65848C8.84458 3.64161 9.84273 4.03191 10.5903 4.74502L12.6577 2.67759C11.3468 1.44626 9.61002 0.770241 7.81159 0.791247C6.46893 0.791308 5.1527 1.16455 4.00987 1.86929C2.86704 2.57404 1.94257 3.58255 1.33968 4.78224L3.74514 6.64846C4.31859 4.93214 5.92223 3.65848 7.81159 3.65848Z" fill="#EA4335"/>
            </svg>
            </button>

            <button className="border bg-black w-1/3 h-[45px] text-white text-lg font-semibold flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="17" viewBox="0 0 41 17" fill="none">
  <path d="M8.05896 2.52576C7.5994 3.06957 6.8641 3.4985 6.1288 3.43722C6.03689 2.70192 6.39688 1.92067 6.81814 1.43813C7.27771 0.878997 8.08194 0.480711 8.73298 0.450073C8.80958 1.21601 8.51086 1.96663 8.05896 2.52576ZM8.72532 3.58275C7.66067 3.52148 6.74921 4.18784 6.24369 4.18784C5.73052 4.18784 4.95692 3.61339 4.11439 3.62871C3.0191 3.64403 2.00041 4.26443 1.44128 5.25249C0.292372 7.2286 1.14256 10.1545 2.25317 11.7629C2.79698 12.5595 3.44803 13.4327 4.30588 13.402C5.11777 13.3714 5.43946 12.8736 6.41986 12.8736C7.40791 12.8736 7.69131 13.402 8.54916 13.3867C9.43764 13.3714 9.99678 12.5902 10.5406 11.7936C11.161 10.8898 11.4138 10.009 11.4291 9.96299C11.4138 9.94768 9.71338 9.29663 9.69806 7.33584C9.68274 5.69673 11.0385 4.91548 11.0997 4.86952C10.3338 3.73594 9.13893 3.61339 8.72532 3.58275ZM14.8758 1.36154V13.3025H16.7294V9.22004H19.2952C21.639 9.22004 23.2858 7.61157 23.2858 5.28313C23.2858 2.95468 21.6696 1.36154 19.3565 1.36154H14.8758ZM16.7294 2.92405H18.8663C20.4748 2.92405 21.3939 3.78189 21.3939 5.29079C21.3939 6.79968 20.4748 7.66519 18.8587 7.66519H16.7294V2.92405ZM26.6712 13.3944C27.8354 13.3944 28.9154 12.8046 29.4056 11.8702H29.4439V13.3025H31.1596V7.35881C31.1596 5.63546 29.7809 4.52485 27.6593 4.52485C25.6908 4.52485 24.2355 5.65078 24.1819 7.19797H25.8516C25.9895 6.46267 26.6712 5.98013 27.6056 5.98013C28.7392 5.98013 29.375 6.50863 29.375 7.48136V8.14007L27.0618 8.27794C24.9095 8.40814 23.7453 9.28897 23.7453 10.8208C23.7453 12.368 24.9478 13.3944 26.6712 13.3944ZM27.1691 11.9774C26.181 11.9774 25.5529 11.5025 25.5529 10.7749C25.5529 10.0243 26.158 9.58769 27.3146 9.51875L29.375 9.38854V10.0626C29.375 11.1808 28.4252 11.9774 27.1691 11.9774ZM33.4497 16.55C35.2573 16.55 36.1075 15.8607 36.8505 13.7697L40.1057 4.63974H38.2215L36.0386 11.694H36.0003L33.8174 4.63974H31.8796L35.0199 13.3331L34.8514 13.8616C34.568 14.7578 34.1084 15.1024 33.2889 15.1024C33.1434 15.1024 32.86 15.0871 32.7451 15.0718V16.5041C32.8523 16.5347 33.3119 16.55 33.4497 16.55Z" fill="white"/>
</svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[30%] mt-10 lg:mt-0">
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <label className="font-semibold">Email Address:</label>
          <input
            type="email"
            className="border mt-2 border-black p-2 mb-4"
            placeholder="Email"
          />
          <h3 className="text-xl font-semibold mb-4">Shipping Address</h3>
          <label className="font-semibold">Country/Region</label>
          <input
            type="text"
            className="border mt-2 border-black p-2 mb-4"
            placeholder="Country/Region"
          />
          <div className="flex space-x-4 mb-4">
            <div className="flex flex-col w-1/2">
              <label className="font-semibold">First Name</label>
              <input
                type="text"
                className="border mt-2 border-black p-2"
                placeholder="First Name"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-semibold">Last Name</label>
              <input
                type="text"
                className="border mt-2 border-black p-2"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-semibold">Address</label>
            <input
              type="text"
              className="border mt-2 border-black p-2 mb-2"
              placeholder="Address"
            />
            <label className="font-semibold">Apartment, suite, etc. (optional)</label>
            <input
              type="text"
              className="border mt-2 border-black p-2 mb-2"
              placeholder="Apartment, suite, etc."
            />
            <label className="font-semibold">City</label>
            <input
              type="text"
              className="border mt-2 border-black p-2 mb-2"
              placeholder="City"
            />
            <label className="font-semibold">State</label>
            <input
              type="text"
              className="border mt-2 border-black p-2 mb-2"
              placeholder="State"
            />
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex flex-col w-1/2">
              <label className="font-semibold">Zipcode</label>
              <input
                type="text"
                className="border mt-2 border-black p-2"
                placeholder="Zipcode"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="font-semibold">Phone (optional)</label>
              <input
                type="text"
                className="border mt-2 border-black p-2"
                placeholder="Phone"
              />
            </div>
          </div>
          <button className="bg-black rounded-full text-white font-semibold mb-4 py-2">
            Continue to Shipping
          </button>
          <Link to="/shop" className="bg-white flex justify-center items-center font-semibold py-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="mr-2">
          <path d="M13.227 3.687C13.3172 3.59153 13.3878 3.47923 13.4346 3.3565C13.4814 3.23377 13.5036 3.10302 13.4999 2.97172C13.4961 2.84042 13.4666 2.71113 13.4129 2.59125C13.3592 2.47136 13.2825 2.36322 13.187 2.273C13.0915 2.18279 12.9792 2.11226 12.8565 2.06544C12.7338 2.01863 12.603 1.99644 12.4717 2.00016C12.3404 2.00387 12.2111 2.03341 12.0912 2.08709C11.9714 2.14077 11.8632 2.21753 11.773 2.313L3.27301 11.313C3.09747 11.4987 2.99966 11.7445 2.99966 12C2.99966 12.2555 3.09747 12.5013 3.27301 12.687L11.773 21.688C11.8626 21.7856 11.9707 21.8643 12.0911 21.9198C12.2114 21.9752 12.3415 22.0062 12.4739 22.0109C12.6063 22.0156 12.7383 21.9939 12.8623 21.9472C12.9862 21.9004 13.0997 21.8295 13.196 21.7386C13.2923 21.6476 13.3696 21.5384 13.4234 21.4173C13.4771 21.2963 13.5063 21.1657 13.5092 21.0333C13.5121 20.9008 13.4886 20.7691 13.4402 20.6458C13.3917 20.5225 13.3193 20.4101 13.227 20.315L5.37501 12L13.227 3.687Z" fill="black"/>
        </svg>
            RETURN TO SHOP
          </Link>
        </div>
      </div>

        <footer className="border-t border-gray-300 mt-8 pt-4">
        <div className="container  m-6 px-10 flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-900">Refund Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-900">Shipping Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-gray-900">Terms of Services</a>
          <a href="/contact" className="text-gray-400 hover:text-gray-900">Contact Us</a>
        </div>
        </footer>
    </div>
  );
};

export default ShoppingCart;
