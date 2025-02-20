import React from "react";

interface ContactInfoProps {
  image: string[];
  info: string;
}

const ContactInfo = ({ image, info }: ContactInfoProps) => {
  return (
    <div className="flex flex-col gap-[14px] rounded-[6px] p-[30px] bg-[#FCFCFD] border border-[#F1F1F3] items-center justify-center  ">
      <div className="flex items-center gap-[10px] justify-center">
        {image.map((img, i) => (
          <div key={i} className="flex rounded-[6px] border p-[12px] bg-[#F7F7F8] border-[#F1F1F3]">
            <img src={`/assets/icons/${img}`} alt={img} />
          </div>
        ))}
      </div>
      <p className=" font-normal xl:text-[16px] text-[14px] text-[#4C4C4D]">{info}</p>
    </div>
  );
};

export default ContactInfo;
