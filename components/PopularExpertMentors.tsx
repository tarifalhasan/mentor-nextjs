"use client";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import PopularExpertsCard from "./common/PopularExpertsCard";

export interface IPopularExpertMentors {
  images: string;
  slug?: string;
  name: string;
  category: string;
  id?: string;
}

const PopularExpertMentors = () => {
  const DATA: IPopularExpertMentors[] = [
    {
      images: "/images/expert-mentors/1.png",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
    {
      images: "/images/avatar2.jpg",
      name: "Tarif Al Hasan",
      category: "Web developer",
    },
    {
      images: "/images/expert-mentors/3.png",
      name: "Brianx Maxwell",
      category: "Graffiti Mentor",
    },
    {
      images: "/images/expert-mentors/2.png",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
    {
      images: "/images/avatar2.jpg",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
    {
      images: "/images/avatar2.jpg",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
    {
      images: "/images/avatar2.jpg",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
    {
      images: "/images/avatar2.jpg",
      name: "Virginia Terner",
      category: "Social Media Mentor",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className=" container py-10">
      <div className=" pb-10 flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
        <h2 className=" heading-3">Popular Experts / Mentors</h2>
        <div className="flex gap-x-6 items-center">
          <button onClick={prevSlide} disabled={currentSlide === 0}>
            <GoArrowLeft
              className={cn(
                "w-6 h-6 text-black",
                currentSlide === 0 ? "opacity-40" : ""
              )}
            />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === DATA.length - 1}
          >
            <GoArrowRight
              className={cn(
                "w-6 h-6 text-black",
                currentSlide === DATA.length - 1 ? "opacity-40" : ""
              )}
            />
          </button>
        </div>
      </div>
      <div className="slider-container overflow-hidden relative">
        <div
          className="flex gap-x-6 transition-transform duration-300"
          style={{
            transform: `translateX(-${currentSlide * (407 + 30)}px)`, // Assuming PopularExpertsCard width is 407px with a gap of 30px
            width: `${DATA.length * (407 + 30)}px`, // Adjust width based on the number of cards
          }}
        >
          {DATA.map((expert, index) => (
            <PopularExpertsCard
              key={index}
              images={expert.images}
              name={expert.name}
              category={expert.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularExpertMentors;
