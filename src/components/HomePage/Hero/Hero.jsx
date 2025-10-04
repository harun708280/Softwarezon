"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center min-h-screen flex items-center pt-[120px] pb-[50px] md:pb-[80px]"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center gap-[20px] lg:gap-0">
        {/* Left Content */}
        <div className="flex-1 mb-8 text-white lg:text-left lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight md:leading-[70px]">
            <span className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              FIND OUT BEST
              <span>
                <Image
                  src="/images/hero-text-icon.png"
                  alt="icon"
                  width={30}
                  height={30}
                  className="h-6 md:h-auto"
                />
              </span>
            </span>
            SOFTWARE SOLUTIONS WITH{" "}
            <span className="bg-gradient-to-r from-[#FFBF78] to-[#D76B00] bg-clip-text text-transparent font-bold">
              SOFTWAREZON
            </span>
          </h1>

          <p className="text-white uppercase text-[18px] md:text-[20px] leading-none pt-[15px] md:pt-[20px] pb-[25px] md:pb-[45px]">
            TRY OUR AI-DRIVEN PERSONAL CREDIT MANAGEMENT SYSTEM
          </p>

          <Link
            href="/contact"
            className="primary-button "
          >
            CONTACT US
            <Image
              src="/images/right-arrow.svg"
              alt="arrow"
              width={20}
              height={20}
            />
          </Link>
        </div>

        {/* Right Content */}
        <div className="flex justify-center flex-1 lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="Hero"
            width={586}
            height={581}
            className="max-w-[586px] max-h-[581px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
