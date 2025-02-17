"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface HeaderSectionProps {
  title?: string;
  description?: string;
  setPlanPackage?: (value: string) => void;
}
const HeaderSection = ({ title, description, setPlanPackage }: HeaderSectionProps) => {
  const [active, setActive] = useState("monthly");

  return (
    <div className={`header-section sm:items-end ${title === "Frequently Asked Questions" ? "flex-col" : " sm:flex-row flex-col"}"`}>
      <div className="flex 2xl:gap-[6px] gap-[4px] flex-col">
        <h1 className=" text-header">{title}</h1>
        <p className="text-paragraph">{description}</p>
      </div>
      <div className={`flex cursor-pointer hover:opacity-70 justify-center items-center h-full ${title === "Our Pricing" ? "w-full" : ""} `}>
        {title === "Frequently Asked Questions" ? (
          <Button className=" rounded-[8px] border py-[18px] px-[24px] bg-[#FCFCFD] border-[#F1F1F3] font-medium text-[18px] text-center text-[#262626] w-fit h-fit">See All FAQ’s</Button>
        ) : title !== "Our Pricing" ? (
          <Button className=" rounded-[8px] border py-[18px] px-[24px] bg-[#FCFCFD] border-[#F1F1F3] font-medium text-[18px] text-center text-[#262626] w-[96px] h-[49px]">View All</Button>
        ) : (
          <div className="flex p-[12px] rounded-[8px] bg-white ">
            <Button
              className={`rounded-[6px] border py-[12px] px-[14px] w-[96px] h-[49px] font-medium text-center 2xl:text-[18px] xl:px-[24px] xl:py-[12px] text-[14px] ${
                active === "monthly" ? "bg-[#FF9500] text-white border-[#FF9500]" : "bg-white text-[#4C4C4D] border-white"
              }`}
              onClick={() => {
                setActive("monthly");
                if (setPlanPackage) {
                  setPlanPackage("monthly");
                }
              }}
            >
              Monthly
            </Button>
            <Button
              className={`rounded-[6px] border py-[12px] px-[14px] w-[96px] h-[49px] font-medium text-center 2xl:text-[18px] xl:px-[24px] xl:py-[12px] text-[14px] ${
                active === "yearly" ? "bg-[#FF9500] text-white border-[#FF9500]" : "bg-white text-[#4C4C4D] border-white"
              }`}
              onClick={() => {
                setActive("yearly");
                if (setPlanPackage) {
                  setPlanPackage("yearly");
                }
              }}
            >
              Yearly
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
