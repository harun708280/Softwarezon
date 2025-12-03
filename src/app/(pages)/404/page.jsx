"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

function Countdown() {
  const [targetDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() + 27);
    return date;
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 27,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-6 md:gap-8 mt-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-4xl font-bold lg:text-5xl">
            {String(value).padStart(2, "0")}
          </span>
          <span className="text-sm uppercase opacity-80">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default function ComingSoon() {
  return (
    // <div className="bg-black relative overflow-hidden  ">
    //   <div className="hero-shape"></div>
    //   <div className="bg-orange-glow  flex flex-col justify-center pt-[100px] pb-[40px] lg:pt-[140px] lg:pb-[80px]"></div>
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="grid lg:grid-cols-2 max-w-5xl w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        {/* LEFT SIDE (Image + gradient overlay) */}
        <div
          className="relative flex flex-1 flex-col justify-between p-8 lg:p-12 bg-cover bg-center min-h-[300px]"
          style={{ backgroundImage: "url('/images/building.png')" }}
        >
          
        </div>

        {/* RIGHT SIDE (Gradient panel) */}
        <div className=" bg-black relative overflow-hidden  flex flex-1 flex-col justify-center text-center text-white">
          <div className="hero-shape"></div>

          <div className="bg-orange-glow  p-8 lg:p-12 z-20">
            <div className="flex w-full justify-end">
              <Share2 className="h-6 w-6 cursor-pointer opacity-90 hover:opacity-100" />
            </div>

            <Countdown />

            <div className="space-y-4 mt-6">
              <h1 className="text-4xl font-bold lg:text-5xl">
                We’re Upgrading
              </h1>
              <p className="text-white/90 lg:text-lg">
                A fresh experience is on the way. Please check back soon!
              </p>

              <Link href="/" className="primary-button z-50">
                Go to Home Page
              </Link>
            </div>

            <div className="flex w-full justify-center gap-6 mt-12">
              {[
                { icon: Facebook, url: "https://www.facebook.com/softwarezon" },
                {
                  icon: Linkedin,
                  url: "https://www.linkedin.com/company/softwarezon",
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.url}
                  target="_blank"
                  aria-label={item.icon.name}
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <item.icon className="h-6 w-6 text-white opacity-90 hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
