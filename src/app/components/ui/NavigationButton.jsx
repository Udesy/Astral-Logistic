import React from "react";
import Arrow from "../assets/Arrow";

const NavigationButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`size-10 transition-color duration-150 ease-in-out border border-stroke-navy-blue flex items-center justify-center
      ${
        disabled
          ? "opacity-30 cursor-not-allowed bg-gray-100"
          : "hover:bg-navy-blue/10 cursor-pointer"
      }`}
    >
      <Arrow direction={direction} />
    </button>
  );
};

export default NavigationButton;
