"use client";

import React, { useState } from "react";
import TextAnimation from "../components/ui/TextAnimation";
import { contact_form } from "@/constant";
import CTAButton from "../components/ui/CTAButton";

const rules = {
  name: (v) => (!v.trim() ? "Name is required" : ""),
  email: (v) =>
    !v.trim()
      ? "Email is required"
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? "Enter a valid email address"
        : "",
  phone: (v) =>
    v && !/^[+\d\s\-()]{7,15}$/.test(v) ? "Enter a valid phone number" : "",
  message: (v) =>
    !v.trim()
      ? "Message is required"
      : v.trim().length < 10
        ? "Message must be at least 10 characters"
        : "",
};

const getInitialState = () =>
  Object.fromEntries(contact_form.map(({ name }) => [name, ""]));

const getInitialErrors = () =>
  Object.fromEntries(contact_form.map(({ name }) => [name, ""]));

const Page = () => {
  const [values, setValues] = useState(getInitialState);
  const [errors, setErrors] = useState(getInitialErrors);
  const [touched, setTouched] = useState(getInitialErrors);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [agreedError, setAgreedError] = useState("");

  const validate = (name, value) => {
    const rule = rules[name];
    return rule ? rule(value) : "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = Object.fromEntries(
      contact_form.map(({ name }) => [name, validate(name, values[name])]),
    );
    const newTouched = Object.fromEntries(
      contact_form.map(({ name }) => [name, true]),
    );

    setErrors(newErrors);
    setTouched(newTouched);

    if (!agreed) {
      setAgreedError("You must agree before submitting");
    } else {
      setAgreedError("");
    }

    const hasErrors = Object.values(newErrors).some((e) => e !== "");
    if (hasErrors || !agreed) return;

    setSubmitted(true);
    console.log(values);
  };
  return (
    <section className="flex flex-col section-padding-x section-padding-y">
      <div className="md:grid md:grid-cols-2 flex flex-col">
        <div className="flex flex-col w-full h-full gap-3xl">
          <div className="flex flex-col gap-sm pt-lg">
            <span className="text-navy-blue text-base-large">[ Contact ]</span>
            <TextAnimation as="h2" className="text-heading-1">
              Ready to Move Your Business Forward{" "}
              <span className="inline-block origin-right animate-dash-slide">
                —
              </span>{" "}
              Let’s Talk.
            </TextAnimation>
          </div>
        </div>
        <div className="w-full h-full pt-lg">
          {submitted ? (
            <div className="flex flex-col gap-y-md">
              <TextAnimation as="h2" className="text-heading-3">
                Thanks for reaching out! Our team will contact you as soon as
                possible.
              </TextAnimation>
              <CTAButton
                variant="primary"
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setValues(getInitialState());
                  setErrors(getInitialErrors());
                  setTouched(getInitialErrors());
                  setAgreed(false);
                  setAgreedError("");
                }}
              >
                Submit Another Form
              </CTAButton>
            </div>
          ) : (
            <form
              className="flex flex-col gap-y-lg"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="h-full w-full flex flex-col gap-y-lg">
                <div className="h-full w-full flex flex-col gap-y-md">
                  {contact_form.map(
                    ({ id, label, placeholder, className, name, type }) => (
                      <div key={id} className="flex flex-col gap-y-3xs">
                        <label className="text-navy-blue text-base">
                          {label}
                          <span className="text-red-600">*</span>
                        </label>
                        {type === "input" ? (
                          <input
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${className} ${errors[name] && touched[name] ? "border-red-600" : "border-navy-blue/40"} text-base`}
                          />
                        ) : (
                          <textarea
                            name={name}
                            placeholder={placeholder}
                            value={values[name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`${className} ${errors[name] && touched[name] ? "border-red-600" : "border-navy-blue/40"} text-base`}
                          />
                        )}

                        {errors[name] && touched[name] && (
                          <span className="text-red-600">{errors[name]}</span>
                        )}
                      </div>
                    ),
                  )}
                </div>
                <div className="flex flex-col gap-y-3xs">
                  <label className="flex items-start gap-x-xs cursor-pointer group">
                    <div className="relative shrink-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => {
                          setAgreed(e.target.checked);
                          if (e.target.checked) setAgreedError("");
                        }}
                        className="peer sr-only"
                      />
                      {/* custom checkbox box */}
                      <div
                        className={`w-4 h-4 border transition-colors duration-200 flex items-center justify-center
        ${agreedError ? "border-red-600" : "border-navy-blue/40"}
        peer-checked:bg-navy-blue peer-checked:border-navy-blue`}
                      >
                        {/* checkmark */}
                        {agreed && (
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-navy-blue/90 text-base leading-[115%]">
                      By signing up, you agree to our{" "}
                      <a
                        href="/contact"
                        className="underline underline-offset-2 hover:text-navy-blue transition-colors duration-200"
                      >
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted regarding your enquiry.
                    </span>
                  </label>

                  {agreedError && (
                    <span className="text-red-600 text-sm">{agreedError}</span>
                  )}
                </div>
              </div>
              <CTAButton type="submit" variant="primary" className="w-full">
                Send Message
              </CTAButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Page;
