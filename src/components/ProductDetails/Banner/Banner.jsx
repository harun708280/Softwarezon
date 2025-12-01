import Link from "next/link";
import React from "react";

const Banner = ({name}) => {
  return (
    <div className="bg-black relative overflow-hidden  ">
      <div className="hero-shape"></div>
      <div className="bg-orange-glow  flex flex-col justify-center pt-[100px] pb-[40px] lg:pt-[140px] lg:pb-[80px]">
        <div className="container " data-aos="fade-down"
                data-aos-duration="800"
                data-aos-delay="100">
          <h1 className="text-[20px] xl:max-w-[65%]   md:text-3xl xl:text-[38px] font-semibold leading-tight xl:leading-[50px] text-white">
            {name}
          </h1>
          <div className="bg-[#69B2E6] py-2 px-[15px] w-fit rounded-full mt-[15px] mb-[30px]">
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
