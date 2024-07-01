"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_couses.json";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 py-12 pt-36">
      <h1 className="text-3xl md:text-7xl text-center font-sans font-extrabold text-white mb-8">
        All Courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer
            className="m-5 transform transition duration-500 hover:scale-105"
            key={course.id}
          >
            <CardBody className="bg-gray-800 relative group/card hover:shadow-xl hover:shadow-emerald-500/[0.2] dark:bg-gray-900 dark:border-gray-700 border-gray-500 w-auto sm:w-[30rem] h-auto rounded-xl p-6 border transition-shadow">
              <CardItem
                translateZ="50"
                className="text-2xl font-bold text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-sm max-w-sm mt-2 dark:text-neutral-400"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-medium text-white bg-emerald-500 hover:bg-emerald-600 transition-colors"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default page;
