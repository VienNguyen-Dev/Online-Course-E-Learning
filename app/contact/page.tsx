import ContactSection from "@/components/ContactSection";
import HeaderSectionPage from "@/components/HeaderSectionPage";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col">
      <div className="2xl:mx-[30px] xl:mx-[20px] mx-[16px]">
        <HeaderSectionPage
          title="Contact Us"
          description="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
        />
      </div>
      <div className=" 2xl:mx-[162px] xl:mx-[80px] mx-[16px] rounded-[12px]">
        <div className=" 2xl:max-w-[1596px] 2xl:mt-[100px] xl:mt-[80px] mt-[50px] xl:max-w-[1280px] w-full">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
