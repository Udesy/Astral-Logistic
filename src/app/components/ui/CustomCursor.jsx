"use client";

import clsx from "clsx";
import React, { useEffect, useRef } from "react";
import DiagonalArrow from "../assets/DiagonalArrow";

const CustomCursor = ({ children, isInside, className = "", ease = 0.15 }) => {
  const cursorRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  useEffect(() => {
    if (!isInside || !cursorRef.current) {
      return;
    }

    const handleMouseMove = (e) => {
      targetPosition.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const animate = () => {
      // Lerp (linear interpolation) for smooth following
      currentPosition.current.x +=
        (targetPosition.current.x - currentPosition.current.x) * ease;
      currentPosition.current.y +=
        (targetPosition.current.y - currentPosition.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPosition.current.x}px, ${currentPosition.current.y}px) translate(-50%, -50%)`;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isInside, ease]);

  if (!isInside) return null;

  return (
    <div
      ref={cursorRef}
      className={clsx(
        "pointer-events-none fixed top-0 left-0 z-9999 bg-golden-yellow text-xs p-3xs will-change-transform rounded-md flex flex-row items-center gap-1 max-md:hidden",
        isInside ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {children}
      <span className="size-3">
        <DiagonalArrow />
      </span>
    </div>
  );
};

export default CustomCursor;
