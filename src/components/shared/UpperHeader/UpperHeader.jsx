
"use client";
import { ArrowRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const UpperHeader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenUpperHeader");
    if (!hasSeen) {
      setVisible(true);
      sessionStorage.setItem("hasSeenUpperHeader", "true");
    }

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bg-orange py-2 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between gap-[20px] flex-wrap text-black">
          <p className="hidden 2xl:block"></p>

          <div className="flex text-[14px] font-medium gap-3 justify-center">
            <p>FOR ANY inquiry - +8801741773194</p>

            <a
              href="tel:+8801741773194"
              className="flex gap-1 border-b pb-[2px] items-center cursor-pointer text-black transition-colors"
            >
              Call Now <ArrowRight height={18} width={18} />
            </a>
          </div>

          <button
            onClick={() => setVisible(false)}
            className="h-7 w-7 rounded-full bg-[#ffffff32] flex items-center justify-center cursor-pointer hover:bg-[#ffffff33] transition"
          >
            <X width={16} height={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
