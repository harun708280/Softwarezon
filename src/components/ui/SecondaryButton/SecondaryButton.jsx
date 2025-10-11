import Image from "next/image";
import React from "react";

const SecondaryButton = ({ text, icon: Icon, imgSrc, alt }) => {
  return (
    <button className="gradient-btn-2 !rounded-full flex items-center gap-2 cursor-pointer">
      {text}


      {Icon && <Icon  size={20} />}

      
      {imgSrc && (
        <Image
          src={imgSrc}
          alt={alt || "icon"}
          width={16}
          height={24}
        />
      )}
    </button>
  );
};

export default SecondaryButton;
