"use client";

import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const OverviewDetails = () => {
  const images = [
    "/images/project-details.png",
    "/images/project-details.png",
    "/images/project-details.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
  };

  const features = [
    "Powerful Sell System",
    "Multiple Product Sell at a Time",
    "Sell Discount or Less System Include",
    "Sell On Paid and Due Payment System",
    "Payment Cash Or Cheque System Included",
    "Daily, Monthly, Yearly Sell Statistic",
    "Powerful Invoice System Included",
    "Due Repayment System",
    "Due Repayment Notification",
    "Cash On Sell System",
    "Powerful Store management",
    "Category wise Product Store",
    "Multiple Company Supported",
    "Company Payment Due and Repayment",
    "Perfect Current Cash Management",
    "Perfect Daily Expense Report",
    "Perfect Report Withdraw or Deposit from Shop",
    "Powerful Customer Management System",
    "Powerful Transaction Log Included",
    "Manage Logo",
    "Manage Copyright Text",
    "A to Z Description",
    "and much more…",
  ];

  const freeOffer = [
    "We Offer Free Installation.",
    "We Offer Free Minor Customization.",
    "We Always Offer Premium Support.",
    "We Fix Any Bugs or Broken Content.",
  ];

  return (
    <section className="overflow-hidden">
      <div className="w-full product-details-tab relative overflow-hidden border-b  border-l border-r rounded-[16px] border-[#00000014] bg-[#FDFDFD]">
        <Slider {...settings} className="!m-0 !p-0">
          {images.map((src, index) => (
            <div key={index} className="relative w-full h-[440px] !m-0 !p-0">
              <Image
                src={src}
                alt={`project-details-${index}`}
                fill
                className="rounded-t-[16px] object-cover"
              />
            </div>
          ))}
        </Slider>

        <div className="p-[20px] lg:p-[30px] flex gap-[20px] justify-between flex-wrap">
          <button className="btn !bg-[#7A9C2B] ">
            {" "}
            Live Preview{" "}
            <span>
              <img src="/icon/live.svg" alt="live" />
            </span>
          </button>
          <div className="flex items-center gap-[10px]">
            <p className="text-[16px]  lg:text-[20px] font-medium text-[#1A171799]">
              Share
            </p>
            <button
              className="h-[40px] w-[40px] rounded-full border   flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out
                 h hover:border-[#f39022] hover:scale-110"
            >
              <img src="/icon/facebook.svg" alt="facebook" />
            </button>
            <button
              className="h-[40px] w-[40px] rounded-full border   flex justify-center items-center border-[#000000]/30  cursor-pointer transition-all duration-300 ease-in-out
                 h hover:border-[#f39022] hover:scale-110"
            >
              <img src="/icon/twiter.svg" alt="twiter" />
            </button>
            <button
              className="h-[40px] w-[40px] rounded-full border   flex justify-center items-center border-[#000000]/30  cursor-pointer transition-all duration-300 ease-in-out
                 h hover:border-[#f39022] hover:scale-110"
            >
              <img src="/icon/instragram.svg" alt="instragram" />
            </button>
            <button
              className="h-[40px] w-[40px] rounded-full border   flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out
                 h hover:border-[#f39022] hover:scale-110"
            >
              <img src="/icon/whatsapp.svg" alt="whatsapp" />
            </button>
            <button
              className="h-[40px] w-[40px] rounded-full border   flex justify-center items-center border-[#000000]/30 cursor-pointer transition-all duration-300 ease-in-out
                 h hover:border-[#f39022] hover:scale-110"
            >
              <img src="/icon/teligram.svg" alt="teligram" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#FDFDFD] border border-[#00000014] rounded-[10px]  mt-[20px]  lg:mt-[30px]">
        <p className="text-sm lg:text-[15px] leading-[30px] text-[#474545] p-[20px] lg:p-[30px] ">
          This is a Trading Buy Sell Notification platform with this script you
          are able to send Forex, Crypto, Stocks, CFD, or any market signals. If
          you or your teams are experts in analysis then you can sell your
          premium signal to your customer. Customers will pay you and they will
          receive this signal on their Telegram, Whatsapp, Email, and Sms. Here
          admin can create multiple free or paid plans. When any customer
          registers to the website he/her needs to choose a plan if the plan is
          paid then he/her needs to make a payment to you. When admin sends
          trading real-time signals to specific Plan users via Email, SMS, and
          Individual Telegram and Whatsapp Accounts. The user will receive it
          and Just follows the signal and opens his/her trading buy-sell
          position So that the user can stop loss and take a profit easily.
          Admin can create Staff and Staff can create signals like Admin. So you
          can easily start a Trading Signal Sending Platform with just a few
          clicks. This script has the most powerful 30+ international payment
          methods and 23+ Sms Gateway and 7+ Email Driver and 5+ Whatsapp
          Driver. It’s 100% User-friendly and fully responsive on all kinds of
          devices. It’s a very easy-to-use and SEO-friendly application. Admin
          can manage the complete website without a single line of coding
          knowledge. It is professionally developed in a PHP-based Laravel
          framework with MySQL backend. It has a strong SQL injection protection
          system which will keep away this system from hackers. This script
          creates a unique session for each login every time and checks login
          session is valid with this system or not. So there is no question
          about session hijacking.
        </p>
        <div className="border-t border-[#00000014] p-[20px] lg:p-[30px]">
          <h6 className="text-[#474545] text-[18px] lg:text-[24px] font-medium">
            Script Features
          </h6>
          <ul className="py-[20px] lg:py-[25px]  text-[#474545] text-sm lg:text-[16px] leading-[28px] space-y-2 lg:space-y-4">
            {features.map((feature, index) => (
              <li key={index} className=" flex items-center  gap-1">
                <span className="text-[#10CA2E]">
                  <CircleCheck height={18} />
                </span>{" "}
                {feature}
              </li>
            ))}
          </ul>
          <div className="overflow-hidden">
            <h6 className="text-[#474545] text-[18px] lg:text-[24px] font-medium">
              Demo Login
            </h6>
            <div className="py-[10px] lg:py-[20px]  text-[#474545] text-sm lg:text-[16px] leading-[28px] space-y-2 lg:space-y-4">
              <p className="text-sm uppercase lg:text-[15px] text-[#474545]">
                Frontend Demo :{" "}
                <span className="text-[#F39022] underline">
                  <a
                    href="https://demo.softwarezon.com/mymart/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://demo.softwarezon.com/mymart/
                  </a>
                </span>
              </p>
              <p className="text-sm uppercase lg:text-[15px] text-[#474545]">
                Admin Demo :{" "}
                <span className="text-[#F39022] underline">
                  <a
                    href="http://demo.softwarezon.com/shop/admin/Admin "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://demo.softwarezon.com/shop/admin/Admin
                  </a>
                </span>
              </p>
              <p className="text-sm uppercase lg:text-[15px] text-[#474545]">
                Login:Email :{" "}
                <span className="text-[#F39022] ">
                  <a
                    href="admin@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    admin@gmail.com
                  </a>
                </span>
              </p>
              <p className="text-sm uppercase lg:text-[15px] text-[#474545]">
                Password : <span className="text-[#F39022] ">123456</span>
              </p>
            </div>
          </div>

          <div className="pt-[15px ] text-[#10CA2E]">
            <h6 className=" text-[18px] lg:text-[24px] font-medium">
              Free Offer
            </h6>
            <ul className="py-[15px] lg:py-[20px]   text-sm lg:text-[16px] leading-[28px] space-y-2 lg:space-y-4">
              {freeOffer.map((freeOffer, index) => (
                <li key={index} className=" flex items-center  gap-1 uppercase">
                  <span className="">
                    <CircleCheck height={20} />
                  </span>{" "}
                  {freeOffer}
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-[15px] text-[#474545]">
            <h6 className=" text-[18px] lg:text-[24px] font-medium">Support</h6>
            <p className="leading-[30px] text-sm lg:text-[16px] py-[10px] lg:py-[15px]">
              We are always happy to hear from you. Please feel free to contact
              us for any kind of customization, support, query and suggestion.
              We will respond as soon as possible. Thank you,
            </p>
          </div>
          <div className="pt-[15px] text-[#F39022] text-sm lg:text-[16px] space-y-2 lg:space-y-3">
            <p>
              {" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                SoftwareZon
              </a>
            </p>

            <p>
              {" "}
              Email :
              <a
                href="softwarezon@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                softwarezon@hotmail.com
              </a>
             
            </p>
            <p>
              {" "}
              Skype :
              <a
                href="softwarezon@hotmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                SoftwareZon
              </a>
             
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewDetails;
