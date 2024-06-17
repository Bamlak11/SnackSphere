import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroimg1 from '../assets/heroimg1.png'
import heroimg2 from '../assets/heroimg2.png'
import heroimg3 from '../assets/heroimg3.png'

const images = [
 heroimg1 ,
  heroimg2,
  heroimg3,
];

const content = [
  {
    h1: '15% OFF FIRST ORDER',
    p: 'Use discount code FIRSTORDER15 at checkout.'
  },
  {
    h1: 'POP-UP AT WALKER ART CENTER',
    p: 'Saturday, May 11, 2024'
  },
  {
    h1: 'SPEND $40 AND GET FREE SHIPPING',
    p: 'Dare to enter the SnackSphere!'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const circlePositions = [
    { whiteCircles: [13, 69, 125], blackCircle: 13 },
    { whiteCircles: [13, 69, 125], blackCircle: 69 },
    { whiteCircles: [13, 69, 125], blackCircle: 125 },
  ];

  return (
      <div className="relative w-auto h-[473px] border-black bg-gray-200">
        <div
          className="w-auto h-full bg-cover bg-center transition-all duration-500 bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentSlide]})`}}
        >
        <div className="absolute bottom-0 left-0 p-4 md:p-10">
        <div className="inline-flex flex-col items-start gap-4 md:gap-6 border border-black bg-white p-6 md:p-8">
          <h1 className="text-lg md:text-xl lg:text-2xl font-bold">{content[currentSlide].h1}</h1>
          <p className="text-sm md:text-xl lg:text-2xl font-light font-roboto">{content[currentSlide].p}</p>
          <Link to="/shop">
            <button className="flex justify-center items-center gap-2 rounded-full border border-black bg-white py-2 md:py-3.5 px-4 md:px-6" style={{ borderWidth: '1.5px' }}>
              <p className="text-xs md:text-base">SHOP NOW</p>
            </button>
          </Link>
        </div>
      </div>
      </div>

      <div className="absolute bottom-[-55px] left-1/2 transform -translate-x-1/2 flex space-x-4">
        <button onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" width="253" height="40" viewBox="0 0 253 40" fill="none">
        <circle cx="13" cy="20" r="8.5" fill="white" stroke="black"/>
        <circle cx="233" cy="20" r="19.5" stroke="black"/>
        <path d="M237.707 20.7071C238.098 20.3166 238.098 19.6834 237.707 19.2929L231.343 12.9289C230.953 12.5384 230.319 12.5384 229.929 12.9289C229.538 13.3195 229.538 13.9526 229.929 14.3431L235.586 20L229.929 25.6569C229.538 26.0474 229.538 26.6805 229.929 27.0711C230.319 27.4616 230.953 27.4616 231.343 27.0711L237.707 20.7071ZM1 21H237V19H1V21Z" fill="black"/>
        <path d="M15.2929 19.2929C14.9024 19.6834 14.9024 20.3166 15.2929 20.7071L21.6569 27.0711C22.0474 27.4616 22.6805 27.4616 23.0711 27.0711C23.4616 26.6805 23.4616 26.0474 23.0711 25.6569L17.4142 20L23.0711 14.3431C23.4616 13.9526 23.4616 13.3195 23.0711 12.9289C22.6805 12.5384 22.0474 12.5384 21.6569 12.9289L15.2929 19.2929ZM16 21H116V19H16V21Z" fill="black"/>
        <circle cx="13" cy="20" r="12" fill="white" stroke="black"/>
        <circle cx="69" cy="20" r="12" fill="white" stroke="black"/>
        <circle cx="125" cy="20" r="12" fill="white" stroke="black"/>
        <circle cx={circlePositions[currentSlide].blackCircle} cy="20" r="13" fill="black" />
      </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

