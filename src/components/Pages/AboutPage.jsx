import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import aboutimg from '../../assets/about.png'
import foundersimg from '../../assets/founders.png'

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-auto bg-[#F4DFB6]'>
        <div className='p-5 md:p-20 flex flex-col md:flex-row justify-between items-start'>
          <div className='max-w-full md:max-w-[70%]'>
            <h1 className='font-bold text-2xl md:text-3xl'>ABOUT</h1>
            <p className='pt-5 md:pt-10 font-roboto text-sm md:text-base'>
              SnackSphere focuses on the people. We know major franchises and consumer chains lack difference and often times variety. <br />
              Even the quality, something we should expect our food to have at a minimum isn’t always a primary focus.<br />
              We pride ourselves on taking the time to find curated and futuristic snack choices while involving fun ways to stay in community.
            </p>
          </div>
          <div className='w-full md:w-[350px] h-fit mt-5 md:mt-0'>
            <img
              src={aboutimg}
              alt="About Image"
              className='w-full'
            />
          </div>
        </div>
      </div>

      <div className='w-full h-auto'>
        <div className='p-5 md:p-20 flex flex-col md:flex-row justify-between items-start'>
          <div className='max-w-full md:max-w-[70%]'>
            <h1 className='font-bold text-2xl md:text-3xl'>OUR FOUNDER</h1>
            <p className='pt-5 md:pt-10 font-roboto text-sm md:text-base'>
              Gabriela Lucía Nesheim, Ja’Miya Myles, and Joi Hargrove all worked together as Design Team Thinkalikes.<br />
              They implemented ideas and design decisions based on the user research they compiled through the duration of building this website.<br />
              This website was developed by Bamlak Haile, who is a Frontend Developer.
            </p>
          </div>
          <div className='w-full md:w-[350px] h-fit mt-5 md:mt-0'>
            <img
              src={foundersimg}
              alt="Founders"
              className='w-full'
            />
            <p className='align-middle font-roboto text-xs md:text-sm mt-2'>
              Design Team Thinkalikes with stakeholder Ashley Koudou
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutPage;
