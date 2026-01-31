import React from "react";
import Hero from "./components/sections/Hero";
import Numbers from "./components/sections/Numbers";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Partners from "./components/sections/Partners";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimonials from "./components/sections/Testimonials";

const page = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <About />
      <Services />
      <Partners />
      <WhyChooseUs />
      <Testimonials />
    </>
  );
};

export default page;
