import React, { useState } from 'react';

const images = [
  'https://s3-alpha-sig.figma.com/img/7301/d434/a0ae2b05c8d8da4b58e9c6fcc2f33b1d?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dk462FsjfCltuG3lFzRF1PCLdNyFa~0WB0BMcvQBWTTq9jzrbiauDK1BMuMn7GYIz-DOWMwYfo3bmQCJifyjIAmLa6pCo3~Pz2~dvBYsDU-yCoTwRDv8vQfbPKJALTXD13QFmFGF4dvNH-BYB1FWwRfBQ-7Z4Mu-z3~GYeRP9NxxzI5H8LQrhmUv75LSK1H7v6PwRbkkuihF7Lr~ds36wuM9XjXdkK4DQhsioovBttAGZZSpY951Cq3MDFphyK-CA6dsouNYA446UWzcE3mYHJCGJARFn5T4u5ZiI-nRaG1hxGNcaceVoU1PmKSCwHCtqJFWvZqlt55MLqwjno-y~Q__',
  'https://s3-alpha-sig.figma.com/img/f0c4/6f8c/dabbd963415286c194438e3e26ccbdc2?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YMN5MdShECf6q5mALELASbRbErZCyHljFmtUHb3qYzwH2UG5dyOXoh9DF6nNembXgUzD-LZXL8GQqro5d-JBAH6f1JsvLCL8hXEYCCSACR-sA32DwFX8kHUBD-jN9QIXz~KGCkeqBbTFyYAlya5Z4NicyDwWmDNBeXrjJfbthnRlvVz6q3m8oxzeE8kQ1ArWfmEDv76SfZr1XQv31N~By8PphH4-6GM1RrvtVkV76wyK0h5swSm4vowCUYTBmwJAGzqTHdERNCECoTk3ZiqI4sHjC3WArGAIs-LEDO3hESU8BZUC0kQBQsRMxq1x8upiQXT~aHsUJ9gg8XIceSsAMA__',
  'https://s3-alpha-sig.figma.com/img/949a/49f0/f148857cee3c2f0781d7643a14e03473?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~xWyy5ttnXwp3N8xSK3Fk1rtpSZr8HanTc2JMKHLyGnH-JRcTDQNXN7Nu2UknDU9S42awN1Za3ALXLM7PPeDfN9rhftESkFiJuj3vQotXwfrqQZWshNOGC7-yyN5ZK4OsCbfx4hWPJY~k~RkwtQzg81dndi2kxt517DHo32XxonOr7ZrPQW74390iZJZJ3oOlVpJt-qPmHhT9wAyDOPxZl75UCenkQTvlkjVG0-kNc1pIn9OBnnHro3DhDvU~75GfWi4-WuBALMqpzQrBd0YuMUWe0sj5tLlhOHpU4oMciv0nNe7AiE6Lk-qkZYWQV6O~DUnvyeWgP3X1lh3Q4ZkA__',
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
      <div className="relative w-auto h-[473px] border-black bg-gray-200">
        <div
          className="w-auto h-full bg-cover bg-center transition-all duration-500 bg-no-repeat"
          style={{ backgroundImage: `url(${images[currentSlide]})`}}
        >
        <div className="absolute bottom-0 left-0 p-10">
          <div className="inline-flex flex-col items-start gap-6 border border-black bg-white p-8 px-[100px]">
            <h1 className="text-xl font-bold">15% OFF FIRST ORDER</h1>
            <p className="text-sm">Use discount code FIRST ORDER15 at checkout.</p>
            <button className="flex justify-center items-center gap-2 rounded-full border border-black bg-white py-3.5 px-6" style={{ borderWidth: '1.5px' }}>
              <span>SHOP NOW</span>
            </button>
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
        <circle cx="13" cy="20" r="13" fill="black"/>
        <circle cx="69" cy="20" r="8.5" fill="white" stroke="black"/>
        <circle cx="125" cy="20" r="8.5" fill="white" stroke="black"/>
      </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;

