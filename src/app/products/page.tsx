
"use client"
import Image from "next/image";

export default function Product() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-auto mx-auto flex flex-col items-start justify-center w-[90vw] md:mx-auto md:flex md:justify-center">
  <div className="text-start">
    <h1 className="text-2xl sm:text-3xl sm:mx-10 font-semibold">All Products</h1>
  </div>
  <div>
    <div className="flex flex-wrap justify-center gap-10 mx-auto my-5">
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products (1).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products (2).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products (3).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-10 mx-auto my-5">
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Image (5).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/item-category-2.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/chaircousin.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/chair.png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
    <div className="flex flex-wrap justify-center gap-10 mx-auto my-5">
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Image (4).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products (1).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Products (2).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full sm:w-1/4 lg:w-1/5 xl:w-1/5 ">
        <Image
          src={"/Image (6).png"}
          alt="Logo"
          width={300}
          height={300}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</div>

      
      <div className="flex flex-col sm:flex-col gap-10 mx-20 justify-center items-center my-2" >
        <div >
     <div className="my-2 text-center font-bold">
       <p className="text-3xl">Or Subsribe To The Newsletter</p>
     </div>
     <div>
     <form>
            <input
              type="email"
              placeholder="Your email"
              className="w-full border rounded-lg px-4 py-2 mb-4 flex justify-center gap-4 text-gray-600"
            />
            <button className="w-full bg-teal-500 text-white py-2 rounded-lg">
              Subscribe
            </button>
          </form>
</div>


        </div>
        <div className="my-2 font-bold">
       <p className="text-3xl">Follow products and discounts on Instagram</p>
     </div>
        <div>

        <div className="flex flex-col sm:flex-nowrap sm:flex-row justify-center gap-12 mx-auto my-5 overflow-x-auto">
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/stool chair.png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/Image (4).png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/Products (1).png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/Products.png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/Products (2).png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
  <div className="w-full sm:w-1/5 lg:w-1/5 xl:w-1/5 ">
    <Image
      src={"/Image (6).png"}
      alt="Logo"
      width={300}
      height={300}
      className="object-cover w-full h-full"
    />
  </div>
</div>


        </div>

      </div>
    
    </div>
  );
}
