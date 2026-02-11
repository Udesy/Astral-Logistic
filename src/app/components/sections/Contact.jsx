import Image from "next/image";
import React from "react";
import CTAButton from "../ui/CTAButton";
import TextAnimation from "../ui/TextAnimation";

const Contact = () => {
  return (
    <section className="h-screen">
      <div className="relative h-full w-full section-padding-x section-padding-y flex flex-col justify-end">
        <div className="absolute inset-0">
          <Image
            fill
            className="object-cover"
            alt="Aerial view of a busy container terminal with automated trucks transporting shipping containers between stacked cargo lanes."
            src={"/resources/images/contactsection.jpg"}
          />
        </div>
        <div
          className="absolute inset-0 z-10 
          bg-[linear-gradient(180deg,rgba(255,_255,_255,_0.1)_25%,_rgba(0,_0,_0,_0.75)_100%)]"
        />
        <div className="relative flex flex-col z-20 md:gap-2xl gap-xl">
          {/* <h2 className="text-white text-heading-1 max-w-[20ch]">
            Have questions about your shipment? Get a clear quote from our team.
          </h2> */}
          <TextAnimation
            as="h2"
            className="text-white text-heading-1 max-w-[20ch]"
          >
            Have questions about your shipment? Get a clear quote from our team.
          </TextAnimation>
          <CTAButton target={"/contact"} className="block">
            Get a Quotation
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default Contact;
