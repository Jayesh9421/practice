import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BsHouseDoor } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

const SearchDiv = () => {
  return (
    <div className="flex justify-center">
      <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-2xl">
            {/* job */}
            <div className="flex gap-2 items-center text-2xl">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none "
                placeholder="search job here...."
              />
              <IoIosCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
            {/* companey */}
            <div className="flex gap-2 items-center text-2xl">
              <BsHouseDoor className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none "
                placeholder="search by companey...."
              />
              <IoIosCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
            <div className="flex gap-2 items-center text-2xl">
              <GrLocation className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-blue-500 focus:outline-none "
                placeholder="search by city...."
              />
              <IoIosCloseCircleOutline className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>
            <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300">
              Search
            </button>
          </div>
        </form>

        <div className="secDiv flex items-center gap-10 justify-center">
          <div>
            <label htmlFor="relevance" className="text-[#808080] font-semibold">
              Sort by:
            </label>
            <select
              name=""
              id="relevance"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Relevance</option>
              <option value="">Inclusive</option>
              <option value="">Starts with</option>
              <option value="">Contains</option>
            </select>
          </div>

          <div className="secDiv flex items-center gap-10 justify-center">
            <label htmlFor="type" className="text-[#808080] font-semibold">
              Type:
            </label>
            <select
              name=""
              id="type"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Full-Time</option>
              <option value="">Remote</option>
              <option value="">Contract</option>
              <option value="">Part-Time</option>
            </select>
          </div>

          <div className="secDiv flex items-center gap-10 justify-center">
            <label htmlFor="leve" className="text-[#808080] font-semibold">
              Level :
            </label>
            <select
              name=""
              id="level"
              className="bg-white rounded-[3px] px-4 py-1"
            >
              <option value="">Senior</option>
              <option value="">Beginner</option>
              <option value="">Intermediate</option>
              <option value="">Advance</option>
            </select>
          </div>
          <span className="text-[#a1a1a1] cursor-pointer">Clear All</span>
        </div>
      </div>
    </div>
  );
};

export default SearchDiv;
