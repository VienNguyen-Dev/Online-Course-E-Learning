import React from "react";
import HeaderSection from "./HeaderSection";
import { headerContents, questions } from "@/constants";
import { Button } from "./ui/button";
import QuestionCard from "./QuestionCard";

const FQASection = () => {
  return (
    <div className=" flex 2xl:gap-[120px] 2xl:p-[100px] xl:p-[80px]  2xl:mx-[163px] max-w-[1595px] rounded-[12px] xl:mx-[81px]  xl:gap-[80px] xl:mt-[100px] sm:flex-row flex-col mx-[17px] p-[24px] gap-[40px] bg-white ">
      <div className={`flex-col w-full flex 2xl:gap-[50px] xl:gap-[40px] gap-[20px] items-start justify-start max-w-[408px]`}>
        <div className="flex 2xl:gap-[6px] gap-[4px] flex-col">
          <h1 className=" text-header">Frequently Asked Questions</h1>
          <p className="text-paragraph">Still you have any questions? Contact our Team via support@skillbridge.com</p>
        </div>
        <div className={`flex sm:justify-end sm:items-end cursor-pointer hover:opacity-70 justify-center items-center`}>
          <Button className=" rounded-[8px] border py-[18px] px-[24px] bg-[#FCFCFD] border-[#F1F1F3] font-medium text-[18px] text-center text-[#262626] w-fit h-fit">See All FAQ’s</Button>
        </div>
      </div>

      <div className="flex flex-col xl:gap-[30px] gap-[20px] ">
        <div className="2xl:rounded-[12px] rounded-[10px] border xl:p-[40px] flex flex-col xl:gap-[40px] bg-white border-[#F1F1F3] p-[24px] gap-[20px]">
          <div className=" border-b border-[#F1F1F3] pb-[20px] flex gap-[30px] items-center justify-between">
            <p className=" font-medium xl:text-[18px] text-[16px] text-[#262626]">Can I enroll in multiple courses at once?</p>
            <Button className=" rounded-[6px] p-[10px] bg-[#FFF4E5] border-none">
              <img className="max-w-[17px] max-h-[17px]" src="/assets/icons/cancel-icon.png" alt="cancel-icon" />
            </Button>
          </div>
          <p className=" font-normal xl:text-[16px] text-[14px] text-[#4C4C4D]">Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.</p>
          <div className=" border-[#F1F1F3] rounded-[6px] xl:py-[16px] xl:px-[24px] py-[12px] px-[20px] bg-[#F7F7F8] flex justify-between items-center">
            <p className=" font-medium 2xl:text-[18px] xl:text-[16px] text-[14px] text-[#333333]">Enrollment Process for Different Courses</p>
            <div className=" rounded-[100px] xl:p-[12px] p-[10px] bg-white xl:w-[48px] xl:h-[48px] w-[40px] h-[40px] flex items-center justify-center hover:opacity-65 cursor-pointer">
              <img className="max-w-[28px] max-h-[28px]" src="/assets/icons/right-arrow-qa-icon.svg" alt="right-arrow-qa-icon" />
            </div>
          </div>
        </div>
        {questions.map((content, index) => (
          <QuestionCard question={content.question} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FQASection;
