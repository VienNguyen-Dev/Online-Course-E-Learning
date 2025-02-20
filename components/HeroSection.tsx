"use client";
import React, { useState } from "react";
import Link from "next/link";

const HeroSection = () => {
  // const router = useRouter();
  const [active, setActive] = useState("courses");
  return (
    <div className="flex flex-col items-center max-w-[965px]  2xl:gap-[60px]  gap-[50px]   mt-[50px] xl:mt-[100px] xl:mx-[250px]  mx-[17px]">
      <div className="  flex flex-col xl:gap-[20px] gap-[16px] justify-center items-center">
        <div className="relative rounded-[8px] border xl:py-[12px] xl:pr-[24px] xl:pl-[12px] p-[14px] flex gap-[10px] bg-[#FCFCFD] border-[#F1F1F3]  w-fit items-center ">
          <div className="max-w-[62px] max-h-[62px] bg-[#FFF4E5] rounded-[6px] p-[14px] ">
            <img src="/assets/icons/hero-icon.png" alt="hero-icon" className="max-w-[25px] max-h-[29px]" />
          </div>
          <p className=" 2xl:text-5xl xl:text-4xl text-[16px] font-semibold text-center">
            <span className="text-[#FF9500]">Unlock </span>
            <span className="text-[#1A1A1A]">Your Creative Potential</span>
          </p>
          <img className=" max-w-[39px] max-h-[43px] absolute -left-[23px] -top-[23px]" src="/assets/icons/notion-icon.svg" alt="notion" />
        </div>

        <div className="flex flex-col 2xl:gap-[10px] gap-[6px] text-[#262626] text-center">
          <h4 className=" font-medium xl:text-[28px] 2xl:text-[38px] text-[24px] ">with Online Design and Development Courses.</h4>
          <p className=" text-[14px]xl:text-[16px] 2xl:text-[18px]  font-normal">Learn from Industry Experts and Enhance Your Skills.</p>
        </div>
      </div>

      <div className="flex gap-[12px] font-normal text-[14px]">
        <Link
          href={"#course-section"}
          onClick={() => setActive("courses")}
          className={`  rounded-[6px] px-[20px] py-[14px] ${active === "courses" ? "bg-[#FF9500] text-white border-[#FF9500]" : "bg-white text-[#4C4C4D] border-white"}`}
        >
          Explore Courses
        </Link>
        <Link
          onClick={() => setActive("pricing")}
          href={"#pricing-section"}
          className={` rounded-[6px] px-[20px] py-[14px]  ${active === "pricing" ? "bg-[#FF9500] text-white border-[#FF9500]" : "bg-white text-[#4C4C4D] border-white"}`}
        >
          View Pricing
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
