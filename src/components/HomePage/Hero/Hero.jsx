"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black relative">
      <div className="hero-shape"></div>
      <div className="min-h-screen flex items-center pt-[120px] pb-[50px] md:pb-[80px] bg-orange-glow">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center gap-[20px] lg:gap-[42px]">
          <div className="lg:max-w-[700px] w-full mb-8 text-white lg:text-left lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-[56px] font-bold leading-tight lg:leading-[75px]">
              Build, Scale & Transform with{" "}
              <span className="bg-gradient-to-r from-[#FFBF78] to-[#D76B00] bg-clip-text text-transparent ">
                SOFTWAREZON
              </span>
            </h1>

            <p className="text-white text-[18px] md:text-[20px]  pt-[15px] md:pt-[20px] leading-[30px] pb-[25px] md:pb-[45px]">
              We design and develop next-gen CRM systems, SaaS platforms, and
              Web3 solutions using modern stacks like Laravel, Vue, Nuxt,
              Node.js, Python & Solidity.{" "}
              <span className="text-secondary">
                Your vision → Our code → Infinite possibilities.
              </span>
            </p>

            <Link href="/contact" className="primary-button btn">
              Start Your Project Today
              <MoveRight />
            </Link>
          </div>

          <div className="flex justify-center lg:max-w-[586px] w-full lg:justify-end relative mx-auto my-20">
            <div className="absolute left-[27px] top-[140px] logo-item ">
              <Image
                src="/hero-icon/nextjs.png"
                alt="Next.js"
                width={80}
                height={62}
              />
            </div>

            <div className="absolute left-[0] top-[84px] logo-item ">
              <Image
                src="/hero-icon/nuxt.png"
                alt="Nuxt.js"
                width={80}
                height={62}
              />
            </div>

            <div className="absolute left-[20px] top-[0px] logo-item ">
              <Image
                src="/hero-icon/react.png"
                alt="React.js"
                width={80}
                height={62}
              />
            </div>

            <div className="absolute left-[113px] top-[23px] logo-item ">
              <Image
                src="/hero-icon/vue.png"
                alt="Vue.js"
                width={80}
                height={62}
              />
            </div>

            <div className="absolute left-[156px] -top-[70px] logo-item ">
              <Image
                src="/hero-icon/wifi.png"
                alt="Wireless Icon"
                width={48}
                height={69}
              />
            </div>

            <div className="absolute left-[235px] -top-[58px] logo-item ">
              <Image
                src="/hero-icon/laravel.png"
                alt="Laravel"
                width={80}
                height={62}
              />
            </div>

            <div className="absolute right-[192px] -top-[45px] logo-item ">
              <Image
                src="/hero-icon/figma.png"
                alt="Figma"
                width={58}
                height={61}
              />
            </div>

            <div className="absolute right-[110px] -top-[11px] logo-item ">
              <Image
                src="/hero-icon/react.png"
                alt="React.js UI"
                width={80}
                height={62}
              />
            </div>

            <Image
              src="/hero-icon/hero.png"
              alt="Developer Illustration with Framework Logos"
              width={586}
              height={581}
              className="max-w-[586px] max-h-[586px] w-full relative z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
