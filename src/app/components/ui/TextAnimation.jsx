"use client";

import React, { useEffect, useRef, useState } from "react";

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
  delay = 0,
  ...props
}) => {
  const textRef = useRef(null);
  const splitRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Defer GSAP loading until after first paint
    const initAnimation = async () => {
      if (!textRef.current) return;

      const [gsapModule, scrollTriggerModule, splitTextModule] =
        await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("gsap/SplitText"),
        ]);

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      const { SplitText } = splitTextModule;

      gsap.registerPlugin(ScrollTrigger, SplitText);

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
          delay: delay,
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

      setIsReady(true);

      return () => {
        if (splitRef.current) {
          splitRef.current.revert();
        }
        ctx.revert();
      };
    };

    // Use requestIdleCallback if available, otherwise setTimeout
    if ("requestIdleCallback" in window) {
      const idleId = requestIdleCallback(() => initAnimation(), {
        timeout: 200,
      });
      return () => cancelIdleCallback(idleId);
    } else {
      const timeoutId = setTimeout(initAnimation, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [type, stagger, durartion, ease, scrollTrigger, triggerStart, delay]);

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
