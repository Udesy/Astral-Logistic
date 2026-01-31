import React from "react";
import Arrow from "../assets/Arrow";

const NavigationButton = ({ direction }) => {
  return (
    <div className="size-10 hover:bg-navy-blue/10 transition-color duration-150 ease-in-out border border-stroke-navy-blue flex items-center justify-center cursor-pointer">
      <Arrow direction={direction} />
    </div>
  );
};

export default NavigationButton;
