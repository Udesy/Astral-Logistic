"use client";

import { useEffect, useRef } from "react";

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  useEffect(() => {
    // Defer Lenis initialization to after first paint
    const initLenis = async () => {
      const { default: Lenis } = await import("lenis");

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        autoResize: true,
      });

      lenisRef.current = lenis;

      // Expose lenis to window for global access
      if (typeof window !== "undefined") {
        window.lenis = lenis;
      }

      // Optimized animation frame loop
      function raf(time) {
        lenis.raf(time);
        rafIdRef.current = requestAnimationFrame(raf);
      }

      rafIdRef.current = requestAnimationFrame(raf);
    };

    // Use requestIdleCallback for non-critical initialization
    if ("requestIdleCallback" in window) {
      const idleId = requestIdleCallback(() => initLenis(), { timeout: 100 });
      return () => {
        cancelIdleCallback(idleId);
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        if (lenisRef.current) {
          lenisRef.current.destroy();
        }
        if (typeof window !== "undefined") {
          delete window.lenis;
        }
      };
    } else {
      const timeoutId = setTimeout(initLenis, 0);
      return () => {
        clearTimeout(timeoutId);
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }
        if (lenisRef.current) {
          lenisRef.current.destroy();
        }
        if (typeof window !== "undefined") {
          delete window.lenis;
        }
      };
    }
  }, []);

  return <>{children}</>;
}
