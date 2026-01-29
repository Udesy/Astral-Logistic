import Link from "next/link";
import React from "react";
import Arrow from "../assets/Arrow";
import Cross from "../assets/Cross";

const CTAButton = ({
  target,
  className = "",
  children,
  variant = "primary",
  onClick,
  isOpen,
}) => {
  const baseStyle =
    "cursor-pointer py-2xs px-xs w-fit rounded-sm text-base group";
  const variants = {
    primary: "bg-golden-yellow",
    secondary: "bg-pale-blue border-1 border-navy-blue/50",
  };

  if (target) {
    return (
      <Link
        href={target}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        <div className="flex text-nowrap items-center justify-between gap-2 font-medium text-black">
          {children}
          <span className="overflow-clip inline-flex w-fit relative ">
            <Arrow className="absolute -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out transition-all" />
            <Arrow className="group-hover:translate-x-6 duration-300 ease-in-out transition-all" />
          </span>
        </div>
      </Link>
    );
  }
  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <div className="flex text-nowrap items-center justify-between gap-3xs font-medium text-black">
        {children}
        <span>
          <Cross isOpen={isOpen} />
        </span>
      </div>
    </button>
  );
};

export default CTAButton;
