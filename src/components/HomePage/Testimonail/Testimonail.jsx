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
      "The product is amazing, and the support is outstanding. This is the best product I’ve ever used. Highly recommended!",
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


const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full"
  >
    <MoveRight size={20} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-primary to-secondary text-white p-2 rounded-full z-10"
  >
    <MoveLeft size={20} />
  </button>
);

const TestimonialSlick = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, dots: false },
      },
    ],
  };

  return (
    <div className="py-[100px]">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap justify-between items-center mb-12">
          <div>
            <h1 className="section-header">Success Stories That Inspire</h1>
            <p className="section-description pt-4 lg:pt-5">
              From startups to enterprises, here’s how Softwarezon makes an impact.
            </p>
          </div>

         
          <div className="flex gap-4">
            <button
              className="gradient-btn"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <MoveLeft />
            </button>
            <button
              className="gradient-btn"
              onClick={() => sliderRef.current?.slickNext()}
            >
              <MoveRight />
            </button>
          </div>
        </div>

      
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="">
              <div className="bg-white rounded-[10px] p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] min-h-[259px]">
                
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <GradientStar key={i} filled={i < item.rating} />
                  ))}
                  <span className="text-primary text-[18px] pl-2">
                    ({item.rating}/5)
                  </span>
                </div>

               
                <p className="text-lg text-[#666666] leading-relaxed pt-5 pb-10">
                  “{item.feedback}”
                </p>

                
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-[46px] h-[46px] rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-primary font-semibold">{item.name}</h3>
                      <span className="block text-[#626262] text-sm">{item.role}</span>
                      <p className="text-sm text-primary">
                        Product: {item.Product}
                      </p>
                    </div>
                  </div>
                  <button className="text-[#666666] text-[14px] py-[10px] px-[16px] border rounded-full border-secondary cursor-pointer">
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
