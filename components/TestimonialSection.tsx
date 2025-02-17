import { headerContents, testimonialList } from "@/app/constants";
import React from "react";
import HeaderSection from "./HeaderSection";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <div className=" max-w-[1597px] 2xl:mt-[108px] xl:mt-[100px] mt-[50px] xl:mx-[81px] flex flex-col 2xl:gap-[80px] 2xl:mx-[161px] mx-[17px] ">
      <HeaderSection title={headerContents[2].testimonialTitle} description={headerContents[2].testimonialDescription} />;
      <div className="flex flex-wrap xl:gap-[30px] gap-[20px] w-full">
        {testimonialList.map((testimonial, index) => {
          return <TestimonialCard authorImage={testimonial.author.image} key={index} authorName={testimonial.author.name} content={testimonial.content} />;
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
