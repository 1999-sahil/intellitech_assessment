import React from "react";
import Image from "next/image";
import { FaMoneyCheck, FaAngleRight } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";

const ExamCard = ({ logo, title, name, users, price }) => {
  return (
    <div className="w-full h-[108px]">
      {/** image and name */}
      <div className="flex gap-2 mb-[9px]">
        <Image
          src={logo}
          alt="logo"
          width={35}
          height={30}
          className="rounded-[10px] border-[0.2px] border-solid border-[#9e9e9e] bg-gray-100"
        />
        <div className="flex flex-col">
          <h2 className="text-black font-urbanist text-[12px] font-bold">
            {title}
          </h2>
          <h2 className="text-[#7C7C7C] font-urbanist text-[12px] font-medium">
            {name}
          </h2>
        </div>
      </div>
      {/** users */}
      <div className="flex gap-2 mb-[8px]">
        <IoIosPeople className="text-[18px] text-[#A1A1A1]" />
        <h2 className="text-[#A1A1A1] font-urbanist text-[12px] font-semibold">
          {users}
        </h2>
      </div>
      {/** price/view details */}
      <div className="flex items-center justify-between mb-[17px]">
        <div className="flex gap-2">
          <FaMoneyCheck className="text-[18px] text-[#A1A1A1]" />
          <h2 className="text-[#A1A1A1] font-urbanist text-[12px] font-semibold">
            {price}
          </h2>
        </div>
        <div className="w-[76px] h-[12px] flex items-center gap-2">
          <h2 className="text-[#246BFD] font-raleway whitespace-nowrap text-[10px] font-semibold">
            View details
          </h2>
          <FaAngleRight className="text-[#246BFD] text-[12px]" />
        </div>
      </div>
      <div className="w-full h-[0.3px] bg-[#9F9F9F] mb-[15px]"></div>
    </div>
  );
};

export default ExamCard;
