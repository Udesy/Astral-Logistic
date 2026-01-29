import Image from "next/image";
import React from "react";
import CTAButton from "../ui/CTAButton";
import HeroPreviewCard from "../ui/HeroPreviewCard";

const Hero = () => {
  return (
    <section className="relative h-svh section-padding">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[linear-gradient(180deg,rgba(255,_255,_255,_0.0)_0%,rgba(0,_0,_0,_0.5)_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-20 bg-black object-cover">
        <Image
          src={"/resources/images/hero.jpg"}
          alt="Automated cargo containers moving through a modern shipping terminal."
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-between">
        <div className="w-full flex items-center justify-center mt-heading">
          <h1 className="text-heading-display font-medium text-white text-center max-w-[15ch]">
            Fast and Sustainable Logistic Solution
          </h1>
        </div>
        <div className="flex lg:grid grid-cols-12 gap-x-fluid items-end">
          <div className="col-span-5 flex flex-col gap-sm">
            <p className="text-white text-base-large max-w-[40ch] h-fit">
              Logistics shouldn’t be complicated. We plan each shipment, track
              it closely, and make sure it reaches its destination on time.
            </p>
            <div className="flex md:flex-row flex-col gap-md">
              <CTAButton target={"/contact"} variant="primary">
                Get a Quotation
              </CTAButton>
              <CTAButton target={"/service"} variant="secondary">
                View Our Services
              </CTAButton>
            </div>
          </div>
          <div className="col-start-9 col-end-13 h-full w-full hidden lg:block">
            <HeroPreviewCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
