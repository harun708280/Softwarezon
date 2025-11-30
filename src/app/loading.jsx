"use client";

import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) return 100;
        return old + 1; 
      });
    }, 20);

    const timeout = setTimeout(() => setLoaded(true), 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (loaded && progress >= 100) {
      if (onFinish) onFinish();
    }
  }, [loaded, progress, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-white/70 backdrop-blur-md transition-opacity duration-700 ${
        loaded && progress >= 100 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
     
      <div className="flex flex-col items-center justify-start pt-20 gap-5 w-full">
        <div className="text-2xl font-semibold">Loading Your Website...</div>

        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-600 transition-all duration-200"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-sm text-gray-500">{progress}%</div>
      </div>
    </div>
  );
}
