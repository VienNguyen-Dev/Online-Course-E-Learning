"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type Curriculum = {
  number: string;
  description: string;
};
interface CourseDetailProps {
  id: string;
  title: string;
  description: string;
  image: string[];
  courseDuration: string;
  courseLevel: string;
  author: string;
  curriculum: Curriculum[];
}
const CourseDetail = ({ id, title, description, image, courseDuration, courseLevel, author, curriculum }: CourseDetailProps) => {
  const router = useRouter();

  return (
    <div className=" 2xl:rounded-[12px] 2xl:p-[50px] flex flex-col xl:gap-[50px] bg-white xl:rounded-[10px] xl:p-[40px] p-[24px]  gap-[40px]">
      <div className="flex flex-col 2xl:gap-[30px] gap-[24px]  ">
        <div className="flex flex-col sm:flex-row xl:gap-[50px] gap-[20px] items-start sm:items-end">
          <div className="flex flex-col xl:gap-[10px] gap-[4px]">
            <p className=" font-semibold 2xl:text-[24px] xl:text-[20px] text-[#262626] text-[18px]">{title}</p>
            <p className=" font-normal 2xl:text-[18px] xl:text-[16px]  text-[#59595A] text-[14px]">{description}</p>
          </div>
          <Button
            onClick={() => router.push(`/courses/course-detail/${id}`)}
            className=" rounded-[8px] border border-[#F1F1F3] 2xl:py-[18px] 2xl:px-[24px] py-[14px] px-[16px] bg-[#FCFCFD] text-[#262626]  xl:text-[16px] text-[14px] 2xl:text-[18px] font-medium max-w-[160px] h-auto"
          >
            View Course
          </Button>
        </div>
        <div className="flex  2xl:gap-[50px] xl:gap-[20px] gap-[10px] ">
          {image.map((img, index) => {
            return (
              <div key={index} className="2xl:max-w-[478px] sm:max-w-[386px] max-w-[96px] sm:max-h-[326px] max-h-[100px] w-full ">
                <img className=" object-cover w-full h-full rounded-[6px]" src={`/assets/images/${img}`} alt="img" />
              </div>
            );
          })}
        </div>
        <div className="flex justify-between flex-col sm:flex-row gap-[16px] ">
          <div className="flex gap-2xl:[10px] gap-[8px]">
            <div className=" 2xl:rounded-[8px] rounded-[6px] border 2xl:py-[10px] 2xl:px-[16px] py-[8px] px-[12px]  bg-white border-[#F1F1F3] 2xl:text-[18px] xl:text-[16px] text-[14px] text-[#59595A]">
              {courseDuration}
            </div>
            <div className="rounded-[8px] border py-[10px] px-[16px] bg-white border-[#F1F1F3] x:text-[18px] text-[16px] text-[#59595A]">{courseLevel}</div>
          </div>
          <p className=" font-medium text-[20px] text-[#262626]">{author}</p>
        </div>
      </div>
      <div className=" rounded-[10px] border border-[#F1F1F3] flex flex-col">
        <div className=" border-b 2xl:py-[24px] 2xl:px-[30px] xl:py-[20px] xl:px-[24px] py-[14px] px-[20px] border-[#F1F1F3] font-semibold 2xl:text-[22px] xl:text-[18px] text-[16px] text-[#262626]">
          Curriculum
        </div>
        <div className=" rounded-[12px] xl:py-[30px] xl:px-[50px] flex flex-col sm:flex-row  2xl:gap-[50px] xl:gap-[40px] bg-white p-[24px] gap-[20px] ">
          {curriculum.map((c, index) => {
            return (
              <div key={index} className="flex flex-col 2xl:gap-[20px] xl:gap-[16px] gap-[12px]">
                <span className=" font-extrabold 2xl:text-[50px] xl:text-[40px] text-[30px] text-[#262626]">{c.number}</span>
                <p className=" font-medium 2xl:text-[18px] xl:gap-[16px] gap-[14px] text-[14px] text-[#333333]">{c.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
