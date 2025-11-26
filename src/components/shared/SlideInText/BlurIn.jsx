"use client";

import { motion } from "framer-motion";

const BlurIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 23 }}
      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default BlurIn;
