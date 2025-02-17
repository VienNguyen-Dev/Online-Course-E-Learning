import Image from "next/image";
import React from "react";

const VideoSection = () => {
  return (
    <div className=" border-[#F7F7F8] max-w-[1596px] 2xl:min-h-[790px] xl:min-h-[649px] min-h-[247px] rounded-[10px] xl:ml-[81px] xl:mr-[81px] mx-[17px] ">
      <div className=" relative">
        <Image className=" rounded-[10px]" src={"/assets/images/video-image.png"} width={2000} height={649} alt="video-image" />
        <Image className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" src={"/assets/images/play-button.png"} width={72} height={72} alt="play-button" />
      </div>
    </div>
  );
};

export default VideoSection;
