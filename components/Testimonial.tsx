"use client";

import { TestimonialData } from "@/constants/testimonial";
import Image from "next/image";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TestimonialData.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === TestimonialData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className=" container pt-14 pb-10">
      <div className=" flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
        <h2 className=" heading-3">What Our Mentees say?</h2>
        <button className=" inline-flex items-center gap-x-2">
          <span className=" text-xl font-normal text-brand-main">
            Get started
          </span>
          <GoArrowRight className=" w-6 h-6 text-brand-main" />
        </button>
      </div>
      <div className=" pt-10">
        <div className=" hidden md:flex  gap-x-4 items-center justify-between">
          <button
            onClick={prevSlide}
            style={{
              borderRadius: "40px 8px 8px 8px",
            }}
            className=" w-[65px] h-[65px] grid place-items-center  bg-brand-main"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15 18.5L9 12.5L15 6.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          {/* this is slider content  */}
          <div className=" max-w-[850px] w-full space-y-8 flex-1">
            <div className=" space-y-2 flex flex-col items-center">
              <Image
                alt=""
                quality={82}
                width={88}
                height={88}
                className=" w-[88px] h-[88px] rounded-full border-[2.5px] border-[#E0F2D7] object-contain"
                src={TestimonialData[currentSlide].avatar}
              />
              <h4 className=" text-2xl font-medium text-center text-content-primary">
                {TestimonialData[currentSlide].name}
              </h4>
              <p className="text-base text-center font-normal text-content-tertiary">
                {TestimonialData[currentSlide].message}
              </p>
            </div>
            <h4 className="text-center text-lg font-semibold text-content-primary">
              {TestimonialData[currentSlide].category}
            </h4>
          </div>
          <button
            onClick={nextSlide}
            style={{
              borderRadius: "8px 40px 8px 8px",
            }}
            className=" w-[65px] h-[65px] grid place-items-center  bg-brand-main"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M9 18.5L15 12.5L9 6.5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="  md:hidden space-y-8">
          {TestimonialData.map((data, index) => (
            <div key={index}>
              <div className="  w-full space-y-8 flex-1">
                <div className=" space-y-2 flex flex-col items-center">
                  <Image
                    alt=""
                    quality={82}
                    width={88}
                    height={88}
                    className=" w-[88px] h-[88px] rounded-full border-[2.5px] border-[#E0F2D7] object-contain"
                    src={data.avatar}
                  />
                  <h4 className=" text-2xl font-medium text-center text-content-primary">
                    {data.name}
                  </h4>
                  <p className="text-base text-center font-normal text-content-tertiary">
                    {data.message}
                  </p>
                </div>
                <h4 className="text-center text-lg font-semibold text-content-primary">
                  {data.category}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
