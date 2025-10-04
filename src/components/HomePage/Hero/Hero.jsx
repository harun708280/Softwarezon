"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="hero bg-cover bg-center min-h-screen flex items-center pt-[120px] pb-[50px] md:pb-[80px]"
      style={{ backgroundImage: "url('/images/hero-bg.png')" }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center gap-[20px] lg:gap-[42px]">
       
        <div className="lg:max-w-[700px] w-full mb-8 text-white lg:text-left lg:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[70px]">
          Build, Scale & Transform with <span className="bg-gradient-to-r from-[#FFBF78] to-[#D76B00] bg-clip-text text-transparent font-bold">
              SOFTWAREZON
            </span>
          </h1>

          <p className="text-white text-[18px] md:text-[20px]  pt-[15px] md:pt-[20px] leading-[30px] pb-[25px] md:pb-[45px]">
            We design and develop next-gen CRM systems, SaaS platforms, and Web3 solutions using modern stacks like Laravel, Vue, Nuxt, Node.js, Python & Solidity. <span className="text-secondary">Your vision → Our code → Infinite possibilities.</span>
          </p>

          <Link
            href="/contact"
            className="primary-button "
          >
            Start Your Project Today
            <MoveRight />
          </Link>
        </div>

       
        <div className="flex justify-center lg:max-w-[586px] w-full lg:justify-end">
          <Image
            src="/images/hero.png"
            alt="Hero"
            width={586}
            height={581}
            layout="responsive"
            className="max-w-[586px] max-h-[586px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
