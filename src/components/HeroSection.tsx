"use client";
import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

const HeroSection = () => {
  return (
    <div className="relative h-auto md:h-[40rem] w-full flex flex-col items-center justify-center overflow-hidden mx-auto py-10 md:py-0 bg-gradient-to-br from-gray-800 to-black">
      {" "}
      {/* Updated gradient to match the footer */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="blue" />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-fadeIn">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto animate-slideUp">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you&apos;re a beginner or looking to refine
          your skills, join us to unlock your true potential.
        </p>
        <div className="mt-8 animate-fadeIn">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-gray-700 dark:bg-gray-900 text-white border-neutral-200 dark:border-slate-800 hover:bg-gray-600 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
