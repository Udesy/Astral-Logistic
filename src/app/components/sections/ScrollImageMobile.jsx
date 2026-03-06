import { service_page_content } from "@/constant";
import Image from "next/image";
import React from "react";
import CTAButton from "../ui/CTAButton";

const ScrollImageMobile = () => {
  return (
    <div className="flex-col gap-y-xl hidden max-md:flex section-padding-y">
      {service_page_content.map(({ id, src, alt, heading, text }) => (
        <div key={id} className="flex flex-col gap-y-lg w-full h-fit py-lg">
          <div className="relative w-full h-full aspect-3/4 rounded-lg overflow-hidden">
            <Image src={src} alt={alt} fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-y-lg w-full h-full">
            <h1 className="text-heading-2 text-navy-blue uppercase font-bold max-w-[15ch]">
              {heading}
            </h1>
            <p className="text-base-large leading-[115%]">{text}</p>
            <CTAButton variant="primary" target={"/contact"} className="block">
              Get a Quotation
            </CTAButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollImageMobile;
