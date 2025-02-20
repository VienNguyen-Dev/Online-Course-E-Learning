import React from "react";
import { ContactForm } from "./ContactForm";
import { contactInfo } from "@/constants";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <div className="flex   w-full bg-white sm:flex-row flex-col">
      <ContactForm />
      <div className=" flex flex-col xl:gap-[24px] xl:p-[60px] gap-[20px] p-[30px] xl:max-w-[410px] w-full max-w-[358px]">
        {contactInfo.map((c, i) => (
          <ContactInfo key={i} image={c.image} info={c.info} />
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
