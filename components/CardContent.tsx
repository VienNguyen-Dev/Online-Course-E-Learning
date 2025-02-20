import React from "react";
import { Button } from "./ui/button";

interface CardContentProps {
  cardNumber: string;
  title: string;
  description: string;
}

const CardContent = ({ cardNumber, title, description }: CardContentProps) => {
  return (
    <div className=" 2xl:max-w-[519px] h-fit xl:max-w-[382px] max-w-[358px]  flex-col bg-white 2xl:rounded-[12px] rounded-[10px] 2xl:p-[50px] xl:gap-[40px] flex 2xl:gap-[50px] xl:p-[40px] p-[30px] gap-[30px]">
      <div className="flex justify-end items-end text-[#262626] ">
        <h2 className=" font-bold 2xl:text-[80px] xl:text-[60px] text-[50px]">{cardNumber}</h2>
      </div>
      <div className="flex flex-col 2xl:gap-[14px] gap-[10px]  max-w-[419px]">
        <h4 className=" font-semibold 2xl:text-[24px] text-[20px]  text-[#333333]">{title}</h4>
        <p className=" 2xl:text-[18px] xl:text-16px text-[14px]font-normal text-[#4C4C4D]">{description}</p>
      </div>
      <div className="flex items-end justify-end ">
        <Button className=" cursor-pointer  2xl:p-[20px] max-w-[74px] h-auto    rounded-[8px] border p-[14px] bg-[#FCFCFD] border-[#F1F1F3] hover:opacity-65">
          <img className="max-w-[34px] max-h-[34px]" src="assets/icons/arrow-top-right-icon.png" alt="arrow-icon" />
        </Button>
      </div>
    </div>
  );
};

export default CardContent;
