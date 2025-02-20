import React from "react";

interface AboutItemCardProps {
  image: string;
  name: string;
  content: string;
}
const AboutItemCard = ({ image, name, content }: AboutItemCardProps) => {
  return (
    <div className=" 2xl:rounded-[12px] 2xl:p-[50px] xl:rounded-[10px] xl:p-[40px] flex flex-col 2xl:gap-[30px] bg-white gap-[24px] p-[30px] 2xl:max-w-[783px] xl:max-w-[584px] max-w-[358px]">
      <div className="w-[60px] h-[60px]">
        <img src={`/assets/icons/${image}`} alt={name} />
      </div>
      <div className="flex flex-col 2xl:gap-[14px] xl:gap-[10px] gap-[6px]">
        <h3 className=" font-medium 2xl:text-[24px] xl:text-[20px] text-[18px] text-[#262626]">{name}</h3>
        <p className=" font-normal 2xl:text-[18px] xl:text-[16px] text-[14px] text-[#262626]">{content}</p>
      </div>
    </div>
  );
};

export default AboutItemCard;
