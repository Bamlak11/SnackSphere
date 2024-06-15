import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
          <div className='w-full md:w-[250px] h-fit mt-5 md:mt-0'>
            <img
              src="https://s3-alpha-sig.figma.com/img/7d57/e108/c3e0562a93d7ac59b7afa67cc34b7f99?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ltHmqo1s7T~ETcBMTh2UQFx8a~ChXyMRJ7XacrHcObAUkoWURt2yhtd74CXcSZv1~PNC7OinRZCvlMpFNldbaksGNh2k7uNLpf83Vl3ii1XBmhN3Rib~-0uC6QtUd6HQ9qaal0wRU2aWZQB520gTbjY3WsiHA1r9~IlxgTcU5nvLkRMFuX6chGitwjF-r4HUT8gYfvKjP2pvCotuNF0yiRkuaLIc70uX373Bv1dPac5UPyR0yh7InmKXOy-h4O4PEHpsdQUQf1zTjgOgpNmYH7kDOd1dC5qpXhK0XrpUB7rulpS0LWLmHSc~6B2TszSh2OeElOZebSqPHxRhGWN2rw__"
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
          <div className='w-full md:w-[250px] h-fit mt-5 md:mt-0'>
            <img
              src="https://s3-alpha-sig.figma.com/img/73f5/a31b/7bfbe3a2cdec9fe77533aaef80587450?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c11q3Ge4MvfoH4aKn35Y9ynOlUO8PLa2pVgIBZp0OgVJoqQhn0c-wu~Hokxuf9nUn0dYlm7zp2Jerv13xQF8ZYNqdOPwLlx-T7TQBHQia1qG9k6QvrC8ZNy-qTGPqXLDuSkqYgrWfPj-EMf6ihcA5-sXDS0-Yb6etIO~toxCdbuzX46IQcJ~76XYB6niRGrLTxe39UIrU4tjIERnUy1qU1JMxGuZZ80ElAojyCDykBjtP-paJ2lft7biDy3DN12kAkZRhZ~aHaB4XAnxSbwEAtw-xDVR0xRvGt3IKu0M0SLkAKbDQGzbsyeMnME3599h4xYH8WkHbCegbLEy~dm7Sg__"
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
