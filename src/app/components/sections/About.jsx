import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import { about_constant } from "@/constant";
import TextAnimation from "../ui/TextAnimation";
import ImageReveal from "../ui/ImageReveal";

const About = () => {
  return (
    <section className="section-padding-x section-padding-y flex flex-col gap-3xl">
      <div className="flex flex-col gap-3xl">
        <div className="flex flex-col gap-sm">
          <span className="text-navy-blue text-base-large">[ About Us ]</span>
          <TextAnimation as="h2" className="text-heading-1">
            We help businesses move goods across borders by planning each
            shipment so it arrives when expected, safely.
          </TextAnimation>
        </div>
        <div className="w-full flex items-center md:justify-end justify-start">
          <CTAButton target="/about" variant="primary" className="block">
            Learn More About Us
          </CTAButton>
        </div>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2 md:gap-md flex flex-col">
        <div className="order-2 md:order-1">
          {about_constant.map(({ id, sign, heading, sub_heading }) => (
            <div
              key={id}
              className="border-b border-b-navy-blue/40 flex flex-col gap-2xs py-lg"
            >
              <div className="flex flex-row h-10 items-center">
                <h3 className="flex items-center text-heading-4 gap-2xs">
                  <span className="size-lg text-navy-blue">{sign}</span>
                  {heading}
                </h3>
              </div>
              <p className="max-md:max-w-[30ch] text-[clamp(0.94rem,calc(0.910rem+0.100vw),1.00rem)]">
                {sub_heading}
              </p>
            </div>
          ))}
        </div>
        <ImageReveal
          className="relative w-full rounded-lg overflow-clip h-120 sm:h-120 md:h-auto md:min-h-120 order-1 md:order-2"
          parallax={true}
        >
          <Image
            src={"/resources/images/aboutsection.jpg"}
            alt="Cargo ship docked at a busy port terminal"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
            className="object-cover scale-110"
          />
        </ImageReveal>
      </div>
    </section>
  );
};

export default About;
