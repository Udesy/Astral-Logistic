"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import CTAButton from "../ui/CTAButton";
import Logo from "../assets/Logo";
import { nav_links } from "@/constant";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false);

  const linkClass = (path) =>
    clsx(pathname === path ? "cursor-none opacity-75" : "cursor-pointer");

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      setIsScrolledPastHero(scrollPosition > heroHeight - 60);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-100 w-full h-fit header-padding">
      <div
        className={clsx(
          " transition-all duration-300 flex w-full text-base grid-cols-12 items-center justify-between gap-x-fluid sm:items-start lg:grid",
          isScrolledPastHero ? "text-navy-blue" : "text-white",
        )}
      >
        <div className="col-span-4">
          <Link
            href={"/"}
            className="pointer-events-auto cursor-pointer block w-fit"
          >
            <Logo />
          </Link>
        </div>
        <nav className="col-span-4 h-full hidden shrink-0 items-center justify-center lg:flex">
          <ul className="flex flex-row justify-center gap-14 font-medium">
            {nav_links.map(({ id, href, label }) => (
              <li key={id}>
                <Link href={href} className={linkClass(href)}>
                  <sub className="text-[0.6rem]">(0{id})</sub>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="col-span-4 flex items-center justify-end">
          <CTAButton
            className={"hidden md:block"}
            target={"/contact"}
            variant="primary"
          >
            Get a Quotation
          </CTAButton>
          <CTAButton
            className={"block md:hidden"}
            onClick={handleClick}
            isOpen={isOpen}
          >
            {/* {isOpen ? "Close" : "Menu"} */}
            <span className="relative inline-block overflow-hidden ">
              <span
                className={clsx(
                  "inline-block transition-all duration-300 ease-in-out",
                  isOpen ? "-translate-y-5" : "translate-y-0",
                )}
              >
                Menu
              </span>
              <span
                className={clsx(
                  "absolute inset-0 inline-block transition-all duration-300 ease-in-out",
                  isOpen ? "translate-y-0" : "translate-y-5",
                )}
              >
                Close
              </span>
            </span>
          </CTAButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
