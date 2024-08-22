import React from "react";
import { Link } from "react-router-dom";
// import "../../stylesheet/UserDetails.css"

const UserDetails = () => {
  return (
    <>
      <div className="UserDetailsWrapper relative rounded-lg h-1/2 w-4/5 bg-gray-800 pb-5">
        <div className="UserDetailsTop object-cover object-center h-auto w-auto rounded-md">
          <img
            className="h-fit w-fit object-cover object-center rounded-lg"
            src="https://marketplace.canva.com/EAE2cQaUHVA/1/0/1600w/canva-black-minimal-motivation-quote-linkedin-banner-HoRi-2buBWk.jpg"
            alt="img"
          ></img>
        </div>
        <div className="UserDetailsProfile absolute left-10 top-20 h-40 w-40 p-2 rounded-full bg-gray-800">
            <img src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png" alt="img">
            </img>
        </div>
        <div className="UserDetailsMid flex justify-between items-start gap-4 mt-4 mb-1 h-full w-full p-2 pt-10">
          <div className="UserDetailsMidLeft flex-1 flex-col  w-2/3">
            <div className="UserDetailsMidLeftProfileName font-medium text-2xl">
              Adhar Battulwar
            </div>
            <div className="UserDetailsMidLeftHeadLines text-base">
              Frontend Developer | MERN Stack Developer | Expert React.js
              Devloper | Design Enthusiast | Social Worker | AI Enthusiast |
              Ready to Drive Innovation | Startup-Friendly Developer
            </div>
            <div className="UserDetailsMidLeftContacts flex gap-4 items-center my-3">
              <div className="UserDetailsMidLeftLocation text-gray-300">
                Pune, Maharashtra, India
              </div>
              <div className="UserDetailsMidLeftContactInfo text-blue-600">
                Contact Info
              </div>
            </div>
            <div className="UserDetailsMidLeftLink mb-1">
              <Link to="/" className="text-blue-600">MyPortfolio</Link>
            </div>
          </div>
          <div className="UserDetailsMidRight w-1/3">
            <div className="UserDetailsMidRightEdit"></div>
            <div className="UserDetailsMidRightInstitue flex gap-3">
              <div className="UserDetailsMidRightInstitueLogo">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D0BAQHYkOo57xj2yg/company-logo_100_100/company-logo_100_100/0/1631348125677?e=1732147200&v=beta&t=rfxp9TM5AAc9oEVHl8abuP_hykpWmmnwKVbxRfGlQTY"
                  alt="img"
                ></img>
              </div>
              <div className="UserDetailsMidRightInstitueName">
                Vishwakarma Institute Of Information Technology
              </div>
            </div>
          </div>
        </div>
        <div className="UserDetailsBottom w-4/5 flex-col p-2">
            <div className="UserDetailsBottomConnections mb-2 ">
                500+ Connections
            </div>
            <div className="UserDetailsBottomSections flex gap-3 items-center justify-between">
                <div className="UserDetailsBottomSection1 h-auto w-auto px-4 py-2 bg-gray-500 rounded-full cursor-pointer">
                   Open To 
                </div>
                <div className="UserDetailsBottomSection2 h-auto w-auto px-4 py-2 bg-gray-500 rounded-full cursor-pointer">
                    Add Profile Sections
                </div>
                <div className="UserDetailsBottomSection3 h-auto w-auto px-4 py-2 bg-gray-500 rounded-full cursor-pointer">
                    Enhance Profile
                </div>
                <div className="UserDetailsBottomSection4 h-auto w-auto px-4 py-2 bg-gray-500 rounded-full cursor-pointer">
                    More
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
