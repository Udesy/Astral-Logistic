import clsx from "clsx";
import Link from "next/link";
import React from "react";

const HoverLink = ({ text, target = "", className }) => {
  return (
    <Link
      href={target}
      className={clsx("relative overflow-clip w-fit group", className)}
    >
      <span className="absolute inline-block translate-y-[80%] group-hover:translate-y-0 duration-300 ease-in-out transition-all">
        {text}
      </span>
      <span className="inline-block group-hover:-translate-y-[80%] duration-300 ease-in-out transition-all">
        {text}
      </span>
    </Link>
  );
};

export default HoverLink;
