"use client";

import { company_process } from "@/constant";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import CheckBox from "../assets/CheckBox";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const DeliveryProcessTimeline = () => {
  const timelineRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the line opacity and growth
      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        },
      );

      // Animate checkmarks
      const checkmarks = gsap.utils.toArray(".checkpoint");
      checkmarks.forEach((checkpoint) => {
        gsap.fromTo(
          checkpoint,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: checkpoint,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      });

      // Animate cards
      const cards = gsap.utils.toArray(".process-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
            },
          },
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto section-padding-x">
        {/* Header */}
        <div className="w-full h-full flex justify-center mb-3xl">
          <h1 className="uppercase text-heading-2 font-bold text-center text-navy-blue max-w-[20ch]">
            How Our Delivery Process Works
          </h1>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical Line */}
          <div className="absolute md:left-1/2 max-md:left-0 top-0 bottom-0 w-0.75 bg-navy-blue/20 -translate-x-1/2"></div>

          {/* Animated Line */}
          <div className="absolute md:left-1/2 max-md:left-0 top-0 bottom-0 w-0.75 -translate-x-1/2 overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-navy-blue origin-top"
            ></div>
          </div>

          {/* Process Steps */}
          <div className="space-y-0">
            {company_process.map((process, index) => (
              <div
                key={process.id}
                className="relative"
                style={{
                  minHeight:
                    index < company_process.length - 1 ? "400px" : "200px",
                }}
              >
                {/* Checkpoint (Checkmark) */}
                <div
                  className="checkpoint absolute md:left-1/2 left-0 -translate-x-1/2 w-[clamp(1.5rem,calc(1.28rem+0.8vw),2rem)] h-[clamp(1.5rem,calc(1.28rem+0.8vw),2rem)] bg-pale-blue border-2 border-navy-blue rounded-sm flex items-center justify-center z-20"
                  style={{ top: index === 0 ? "40px" : "0px" }}
                >
                  <CheckBox />
                </div>

                {/* Card */}
                <div
                  className={`process-card absolute ${
                    process.side === "left"
                      ? "md:right-1/2 max-md:left-4 md:pr-16 max-md:pl-sm"
                      : "md:left-1/2 max-md:left-4 max-md:pl-sm pl-16"
                  } md:w-1/2 w-fit`}
                  style={{ top: index === 0 ? "0px" : "-20px" }}
                >
                  <div className="bg-white border border-navy-blue rounded-lg py-md px-lg">
                    <h3 className="text-xl font-bold text-navy-blue mb-xs text-heading-5 uppercase">
                      {process.heading}
                    </h3>
                    <p className="text-navy-blue/60 text-base leading-5 max-w-[30ch]">
                      {process.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryProcessTimeline;
