import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import { about_constant } from "@/constant";

const About = () => {
  return (
    <section className="section-padding-x section-padding-y flex flex-col gap-3xl">
      <div className="flex flex-col gap-3xl">
        <div className="flex flex-col gap-sm">
          <span className="text-navy-blue text-base-large">[ About us ]</span>
          <h2 className="text-heading-1">
            We help businesses move goods across borders by planning each
            shipment so it arrives when expected, safely.
          </h2>
        </div>
        <div className="w-full flex items-center md:justify-end justify-start">
          <CTAButton target="/about" variant="primary" className="block">
            Learn More About Us
          </CTAButton>
        </div>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2 md:gap-md flex flex-col ">
        <div className="order-2 md:order-1">
          {about_constant.map(({ id, sign, heading, sub_heading }) => (
            <div
              key={id}
              className="border-b-2 border-b-navy-blue/40 flex flex-col gap-2xs py-lg"
            >
              <div className="flex flex-row h-10 items-center">
                <h3 className="flex items-center text-heading-4 gap-2xs">
                  <span className="size-lg text-navy-blue">{sign}</span>
                  {heading}
                </h3>
              </div>
              <p className="max-w-[30ch]">{sub_heading}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full rounded-lg overflow-clip min-h-145 order-1 md:order-2">
          <Image
            src={"/resources/images/aboutsection.jpg"}
            alt="ship dock image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
