"use client";
import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import { freePlans, headerContents, proPlans } from "@/app/constants";
import { Button } from "./ui/button";
import PlanItem from "./PlanItem";

const PricingSection = () => {
  const [planPackage, setPlanPackage] = useState("monthly");
  console.log(planPackage);
  return (
    <div id="pricing-section" className="2xl:mt-[168px] xl:mt-[100px] mt-[50px] flex 2xl:mx-[161px] xl:mx-[81px] mx-[17px] flex-col  max-w-[1597px] 2xl:gap-[80px] xl:gap-[60px]  gap-[40px]">
      <HeaderSection setPlanPackage={setPlanPackage} title={headerContents[3].pricingTitle} description={headerContents[3].pricingDescription} />
      {planPackage === "monthly" ? (
        <div className="2xl:p-[80px] xl:p-[50px] flex flex-col sm:flex-row gap-[30px] rounded-[12px] bg-white p-[20px] ">
          <div className=" rounded-[12px] border border-[#F1F1F3] 2xl:py-[50px] 2xl:px-[30px] xl:py-[40px] xl:px-[24px] bg-[#FCFCFD] flex flex-col xl:gap-[50px] gap-[30px] w-full py-[30px] px-[20px]">
            <div className=" rounded-[6px] border px-[22px] 2xl:py-[12px] xl:py-[10px] bg-[#FFF9F0] border-[#FFEACC] 2xl:text-[22px] text-[#262626] font-medium text-center xl:text-[18px] text-[16px] py-[8px] ">
              Free Plan
            </div>
            <p className=" text-center">
              <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">$0</span>/
              <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">month</span>
            </p>
            <div className="w-full">
              <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                <div className=" flex flex-col sm:pr-[30px] sm:pl-[30px] gap-[20px]">
                  {freePlans.map((item, index) => {
                    return <PlanItem key={index} image={item.image} content={item.content} />;
                  })}
                </div>
              </div>
              <Button className=" rounded-br-[8px] rounded-bl-[8px] py-[20px] px24px- bg-[#FF9500] text-center 2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold w-full text-white max-h-[67px]">
                Get Started
              </Button>
            </div>
          </div>
          <div className=" rounded-[12px] border border-[#F1F1F3] 2xl:py-[50px] 2xl:px-[30px] xl:py-[40px] xl:px-[24px] bg-[#FCFCFD] flex flex-col xl:gap-[50px] w-full py-[30px] px-[20px] gap-[30px]">
            <div className=" rounded-[6px] border px-[22px] 2xl:py-[12px] xl:py-[10px] bg-[#FFF9F0] border-[#FFEACC] 2xl:text-[22px] text-[#262626] font-medium text-center xl:text-[18px] text-[16px] py-[8px] ">
              Pro Plan
            </div>
            <p className=" text-center">
              <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">$79</span>/
              <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">month</span>
            </p>
            <div className="w-full">
              <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                <div className=" flex flex-col sm:pr-[30px] sm:pl-[30px] gap-[20px]">
                  {proPlans.map((item, index) => {
                    return <PlanItem key={index} image={item.image} content={item.content} />;
                  })}
                </div>
              </div>
              <Button className=" rounded-br-[8px] rounded-bl-[8px] py-[20px] px-[24px] bg-[#FF9500] text-center 2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold w-full text-white max-h-[67px] ">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="2xl:p-[80px] xl:p-[50px] flex flex-col sm:flex-row gap-[30px] rounded-[12px] bg-white p-[20px] ">
          <div className=" rounded-[12px] border border-[#F1F1F3] 2xl:py-[50px] 2xl:px-[30px] xl:py-[40px] xl:px-[24px] bg-[#FCFCFD] flex flex-col xl:gap-[50px] gap-[30px] w-full py-[30px] px-[20px]">
            <div className=" rounded-[6px] border px-[22px] 2xl:py-[12px] xl:py-[10px] bg-[#FFF9F0] border-[#FFEACC] 2xl:text-[22px] text-[#262626] font-medium text-center xl:text-[18px] text-[16px] py-[8px] ">
              Free Plan
            </div>
            <p className=" text-center">
              <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">$0</span>/
              <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">year</span>
            </p>
            <div className="w-full">
              <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                <div className=" flex flex-col sm:pr-[30px] sm:pl-[30px] gap-[20px]">
                  {freePlans.map((item, index) => {
                    return <PlanItem key={index} image={item.image} content={item.content} />;
                  })}
                </div>
              </div>
              <Button className=" rounded-br-[8px] rounded-bl-[8px] py-[20px] px24px- bg-[#FF9500] text-center 2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold w-full text-white max-h-[67px]">
                Get Started
              </Button>
            </div>
          </div>
          <div className=" rounded-[12px] border border-[#F1F1F3] 2xl:py-[50px] 2xl:px-[30px] xl:py-[40px] xl:px-[24px] bg-[#FCFCFD] flex flex-col xl:gap-[50px] w-full py-[30px] px-[20px] gap-[30px]">
            <div className=" rounded-[6px] border px-[22px] 2xl:py-[12px] xl:py-[10px] bg-[#FFF9F0] border-[#FFEACC] 2xl:text-[22px] text-[#262626] font-medium text-center xl:text-[18px] text-[16px] py-[8px] ">
              Pro Plan
            </div>
            <p className=" text-center">
              <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">$899</span>/
              <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">year</span>
            </p>
            <div className="w-full">
              <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                <div className=" flex flex-col sm:pr-[30px] sm:pl-[30px] gap-[20px]">
                  {proPlans.map((item, index) => {
                    return <PlanItem key={index} image={item.image} content={item.content} />;
                  })}
                </div>
              </div>
              <Button className=" rounded-br-[8px] rounded-bl-[8px] py-[20px] px-[24px] bg-[#FF9500] text-center 2xl:text-[18px] xl:text-[16px] text-[14px] font-semibold w-full text-white max-h-[67px] ">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingSection;
