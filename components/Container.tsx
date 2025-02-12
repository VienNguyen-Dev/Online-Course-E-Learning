"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Container = () => {
  const pathname = usePathname();

  return (
    <div className="sub-container">
      <div className="text-sub-container">
        <p className="heading-text">Students Testimonials</p>
        <p className="paragraph-text">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className="review-sub-container">
        <div className="card">
          <div className="card-content">
            {" "}
            <p>
              The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!
            </p>
          </div>
          <div className="card-info">
            <div className="user-info">
              <Image src={"/assets/images/user-info.png"} width={50} height={50} alt="user-info" />
              <span>Sarah L</span>
            </div>
            <Button className="btn-read">Read Full Story</Button>
          </div>
        </div>
        <div className="btn-pagination">
          <Button className="arrow-btn">
            <img src="/assets/icons/left-arrow-icon.svg" alt="left-arrow" />
          </Button>
          <Button className="arrow-btn">
            <img src="/assets/icons/right-arrow-icon.svg" alt="right-arrow" />
          </Button>
        </div>
      </div>
    </div>
  );
};
