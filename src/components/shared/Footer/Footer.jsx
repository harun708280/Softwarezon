import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { Facebook, Linkedin, MoveRight, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="  relative bg-[url('/images/footer-bg.png')] bg-cover bg-top bg-no-repeat mt-[120px]">
      <div className="container relative">
        <div className="rounded-md max-w-[1170px] mx-aut lg:rounded-[30px] py-7 lg:py-[85px] px-7 lg:px-[52px] bg-orange   w-full absolute left-1/2 -translate-x-1/2 top-0 lg:-top-[100px] flex flex-col md:flex-row gap-4 lg:gap-[33px] items-center">
          <div className="w-full lg:w-[56%]">
            <h6 className="text-white text-[22px] lg:text-[40px] font-bold">
              Stay Ahead with Softwarezon
            </h6>
            <p className="text-[16px] lg:text-[18px] text-white/80 pt-[10px] lg:pt-[16px] max-w-[512px]">
              Get the latest insights on SaaS, FinTech, and Web3
              development—straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="bg-orange-gradient p-[2px] rounded-full w-full ">
              <div className="bg-white flex items-center justify-between rounded-full pl-5 pr-2 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 outline-none text-gray-700 text-sm placeholder:text-gray-400 bg-transparent"
                />
                <button className="bg-orange text-white font-medium text-[16px] px-5 py-3 rounded-full whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative pt-[306px] text-white">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="max-w-[303px] space-y-[14px]">
              <h6 className="text-[20px] font-medium ">About Softwarezon</h6>
              <p className="text-[#DAD9D9] text-[15px] !leading-[30px]">
                Innovative software solutions in SaaS, FinTech, and
                Blockchain—delivering scalable products for global clients.
              </p>

              <PrimaryButton label="About us" icon={MoveRight} />
            </div>
            <div className="">
              <h6 className="text-[20px] font-medium ">Explore</h6>
              <div className="flex flex-col gap-[12px] pt-[30px] text-[#DAD9D9] text-[18px]">
                <Link href="#"> Products</Link>
                <Link href="#"> Services</Link>
                <Link href="#"> Testimonials</Link>
                <Link href="#"> Blog</Link>
              </div>
            </div>
            <div className="">
              <h6 className="text-[20px] font-medium ">Support</h6>
              <div className="flex flex-col gap-[12px] pt-[30px] text-[#DAD9D9] text-[18px]">
                <Link href="#"> Help Center </Link>
                <Link href="#"> Privacy Policy</Link>
                <Link href="#"> Terms & Conditions</Link>
                <Link href="#"> Contact Us </Link>
              </div>
            </div>
            <div className="max-w-[258px]">
              <h6 className="text-[20px] font-medium ">Connect With Us</h6>
              <div className="flex flex-col gap-[12px] pt-[30px] text-[#DAD9D9] text-[18px]">
                <p className="text-[#DAD9D9] text-[15px] !leading-[30px]">
                  Let’s stay connected on your favorite platforms:
                </p>
                <div className="flex gap-[15px] pt-[20px]">
                  <a
                    href="#"
                    className="bg-white/10 h-[28px] w-[28px] rounded-md p-1 flex items-center "
                  >
                    <Facebook className="fill-white " />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 h-[28px] w-[28px] rounded-md p-1 flex items-center "
                  >
                    <Twitter className="fill-white " />
                  </a>
                  <a
                    href="#"
                    className="bg-white/10 h-[28px] w-[28px] rounded-md p-1 flex items-center "
                  >
                    <Linkedin className="fill-white " />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[120px] relative">
          <div className="border-t border-[#606060] py-[30px]">
           <div className="flex gap-4 justify-between items-center text-[#DAD9D9] text-[14px]">
             <Image
              src="/images/footer-logo.svg"
              alt="Logo"
              width={206}
              height={47}
              className="object-contain"
            />
            <Link href="#">Copyright 2025.com, All rights reserved.</Link>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
