import React from "react";

type StepDetail = {
  stepDescription: string;
  stepDuration: string;
  lesson: string;
};
interface StepCardProps {
  stepNumber: string;
  stepName: string;
  step: StepDetail[];
}

const StepCard = ({ stepNumber, stepName, step }: StepCardProps) => {
  return (
    <div className=" 2xl:rounded-[12px] rounded-[10px] xl:p-[40px] 2xl:p-[50px] flex flex-col 2xl:gap-[50px] bg-white xl:gap-[40px] gap-[30px] 2xl:max-w-[783px] xl:max-w-[584px] max-w-[358px] p-[30px] w-full">
      <h1 className=" 2xl:text-[80px] xl:text-[60px] text-[50px] font-extrabold text-[#262626] text-end ">{stepNumber}</h1>
      <p className=" 2xl:text-[24px] xl:text-[20px] text-[18px] font-semibold text-[#333333] ">{stepName}</p>
      <div className="flex flex-col 2xl:gap-[20px] gap-[16px]">
        {step.map((s, i) => {
          return (
            <div
              key={i}
              className={` flex 2xl:rounded-[8px] rounded-[6px] flex-col sm:flex-row xl:gap-[6px] border 2xl:py-[24px] 2xl:px-[30px] xl:py-[20px] xl:px-[24px]  p-[24px] gap-[24px] ${
                s.stepDuration.includes("Minutes") ? "border-[#F1F1F3]" : " border-[#FFD599] ring-4 ring-[#FFF4E5]"
              } justify-between`}
            >
              <div className="flex flex-col 2xl:gap-[6px] gap-[2px]">
                <h3 className=" font-medium 2xl:text-[20px] text-[16px] text-[#333333]">{s.stepDescription}</h3>
                <p className=" font-normal 2xl:text-[18px] text-[14px] text-[#59595A]">{s.lesson}</p>
              </div>
              <div
                className={` rounded-[6px] 2xl:py-[12px] 2xl:px-[14px] p-[10px] flex gap-[4px] items-center justify-center  ${
                  s.stepDuration.includes("Minutes") ? "bg-[#F7F7F8]" : " bg-[#FFEACC]"
                } 2xl:max-w-[153px] w-full max-w-[120px] h-fit `}
              >
                <img src="/assets/icons/clock-icon.svg" alt="clock" />
                <span className=" font-normal 2xl:text-[18px] text-[14px] text-[#59595A]">{s.stepDuration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepCard;
