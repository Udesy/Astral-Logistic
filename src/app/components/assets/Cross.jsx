"use client";

import { useState } from "react";

const Cross = ({
  size = 18,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  isOpen,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${className}`}
    >
      {/* Horizontal line */}
      <line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />

      {/* Vertical line with scale animation */}
      <line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{
          transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "center",
          transform: isOpen ? "scaleY(0)" : "scaleY(1)",
        }}
      />
    </svg>
  );
};

export default Cross;
