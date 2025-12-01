import React from "react";
import { MoveRight } from "lucide-react";

const PrimaryButton = ({
  label = "Contact Now",
  onClick,
  icon: Icon ,
  className = "",
  iconClassName = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`primary-button !flex !justify-center !items-center ${className}`}
    >
      {label}
      {Icon && <Icon className={`w-5 h-5 ${iconClassName}`} />}
    </button>
  );
};

export default PrimaryButton;
