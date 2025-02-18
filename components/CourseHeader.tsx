import React from "react";

interface CourseHeaderProps {
  title: string;
  description: string;
}

const CourseHeader = ({ title, description }: CourseHeaderProps) => {
  return (
    <div className="2xl:mt-[109px] border-b border-[#E4E4E7]   flex 2xl:gap-[100px] xl:mt-[80px]  xl:gap-[80px] flex-col  mt-[50px]   sm:flex-row gap-[16px] 2xl:max-w-[1860px] sm:max-w-[1400px] max-w-[358px]   2xl:pb-[50px]  xl:px-[60px] xl:pb-[40px] pb-[30px] ">
      <div className=" w-full">
        <h1 className="2xl:max-w-[748px] max-w-[600px]  2xl:text-[48px] font-semibold text-[#262626] xl:text-[38px] text-[28px] ">{title}</h1>
      </div>
      <div className="w-full">
        <p className="2xl:max-w-[748px] max-w-[600px] 2xl:text-[18px] xl:text-[16px] text-[14px] font-normal text-[#59595A]">{description}</p>
      </div>
    </div>
  );
};

export default CourseHeader;
