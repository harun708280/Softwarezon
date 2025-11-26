'use client';

import { motion } from "framer-motion";

const AnimatedHeading = ({ text = "Build, Scale & Transform with SOFTWAREZON" }) => {
  const highlight = "SOFTWAREZON";

  // Parent variants for smooth stagger
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.02 } }, // smooth stagger
  };

  // Each letter animation
  const child = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.4 } },
  };

  return (
    <motion.h1
      className="text-[30px] sm:text-3xl md:text-4xl xl:text-[56px] font-bold leading-tight xl:leading-[75px]"
      variants={container}
      initial="hidden"
      animate="show"
    >
     {
        
      (
          <span key={wi} className="inline-block mr-2">
            {word.split('').map((char, i) => (
              <motion.span
                key={i}
                variants={child}
                className={`inline-block ${isHighlight ? 'bg-gradient-to-r from-[#FFBF78] to-[#D76B00] bg-clip-text text-transparent' : ''}`}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </span>
        )
   
    </motion.h1>
  );
};

export default AnimatedHeading;
