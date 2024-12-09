"use client"
import Image from "next/image";
export default function Home() {
  return (
    <div className="max-w-[90vw] mt-200px min-h-[100vh] mx-auto rounded-bl-[48px] rounded-br-[48px] bg-[#F0F2F3]">
      {/* First Comp */}
      <div className="w-[90vw] h-auto  flex justify-center  items-center mx-auto py-0  flex-col sm:flex-row">
        <div className=" w-auto sm:w-1/2 flex  items-start flex-col gap-5 font-semibold tracking-tight ">
          <p>Welcome to chairy</p>
          <span className="text-5xl">Best Furniture.</span>
          <span className="text-5xl">Collection for your</span>
          <span className="text-5xl">interior.</span>
          <button className="w-hug(171px) pt-14px pb-14px pr-24px pl-24px bg-[#029FAE] hover:bg-[#029FAE]-700 text-white font-bold py-2 px-12 rounded">
            Shop Now
          </button>
        </div>
        <div className="w-434px h-584px  mt-20  ml-120">
          <Image src={"/Product Image.png"} alt="Logo" width={400} height={400} />
        </div>
      </div>

{/* Company Name */}
<div className=" w-[90vw] min-h-[30vh] flex justify-center items-center mx-auto bg-white flex-col sm:flex-row gap-10">
  
    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo.png"} alt="Logo" width={70} height={70} />
    </div>
    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo (1).png"} alt="Logo" width={70} height={70} />
    </div>
  
  
    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo(2).png"} alt="Logo" width={70} height={70} />
    </div>
    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo (3).png"} alt="Logo" width={70} height={70} />
    </div>
  

    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo (4).png"} alt="Logo" width={70} height={70} />
    </div>
    <div className="w-1/3 sm:w-1/2">
      <Image src={"/Logo(5).png"} alt="Logo" width={70} height={70} />
    </div>

  <div className="w-1/3 sm:w-1/2">
    <Image src={"/Logo (6).png"} alt="Logo" width={70} height={70} />
  </div>
</div>


{/* Featured Products */}
     <div className=" w-1920px h-1920px mb-10 mx-auto bg-white flex flex-col items-start justify-center ">
  <div className="text-start mb-20">
    <h1 className="text-2xl sm:text-3xl font-bold">Featured Products</h1>
  </div>

  <div className="flex flex-col sm:flex-row gap-10 items-center">
    <div className="w-312px sm:w-1/4 ">
      <Image src={"/Products.png"} alt="Logo" width={400} height={400} />
    </div>
    <div className="w-3/4 sm:w-1/4 ">
      <Image src={"/Products (1).png"} alt="Logo" width={400} height={400} />
    </div>
    <div className="w-3/4 sm:w-1/4 ">
      <Image src={"/Products (2).png"} alt="Logo" width={400} height={400} />
    </div>
    <div className="w-3/4 sm:w-1/4 ">
      <Image src={"/Products (3).png"} alt="Logo" width={400} height={400} />
    </div>
  </div>
</div>

{/* Top Categories */}
<div className="mt- -inset-50 my-2 mx-10 gap-10 flex flex-col items-start justify-center">
  <div className="text-start">
    <h1 className="mt-30 text-2xl sm:text-3xl font-bold mb-10">Top Categories</h1>
  </div>

  <div className="flex flex-col sm:flex-row gap-10items-center">
    <div className="w-3/4 sm:w-1/3 ">
      <Image src={"/Image (4).png"} alt="Logo" width={400} height={400} />
    </div>
    <div className="w-3/4 sm:w-1/3 ">
      <Image src={"/Image (5).png"} alt="Logo" width={400} height={400} />
    </div>
    <div className="w-3/4 sm:w-1/3 ">
      <Image src={"/Image (6).png"} alt="Logo" width={400} height={400} />
    </div>
  </div>
</div>

{/* Explore New And Popular Styles */}


<div className= "flex flex-col sm:flex-row gap-10 mx-10 my-10">
  {/* Left Div with one image */}
  <div className="w-full sm:w-1/2">
  <div>
    <p className="text-2xl sm:text-3xl font-bold mb-10">EXPLORE NEW AND POPULAR STYLES</p>
  </div>
    <div className="">
      <Image
        src="/item-category-1.png" // Replace with your image path
        alt="Large Image"
        width={500}
        height={500}
        className="w-648px bg-whiteobject-cover w-full h-full"
      />
    </div>
   
  </div>

  {/* Right Div with 4 images */}
  <div className="w-full sm:w-1/2 grid grid-cols-2 sm:grid-cols-2 grid-rows-2 sm:grid-rows-2 gap-2">
    <Image
      src="/card (3).png" // Replace with your image path
      alt="Image 1"
      width={230}
      height={230}
      className="w-312px object-cover w-full h-full"
    />
    <Image
      src="/Products-3.png" // Replace with your image path
      alt="Image 2"
      width={230}
      height={230}
      className="w-312px object-cover w-full h-full"
    />
    <Image
      src="/Products.png" // Replace with your image path
      alt="Image (4)"
      width={230}
      height={230}
      className="w-312px object-cover w-full h-full"
    />
    <Image
      src="/Image (4).png" // Replace with your image path
      alt="Image 4"
      width={250}
      height={250}
      className="w-312pxobject-cover w-full h-full"
    />
  </div>
</div>

    {/* Our Products */}
<div className="my-20 bg-white mx-auto flex flex-col items-center justify-center ">
  <div className="text-start my-10">
    <h1 className="text-2xl sm:text-3xl font-semibold">Our Products</h1>
  </div>

  <div className="flex flex-col sm:flex-row gap-10 mx-auto">
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/Products.png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 border">
      <Image src={"/Products (1).png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/Products (2).png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/Products (3).png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-10 mx-auto">
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/Image (4).png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/item-category-2.png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/chaircousin.png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
    <div className="w-full sm:w-1/4 lg:w-1/4 xl:w-1/5 ">
      <Image src={"/chair.png"} alt="Logo" width={300} height={300} className="object-cover w-full h-full" />
    </div>
  </div>
</div>


    </div>



  );
}


