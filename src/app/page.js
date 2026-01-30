import React from "react";
import Hero from "./components/sections/Hero";
import Numbers from "./components/sections/Numbers";
import About from "./components/sections/About";
import Services from "./components/sections/Services";

const page = () => {
  return (
    <>
      <Hero />
      <Numbers />
      <About />
      <Services />
    </>
  );
};

export default page;
