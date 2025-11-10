"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-black relative overflow-hidden">
      <div className="hero-shape"></div>
      <div className="min-h-screen flex items-center pt-[120px] pb-[0px] md:pb-[80px] bg-orange-glow">
        <div className="container mx-auto flex flex-col xl:flex-row items-center justify-center text-center gap-[20px] xl:gap-[42px]">
          <div className="xl:max-w-[700px] w-full mb-8 text-white xl:text-left xl:mb-0">
            <h1 className="text-[30px] sm:text-3xl md:text-4xl xl:text-[56px] font-bold leading-tight xl:leading-[75px]">
              Build, Scale & Transform with{" "}
              <span className="bg-gradient-to-r from-[#FFBF78] to-[#D76B00] bg-clip-text text-transparent">
                SOFTWAREZON
              </span>
            </h1>

            <p className="text-white text-[16px] md:text-[20px] pt-[15px] md:pt-[20px] leading-[30px] pb-[25px] md:pb-[45px]">
              We design and develop next-gen CRM systems, SaaS platforms, and
              Web3 solutions using modern stacks like Laravel, Vue, Nuxt,
              Node.js, Python & Solidity.{" "}
              <span className="text-secondary">
                Your vision → Our code → Infinite possibilities.
              </span>
            </p>

            <Link href="/contact" className="primary-button">
              Start Your Project Today
              <MoveRight />
            </Link>
          </div>

          <div className="flex justify-center w-full relative mx-auto my-16 xl:my-20 max-w-[586px]">
            <Image
              src="/hero-icon/hero.png"
              alt="Developer Illustration with Framework Logos"
              width={586}
              height={581}
              className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] xl:max-w-[586px] relative z-0"
            />

            <div className="absolute inset-0">
              <div className="absolute left-[2%] top-[29%] logo-item">
                <Image
                  src="/hero-icon/nextjs.png"
                  alt="Next.js"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>

              <div className="absolute left-[2%] top-[18%] logo-item">
                <Image
                  src="/hero-icon/nuxt.png"
                  alt="Nuxt.js"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>

              <div className="absolute left-[5%] top-[3%] logo-item">
                <Image
                  src="/hero-icon/react.png"
                  alt="React.js"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>

              <div className="absolute left-[20%] top-[4%] logo-item">
                <Image
                  src="/hero-icon/vue.png"
                  alt="Vue.js"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>

              <div className="absolute left-[27%] top-[-15%] md:left-[27%] md:top-[-13%] logo-item">
                <Image
                  src="/hero-icon/wifi.png"
                  alt="Wireless Icon"
                  width={38}
                  height={54}
                  className="w-[36px] sm:w-[44px] md:w-[48px]"
                />
              </div>

              <div className="absolute left-[40%] top-[-10%] logo-item">
                <Image
                  src="/hero-icon/laravel.png"
                  alt="Laravel"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>

              <div className="absolute left-[57%] top-[-10%] logo-item">
                <Image
                  src="/hero-icon/figma.png"
                  alt="Figma"
                  width={48}
                  height={50}
                  className="w-[40px] sm:w-[52px] md:w-[58px]"
                />
              </div>

              <div className="absolute left-[64%] top-[-2%] logo-item">
                <Image
                  src="/hero-icon/react.png"
                  alt="React.js UI"
                  width={60}
                  height={46}
                  className="w-[50px] sm:w-[65px] md:w-[80px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
