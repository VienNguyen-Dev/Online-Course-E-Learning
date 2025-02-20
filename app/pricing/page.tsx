"use client";
import FQASection from "@/components/FQASection";
import HeaderSectionPage from "@/components/HeaderSectionPage";
import PlanItem from "@/components/PlanItem";
import { Button } from "@/components/ui/button";
import { freePlans, proPlans } from "@/constants";
import React, { useState } from "react";

const PricingPage = () => {
  const [active, setActive] = useState("monthly");
  return (
    <div className=" flex flex-col">
      <div className="2xl:mx-[30px] xl:mx-[20px] mx-[16px]">
        <HeaderSectionPage
          title="Our Pricings"
          description="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
      </div>
      <div className="flex flex-col items-center 2xl:mx-[162px] xl:mx-[80px] mx-[16px]">
        <div className=" 2xl:mt-[100px] xl:mt-[80px] mt-[50px]  flex flex-col items-center 2xl:gap-[50px] gap-[20px] xl:gap-[40px] ">
          <div className="flex p-[12px] rounded-[8px] bg-white w-fit ">
            <Button
              className={`rounded-[6px] border py-[12px] px-[14px] w-[96px] h-[49px] font-medium text-center 2xl:text-[18px] xl:px-[24px] xl:py-[12px] text-[14px] ${
                active === "monthly" ? "bg-[#FF9500] text-white border-[#FF9500]" : "bg-white text-[#4C4C4D] border-white"
              }`}
              onClick={() => {
                setActive("monthly");
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
              }}
            >
              Yearly
            </Button>
          </div>
          <div className="2xl:p-[80px] xl:p-[50px] flex flex-col sm:flex-row gap-[30px] rounded-[12px] bg-white p-[20px] ">
            <div className=" rounded-[12px] border border-[#F1F1F3] 2xl:py-[50px] 2xl:px-[30px] xl:py-[40px] xl:px-[24px] bg-[#FCFCFD] flex flex-col xl:gap-[50px] gap-[30px] w-full py-[30px] px-[20px]">
              <div className=" rounded-[6px] border px-[22px] 2xl:py-[12px] xl:py-[10px] bg-[#FFF9F0] border-[#FFEACC] 2xl:text-[22px] text-[#262626] font-medium text-center xl:text-[18px] text-[16px] py-[8px] ">
                Free Plan
              </div>
              <p className=" text-center">
                <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">$0</span>/
                <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">{`${active === "monthly" ? "month" : "year"}`}</span>
              </p>
              <div className="w-full">
                <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                  <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                  <div className=" flex flex-col lg:px-[30px] gap-[20px] overflow-auto">
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
              <p className=" text-center ">
                <span className=" 2xl:text-[80px] xl:text-[60px]  font-semibold text-[#262626] text-[50px]">{`${active === "monthly" ? "$79" : "$899"}`}</span>/
                <span className="text-[#4C4C4D] 2xl:text-[20px] xl:text-[16px] font-medium text-[14px]">{`${active === "monthly" ? "month" : "year"}`}</span>
              </p>
              <div className="w-full">
                <div className=" xl:rounded-tl-[14px] xl:rounded-tr-[14px] border border-[#F1F1F3] 2xl:p-[40px] xl:p-[30px] bg-white flex flex-col 2xl:gap-[30px] xl:gap-[24px] rounded-tl-[10px] rounded-tr-[10px] p-[20px] gap-[20px] ">
                  <h4 className=" font-medium 2xl:text-[20px] xl:text-[18px] text-[16px] text-[#262626] text-center">Available Features</h4>

                  <div className=" flex flex-col lg:px-[30px] px-0 gap-[20px]">
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
        </div>
      </div>
      <FQASection />
    </div>
  );
};

export default PricingPage;
