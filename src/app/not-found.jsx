import React from "react";
import TextAnimation from "./components/ui/TextAnimation";
import CTAButton from "./components/ui/CTAButton";

export default function NotFound() {
  return (
    <section className="section-padding-x section-padding-y h-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-lg">
        <div className="">
          <TextAnimation
            as="h1"
            className="text-center text-heading-display text-navy-blue"
          >
            404
            <br />
            Page not Found.
          </TextAnimation>
        </div>
        <div>
          <h4 className="text-center text-navy-blue text-heading-5">
            The page you’re searching for isn’t here. We’ll help you find your
            way.
          </h4>
        </div>
        <div>
          <CTAButton target={"/"} className="block">
            Return Home
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
