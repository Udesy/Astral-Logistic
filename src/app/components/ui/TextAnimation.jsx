"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TextAnimation = ({
  children,
  type = "words",
  stagger = 0.04,
  durartion = 0.5,
  ease = "power2.out",
  className = "",
  as: Component = "h1",
  scrollTrigger = true,
  triggerStart = "top 80%",
  ...props
}) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set(textRef.current, { autoAlpha: 1 });
      splitRef.current = new SplitText(textRef.current, {
        type: type,
      });

      const elements =
        type === "words"
          ? splitRef.current.words
          : type === "lines"
            ? splitRef.current.lines
            : splitRef.current.chars;

      if (type === "lines") {
        elements.forEach((line) => {
          const mask = document.createElement("div");
          mask.style.overflow = "hidden";
          line.parentNode.insertBefore(mask, line);
          mask.appendChild(line);
        });
      }

      gsap.set(elements, { opacity: 0, yPercent: 30 });

      gsap.to(elements, {
        opacity: 1,
        yPercent: 0,
        scale: 1,
        filter: "blur(0px)",
        stagger: stagger,
        duration: durartion,
        ease: ease,
        scrollTrigger: scrollTrigger
          ? {
              trigger: textRef.current,
              start: triggerStart,
              toggleActions: "play none none none",
            }
          : undefined,
      });
    }, textRef);

    return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
      ctx.revert();
    };
  }, [type, stagger, durartion, ease, scrollTrigger, triggerStart]);
  return (
    <Component
      ref={textRef}
      className={className}
      style={{ visibility: "hidden" }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default TextAnimation;
