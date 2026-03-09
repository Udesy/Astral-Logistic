"use client";

import { footer_nav } from "@/constant";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const MenuOverlay = ({ showMenu, setShowMenu }) => {
  const menuRef = useRef(null);
  const paraRef = useRef(null);
  const tl = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initAnimation = async () => {
      const [gsapModule, splitTextModule] = await Promise.all([
        import("gsap"),
        import("gsap/SplitText"),
      ]);

      const gsap = gsapModule.default;
      const { SplitText } = splitTextModule;

      const split = new SplitText(paraRef.current, {
        type: "lines",
      });

      split.lines.forEach((line) => {
        const mask = document.createElement("div");
        mask.style.overflow = "hidden";
        line.parentNode.insertBefore(mask, line);
        mask.appendChild(line);
      });

      const ctx = gsap.context(() => {
        tl.current = gsap
          .timeline({ paused: true })
          .set(menuRef.current, { visibility: "visible" })
          .to(menuRef.current, {
            duration: 0.5,
            opacity: 1,
            pointerEvents: "all",
            ease: "power3.inOut",
          })
          .from(split.lines, {
            yPercent: 100,
            stagger: 0.1,
            duration: 0.2,
            ease: "expo.out",
          })
          .from(
            ".menu-line",
            {
              scaleX: 0,
              stagger: 0.1,
              duration: 0.2,
              ease: "power3.inOut",
            },
            "-=0.3",
          )
          .from(
            ".menu-item",
            {
              y: 5,
              opacity: 0,
              stagger: 0.1,
              duration: 0.1,
              ease: "power1.inOut",
            },
            "-=0.5",
          );
      });

      setIsInitialized(true);

      return () => ctx.revert();
    };

    // Defer initialization until user interaction is likely
    if ("requestIdleCallback" in window) {
      const idleId = requestIdleCallback(() => initAnimation(), {
        timeout: 500,
      });
      return () => cancelIdleCallback(idleId);
    } else {
      const timeoutId = setTimeout(initAnimation, 200);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  useEffect(() => {
    if (!isInitialized || !tl.current) return;

    if (showMenu) {
      tl.current.play();
      if (window.lenis) window.lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      tl.current.reverse();
      setTimeout(() => {
        if (window.lenis) window.lenis.start();
        document.body.style.overflow = "";
      }, 500);
    }
  }, [showMenu, isInitialized]);

  return (
    <div
      ref={menuRef}
      className={clsx(
        "fixed inset-0 md:hidden section-padding flex flex-col justify-end bg-navy-blue z-90 gap-y-3xl max-xs",
      )}
      style={{ opacity: 0, visibility: "hidden" }}
    >
      <div className="flex flex-col gap-y-lg">
        <div>
          <p ref={paraRef} className="text-white max-w-[28ch]">
            Supporting brands beyond operational limits.
          </p>
        </div>
        <nav className="">
          {footer_nav.map(({ id, text, target }, index) => (
            <div key={id}>
              {index === 0 && (
                <div className="h-px w-full bg-white menu-line origin-left"></div>
              )}
              <Link
                href={target}
                className="text-white menu-item flex flex-row py-2xs gap-lg items-center"
                onPointerDown={() => setShowMenu(!showMenu)}
              >
                <span className="text-base">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <div className="text-heading-1 font-bold">{text}</div>
              </Link>
              <div className="h-px w-full bg-white menu-line origin-left"></div>
            </div>
          ))}
        </nav>
      </div>
      <div className="w-full text-center">
        <span className="text-base-small text-white">
          © 2026 Astral Logistics
        </span>
      </div>
    </div>
  );
};

export default MenuOverlay;
