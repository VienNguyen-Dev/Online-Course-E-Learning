import React from "react";
import CourseDetail from "@/components/CourseDetail";
import { courseDetails } from "@/lib/actions/course.action";
import CourseHeader from "@/components/CourseHeader";

const CoursesPage = () => {
  return (
    <div className="flex flex-col">
      <div className="2xl:mx-[30px] xl:mx-[20px] mx-[16px]">
        <CourseHeader
          title="Online Courses on Design and Development"
          description="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with
            comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
        />
      </div>
      <div className="flex flex-col items-center 2xl:mx-[162px] xl:mx-[80px] mx-[16px]">
        <div className="  2xl:max-w-[1596px] 2xl:mt-[100px] xl:mt-[80px] mt-[50px] xl:max-w-[1280px] flex flex-col 2xl:gap-[50px] gap-[20px] xl:gap-[40px] w-full">
          {courseDetails.map((course, index) => (
            <CourseDetail
              id={course.id}
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
    </div>
  );
};

export default CoursesPage;
