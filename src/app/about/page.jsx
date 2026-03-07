import React from "react";
import TextAnimation from "../components/ui/TextAnimation";
import ImageReveal from "../components/ui/ImageReveal";
import Image from "next/image";
import ProcessTimeline from "../components/sections/ProcessTimeline";
import Numbers from "../components/sections/Numbers";
import Contact from "../components/sections/Contact";

const page = () => {
  return (
    <section className="">
      <div className="section-padding-x section-padding-y flex flex-col gap-2xl">
        <div className="flex flex-col gap-3xl pt-lg">
          <div className="flex flex-col gap-sm">
            <span className="text-navy-blue text-base-large">[ About Us ]</span>
            <TextAnimation
              as="h2"
              className="text-heading-1 max-w-[20ch]"
              scrollTrigger="false"
            >
              We partner with businesses to support steady growth and long-term
              success.
            </TextAnimation>
          </div>
          <div className="w-full flex items-center justify-end">
            <p className="text-heading-5 max-w-[25ch]">
              Hands-on involvement at every step to keep operations reliable and
              predictable as businesses grow.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-xl gap-xl">
          <div className="w-full h-full flex flex-col gap-lg order-2 md:order-1 md:pt-2xl">
            <h2 className="uppercase text-navy-blue text-heading-3 font-bold">
              How it Started
            </h2>
            <p className="text-heading-6 max-w-[40ch]">
              Astral Logistics began with a simple belief of moving goods should
              be reliable, honest, and handled with care. We started as a small
              team that valued discipline, clear communication, and doing the
              job right.
              <br />
              <br />
              For us, logistics isn’t just transport it’s the quiet work that
              keeps businesses running. We plan with intention, pay attention to
              every detail, and handle every shipment with the consistency that
              earns trust. Our story is built on effort, integrity, and the
              promise that when we take something on, we deliver it the right
              way.
            </p>
          </div>
          <ImageReveal
            className="relative w-full rounded-lg overflow-clip h-120 sm:h-120 md:min-h-160 order-1 md:order-2"
            parallax={true}
          >
            <Image
              src={"/resources/images/aboutsection.jpg"}
              alt="ship dock image"
              fill
              className="object-cover scale-110"
            />
          </ImageReveal>
        </div>
        <Numbers />
        <ProcessTimeline />
      </div>
      <Contact />
    </section>
  );
};

export default page;
