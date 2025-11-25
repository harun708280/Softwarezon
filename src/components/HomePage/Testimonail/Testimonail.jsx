"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import { MoveLeft, MoveRight } from "lucide-react";
import GradientStar from "@/components/ui/GradientStar/GradientStar";

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company A",
    feedback:
      "The product is amazing, and the support is outstanding. This is the best product I’ve ever used.",
    avatar: "/images/avator.png",
    rating: 5,
    Product: "Shop Management System",
  },
  {
    name: "Jane Smith",
    role: "Founder, Startup B",
    feedback:
      "Exceptional experience! The Softwarezon team truly understands our needs.",
    avatar: "/images/avator.png",
    rating: 5,
    Product: "Inventory Tracker",
  },
  {
    name: "Alex Johnson",
    role: "CTO, Company C",
    feedback:
      "Very intuitive platform. It helped streamline our processes and improve efficiency.",
    avatar: "/images/avator.png",
    rating: 4,
    Product: "POS Management",
  },
  {
    name: "Emily Brown",
    role: "Operations Head, Company D",
    feedback:
      "Customer support is top-notch, and the product delivers as promised.",
    avatar: "/images/avator.png",
    rating: 5,
    Product: "CRM Suite",
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
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, dots: false },
      },
      {
      breakpoint: 768, 
      settings: { slidesToShow: 1, dots: false },
    },
    ],
  };

  return (
    <div className="py-[60px] xl:py-[100px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-between items-center mb-12">
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
            <div key={index} className="">
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
                  <button className="text-[#666666] text-[14px] py-[10px] px-[16px] border rounded-full gradient-btn-2 cursor-pointer">
                    Customer Support
                  </button>
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
