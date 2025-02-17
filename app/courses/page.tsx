import React from "react";
import { courseDetails } from "../constants";
import CourseDetail from "@/components/CourseDetail";

const CoursesPage = () => {
  return (
    <div className="flex flex-col items-center 2xl:mx-[162px] xl:mx-[80px] mx-[16px]">
      <div className="max-w-[1860px] 2xl:mt-[109px] border-b border-[#E4E4E7]  2xl:pb-[50px] xl:pb-[40px]  flex 2xl:gap-[100px] xl:mt-[80px]  xl:gap-[80px] flex-col  mt-[50px]  pb-[30px] sm:flex-row gap-[16px] ">
        <h1 className="2xl:text-[48px] font-semibold text-[#262626] xl:text-[38px] text-[28px] ">Online Courses on Design and Development</h1>
        <div className=" 2xl:w-[748px] xl:w-[600px]">
          <p className=" 2xl:text-[18px] xl:text-[16px] text-[14px] font-normal text-[#59595A]">
            Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with
            comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey.
          </p>
        </div>
      </div>
      <div className="  2xl:max-w-[1596px] xl:max-w-[1280px] flex flex-col 2xl:gap-[50px] gap-[20px] xl:gap-[40px] w-full">
        {courseDetails.map((course, index) => (
          <CourseDetail
            key={index}
            title={course.title}
            description={course.description}
            image={course.image}
            courseDuration={course.courseDuration}
            courseLevel={course.courseLevel}
            author={course.author}
            curriculum={course.curriculum}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
