import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const UserPublic = () => {
  return (
    <>
      <div className="UserPublicWrapper relative rounded-md w-full h-auto bg-gray-800  px-6 py-4">
        <div className="UserPublicTop relative flex-1 pb-4 border-b-2 border-gray-700">
          <div className="UserPublicTopTop flex items-center justify-between">
            <div className="UserPublicTopTopDetails text-xl pb-2">
              Profile Language
            </div>
            <div className="UserPublicTopTopIcons">
              <GoArrowUpRight />
            </div>
          </div>
          <div className="UserPublicTopBottom text-gray-400">English</div>
        </div>
        <div className="UserPublicBottom relative pt-4">
          <div className="UserPublicBottomTop flex items-center justify-between">
            <div className="UserPublicBottomTopDetails text-xl pb-2">
              Public profile & URL
            </div>
            <div className="UserPublicBottomTopIcons">
              <GoArrowUpRight />
            </div>
          </div>
          <Link to="https://www.linkedin.com/in/adhar-battulwar-746022255">
            <div className="UserPublicBottomBottom text-gray-400 flex flex-wrap">
              www.linkedin.com/in/adhar-battulwar-746022255
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserPublic;
