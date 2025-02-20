import React from "react";
// import { Button } from "./ui/button";
import { cardContents, headerContents } from "@/constants";
import CardContent from "./CardContent";
import HeaderSection from "./HeaderSection";

const BenefitSection = () => {
  return (
    <div className="benefit-section">
      <HeaderSection title={headerContents[0].benefitTitle} description={headerContents[0].bebefitDescription} />;
      <div className="flex sm:flex-row flex-col sm:flex-wrap gap-[20px] w-full">
        {cardContents.map((content, index) => {
          return <CardContent key={index} cardNumber={content.cardNumber} title={content.title} description={content.description} />;
        })}
      </div>
    </div>
  );
};

export default BenefitSection;
