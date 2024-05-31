import React from 'react';
import ProductCard from './ProductCard';
import BestSellers from './BestSellers';

const Products = () => {
  return (
    
    <div className="text-black text-center font-roboto font-bold text-2xl mt-20">
      
      <h2>Discover New Flavors</h2>
      <p className="text-base font-light mt-6">
      Discover a variety of our flavors and snacks in one adventurous pack!
      </p>   

      <div className="text-black text-center font-roboto font-light text-2xl">
      

      <div className="flex flex-wrap justify-center gap-40px mt-6">
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/949a/49f0/f148857cee3c2f0781d7643a14e03473?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e~xWyy5ttnXwp3N8xSK3Fk1rtpSZr8HanTc2JMKHLyGnH-JRcTDQNXN7Nu2UknDU9S42awN1Za3ALXLM7PPeDfN9rhftESkFiJuj3vQotXwfrqQZWshNOGC7-yyN5ZK4OsCbfx4hWPJY~k~RkwtQzg81dndi2kxt517DHo32XxonOr7ZrPQW74390iZJZJ3oOlVpJt-qPmHhT9wAyDOPxZl75UCenkQTvlkjVG0-kNc1pIn9OBnnHro3DhDvU~75GfWi4-WuBALMqpzQrBd0YuMUWe0sj5tLlhOHpU4oMciv0nNe7AiE6Lk-qkZYWQV6O~DUnvyeWgP3X1lh3Q4ZkA__"
          name="CHIPS"
          price="10.00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/eea7/6003/b18d2fef3377c9a093561cedd31eead3?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iMOq35LWP5rO~IZ2lTNCUPVBDIiHhj3rVd1cCkeWZyFEgv2x8Q3Du1YzCh4t7vSj0G8lxAxzdgtn6uAYHF0aNMKEm5Kl~khcyPiinWUD94CFbFX8zjVDIX5tXfOciHeF~qpDM6NDhVekquMRitzU7o2LHGRK7mZTbioBgnoQ0Fpw59KdiiQmNdHLm7zQxxO3c-dvwQiCCEgmLnvL9TUhcqEfNyCiddTAbC4K9-1D-oSkvp7ExLA-2DpiVfwVDGzgW~j3~FlDIHAymibYTG2q35qNFUu1NStLBQnFi-VNeL9KmDNq3Hm9zDTrW9iTf37Qy6Adshjz0V0dFoShKWiEJg__"
          name="GUMMY WORMS"
          price="10.00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/b52b/ed4d/71e9adae42594140eaad3bf8e0057ee4?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H2Wfe48kzfn1oWjNF~zb4U3I7Gn2aO0ARa1BoCYc5SsQIh0SZgE5QiCGWhMjH-8WHwBv0b5u2FGrx~U638~4ya5-KJHR4cDlNEVqnjcaDW9HgSe5vdOTdZykk0c9Ajq7EEfuHz9y~s74iQsCm90EYKEwrT4KY-zzKaEtLI1TLcNHtj3DbYzYcAialaaNHsrV5LM0t6FMLsl1ZCK1whCgsC7aH1hRckmX3AalzhcP~iZWHN~hBUGc-V7pQHVmoZgbr9tj-ufsgJvvDIsI67orGY6i7j7xKKiHiui0Cxce1wK1dCRcXmVGGsiETMW21HKpcQgTqes0YUPV11J7G8m9iw__"
          name="JELLIES PACK"
          price="10.00"
        />
        <ProductCard
          image="https://s3-alpha-sig.figma.com/img/4ba0/c5bd/65671ed2a3a56d61699f46abb74815a1?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lWs~3OpnAjW~5FlSCbBmwhAAiOAmYORVlz-UspZHElku-GB2XlD~G-v2Eq5FtHDMzpkcw6kTgRgGl8tSNYZqDihmPajC0nPB89DYZXw62DOzvqpMm6YejmfdQ7YczRVlr1wuGp6L31bVYPboF0vgBQcMzqOfES2bJ60e56XEKOqdY5585ISEaDalTyiNZUS0~Wzk8rjkpLAdu08l2ANqNENVeX4bGapmvrnWOYae0jguxLX190dy6zIWU4QRJwvsUe3tRdGsBoNiXaj3v3NYiVivBVUponpnyLWRYB0D8QUP4n9MtcWfpDTBpAALG6jYL2QT8mnCAReJBOFiLiDfUg__"
          name="SPICY PEANUTS"
          price="10.00"
        />
      </div>

      <div className="flex justify-center mt-6">
          <button className="flex justify-center items-center gap-2 rounded-full border border-black bg-white py-3.5 px-6">
            <p>DISCOVER MORE</p>
          </button>
        </div>
    </div>

    <div className='mt-12'>
        <h2>BESTSELLERS</h2>

        <div className="flex flex-wrap justify-center gap-40px mt-6 mb-20">
        <BestSellers 
        mainImage="https://s3-alpha-sig.figma.com/img/ec67/1078/83e00f3dc13216cce47637a271f8369b?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GL47HTp7F3B5Sq5Rmydf~rlvQMCPYuiDq~rGx~xnMs1xmE-7kFNswDY58Ea0IHXQovz1YTOC1pSWUucKH4CSZ5DLMdLbtFV1ZMAGFX4F31jo-1qewKra1fjkDzwGo3kjxztxIvjbMdmHQlCa~JfkEWaqAu30pj-1SaWENu4fCStwwoW62IujeiRkFDhqJyhkF11ChcxAcLz1Dvfy1od1~kGHLiDlXhdjGifd96iwvwehMbmrBYRTLcWh1kJuBB0whwAipTk~CJ-yayuEPPsJlYQA9Wrl9pB4iEeSoPzShSiEfORXkQt5sLB4JCMcnAdQmMD6PceZ3EknPmCYCm78sQ__" 
        sideImage1="https://s3-alpha-sig.figma.com/img/80c1/141f/4e18fcc7302e64dbfdb2bc5a6418b3e8?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GkzXY~rxGNp3ADj1i3w1ye4f1drADZatDuUNaSUrXFfyu5HpZYJCxudWSXN-1RvI9WobNgf3woftq6pa4uIDGBcm7CKJ~wyuXNxwhUtHcuK28MLm~2XsH~e2IQOUQg5pK4B1B0~XddCflZBp5MEwHW-SiWshsnDOwzXROheBjm1IQnB7ya1CyL398wynETgeYnz81SHqMxB0LBhHsyw--P1exz0fTkeaXswAZz1fr6mBsAwXF0Ytgt73XIUnHD1RIeqF29nCY~w~YwkEV5bLqkbW7wOJgOYXx7NnZOs31~~WucG~xWAKt1PmLfYjac9tKz6M6yw8v-jb1Ujx~vSL7A__" 
        sideImage2="https://s3-alpha-sig.figma.com/img/2416/af2e/c12be68e122dbda6760adac13ab3fcff?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dX3qi-a-mkaG48OL7NAKCUwWxoOYibn2Qmq58PQXfr1Q~6k~XJLmvC0en3Wy6U8N~lqP9RZs~e770pazWCDK5n8k8P7fubwA2xt9eVIElGPW6MJSCG~U7sFl~dpyJAkY6xUmR4NFc2lT3qySoaAMsSwV0udUaid4UhPJEz6kOpT0F89HfIthtCRr6iVltS-HlZp~kj6dzJu1il~L3XrSuVA38MejN0QOmNuF6OrJF9I7Oxe6QP4kP6nbnyn5ksr1iF58ZJn-jMo~bL3tmJYgatvop5yvmrRVWQ21NzhgsrOlVpUsb2UnY6UEENVoNNOtP-zh~o2Ol7eI2GHt2EPbpw__" 
      />
        </div>

        <div className="w-full h-[339px] bg-[#F4DFB6]">
       <h2 className="flex justify-center text-black font-roboto font-bold text-2xl p-4">WHAT WE DO</h2>
       <p className="text-black text-center font-roboto text-base font-light w-[625px] mx-auto mt-4 mb-8">
       We are an emerging snack startup looking to add a futuristic and  dynamic approach to the market. We have Discovery Packs prioritizing variety, and we do monthly pop ups in our state to make sure we hit every target preference. 
<br></br> <br></br>
        We pride ourselves on the quality of our ingredients, but also on the out of this world fun we still showcase throughout this business and our products. We’re glad your here!
      </p>
      <div className='flex justify-center'>
      <button className="gap-2 rounded-full border border-black bg-white p-2">
        LEARN MORE
      </button>
      </div>
    </div>

    </div>
    </div>
    
  );
};

export default Products;
