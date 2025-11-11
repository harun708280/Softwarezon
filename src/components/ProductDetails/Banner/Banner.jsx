import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-black relative overflow-hidden  ">
      <div className="hero-shape"></div>
      <div className="bg-orange-glow  flex flex-col justify-center pt-[120px] pb-[40px] lg:pt-[140px] lg:pb-[80px]">
        <div className="container ">
          <h1 className="text-[30px]  sm:text-3xl md:text-4xl xl:text-[40px] font-bold leading-tight xl:leading-[75px] text-white">
            SHOP MANAGEMENT SYSTEM
          </h1>
          <div className="bg-[#69B2E6] py-2 px-3 w-fit rounded-full my-[10px] lg:my-[20px]">
            <span className="text-white text-[15px] font-medium ">
              PHP SCRIPT
            </span>
          </div>
          <Link href="/" className="uppercase text-sm text-white underline ">
            back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
