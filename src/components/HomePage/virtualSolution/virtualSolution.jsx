// components/VirtualSolution.js
import Image from "next/image";

export default function VirtualSolution() {
  return (
    <section className="container !py-[40px] md:!py-[60px] lg:!py-[140px]">
      <div className="flex gap-[30px] lg:gap-[66px] justify-between flex-col-reverse lg:flex-row items-center">
        
        {/* Left Side Image */}
        <div className="flex-1">
          <Image
            src="/images/virtual-solution.png"
            alt="Virtual Software Solution"
            width={697}
            height={488}
            className="max-h-[488px] max-w-[697px] w-full h-full object-contain"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="section-header pb-[25px] lg:pb-[40px]">
            We&apos;re your virtual Software Solution studio
          </h1>
          <p className="text-[#626262] text-[20px] leading-[29px] font-normal text-left">
            Picture altering administrations for internet business organizations
             stars, from item photographic artists to Amazon sellers to
            worldwide brands.
          </p>
          <p className="!text-left text-[#626262] text-[20px] leading-[29px] font-normal pt-[20px] pb-[25px] lg:pb-[45px]">
            Since a fast item shoot can without much of a stretch transform into
            up to seven days of altering  organizing your images. Allow us
            to take care of the edits, so you can return to the work that needs
            you.
          </p>

      
          <button className="primary-button ">
            CONTACT US
            <Image
              src="/images/right-arrow.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
