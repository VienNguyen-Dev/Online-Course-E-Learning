import Link from "next/link";
import React from "react";

const FooterPage = () => {
  return (
    <div className="footer-section 2xl:mt-[150px] xl:mt-[100px] mt-[50px] ">
      <div className=" flex justify-between flex-wrap sm:flex-row">
        <div className="left-footer-section">
          <img className="w-[44px] h-[44px] rounded-[6px]" src="/assets/images/logo.svg" alt="logo" />
          <div className="contact-info">
            <div className="item-info">
              <img src="/assets/icons/email-icon.svg" alt="imail-icon" />
              <p>hello@skillbridge.com</p>
            </div>
            <div className="item-info">
              <img src="/assets/icons/phone-icon.svg" alt="phone-icon" />
              <p>+91 91813 23 2309</p>
            </div>
            <div className="item-info">
              <img src="/assets/icons/location-icon.svg" alt="location-icon" />
              <p>Somewhere in the World</p>
            </div>
          </div>
        </div>
        <div className="right-footer-section">
          <div className="flex gap-[10px] min-h-fit flex-col min-w-[230px]">
            <h4 className="font-semibold text-[18px] text-[#262626]">Home</h4>
            <ul className="flex flex-col gap-[8px] text-[16px] text-[#59595A]">
              <Link href={"/"}>Benefits</Link>
              <Link href={"#"}>Our Courses</Link>
              <Link href={"#"}>Our Testimonials</Link>
              <Link href={"#"}>Our FAQ</Link>
            </ul>
          </div>
          <div className="flex gap-[10px] min-h-fit flex-col min-w-[230px]">
            <h4 className="font-semibold text-[18px] text-[#262626]">About Us</h4>
            <ul className="flex flex-col gap-[8px] text-[16px] text-[#59595A]">
              <Link href={"#"}>Company</Link>
              <Link href={"#"}>Achivevements</Link>
              <Link href={"#"}>Our Goals</Link>
            </ul>
          </div>
          <div className="flex gap-[10px] min-h-fit flex-col min-w-[230px]">
            <h4 className="font-semibold text-[18px] text-[#262626]">Social Profiles</h4>
            <ul className="flex  gap-[14px] text-[16px]">
              <Link className=" rounded-[6px] border p-[12px]  bg-[#F7F7F8] border-[#F1F1F3]" href={"#"}>
                <img src="/assets/icons/facebook-icon.svg" alt="facebook-icon" />
              </Link>
              <Link className=" rounded-[6px] border p-[12px] bg-[#F7F7F8] border-[#F1F1F3]" href={"#"}>
                <img src="/assets/icons/tweet-icon.svg" alt="tweet-icon" />
              </Link>
              <Link className=" rounded-[6px] border p-[12px]  bg-[#F7F7F8] border-[#F1F1F3]" href={"#"}>
                <img src="/assets/icons/linkedin-icon.svg" alt="linkedin-icon" />
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-[#F1F1F3] border w-full" />
      <div className="w-full">
        <p className="text-[#656567] text-sm text-center">© 2023 Skillbridge. All rights reserved.</p>
      </div>
    </div>
  );
};

export default FooterPage;
