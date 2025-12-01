"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const CustomSlider = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;

    if (touchStartX.current - touchEndX.current > 50) {
   
      setCurrent((prev) => (prev + 1) % images.length);
    }
    if (touchEndX.current - touchStartX.current > 50) {
     
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  if (images.length === 0) {
    return (
      <div className="w-full h-[440px] bg-gray-200 flex items-center justify-center rounded-lg">
        <p>No images found</p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-[250px] md:h-[350px] lg:h-[440px] overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((img, index) => {
          const imgUrl = typeof img === "string" ? img : img.url;
          return (
            <div key={index} className="relative w-full flex-shrink-0 h-[250px] md:h-[350px] lg:h-[440px]">
              <Image
                src={imgUrl}
                alt={`slide-${index}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              current === index ? "bg-orange-500 " : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomSlider;
