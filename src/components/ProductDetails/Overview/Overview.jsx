"use client";

import React, { useState } from "react";
import OverviewDetails from "./OverviewDetails";
import Reviews from "./Reviews";
import Support from "./Support";
import Sidebar from "./Sidebar";

const Overview = ({product}) => {
  const [activeTab, setActiveTab] = useState("overview");
  

  const tabs = [
    { id: "overview", label: "Overview" },
    
  ];

  return (
    <section className="!py-[40px] lg:!py-[70px] container mx-auto">
      <div className="flex gap-4 items-center">
        <div className="flex gap-4 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={` !transition-all !duration-300 h-fit ${
                activeTab === tab.id
                  ? "primary-button !py-2 !px-4"
                  : "gradient-btn-2 !rounded-full flex items-center  cursor-pointer !py-2 !px-4"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="border-b-1 mb-3 w-full border-[#FCDED0]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[30px]">
        <div className="lg:col-span-2   relative">
          <div
            className={`transition-opacity duration-300 ${
              activeTab === "overview"
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0 w-full"
            }`}
          >
            <OverviewDetails product={product}/>
          </div>

          <div
            className={` ${
              activeTab === "reviews"
                ? ""
                : "opacity-0 absolute top-0 left-0 w-full"
            }`}
          >
            <Reviews />
          </div>

          <div
            className={`transition-opacity duration-300 ${
              activeTab === "support"
                ? "opacity-100"
                : "opacity-0 absolute top-0 left-0 w-full"
            }`}
          >
            <Support />
          </div>
        </div>

        <div className="lg:col-span-1   h-fit sticky top-[100px]">
          <Sidebar product={product}/>
        </div>
      </div>
    </section>
  );
};

export default Overview;
