"use client";

import { FC, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const VideoBanner: FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="container">
      <div className="bg-cover object-cover bg-top block mx-auto max-w-full overflow-hidden relative p-0 m-0 pb-[50%] bg-why-book-bg bg-no-repeat rounded-lg">
        <div className="px-4 lg:px-12 pt-4 sm:pt-10">
          <div className="flex-col flex sm:flex-row gap-4 sm:items-center justify-between">
            <h2 className="text-lg sm:text-2xl lg:text-6xl text-white">
              Why Choose BookConnect?
            </h2>
            <button className="hidden sm:inline-flex items-center gap-x-2">
              <span className="text-xl font-normal text-white">
                Get Started
              </span>
              <GoArrowRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        {isVideoPlaying ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            loop
          >
            {/* Add your video source here */}
            <source src="/pexels-felipe-david-15462520.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <button
            onClick={handlePlayButtonClick}
            className="absolute top-1/2 -translate-y-1/2 play_button c left-1/2 transform -translate-x-1/2 grid place-items-center z-10"
          >
            {/* Your existing SVG code here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={130}
              height={130}
              className="w-[40%] sm:w-full"
              viewBox="0 0 130 130"
              fill="none"
            >
              <g filter="url(#filter0_b_615_355)">
                <circle
                  cx={65}
                  cy={65}
                  r={65}
                  fill="black"
                  fillOpacity="0.42"
                />
              </g>
              <path
                d="M82.5 58.9378C87.1667 61.6321 87.1667 68.3679 82.5 71.0622L61.5 83.1865C56.8333 85.8808 51 82.513 51 77.1244L51 52.8756C51 47.487 56.8333 44.1192 61.5 46.8135L82.5 58.9378Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_b_615_355"
                  x={-12}
                  y={-12}
                  width={154}
                  height={154}
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity={0} result="BackgroundImageFix" />
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation={6} />
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_615_355"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_615_355"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
        )}
      </div>
    </section>
  );
};

export default VideoBanner;
