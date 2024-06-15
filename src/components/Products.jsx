import React from 'react';
import ProductCard from './ProductCard';
import BestSellers from './BestSellers';
import { Link } from 'react-router-dom';

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
              image="https://s3-alpha-sig.figma.com/img/949a/49f0/f148857cee3c2f0781d7643a14e03473?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TYbu5dN0Hxy-FdFaY0W~dgTcMQsDn4eiVBOtR-C3Ujnu-N3Q7aKNuWRUw5XgXJV4IveVkB2O8N~KFi9taD9avRtO6NZAPoQN9z-w195BMSEpSKXl4IVFVOUuhdz~tf-~ifQeSBiiQSEmYTqTgG-6aAAotm~8HNFV5l~Ms3fsqPWmJvw-aOb3KDCbGmAWs0s8BgBkMuGCV68e0lb~Zo6e93vRfKRv-QLRNaPqUNBp3vljtIOwUMVaE7N~zoeutSfYh~sN01t4DIjiL-F5qQdkl1Uvy0-rFksZ~i2~GrGS4SGwl0-juvb~T1zq4ASjfytfWZeGJ6780XKUsE~9lqHxiA__"
              name="CHIPS"
              price="10.00"
            />
            <ProductCard
              image="https://s3-alpha-sig.figma.com/img/eea7/6003/b18d2fef3377c9a093561cedd31eead3?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T6C0OyfLS-I13F4-edGkSCFmgey6hYXXLxKPG9rghd0t5dKSvBx9kjA69R3BSPJ5o0kdE8MRsHlSSqXfr9QZsBCC89JEad4a8FMSYr5S1WAcPLHArp84M6MKUY4-O0VFMVkL57-zsqoL2jfHXcmuCKDWb5c6UWLHh-HK6WVAyROM-jwcgTYyzpeTOHGpbvYudL2Bmz7mGj8bLEOvKaa3FuJZkp7FFk5mq6TANEPatBOInrRqwY6QNSVjYJW3c27x9muaGKxo7XnWatjHBRXdhLEFSXJLzhTAOvKZ850EltASuPVfko70JDXQIjNiRUtFAjWzWDrh1~YOSfq4YoBq0w__"
              name="GUMMY WORMS"
              price="10.00"
            />
            <ProductCard
              image="https://s3-alpha-sig.figma.com/img/b52b/ed4d/71e9adae42594140eaad3bf8e0057ee4?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p0aAN8vEcTASQlSSncDF9gas73EubFQlgssKakpJtrgBWPwQ87FQDiaYp3Yz~hNdi7ZQGMSQbvNzUqlxHKQpZmwyGoFRVSHnineE9wcgGlcTA4nNap-EbCqQpcVSiYAL3pvLY7IQQ2sBwMCdyrtOIxi0hxAN3gxNLWZPmdB3DXazMjUjSAQHB1lx7EwU2FdiTP6bY6I2vkanVwTReuSa1skadldYe0BtgYcK8mXQVGkPsIqQix2bl32r6JJLG-S8EsTQl1Dy5jrM7JGSYIEFHAMuif1PfWJeXnijMZ4FqHbXuTi33xE7Ps8upQzzPwsUN4ErwWCEH5Ey4oD18VvmXw__"
              name="JELLIES PACK"
              price="10.00"
            />
            <ProductCard
              image="https://s3-alpha-sig.figma.com/img/4ba0/c5bd/65671ed2a3a56d61699f46abb74815a1?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OR6kfTliHEvgytCZfNXxvU8sEcsjSw6F9caTGmORR2KxEprmWzfDxH6cIS8wQiFn6TsTZWz6jpviFqCA-SJDFYhC5gAZAwVdhY-uMb-X3HEHp~qhxC7Niv7JwwqagGcRaX-mhgKQKOkuAvZ7rIWTodyaNV-hrlC8XbfBt~Kp8wJUp9M526tcjy0K7my-JfaAzDXGBmgjrHnXklFD83qSF-~a7SNtTBYpOM2geNiywEO2bsl7fF32mYDwakxW59N3ZkUgzxYbKxBnsh4HXeIxbue55-S7Kk04zywSxJbDJmvrGhdiwmGkCPTqvX6IEa8DBJGWrYlAIm1Bl2JKJl2vOw__"
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
        mainImage="https://s3-alpha-sig.figma.com/img/ec67/1078/83e00f3dc13216cce47637a271f8369b?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pt~rEPgxdk0eAw~3XAJNwWfs50VuTgm1aNhgfGzCe5CCeB0cfP7nBlD1ob5nwfW4jxWRxOBAY4W81cCQbsfNRl5mb8t4SttKq96CZxIKVM~sDCACE~ZCCBjwXNnyiPQEbdtBzeDk~Xx~P54vajg-Umh9o9wcJxyPRrD8CWsvWd4Kw8R2a17Ct3GxyA2HjC5UiOnbqcwnMyK0qkpMd6hrV1Br09JCcYXHnCfTrdY~sNx9b5eXSIWkvKCXRvo3Rd8Esl4dJnCSJY8MGiJGKsXZEMChKhGeyU3-SLx1jBbe6Rxw1yYK7GBBIdQWHDltRZEMySt2SOOSsn0bZhyvH-jUTg__" 
        sideImage1="https://s3-alpha-sig.figma.com/img/80c1/141f/4e18fcc7302e64dbfdb2bc5a6418b3e8?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nSpdeE-diED9BlrZY0HmUUqufG1ks7I5rxkYjBjk4SMW2VfHQzozs63b1MJIhSHkrusRI-MX3t~NA2Ei53ZzJ1PBuQpxMvFovgpkVC5cr-7wVbA~prU~RkoLJzivDdQYn68A6cCfZ~eHx2QUM7lQ-W2XtIXAlGKDWNwcK2dr8OA5x~wDsS0vkj7S53iK08Wx9caILlhqmbNRWn6zweaQlPfl26lFPRggYpGe2Ym-gkO3OarbCwooSvD-D0eoo8hIZqrwD-pAOau6QfvkkfwQSvbkQ9GGrhHx5Tihl4w~bjOHFv-L2Gy3Px6SlBsxx42pY2FZMKRqkU1OA4m~B6nn4Q__" 
        sideImage2="https://s3-alpha-sig.figma.com/img/2416/af2e/c12be68e122dbda6760adac13ab3fcff?Expires=1718582400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bz9Coan3TvEnV3tML8icYro8v8x~GOJeiC3X3sU62Y0AL9cN0~3qRezGIFYiV1x9vNZYunJHHqfshXK1eDh2yaOQN-XEhA6gqiSmsW8Xrn6iIkayg3npu~jS62L519nZOd5OGW1pYuWzSdK4L1y8BpXeR6YF6dygjJS4Po-9EqhTght2xMz9X9VhdoW5hoBUoHlR8EfhoGZ~MDP5KvN0~H22Pu1ruwxVyZQXklEb9WviuCBo5coUzTFnr~JKtmXEIgsdcUY9bYJDtjWGn5vIhXSXrnVwpZ7Y6jvhFFZWZ8Wrlq9eEaq-ib~7M8hmALaIPW3HVvMa0Nd9RKj8dF~oZw__" 
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
