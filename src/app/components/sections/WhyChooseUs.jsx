import React from "react";
import CTAButton from "../ui/CTAButton";
import Image from "next/image";
import { why_choose_us } from "@/constant";

const WhyChooseUs = () => {
  return (
    <section className="section-padding-x section-padding-y flex flex-col gap-3xl">
      <div className="flex flex-col gap-3xl">
        <div className="md:grid md:grid-cols-12 md:gap-fluid flex flex-col gap-sm">
          <span className="text-navy-blue text-base-large col-span-3">
            [ Why Choose Us ]
          </span>
          <h2 className="text-heading-1 col-span-9">
            We help businesses move goods across borders by planning each
            shipment so it arrives when expected, safely.
          </h2>
        </div>
        <div className="w-full flex items-center md:justify-end justify-start">
          <CTAButton target="/about" variant="primary" className="block">
            Talk to Our Team
          </CTAButton>
        </div>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2 md:gap-md flex flex-col">
        <div className="order-2 md:order-1">
          {why_choose_us.map(({ id, sign, heading, sub_heading }) => (
            <div
              key={id}
              className="border-b border-b-stroke-navy-blue flex flex-col gap-2xs py-lg"
            >
              <div className="flex flex-row h-10 items-center">
                <h3 className="flex items-center text-heading-4 gap-xs">
                  <span className="size-lg text-navy-blue">{sign}</span>
                  {heading}
                </h3>
              </div>
              <p className="max-md:max-w-[30ch]">{sub_heading}</p>
            </div>
          ))}
        </div>
        <div className="relative w-full rounded-lg overflow-clip min-h-120 order-1 md:order-2">
          <Image
            src={"/resources/images/whychooseussection.png"}
            alt="ship dock image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
