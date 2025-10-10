
"use client";
import React from "react";

const GradientStar = ({ filled = true, size = 22 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className="transition-all duration-300"
    style={{ opacity: filled ? 1 : 0.4 }}
  >
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F39022" />
        <stop offset="100%" stopColor="#F8A921" />
      </linearGradient>
    </defs>
    <path
      d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14 2 9.27l7.1-1.01L12 2z"
      fill="url(#grad)"
    />
  </svg>
);

export default GradientStar;
