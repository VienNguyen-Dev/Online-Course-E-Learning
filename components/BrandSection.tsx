import React from "react";

const BrandSection = () => {
  return (
    <div className="w-full mx-auto">
      <div className="brand-section">
        <div className="px-[40px] py-[30px]">
          <img src="/assets/icons/zapier-icon.svg" alt="zapier-icon" />
        </div>
        <div className="px-[40px] py-[30px]">
          <img src="/assets/icons/zoom-icon.svg" alt="zoom-icon" />
        </div>
        <div className="px-[40px] py-[30px]">
          <img src="/assets/icons/amazon-icon.svg" alt="amazon-icon" />
        </div>
        <div className="px-[40px] py-[30px] hidden sm:block">
          <img src="/assets/icons/adobe-icon.svg" alt="adobe-icon" />
        </div>
        <div className="px-[40px] py-[30px] hidden sm:block">
          <img src="/assets/icons/notion2-icon.svg" alt="notion2-icon" />
        </div>
        <div className="px-[40px] py-[30px] hidden sm:block">
          <img src="/assets/icons/netflix-icon.svg" alt="netflix-icon" />
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
