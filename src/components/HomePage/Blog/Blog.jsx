"use client";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blog = () => {
  const blogData = [
    {
      id: 1,
      image: "/images/blog.png",
      title: "How SaaS Platforms Transform Businesses in 2025",
      author: "Hasanur Rahman",
      date: "Sept 15, 2025",
    },
    {
      id: 2,
      image: "/images/blog.png",
      title: "The Future of FinTech: Secure Payments & Blockchain",
      author: "Hasanur Rahman",
      date: "Sept 15, 2025",
    },
    {
      id: 3,
      image: "/images/blog.png",
      title: "Top 5 CRM Features Every Business Needs",
      author: "Hasanur Rahman",
      date: "Sept 15, 2025",
    },
  ];

  return (
    <section className=" py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="container">
        
        <div className="md:text-center max-w-[750px] mx-auto">
          <h2 className="section-header">Insights & Updates</h2>
          <p className="section-description pt-[10px] lg:pt-[15px]">
            Stay updated with the latest in SaaS, FinTech, Blockchain, and Web
            Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] lg:gap-[30px] pt-[30px] lg:pt-[60px]">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white border border-[#F4F4F4] rounded-[20px] shadow-[0_20px_30px_rgba(0,0,0,0.05)] 
              hover:shadow-[0_30px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out"
            >
            
              <div className="w-full h-[260px] md:h-[300px] relative rounded-t-[20px] overflow-hidden">
                <Image
                  src={blog.image}
                  fill
                  alt={blog.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              
              <div className="px-[20px] lg:px-[25px] py-[20px] lg:py-[25px]">
                <h6 className="text-primary py-2 lg:py-3 text-[18px] lg:text-[22px] font-semibold leading-snug">
                  {blog.title}
                </h6>

                <div className="border-t border-[#E5E5E5] my-3 lg:my-4"></div>

                <div className="flex justify-between gap-3 items-center">
                  <div>
                    <p className="text-primary text-[14px] font-medium">
                      By {blog.author}
                    </p>
                    <p className="text-[#8E8E8E] text-[14px]">{blog.date}</p>
                  </div>

                  <SecondaryButton
                    text="Read More"
                    icon={MoveRight}
                    className="!text-[14px] !py-2 !px-3"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
