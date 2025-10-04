import React from "react";
import { MoveRight } from "lucide-react";

const PrimaryButton = ({
  label = "Contact Now",
  onClick,
  icon: Icon = MoveRight,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`primary-button ${className}`}
    >
      {label}
      {Icon && <Icon className=" " />}
    </button>
  );
};

export default PrimaryButton;
