import AboutSection from "@/components/AboutSection";
import CourseHeader from "@/components/HeaderSectionPage";
import { aboutSections } from "@/constants";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <div className=" 2xl:mx-[30px] xl:mx-[20px] mx-[16px]">
        <CourseHeader
          title={`About Skillbridge`}
          description={
            "Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
          }
        />
      </div>
      {aboutSections.map((section, index) => (
        <AboutSection key={index} title={section.title} description={section.description} aboutItem={section.aboutItem} />
      ))}
    </div>
  );
};

export default AboutUsPage;
