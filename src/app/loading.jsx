"use client";

import Loader from "@/components/shared/Loader/Loader";
import { useEffect, useState } from "react";

export default function Loaders({ onFinish }) {
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
    <div>
      <Loader/>
    </div>
  );
}
