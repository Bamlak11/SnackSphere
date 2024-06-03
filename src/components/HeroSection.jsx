import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const images = [
  'https://s3-alpha-sig.figma.com/img/7301/d434/a0ae2b05c8d8da4b58e9c6fcc2f33b1d?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VBH9cFOWwZMeuMXUJY2MSU3YmwPe~vMFhAHDYzOHZqfj0yhHrCe2fCkS4r1TJiwLbCNsSkBEziWUwopfYHYJGNElI4S61wpZugNif0-3ty1XavdZTQOe963JeI~CT2mjiOC4gBvOufr~wsFc7QX7Fz91BqeQdoF8oFLQEsTnllJIX2vulK2UWTV4q6QHOTvoQOQkrPWsNbBWocIib0gsk1GaztUJk0hhfaoKcfQFDSbF8G6xkwDbt5ALMNgIDj93JWGKSssbv7hxP664b37vYm-xGpPsNghalB3ohjzN-vKZPAel-kbnVGEAh4k4IHxmJMxqzHxJe9aDp1RDJftYUA__',
  'https://s3-alpha-sig.figma.com/img/f0c4/6f8c/dabbd963415286c194438e3e26ccbdc2?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VGbWgZ5hVSubBkhkgxokogDXACdLN6mJfvXWMkZzgH-pGYjxcDhCJm2BE1WRpi3IOtsWXPua69PA~uCCWC5v3SPrqz9yXts4y-pls8PVi7aL3b55kHEuZJfm1f8EsuF6T7PyMdb~7z9MgWXnkOcxsf5BL9~yi0V2A8F5RkPLNvgdVtWVsb2EpWn3dKeFOztspUMqOv4Cau4H0iOrTG0UthR53t4cVCAT-~WYsErKEaHUttNb1tsnsmVvJxFPpIN~nORRNVePsGsZSCP1vgHVpu0gLyEo4vYJLJlUHMiQZH2K9xNglFtJv7RJgAgXVn~LP8jDeovwrGl1jejqaXGzAA__',
  'https://s3-alpha-sig.figma.com/img/949a/49f0/f148857cee3c2f0781d7643a14e03473?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TYbu5dN0Hxy-FdFaY0W~dgTcMQsDn4eiVBOtR-C3Ujnu-N3Q7aKNuWRUw5XgXJV4IveVkB2O8N~KFi9taD9avRtO6NZAPoQN9z-w195BMSEpSKXl4IVFVOUuhdz~tf-~ifQeSBiiQSEmYTqTgG-6aAAotm~8HNFV5l~Ms3fsqPWmJvw-aOb3KDCbGmAWs0s8BgBkMuGCV68e0lb~Zo6e93vRfKRv-QLRNaPqUNBp3vljtIOwUMVaE7N~zoeutSfYh~sN01t4DIjiL-F5qQdkl1Uvy0-rFksZ~i2~GrGS4SGwl0-juvb~T1zq4ASjfytfWZeGJ6780XKUsE~9lqHxiA__',
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

