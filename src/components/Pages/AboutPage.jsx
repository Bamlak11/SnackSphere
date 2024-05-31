import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const AboutPage = () => {

  return (
    <div>
      <Navbar />
      <div className='w-full h-[500px] bg-[#F4DFB6]'>
  <div className='p-20 flex justify-between items-start'>
    <div className='max-w-[70%]'>
      <h1 className='font-bold text-3xl'>ABOUT</h1>
      <p className='pt-10 font-roboto'>
        SnackSphere focuses on the people. We know major franchises and consumer chains lack difference and often times variety. <br />
        Even the quality, something we should expect our food to have at a minimum isn’t always a primary focus.<br />
        We pride ourselves on taking the time to find curated and futuristic snack choices while involving fun ways to stay in community.
      </p>
    </div>
    <div className='w-[250px] h-fit'>
      <img src="https://s3-alpha-sig.figma.com/img/7d57/e108/c3e0562a93d7ac59b7afa67cc34b7f99?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pyLJeqEJb4gxrbWWbvrFAa~fAvEMnnZUSKrFupGtkepoI5amaLV37CPVZkjbn3XUT~ZQfluFGhAwlTyQr7JDQTWa5Sd9Zcz-vLMHt-jwXeeKS35BZ~ISAFsfaAZds4fkLcvntfKrCQu8j8mKNV3PyxZDIVYH6cdLVUZu9eIFVwukqIusHODiGjF0xhiBPGo7IyNfzRsOR-LrwcqSIZlwrNoZEHBEbL-6Dw~hUjGJJWnzNo8hGmw4xjUsc8wiiQqyA9fAZlVF6X2KMzCE4dspkWMzYxdkYTXXG5ScLkI93BcHQDlq~h-XSFvUbIC3bjHRUOXHq6ZM2uwk3hRoXcoKSA__" alt="About Image" />
    </div>
  </div>
</div>



<div className='w-full h-[500px]'>
  <div className='p-20 flex justify-between items-start'>
    <div className='max-w-[70%]'>
      <h1 className='font-bold text-3xl'>OUR FOUNDER</h1>
      <p className='pt-10 font-roboto'>
        Gabriela Lucía Nesheim, Ja’Miya Myles and Joi Hargrove All worked together as Design Team Thinkalikes.<br />
        They implemented ideas and design decisions based on the user research they complied through the duration of building this website.<br />
        [Add copy here to mention yourself (DEV)]
      </p>
    </div>
    <div className='w-[250px] h-fit'>
      <img src="https://s3-alpha-sig.figma.com/img/73f5/a31b/7bfbe3a2cdec9fe77533aaef80587450?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NM-Ny7oIM7HU0481~JeH~5IJ6HXApy688vpx07L2Epiy~dImIj4~2bcfoCqjaWbrEljHkuEqfZqCOYyJ5VY322ApRotoqyFrKdGY56END2JGGSy-eshxVNx9F0RMSg1AsBfZ0qHKeHxEKnTJPkwkaACV1BFwsq6UIJwIdImf83LPyY2D7OweKDQryPVwBtfDD1GTnY3nC0a1kW4rVtVMoQtuRh-cZ8Rm0n3pbWp1zyQxTlQw9ofAGSeo3s7iwgWhrFJN38NKNYybOEXeSjqUPgZcQn3IxbRleFg~nWutwFKHGQcT5TcYCXSKCSmTS91M6mhc8jCAjhFnoZFW8BWGqQ__" alt="Founders" />
      <p className=' align-middle font-roboto text-sm'>Design Team Thinkalikes with stakeholder Ashley Koudou </p>
    </div>
  </div>
</div>

      <Footer />
    </div>
  )
}

export default AboutPage
