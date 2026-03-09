import Link from "next/link";
import React from "react";
import Arrow from "../assets/Arrow";
import Image from "next/image";
import ImageReveal from "./ImageReveal";

const HeroPreviewCard = () => {
  return (
    <Link
      href={"/"}
      className="w-full h-full flex flex-row bg-white/20 backdrop-blur-sm p-2xs gap-3xs group"
    >
      <div className="text-white flex flex-col justify-between items-start w-full h-full text-base">
        <p className="font-medium">Solutions for Every Transport Requirement</p>
        <span className="inline-flex justify-center items-center gap-1.5">
          <span className="text-base-small">Learn More</span>
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
          <ImageReveal scrollTrigger={false}>
            <Image
              src={"/resources/images/heropreview1.jpeg"}
              alt="Freight truck on highway showcasing road transport"
              fill
              sizes="128px"
              quality={75}
              className="object-cover"
            />
          </ImageReveal>
        </div>
        <div className="relative h-full w-16 aspect-2/3 rounded-md overflow-clip block max-xl:hidden">
          <ImageReveal scrollTrigger={false}>
            <Image
              src={"/resources/images/heropreview2.jpeg"}
              alt="Cargo container ship representing sea freight"
              fill
              sizes="64px"
              quality={75}
              className="object-cover"
            />
          </ImageReveal>
        </div>
      </div>
    </Link>
  );
};

export default HeroPreviewCard;
