"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ImageReveal = ({
  children,
  animation = "fade",
  duration = 1,
  ease = "power2.out",
  delay = 0,
  className = "relative w-full h-full",
  scrollTrigger = true,
  triggerStart = "top 70%",
  wrapperTag: WrapperTag = "div",
  scale = false,
  parallax = false,
  parallaxSpeed = 100,
  ...props
}) => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(wrapperRef.current, { autoAlpha: 1 });

      gsap.set(imageRef.current, { opacity: 0, scale: scale ? 1.1 : 1 });

      gsap.to(imageRef.current, {
        opacity: 1,
        duration: duration,
        ease: ease,
        delay: delay,
        scale: 1,
        scrollTrigger: scrollTrigger
          ? {
              trigger: wrapperRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
            }
          : undefined,
      });

      if (parallax) {
        gsap.to(imageRef.current, {
          yPercent: parallaxSpeed / 10,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, wrapperRef);

    return () => {
      ctx.revert();
    };
  }, [
    animation,
    duration,
    ease,
    delay,
    scrollTrigger,
    triggerStart,
    scale,
    parallax,
    parallaxSpeed,
  ]);

  return (
    <WrapperTag
      ref={wrapperRef}
      className={className}
      style={{ visibility: "hidden" }}
      {...props}
    >
      <div ref={imageRef} className="w-full h-full">
        {children}
      </div>
    </WrapperTag>
  );
};

export default ImageReveal;
