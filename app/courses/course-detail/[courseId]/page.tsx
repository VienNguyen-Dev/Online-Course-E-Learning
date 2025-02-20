"use client";
import CourseHeader from "@/components/CourseHeader";
import StepCard from "@/components/StepCard";
import { getCourseById } from "@/lib/actions/course.action";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CourseDetailPage = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  // useEffect(() => {
  //   const fetchCourseById = async () => {
  //     const courseById = await getCourseById(courseId as string);
  //     if (courseById) {
  //       setCourse(courseById);
  //     }
  //   };
  //   fetchCourseById();
  // }, [courseId]);

  const firstCourse = {
    id: "course_002",
    title: "UI/UX Design",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    image: ["ui-design-1.png", "ui-design-2.png", "ui-design-3.png"],
    courseDuration: "6 Weeks",
    courseLevel: "Intermediate",
    author: "By Emily Johnson",
    curriculum: [
      {
        number: "01",
        description: {
          name: "Introduction to UI/UX Design",
          step: [
            {
              lesson: "Lesson 01",
              stepDescription: "Understanding UI/UX Design Principles",
              stepDuration: "45 Minutes",
            },
            {
              lesson: "Lesson 02",
              stepDescription: "Importance of User-Centered Design",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 03",
              stepDescription: "The Role of UI/UX Design in Product Development",
              stepDuration: "45 Minutes",
            },
          ],
        },
      },
      {
        number: "02",
        description: {
          name: "User Research and Analysis",
          step: [
            {
              lesson: "Lesson 01",
              stepDescription: "Conducting User Research and Interviews",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 02",
              stepDescription: "IAnalyzing User Needs and Behavior",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 03",
              stepDescription: "Creating User Personas and Scenarios",
              stepDuration: "45 Minutes",
            },
          ],
        },
      },
      {
        number: "03",
        description: {
          name: "Wireframing and Prototyping",
          step: [
            {
              lesson: "Lesson 01",
              stepDescription: "Introduction to Wireframing Tools and Techniques",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 02",
              stepDescription: "Creating Low-Fidelity Wireframes",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 03",
              stepDescription: "Prototyping and Interactive Mockups",
              stepDuration: "01 Hour",
            },
          ],
        },
      },
      {
        number: "04",
        description: {
          name: "Visual Design and Branding",
          step: [
            {
              lesson: "Lesson 01",
              stepDescription: "Color Theory and Typography in UI Design",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 02",
              stepDescription: "Visual Hierarchy and Layout Design",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 03",
              stepDescription: "Creating a Strong Brand Identity",
              stepDuration: "45 Minutes",
            },
          ],
        },
      },
      {
        number: "05",
        description: {
          name: "Usability Testing and Iteration",
          step: [
            {
              lesson: "Lesson 01",
              stepDescription: "Usability Testing Methods and Techniques",
              stepDuration: "01 Hour",
            },
            {
              lesson: "Lesson 02",
              stepDescription: "Analyzing Usability Test Results",
              stepDuration: "45 Minutes",
            },
            {
              lesson: "Lesson 03",
              stepDescription: "Iterating and Improving UX Designs",
              stepDuration: "45 Minutes",
            },
          ],
        },
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <div className=" 2xl:mx-[30px] xl:mx-[20px] mx-[16px]">
        <CourseHeader title={`${firstCourse.title} Course`} description={firstCourse.description} />
      </div>
      <div className="flex flex-col 2xl:mx-[162px] xl:mx-[80px] mx-[16px]  ">
        <div className="relative 2xl:mt-[100px] xl:mt-[80px] mt-[50px]  ">
          <img className=" w-full object-cover 2xl:max-h-[790px] max-h-[247px] xl:max-h-[649px] rounded-[12px]" src={`/assets/images/${firstCourse.image[0]}`} alt={firstCourse.title} />
          <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" src={"/assets/images/play-button.png"} width={72} height={72} alt="play-button" />
        </div>
        <div className="2xl:mt-[100px] xl:mt-[80px] mt-[50px] flex flex-wrap gap-[20px] flex-col sm:flex-row w-full">
          {firstCourse.curriculum.map((c, i) => (
            <StepCard key={i} stepNumber={c.number} stepName={c.description.name} step={c.description.step} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
