import React from "react";
import { Button } from "./ui/button";

interface TestimonialCardProps {
  content: string;
  authorImage: string;
  authorName: string;
}
const TestimonialCard = ({ content, authorImage, authorName }: TestimonialCardProps) => {
  return (
    <div className="2xl:rounded-[12px]  rounded-[10px] border  bg-white border-[#F1F1F3] flex flex-col  2xl:max-w-[784px] 2xl:max-h-[304px] xl:max-w-[578px] xl:max-h-[250px] max-w-[357px] max-h-[255px]  w-full ">
      <div className="2xl:p-[50px] xl:p-[40px] p-[30px] 2xl:text-[18px] font-normal xl:text-[16px] text-[14px]">{content}</div>
      <hr className=" w-full border border-[#F1F1F3]" />
      <div className="flex justify-between  bg-[#FCFCFD] 2xl:px-[50px] 2xl:py-[30px] px-[30px] py-[20px] xl:px-[40px] xl:py-[24px] items-center">
        <div className="flex gap-[15px] items-center">
          <img className="2xl:w-[60px] 2xl:h-[60px] w-[50px] h-[50px] rounded-[8px]" src={authorImage} alt={authorName} />
          <p className=" xl:text-[18px] font-semibold text-[16px]">{authorName}</p>
        </div>
        <Button className=" 2xl:text-[18px] xl:text-[16px] text-[14px] font-medium rounded-[8px] border 2xl:py-[18px] 2xl:px-[24px]  px-[16px] py-[14px] bg-[#F7F7F8] border-[#F1F1F3] opacity-70 text-[#262626]">
          Read Full Story
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCard;
