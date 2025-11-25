"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Facebook, Twitter, Linkedin } from "lucide-react";

// Countdown Component
function Countdown() {
  const STORAGE_KEY = "countdownStart";

  const getTargetDate = () => {
    // Check localStorage for start date
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return new Date(stored);

    const startDate = new Date();
    localStorage.setItem(STORAGE_KEY, startDate.toISOString());
    return startDate;
  };

  const calculateTimeLeft = () => {
    const startDate = getTargetDate();
    const targetDate = new Date(startDate);
    targetDate.setDate(targetDate.getDate() + 27); // 27-day countdown
    const diff = +targetDate - +new Date();

    if (diff > 0) {
      return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-6 md:gap-8 mt-6">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-4xl font-bold lg:text-5xl">{String(value).padStart(2, "0")}</span>
          <span className="text-sm uppercase opacity-80">{label}</span>
        </div>
      ))}
    </div>
  );
}


export default function ComingSoon() {
  const navLinks = ["About", "Contact", "Feedback", "Help"];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="grid lg:grid-cols-2 max-w-5xl w-full bg-gray-100 border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        
        <div
          className="relative flex flex-1 flex-col justify-between p-8 lg:p-12 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/building.png')" }}
        >
          {/* Logo */}
         

          
        </div>

        {/* Right Section */}
        <div className="relative flex flex-1 flex-col justify-center p-8 lg:p-12 text-center">
          {/* Share Icon */}
          <div className="flex w-full justify-end">
            <Share2 className="h-6 w-6 cursor-pointer opacity-80 hover:opacity-100" />
          </div>

          {/* Countdown */}
          <Countdown />

          {/* Main Content */}
          <div className="space-y-6 mt-6">
            <h1 className="text-4xl font-bold lg:text-5xl">Under Redesign</h1>
            <p className="text-gray-700 lg:text-lg">
              This section of the website is under redesign. Stay tuned for updates!
            </p>

            <Link
              href="/"
              className="inline-block mt-4 rounded-full bg-gray-800 px-6 py-3 font-semibold text-white hover:bg-gray-700"
            >
              Go to Home Page
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex w-full justify-center gap-6 mt-12">
            {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
              <Link key={idx} href="#" aria-label={Icon.name}>
                <Icon className="h-6 w-6 text-gray-700 opacity-80 hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
