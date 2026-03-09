import clsx from "clsx";
import Link from "next/link";
import React from "react";

const HoverLink = ({ text, target = "", className, ariaLabel }) => {
  // If no target provided, render as a span (decorative element)
  if (!target) {
    return (
      <span className={clsx("relative overflow-clip w-fit group", className)}>
        <span
          className="absolute inline-block translate-y-[90%] group-hover:translate-y-0 duration-300 ease-in-out transition-all"
          aria-hidden="true"
        >
          {text}
        </span>
        <span className="inline-block group-hover:-translate-y-[90%] duration-300 ease-in-out transition-all">
          {text}
        </span>
      </span>
    );
  }

  return (
    <Link
      href={target}
      className={clsx("relative overflow-clip w-fit group", className)}
      aria-label={ariaLabel || text}
      {...(target.startsWith("http") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      <span
        className="absolute inline-block translate-y-[90%] group-hover:translate-y-0 duration-300 ease-in-out transition-all"
        aria-hidden="true"
      >
        {text}
      </span>
      <span className="inline-block group-hover:-translate-y-[90%] duration-300 ease-in-out transition-all">
        {text}
      </span>
    </Link>
  );
};

export default HoverLink;
