import { company_partner } from "@/constant";
import React from "react";

const Partners = () => {
  return (
    <section className="section-padding-x section-padding-y" aria-label="Our partners">
      <div className="flex flex-col gap-xl">
        <div className="w-full flex items-center justify-center text-navy-blue">
          <h2 className="text-heading-5">
            Trusted by leading companies Worldwide
          </h2>
        </div>
        <div className="flex flex-nowrap animate-marquee gap-24 w-max items-center h-2xl">
          {company_partner.map(({ id, svg }) => (
            <div key={`a-${id}`} className="shrink-0">
              {svg}
            </div>
          ))}
          {company_partner.map(({ id, svg }) => (
            <div key={`b-${id}`} className="shrink-0">
              {svg}
            </div>
          ))}
          {company_partner.map(({ id, svg }) => (
            <div key={`c-${id}`} className="shrink-0">
              {svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
