import Link from "next/link";
import React from "react";
import Arrow from "../assets/Arrow";
import Image from "next/image";

const HeroPreviewCard = () => {
  return (
    <Link
      href={"/"}
      className="w-full h-full flex flex-row bg-white/20 backdrop-blur-sm p-2xs gap-3xs group"
    >
      <div className="text-white flex flex-col justify-between items-start w-full h-full text-base">
        <h4>Solutions for Every Transport Requirement</h4>
        <span className="inline-flex justify-center items-center gap-1.5">
          <h5 className="text-base-small">Learn More</h5>
          <span className="relative inline-flex w-fit overflow-clip">
            <Arrow
              size={16}
              className="transition-all absolute -translate-x-6 group-hover:translate-x-0 duration-300 ease-in-out"
            />
            <Arrow
              size={16}
              className="transition-all group-hover:translate-x-6 duration-300 ease-in-out"
            />
          </span>
        </span>
      </div>
      <div className="flex flex-row gap-3xs">
        <div className="relative h-auto aspect-square w-32 rounded-md overflow-clip">
          <Image
            src={"/resources/images/heropreview1.jpeg"}
            alt="Transport preview 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-16 aspect-2/3 rounded-md overflow-clip block max-xl:hidden">
          <Image
            src={"/resources/images/heropreview2.jpeg"}
            alt="Transport preview 2"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
};

export default HeroPreviewCard;
