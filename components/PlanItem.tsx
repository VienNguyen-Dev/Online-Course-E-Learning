"use client";
import React, { useState } from "react";

const PlanItem = ({ content, image }: { content: string; image: string }) => {
  const [imageStyle, setImageStyle] = useState(image.includes("close"));
  return (
    <div className=" rounded-[8px] border p-[14px] flex gap-[12px] border-[#F1F1F3] max-h-[60px] max-w-[504px]">
      <div
        className={`2xl:rounded-[6px] 2xl:p-[6px] rounded-[4px] p-[4px] 2xl:max-w-[32px] 2xl:max-h-[32px] max-w-[24px] max-h-[24px] h-auto  ${
          imageStyle ? "bg-white border border-[#F1F1F3]" : "bg-[#FFF4E5] border-none"
        }`}
      >
        <img className="w-fit h-fit" src={image} alt="item" />
      </div>
      <p className=" 2xl:text-[18px] text-[14px] text-[#4C4C4D] font-normal">{content}</p>
    </div>
  );
};

export default PlanItem;
