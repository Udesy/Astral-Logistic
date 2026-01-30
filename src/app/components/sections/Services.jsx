"use client";

import { company_service } from "@/constant";
import Image from "next/image";
import React, { useState } from "react";
import CustomCursor from "../ui/CustomCursor";
import clsx from "clsx";
import Link from "next/link";

const Services = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const [hoveredIndex, setHoverIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
    setCursorActive(true);
  };

  const handleMouseLeave = (index) => {
    setHoverIndex(null);
    setCursorActive(false);
  };
  return (
    <section className="section-padding-x section-padding-y">
      <div className="w-full h-full flex flex-col gap-3xl">
        <div className="lg:grid flex flex-col grid-cols-12 gap-fluid">
          <h2 className="text-heading-1 col-span-10 order-2 lg:order-1">
            Our network covers air, sea, road, and express services to keep
            shipments moving without delays.
          </h2>
          <span className="text-navy-blue text-base-large col-span-2 h-full flex flex-col lg:items-end items-start justify-end order-1 lg:order-2">
            [ Our Services ]
          </span>
        </div>
        <div className="w-full min-h-screen lg:flex lg:flex-row md:grid md:grid-cols-2 flex flex-col lg:gap-3 gap-sm">
          {company_service.map(({ id, src, text }, index) => {
            const isHovered = hoveredIndex === index;
            const isOtherHovered =
              hoveredIndex !== null && hoveredIndex !== index;
            return (
              // <Link
              //   href={"/service"}
              //   key={index}
              //   className="relative w-full h-134 rounded-md overflow-clip cursor-pointer duration-700 transition-all"
              //   onMouseEnter={() => handleMouseEnter(index)}
              //   onMouseLeave={() => handleMouseLeave(index)}
              //   style={{
              //     flex: isHovered ? 3 : isOtherHovered ? 0.5 : 1,
              //   }}
              // >
              <Link
                href={"/service"}
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className="relative w-full md:h-134 h-110 rounded-md overflow-hidden cursor-pointer duration-700 transition-all lg:[flex:var(--flex-ratio)]"
                style={{
                  "--flex-ratio": isHovered
                    ? "3 1 0%"
                    : isOtherHovered
                      ? "0.5 1 0%"
                      : "1 1 0%",
                }}
              >
                <Image
                  src={src}
                  alt="Images of Services get offered by Our Company"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 p-xs text-white flex flex-col justify-between z-20">
                  <span className="text-base-large">(0{id})</span>
                  <p
                    className={clsx(
                      "max-w-[25ch] text-base-large leading-[110%] duration-500 transition-all",
                      isOtherHovered && "lg:opacity-0",
                      isHovered ? "lg:text-2xl" : "lg:text-[20px]",
                    )}
                  >
                    {text}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/20 z-10"></div>
              </Link>
            );
          })}
        </div>
      </div>
      <CustomCursor isInside={cursorActive}>Learn More</CustomCursor>
    </section>
  );
};

export default Services;
