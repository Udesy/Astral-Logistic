import React from "react";
import TextAnimation from "../components/ui/TextAnimation";
import ScrollImageSection from "../components/sections/ScrollImageSection";
import Partners from "../components/sections/Partners";
import Contact from "../components/sections/Contact";
import ScrollImageMobile from "../components/sections/ScrollImageMobile";

const page = () => {
  return (
    <section>
      <div className="section-padding-x section-padding-y flex flex-col">
        <div className="flex flex-col gap-sm py-lg">
          <span className="text-navy-blue text-base-large">
            [ Our Services ]
          </span>
          <TextAnimation
            as="h2"
            className="text-heading-1 max-w-[20ch]"
            scrollTrigger="false"
          >
            Logistics services built to support strong operations and long-term
            business growth.
          </TextAnimation>
        </div>
        <div className="w-full min-h-screen">
          <ScrollImageSection />
          <ScrollImageMobile />
        </div>
        <Partners />
      </div>
      <Contact />
    </section>
  );
};

export default page;
