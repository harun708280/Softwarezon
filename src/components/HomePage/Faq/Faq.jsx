import React, { useState } from "react";
import { CalendarDays, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

const faqData = [
  {
    question: "What do I need to get started?",
    answer:
      "A: Our average response time is under 2 hours during business hours (10:00–19:00 UTC+6).",
  },
  {
    question: "What kind of customization is available?",
    answer:
      "We offer full customization options, including layout changes, color schemes, typography, and content sections to align with your brand. ",
  },
  {
    question: "How easy is it to edit for beginners?",
    answer:
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer:
      "Our money-back guarantee ensures peace of mind by offering a full refund if you’re not satisfied with the final product within a specified time frame.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat py-[40px] md:py-[60px] lg:py-[120px]   relative overflow-hidden "
      style={{ backgroundImage: "url('/images/faq-bg.png')" }}
    >
      <Image
        src="/images/Polygon 8.png"
        width={200}
        height={200}
        alt="Polygon"
        className="absolute -right-[70px] -top-[50px]"
      />
      <Image
        src="/images/Polygon 9.png"
        width={200}
        height={200}
        alt="Polygon"
        className="absolute -left-[20px] -top-[20px]"
      />

      <Image
        src="/images/Polygon 10.png"
        width={200}
        height={200}
        alt="Polygon"
        className="absolute top-0 left-1/2 -translate-x-1/2"
      />

      <Image
        src="/images/Polygon 8.png"
        width={200}
        height={200}
        alt="Polygon"
        className="absolute left-[20%] -bottom-[140px] z-0"
      />

      <div className="container flex flex-col md:flex-row justify-between items-center   py-[50px] md:py-[80px] lg:py-[120px] px-4 z-10 gap-[30px]">
        <div className="w-full md:w-[40%]">
          <div className="">
            <Image
              src="/images/phone-call.png"
              width={204}
              height={251}
              alt="Polygon"
              className="object-cover"
            />
            <h6 className="uppercase text-[20px] lg:text-[36px] py-[23px] font-semibold text-white">
              Fast <span className="text-[#F6A221] ">Response!</span>
            </h6>
          </div>

          <div className="space-y-2.5">
            <div className="text-white flex gap-3.5 flex-wrap items-center">
              <div className="h-[48px] w-[48px]   rounded-full p-[10px] bg-white/18 flex items-center justify-center">
                <Image
                  src="/images/sms-icon.svg"
                  width={48}
                  height={48}
                  alt="sms"
                  className="p- "
                />
              </div>

              <a href="#" className="text-[18px] lg:text-[20px]  ">
                hellomrhosen@gmail.com
              </a>
            </div>
            <div className="text-white flex gap-3.5 flex-wrap items-center">
              <div className="h-[48px] w-[48px]   rounded-full p-[10px] bg-white/18 flex items-center justify-center">
                <Image
                  src="/images/messenger-icon.svg"
                  width={48}
                  height={48}
                  alt="sms"
                  className="p- "
                />
              </div>

              <a href="#" className="text-[18px] lg:text-[20px]  ">
                messenger.example.com
              </a>
            </div>
            <div className="text-white flex gap-3.5 flex-wrap items-center ">
              <div className="h-[48px] w-[48px]   rounded-full p-[10px] bg-white/18 flex items-center justify-center">
                <Image
                  src="/images/Telegram-icon.svg"
                  width={48}
                  height={48}
                  alt="sms"
                  className="p- "
                />
              </div>

              <a href="#" className="text-[18px] lg:text-[20px]  ">
                Telegram
              </a>
            </div>
          </div>

          <div className="pt-[35px]">
            <PrimaryButton
              label="Book a call"
              icon={CalendarDays}
              iconClassName="w-5 h-5 "
            />
          </div>
        </div>

        <div className="space-y-4 w-full md:w-[60%]">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl text-left transition bg-white overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex justify-between items-center px-4 lg:px-6 py-4 lg:py-6 rounded-t-xl 
  transition-colors duration-500 ease-in-out 
  ${openIndex === index ? "bg-secondary" : "bg-white"}`}
              >
                <span
                  className={`font-medium text-[16px] lg:text-[22px]  text-left  ${
                    openIndex === index ? "text-white" : "text-black"
                  }`}
                >
                  {item.question}
                </span>

                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-white transition-transform duration-300 " />
                ) : (
                  <Plus className="w-6 h-6 text-gray-400 transition-transform duration-300" />
                )}
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[#777777] px-4 lg:px-6 py-[15px] lg:pb-[26px] text-sm lg:text-[18px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
