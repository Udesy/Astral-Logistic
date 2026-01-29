import { company_number } from "@/constant";
import React from "react";

const Numbers = () => {
  return (
    <section className="section-padding-x section-padding-y">
      <div className="flex flex-col gap-xl">
        <div className="w-full flex items-center justify-center text-navy-blue">
          <h5 className="text-heading-5">Proven by the Numbers</h5>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 max-md:gap-10 md:flex flex-row w-full justify-between">
          {company_number.map(({ id, number, label, sign }) => (
            <div
              key={id}
              className="w-full items-center justify-center md:border-l border-l-navy-blue first:border-l-0"
            >
              <div className="w-full flex items-center justify-center text-navy-blue text-heading-number">
                <span>{number}</span>
                <span>{sign}</span>
              </div>
              <div className="w-full items-center justify-center text-center">
                <h5 className="text-heading-5">{label}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Numbers;
