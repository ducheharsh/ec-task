import React from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineModeEdit } from "react-icons/md";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const UserExtraSections = (props) => {
  return (
    <>
      <div className="UserExtraSectionsWrapper relative h-auto w-full bg-gray-800 my-4 rounded-md">
        <div className="UserExtraSectionsHead w-full flex items-center justify-between px-6">
          <div className="UserExtraSectionsHeadLeft w-1/2 text-2xl font-normal">
            {props.name}
          </div>
          <div className="UserExtraSectionsHeadRight w-1/2 flex gap-8 items-center justify-end ">
            <Link to="/">
              <div className="UserExtraSectionsHeadRightAdd w-auto scale-150">
                <IoMdAdd />
              </div>
            </Link>
            <Link to="/">
              <div className="UserExtraSectionsHeadRightEdit scale-150">
                <MdOutlineModeEdit className="h-10"/>
              </div>
            </Link>
          </div>
        </div>
        <div className="UserExtraSectionsContent p-6 ">
          <div className="UserExtraSectionsContent1 text-xl pb-2 my-3 border-b-2 border-gray-700">
            {props.Skill1}
          </div>
          <div className="UserExtraSectionsContent1 text-xl pb-2 mt-3 border-b-2 border-gray-700">
            {props.Skill2}
          </div>
          <Link to="/">
            <div className="UserExtraSectionsContentShowAll w-full h-10 flex items-center justify-center gap-4  text-gray-400 hover:bg-gray-700">
              Show All 13 {props.name}
              <BiSolidRightArrowCircle />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserExtraSections;
