import React from "react";
import { Button } from "./ui/button";

interface CardCourseProps {
  author: string;
  courseDuration: string;
  courseLevel: string;
  title: string;
  description: string;
  image: string;
}
export const CardCourse = ({ author, courseDuration, courseLevel, title, description, image }: CardCourseProps) => {
  return (
    <div className="2xl:rounded-[12px] 2xl:p-[50px] rounded-[10px] border xl:p-[40px] bg-white p-[24px] border-[#F1F1F3] flex flex-col  2xl:max-w-[784px] 2xl:max-h-[807px] xl:max-w-[578px] xl:max-h-[614px] max-w-[357px] max-h-[554px] gap-[24px] w-full">
      <div className="flex flex-col 2xl:gap-[30px] gap-[24px]">
        <div className=" max-w-[309px] max-h-[172px] 2xl:max-w-[684px] 2xl:max-h-[380px] xl:max-w-[550px] xl:max-h-[267px]">
          <img className="rounded-[8px] w-full h-full" src={image} alt={title} />
        </div>
        <div className="flex flex-col gap-[24px] ">
          <div className="flex sm:justify-between sm:items-center justify-start items-start gap-[14px]  flex-col sm:flex-row">
            <div className="flex gap-[10px] text-[#4C4C4D] font-normal 2xl:text-[18px] text-[14px] ">
              <div className=" rounded-[6px] border 2xl:py-[10px] 2xl:px-[16px] py-[8px] px-[14px] bg-white border-[#F1F1F3] min-w-[92px] ">{courseDuration}</div>
              <div className=" rounded-[6px] border 2xl:py-[10px] 2xl:px-[16px] py-[8px] px-[14px] bg-white border-[#F1F1F3]  ">{courseLevel}</div>
            </div>
            <p className=" text-[16px] font-medium text-[#262626]">{author}</p>
          </div>
          <div className="flex flex-col  2xl:gap-[14px] gap-[10px]">
            <h2 className="2xl:text-[24px] text-[20px] font-semibold text-[#262626]">{title}</h2>
            <p className=" font-normal 2xl:txt-[18px] xl:text-[16px] text-[14px] text-[#4C4C4D]">{description}</p>
          </div>
        </div>
      </div>
      <Button className="2xl:py-[18px] xl:py-[14px] px-[24px] rounded-[8px] border border-[#F1F1F3] bg-[#F7F7F8] 2xl:text-[18px] text-[14px] font-medium text-[#262626] hover:opacity-75">
        Get it Now
      </Button>
    </div>
  );
};
