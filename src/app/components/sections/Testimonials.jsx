import { testimonials } from "@/constant";
import React from "react";
import TestimonialCard from "../ui/TestimonialCard";
import NavigationButton from "../ui/NavigationButton";

const Testimonials = () => {
  return (
    <section className="section-padding-x section-padding-y">
      <div className="flex flex-col gap-xl">
        <div className="w-full flex items-center justify-center text-navy-blue">
          <h5 className="text-heading-5">Hear From Our Clients</h5>
        </div>
        <div className="flex flex-row gap-lg">
          {testimonials.map(
            ({ id, src, client_review, client_name, client_position }) => (
              <TestimonialCard
                key={id}
                src={src}
                client_review={client_review}
                client_name={client_name}
                client_position={client_position}
              />
            ),
          )}
        </div>
        <div className="flex flex-row items-center w-full justify-center gap-xs">
          <NavigationButton direction={"left"} />
          <NavigationButton direction={"right"} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
