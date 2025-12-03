"use client";
import React, { useRef } from "react";

import { MoveLeft, MoveRight } from "lucide-react";
import GradientStar from "@/components/ui/GradientStar/GradientStar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const testimonials = [
  {
    name: "Ricardomoura",
    role: "Brazil, Member since February 2016",
    feedback:
      "Guys, it is my second review! Even if updating my platform, this guy is amazing. The code run smoothly without any bug! Congrats! You deserve to sell thousands copies of this platform!",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency ",
  },
  {
    name: "patriciawadam",
    role: "United States, Member since March 2016",
    feedback:
      "Excellent support, I was helped even after the support period expired. I recommend it to everyone. I will also buy other products from him to support him. Thank you Softwarezon!",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
  {
    name: "alibi29300alibi",
    role: "Algeria, Member since November 2022",
    feedback:
      "technical support is very good. He answered all my questions quickly and efficiently.",
    avatar: "/images/author-default.jpg",
    rating: 4,
    Product: "Ecommerce - Cryptocurrency Supported ",
  },
  {
    name: "nexttradefx",
    role: "South Africa, Member since June 2022",
    feedback:
      "Exceptional experience! The Softwarezon team truly understands our needs.",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency ",
  },
  
  {
    name: "viru2810",
    role: "India, Member since January 2018",
    feedback:
      "Good and very responsive support people are there.Thanks for supporting us..",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "News Paper - Dynamic News",
  },
  {
    name: "traderforex01554",
    role: "Egypt, Member since November 2024",
    feedback:
      "They provide good customer support and help everyone.",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
  {
    name: "assasin99",
    role: "Kenya, Member since January 2017",
    feedback:
      "Softwarezon has got amazing support. Bought the script and I was able to set it up live and get some features updated thanks to the quick response. Good work on the script. Its the best.Thanks so much.",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
  
  {
    name: "fcolucci",
    role: "Italy, Member since November 2018",
    feedback:
      "Customer support really fast! Thank you guys...I am trying this really nice website!! I will keep you updated once done!",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
  {
    name: "alibi29300alibi",
    role: "Algeria, Member since November 2022",
    feedback:
      "technical support is very good. He answered all my questions quickly and efficiently.",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Ecommerce - Cryptocurrency Supported",
  },
  {
    name: "fcolucci",
    role: "Italy, Member since November 2018",
    feedback:
      "Customer support really fast! Thank you guys...I am trying this really nice website!! I will keep you updated once done!",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
  {
    name: "muazmuneer",
    role: "Pakistan, Member since December 2020",
    feedback:
      "Recommended, very good support center will help you with everything, support bug reports. Very good with suggestion for improvements and bug fixes",
    avatar: "/images/author-default.jpg",
    rating: 5,
    Product: "Forex Trade Signal and Crypto Currency",
  },
];

const TestimonialSlick = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-[60px] xl:py-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-between items-center mb-6 md:mb-12"  data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100">
          <div>
            <h2 className="section-header">Success Stories That Inspire</h2>
            <p className="section-description pt-2 lg:pt-5">
              From startups to enterprises, here’s how Softwarezon makes an
              impact.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="gradient-btn !py-[8px] !px-[18px] !h-fit"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <MoveLeft />
            </button>
            <button
              className="gradient-btn !py-[8px] !px-[18px] !h-fit"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <MoveRight />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className=""  data-aos="fade-left" data-aos-delay={index * 100}>
              <div className="bg-white border border-gray-200/60 rounded-[10px] p-3 lg:p-6   transition-transform duration-300 hover:scale-[1.0] scale-[0.99] h-[270px] flex flex-col justify-between">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <GradientStar key={i} filled={i < item.rating} />
                  ))}
                  <span className="text-primary text-sm lg:text-[18px] pl-2">
                    ({item.rating}/5)
                  </span>
                </div>

                <p className="text-sm lg:text-[18px] text-[#666666] leading-relaxed pt-5 pb-5 lg:pb-10 line-clamp-0">
                  “{item.feedback}”
                </p>

                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[35px] h-[35px] md:w-[46px] md:h-[46px] rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-primary font-semibold text-[18px]">
                        {item.name}
                      </h3>
                      <span className="block text-[#626262] text-sm">
                        {item.role}
                      </span>
                      <p className="text-sm text-primary">
                        Product: {item.Product}
                      </p>
                    </div>
                  </div>
                  {/* <button className="text-[#666666] text-[14px] py-[10px] px-[16px] border rounded-full gradient-btn-2 cursor-pointer">
                    Customer Support
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlick;
