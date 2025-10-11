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
    <div className="container">
      <div className="text-center">
        <h1 className="section-header">Insights & Updates</h1>
        <p className="section-description pt-[10px] lg:pt-[15px]">
          Stay updated with the latest in SaaS, FinTech, Blockchain, and Web
          Development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[14px] pt-[20px] lg:pt-[40px] pb-[60px] lg:pb-[120px]">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="px-[10px] lg:px-[15px] py-[15px] lg:py-[20px] bg-white border border-[#F4F4F4] rounded-[20px] shadow-[0_34px_34px_0_rgba(0,0,0,0.05)]"
          >
            <div className="w-full h-[280px] lg:h-[346px] relative rounded-[15px] overflow-hidden">
              <Image
                src={blog.image}
                fill
                alt={blog.title}
                className="object-cover"
              />
            </div>

            <h6 className="text-primary py-2 lg:py-4 text-[18px] lg:text-[24px] font-medium">
              {blog.title}
            </h6>

            <div className="border-t border-[#D4D4D4]"></div>

            <div className="flex justify-between gap-3 pt-[15px] lg:pt-[25px] items-center">
              <div>
                <p className="text-primary text-sm">By {blog.author}</p>
                <p className="text-[#8E8E8E] text-sm">{blog.date}</p>
              </div>

              <SecondaryButton text="Read More" icon={MoveRight} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
