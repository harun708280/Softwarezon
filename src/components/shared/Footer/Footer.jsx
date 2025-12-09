"use client";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import { useSubscribeUserMutation } from "@/lib/api/subscribeApi";

import {
  Facebook,
  Linkedin,
  MailCheck,
  MailWarning,
  MoveRight,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const Footer = () => {
  const [emailInput, setEmailInput] = useState("");
  const [addSubscriber, { isLoading }] = useSubscribeUserMutation();

  const handleAddSubscriber = async () => {
    if (!emailInput) {
      toast.custom(
        (t) => (
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-md text-orange-400">
            <MailWarning className="w-5 h-5" />
            <span>Email is required!</span>
          </div>
        ),
        { duration: 5000 }
      );
      return;
    }

    try {
      await addSubscriber({ email: emailInput }).unwrap();
      toast.custom(
        (t) => (
          <div
            className={`flex items-center gap-2 bg-white text-orange-400 p-3 rounded-md shadow-md`}
          >
            <MailCheck className="w-5 h-5" />
            <div className="flex flex-col">
              <span className="font-medium">Subscribed!</span>
              <span className="text-sm text-orange-400">
                You will get our latest updates.
              </span>
            </div>
          </div>
        ),
        { duration: 5000 }
      );
      setEmailInput("");
    } catch (err) {
      toast.custom(
        (t) => (
          <div className="flex items-center gap-2 bg-white p-3 rounded-md shadow-md text-orange-400">
            <MailWarning className="w-5 h-5" />
            <span>{err?.data?.message || "Failed to subscribe!"}</span>
          </div>
        ),
        { duration: 5000 }
      );
    }
  };

  return (
    <footer
      className="relative bg-[url('/images/footer-bg.png')] bg-cover bg-top bg-no-repeat lg:mt-[120px]  "
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="100"
    >
      ''
      <div className="container relative z-0 ">
        <div className="relative z-10 rounded-md max-w-[1170px] mx-auto lg:rounded-[30px] py-7 lg:py-[85px] px-5 lg:px-[52px] bg-orange w-full flex flex-col md:flex-row gap-4 lg:gap-[33px] items-center lg:-mt-[100px] overflow-hidden">
          <div className="w-full lg:w-[62%]">
            <h6 className="text-white text-[18px] md:text-[22px] lg:text-[40px] font-bold ">
              Stay Ahead with Softwarezon
            </h6>
            <p className="text-[16px] lg:text-[18px] text-white/80 pt-[10px] lg:pt-[16px] max-w-[512px]">
              Get the latest insights on SaaS, FinTech, and Web3
              development—straight to your inbox.
            </p>
          </div>
          <div className="w-full lg:w-[45%]">
            <div className="bg-orange-gradient p-[2px] rounded-full w-full">
              <div className="bg-white flex items-center justify-between rounded-full pl-5 pr-2 py-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 outline-none text-gray-700 text-sm placeholder-gray-400 h-full"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                />
                <button
                  onClick={handleAddSubscriber}
                  disabled={isLoading}
                  className="bg-orange text-white font-medium text-sm md:text-[16px] px-2 md:px-5 py-2 md:py-3 rounded-full whitespace-nowrap cursor-pointer"
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-0 pt-[40px] text-white lg:pt-[70px]">
          <div className="flex flex-wrap justify-between gap-6 lg:gap-3">
            <div className="max-w-[303px] space-y-[10px] lg:space-y-[14px]">
              <h6 className="text-[18px] md:text-[20px] font-medium ">
                About Softwarezon
              </h6>
              <p className="text-[#DAD9D9] text-[15px] !leading-[30px]">
                Innovative software solutions in SaaS, FinTech, and
                Blockchain—delivering scalable products for global clients.
              </p>
              <PrimaryButton label="About us" icon={MoveRight} />
            </div>

            <div>
              <p className="text-[16px] md:text-[20px] font-medium ">Explore</p>
              <div className="flex flex-col gap-[10px] md:gap-[12px] pt-[15px] lg:pt-[30px] text-[#DAD9D9] text-sm  md:text-[18px]">
                <Link href="#">Products</Link>
                <Link href="#">Services</Link>
                <Link href="#">Testimonials</Link>
                <Link href="#">Blog</Link>
              </div>
            </div>

            <div>
              <p className="text-[16px] md:text-[20px] font-medium ">Support</p>
              <div className="flex flex-col gap-[10px] md:gap-[12px] pt-[15px] lg:pt-[30px] text-[#DAD9D9] text-sm  md:text-[18px]">
                <Link href="#">Help Center</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Contact Us</Link>
              </div>
            </div>

            <div className="max-w-[258px]">
              <h6 className="text-[16px] md:text-[20px] font-medium ">
                Connect With Us
              </h6>
              <p className="text-[#DAD9D9] text-[15px] !leading-[30px] lg:pt-[30px]">
                Let’s stay connected on your favorite platforms:
              </p>
              <div className="flex gap-[15px] pt-[20px]">
                <a
                  href="https://www.facebook.com/softwarezon"
                  target="_blank"
                  className="
      bg-white/10 h-[28px] w-[28px] rounded-md p-1 flex items-center 
      transition-all duration-300 hover:bg-orange-500/20 hover:scale-110
    "
                >
                  <Facebook className="fill-white  transition-colors duration-300 hover:fill-orange-400" />
                </a>

                <a
                  href="https://www.linkedin.com/company/softwarezon"
                  target="_blank"
                  className="
      bg-white/10 h-[28px] w-[28px] rounded-md p-1 flex items-center
      transition-all duration-300 hover:bg-orange-500/20 hover:scale-110
    "
                >
                  <Linkedin className="fill-white transition-colors duration-300 hover:fill-orange-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[60px] lg:pt-[120px] relative z-0">
          <div className="border-t border-[#606060] py-[30px]">
            <div className="flex flex-wrap gap-4 justify-between items-center text-[#DAD9D9] text-[14px]">
              <Link href="/">
                <Image
                  src="/images/footer-logo.svg"
                  alt="Logo"
                  width={206}
                  height={47}
                  className="object-contain"
                />
              </Link>
              <p>&copy;2025 All Copyrights Reserver by Softwarezon</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
