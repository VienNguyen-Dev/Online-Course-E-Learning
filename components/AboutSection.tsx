import React from "react";
import AboutItemCard from "./AboutItemCard";
import { Button } from "./ui/button";

interface AboutItem {
  name: string;
  image: string;
  content: string;
}
interface AboutSectionProps {
  title: string;
  description: string;
  aboutItem: AboutItem[];
}
const AboutSection = ({ title, description, aboutItem }: AboutSectionProps) => {
  return (
    <div className="flex flex-col 2xl:mx-[162px] xl:mx-[80px] mx-[16px] 2xl:gap-[80px] xl:gap-[60px] gap-[50px] 2xl:mt-[100px] xl:mt-[80px] mt-[50px]">
      <div className="flex flex-col gap-[6px]">
        <h1 className=" font-medium 2xl:text-[48px] xl:text-[30px] text-[24px] text-[#333333]">{title}</h1>
        <p className=" font-normal 2xl:text-[18px] xl:text-[16px] text-[#59595A] text-[14px]">{description}</p>
      </div>
      <div className="flex flex-wrap flex-col sm:flex-row 2xl:gap-[30px] gap-[20px] w-full">
        {aboutItem.map((item, index) => (
          <AboutItemCard key={index} image={item.image} name={item.name} content={item.content} />
        ))}
      </div>
      {title === "Our Goals" && (
        <div className="2xl:rounded-[12px] 2xl:p-[80px] flex xl:gap-[300px] bg-white relative rounded-[10px] xl:p-[60px] gap-[40px] p-[30px] flex-col sm:flex-row sm:max-h-[250px] max-h-[324px] sm:items-center">
          <div className="flex flex-col gap-[20px] w-full h-full ">
            <div className="2xl:max-w-[1008px] xl:max-w-[757px] lg:max-w-[550px]  max-w-[298px] z-50">
              <h2 className=" font-semibold 2xl:text-[48px] xl:text-[38px] text-[28px] ">
                {" "}
                <span className=" text-[#FF9500]">Together</span>
                <span className="text-[#262626]">&lsquo; let&apos;s shape the future of digital innovation</span>
              </h2>
              <p className=" font-normal 2xl:text-[18px] xl:text-[16px] text-[14px] text-[#4C4C4D]">Join us on this exciting learning journey and unlock your potential in design and development.</p>
            </div>
            <div className="2xl:max-w-[445px] sm:max-w-[361px]  max-w-[190px] sm:max-h-[361px] max-h-[190px] -bottom-[12%] right-0  absolute sm:top-0 sm:right-[10%]">
              <img className="object-cover" src="/assets/images/digital-images.svg" alt="" />
            </div>
          </div>

          <Button className=" 2xl:rounded-[18px] rounded-[6px] 2xl:py-[18px] 2xl:px-[24px] bg-[#FF9500] 2xl:text-[18px] text-[#FFFFFF] w-fit xl:py-[14px] xl:px-[20px]">Join Now</Button>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
