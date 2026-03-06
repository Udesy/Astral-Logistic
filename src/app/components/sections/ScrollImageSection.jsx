"use client";

import { service_page_content } from "@/constant";
import clsx from "clsx";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import CTAButton from "../ui/CTAButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollImageSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      (service_page_content.forEach((service, index) => {
        ScrollTrigger.create({
          trigger: `.content-section-${index}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      }),
        sectionRef);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div
      ref={sectionRef}
      className="mt-2xl md:grid hidden md:grid-cols-2 gap-lg w-full"
    >
      <div className="py-xl flex-1">
        {service_page_content.map(({ heading, text, id }, index) => (
          <div
            key={id}
            className={`content-section-${index} min-h-screen flex items-center`}
          >
            <div className="flex flex-col gap-y-lg justify-center w-full h-full">
              <h1 className="text-heading-2 text-navy-blue uppercase font-bold max-w-[15ch]">
                {heading}
              </h1>
              <p className="text-base leading-5">{text}</p>
              <CTAButton target="/contact" variant="primary" className="block">
                Get a Quotation
              </CTAButton>
            </div>
          </div>
        ))}
      </div>
      <div className="md:sticky top-0 h-screen items-center w-full flex-1 py-sm">
        <div className="flex flex-col h-full w-full py-8">
          <div className="relative w-full h-full flex flex-col rounded-lg overflow-hidden">
            {service_page_content.map(({ id, src, alt }, index) => (
              <div
                key={id}
                className={clsx(
                  "absolute inset-0 transition-opacity duration-500",
                  activeIndex === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollImageSection;
