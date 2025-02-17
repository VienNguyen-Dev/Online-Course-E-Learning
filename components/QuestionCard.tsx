import React from "react";
import { Button } from "./ui/button";

const QuestionCard = ({ question }: { question: string }) => {
  return (
    <div className=" rounded-[12px] border 2xl:py-[30px] 2xl:px-[50px] xl:py-[24px] xl:px-[40px] bg-white flex 2xl:gap-[50px] gap-[40px] py-[20px] px-[24px]  justify-between items-center">
      <p className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[#262626] tex-[16px]">{question}</p>
      <div className="">
        <Button className="2xl:rounded-[8px] 2xl:p-[12px] rounded-[6px] p-[10px] bg-[#FFF4E5] 2xl:w-[52px] 2xl:h-[48px] xl:w-[48px] xl:h-[48px] w-[40px] h-[40px]">
          <img className="max-w-[16px] max-h-[16px]" src="/assets/icons/plus-icon.svg" alt="plus-icon" />
        </Button>
      </div>
    </div>
  );
};

export default QuestionCard;
