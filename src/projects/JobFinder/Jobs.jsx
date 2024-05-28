import React, { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import Data from "./data";

const Jobs = () => {
  const [job, setJob] = useState(Data);

  return (
    <div className="jobContainer grid lg:grid-cols-4 gap-10 justify-center p-10 mt-10">
      {job.map(({ id, image, title, time, location, desc, company }) => {
        return (
          <div key={id} className="group single bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
            <span className="flex justify-between items-center gap-4 p-4">
              <h1 className="text-[16px] font-bold text-textColor group-hover:text-white">
                {title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive /> {time}
              </span>
            </span>
            <h6 className="text-[#ccc] px-4">{location}</h6>
            <p className="text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white px-4">
              {desc}
            </p>
            <div className="company flex items-center gap-2 p-4">
              <BsChatDots className="w-[10%]" />
              <span className="text-[14px] block group-hover:text-white text-emerald-600">
                {company}
              </span>
            </div>
            <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-black">
              Apply Now
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Jobs;
