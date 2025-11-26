import ScrollBlurUp from "@/components/shared/SlideInText/ScrollBlurUp";
import Image from "next/image";
import React from "react";

const HowWork = () => {
  const steps = [
    {
      id: 1,
      title: "Research",
      image: "/images/research.png",
      description:
        "Extensive and in-depth research ensures that you get only the best output everytime.",
    },
    {
      id: 2,
      title: "Design",
      image: "/images/design-tools.png",
      description:
        "No matter how complex your website is, the design must be simple and intuitive.",
    },
    {
      id: 3,
      title: "Development",
      image: "/images/software-development.png",
      description:
        "At Softwarezon, we develop clean, clutter-free, and scalable products for our clients.",
    },
  ];

  return (
    <section className="bg-[#9A9A9A12] !mb-[40px] md:!mb-[60px] lg:!mb-[120px] py-[40px] md:py-[45px] lg:py-[90px]">
      <ScrollBlurUp>
        <div className="container">
          <h2 className="section-header text-center">How We Work</h2>

          <div className="pt-[35px] lg:pt-[55px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] lg:gap-[73px] place-items-center">
            {steps.map((item, index) => (
              <div
                key={item.id}
                className={`space-y-[25px] text-center flex flex-col justify-center items-center 
                ${
                  index === 2
                    ? "md:col-span-2 md:w-[50%] md:mx-auto lg:col-span-1 lg:w-full"
                    : ""
                }`}
              >
                <div
                  className={`relative bg-white rounded-full
                  ${
                    item.id === 3
                      ? "w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] lg:w-[154px] lg:h-[154px]"
                      : "w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[154px] lg:h-[154px]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2 md:p-3"
                  />
                </div>

                <div className="space-y-[5px] md:space-y-[10px]">
                  <h5 className="text-[20px] md:text-[25px] lg:text-[30px] font-semibold">
                    {item.title}
                  </h5>
                  <p className="text-[#626262] text-[16px] md:text-[18px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollBlurUp>
    </section>
  );
};

export default HowWork;
