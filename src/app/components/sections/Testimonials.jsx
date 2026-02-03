// "use client";

// import { testimonials } from "@/constant";
// import React, { useEffect, useRef, useState } from "react";
// import TestimonialCard from "../ui/TestimonialCard";
// import NavigationButton from "../ui/NavigationButton";

// const Testimonials = () => {
//   const scrollContainerRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;

//     setCanScrollLeft(container.scrollLeft > 0);
//     setCanScrollRight(
//       container.scrollLeft < container.scrollWidth - container.clientWidth - 10,
//     );
//   };

//   useEffect(() => {
//     checkScroll();
//     window.addEventListener("resize", checkScroll);
//     return () => window.removeEventListener("resize", checkScroll);
//   }, []);

//   const scrollLeft = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     container.scrollBy({
//       left: -container.clientWidth * 0.4,
//       behavior: "smooth",
//     });
//   };

//   const scrollRight = () => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     container.scrollBy({
//       left: container.clientWidth * 0.4,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section className="section-padding-x section-padding-y">
//       <div className="flex flex-col gap-xl">
//         <div className="w-full flex items-center justify-center text-navy-blue">
//           <h5 className="text-heading-5">Hear From Our Clients</h5>
//         </div>
//         <div
//           ref={scrollContainerRef}
//           onScroll={checkScroll}
//           className="flex flex-row gap-lg overflow-x-auto scrollbar-hide scroll-smooth"
//         >
//           {testimonials.map(
//             ({ id, src, client_review, client_name, client_position }) => (
//               <TestimonialCard
//                 key={id}
//                 src={src}
//                 client_review={client_review}
//                 client_name={client_name}
//                 client_position={client_position}
//               />
//             ),
//           )}
//         </div>
//         <div className="flex flex-row items-center w-full justify-center gap-xs">
//           <NavigationButton
//             direction={"left"}
//             onClick={scrollLeft}
//             disabled={!canScrollLeft}
//           />
//           <NavigationButton
//             direction={"right"}
//             onClick={scrollRight}
//             disabled={!canScrollRight}
//           />
//         </div>
//       </div>
//       <style jsx>{`
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;

"use client";

import { testimonials } from "@/constant";
import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "../ui/TestimonialCard";
import NavigationButton from "../ui/NavigationButton";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 5,
    );
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollByOneCard = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Get first card
    const firstCard = container.querySelector("[data-testimonial-card]");
    if (!firstCard) return;

    // Calculate card width + gap
    const cardRect = firstCard.getBoundingClientRect();
    const containerStyles = window.getComputedStyle(container);
    const gap = parseFloat(containerStyles.gap) || 0;

    const scrollAmount = cardRect.width + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding-x section-padding-y">
      <div className="flex flex-col gap-xl">
        <div className="w-full flex items-center justify-center text-navy-blue">
          <h5 className="text-heading-5">Hear From Our Clients</h5>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex flex-row gap-lg overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {testimonials.map(
            ({ id, src, client_review, client_name, client_position }) => (
              <div key={id} data-testimonial-card className="snap-start">
                <TestimonialCard
                  src={src}
                  client_review={client_review}
                  client_name={client_name}
                  client_position={client_position}
                />
              </div>
            ),
          )}
        </div>

        <div className="flex flex-row items-center w-full justify-center gap-xs">
          <NavigationButton
            direction="left"
            onClick={() => scrollByOneCard("left")}
            disabled={!canScrollLeft}
          />
          <NavigationButton
            direction="right"
            onClick={() => scrollByOneCard("right")}
            disabled={!canScrollRight}
          />
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
