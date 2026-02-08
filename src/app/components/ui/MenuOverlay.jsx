"use client";

import { footer_nav } from "@/constant";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

const MenuOverlay = ({ showMenu }) => {
  const menuRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
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
        .from(
          ".menu-item",
          {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power1.inOut",
          },
          "-=0.2",
        );
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
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
  }, [showMenu]);

  return (
    <div
      ref={menuRef}
      className={clsx(
        "fixed inset-0 md:hidden section-padding flex flex-col justify-end bg-navy-blue z-90 gap-y-3xl",
      )}
      style={{ opacity: 0, visibility: "hidden" }}
    >
      <div className="flex flex-col gap-y-lg">
        <div>
          <p className="text-white max-w-[28ch]">
            Supporting brands beyond operational limits.
          </p>
        </div>
        <nav className="mb-xl">
          {footer_nav.map(({ id, text, target }, index) => (
            <div key={id}>
              {index === 0 && <div className="h-px w-full bg-white"></div>}
              <Link
                href={target}
                className="text-white menu-item flex flex-row py-2xs gap-lg items-center"
              >
                <span className="text-base">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <div className="text-heading-1 font-bold">{text}</div>
              </Link>
              <div className="h-px w-full bg-white"></div>
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
