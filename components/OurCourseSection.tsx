import React from "react";
import { headerContents } from "@/app/constants";
import { CardCourse } from "./CardCourse";
import HeaderSection from "./HeaderSection";
import { courseDetails } from "@/lib/actions/course.action";

const OurCourseSection = () => {
  return (
    <div id="course-section" className="xl:mt-[100px] mt-[50px] flex 2xl:mx-[161px] xl:mx-[81px] mx-[17px] flex-col  max-w-[1597px] 2xl:gap-[80px] xl:gap-[60px]  gap-[40px]">
      <HeaderSection title={headerContents[1].courseTitle} description={headerContents[1].courseDescription} />;
      <div className="flex flex-wrap xl:gap-[30px] gap-[20px] w-full">
        {courseDetails.map((course, index) => {
          return (
            <CardCourse
              image={`/assets/images/${course.image[0]}`}
              key={index}
              author={course.author}
              courseDuration={course.courseDuration}
              courseLevel={course.courseLevel}
              title={course.title}
              description={course.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurCourseSection;
