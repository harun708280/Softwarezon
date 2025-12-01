"use client";

import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const progress = document.querySelector(".page-load-progress");
    let width = 0;

    const demoLoad = setInterval(() => {
      if (width < 90) {
        width += Math.random() * 10;
        progress.style.width = width + "%";
      }
    }, 300);

    const handleLoad = () => {
      clearInterval(demoLoad);
      progress.style.width = "100%";
      setTimeout(() => {
        document.body.classList.add("page-load-loaded");
      }, 500);
    };

    window.addEventListener("load", handleLoad);

 
    return () => {
      clearInterval(demoLoad);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="page-load-preloader">
      <div className="page-load-signal-area">
        <div className="page-load-orbit">
          <span className="page-load-particle"></span>
          <span className="page-load-particle"></span>
          <span className="page-load-particle"></span>
        </div>
        <div className="page-load-logo">
          <div className="page-load-circle"></div>
          <h2>
            <span>SOFTWAREZON</span>
          </h2>
        </div>
      </div>
      <div className="page-load-progress-bar">
        <div className="page-load-progress"></div>
      </div>
    </div>
  );
};

export default Loader;
