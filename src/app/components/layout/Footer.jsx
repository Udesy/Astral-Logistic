import React from "react";
import Logo from "../assets/Logo";
import { contactData, footer_nav, social_links } from "@/constant";
import HoverLink from "../ui/HoverLink";
import ExternalLink from "../assets/ExternalLink";

const Footer = () => {
  const { opening_hours, email, contact, address } = contactData;

  return (
    <footer className="section-padding-x pt-lg min-h-screen">
      <div className="border border-stroke-navy-blue flex flex-col">
        <div className="md:grid md:grid-cols-12 flex flex-col gap-fluid">
          <div className="flex flex-col col-span-4 max-md:border-b border-stroke-navy-blue p-lg gap-lg">
            <span className="text-navy-blue">Navigation</span>
            <nav className="">
              {footer_nav.map(({ id, text, target }) => (
                <div key={id} className="overflow-clip">
                  <HoverLink
                    text={text}
                    target={target}
                    className={"text-heading-2 leading-[130%]"}
                  />
                </div>
              ))}
            </nav>
          </div>
          <div className="col-span-8 flex flex-col justify-between md:border-l p-lg gap-xl">
            <div>
              <h5 className="max-w-[35ch] text-heading-4 text-navy-blue">
                Strengthen your operations with our end-to-end logistics
                solutions.
              </h5>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-xl gap-y-lg font-normal text-base">
              <div className="flex flex-col gap-xs">
                <h6 className="footer_contact_heading">
                  {opening_hours.label}
                </h6>
                <div>
                  <p>{opening_hours.days}</p>
                  <p>{opening_hours.time}</p>
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <h6 className="footer_contact_heading">{email.label}</h6>
                <div>
                  {email.addresses.map((mail, i) => (
                    <p key={i}>{mail}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <h6 className="footer_contact_heading">{contact.label}</h6>
                <div>
                  {contact.phone_numbers.map((phone, i) => (
                    <p key={i}>
                      {phone.number}
                      {phone.note && (
                        <span className="opacity-60 text-base-small">
                          {" "}
                          ({phone.note})
                        </span>
                      )}
                    </p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-xs">
                <h6 className="footer_contact_heading">{address.label}</h6>
                <div>
                  {address.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:grid md:grid-cols-12 md:gap-fluid flex flex-col border-t border-stroke-navy-blue">
          <div className="col-span-6 w-full h-full p-lg order-2 md:order-none">
            <Logo height={"100%"} width={"100%"} className="text-navy-blue" />
          </div>
          <div className="col-start-10 col-end-13 flex flex-col justify-between order-1 md:order-none">
            {social_links.map(({ id, name }) => (
              <div
                key={id}
                className="flex flex-row items-center justify-between px-sm max-md:py-sm h-full cursor-pointer text-navy-blue md:border-l border-b border-stroke-navy-blue last:border-b-0 last:max-md:border-b group"
              >
                {/* <h6 className="uppercase overflow-clip">{name}</h6> */}
                <HoverLink
                  text={name}
                  className={"uppercase overflow-clip text-base"}
                />
                <span className="size-4">
                  <ExternalLink />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col max-md:gap-3xs justify-between py-3xs uppercase text-base-small text-navy-blue">
        <div className="flex md:flex-row flex-col md:gap-x-xl max-md:gap-y-3xs">
          <h6>
            © {new Date().getFullYear()} Astral Logistics. All rights reserved.
          </h6>
          <h6>Privacy Policy</h6>
        </div>
        <div>
          <h6 className="overflow-clip h-fit">
            <HoverLink
              text={"Website by uddeshya"}
              target={"https://uddeshyaprajapati.xyz/"}
            />
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
