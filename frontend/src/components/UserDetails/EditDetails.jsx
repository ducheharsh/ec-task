import React from "react";
import "../../stylesheet/style.css";
import { useNavigate } from "react-router-dom";

const EditDetails = () => {


    const navigate = useNavigate();


  const handleSubmit = () => {
    console.log("Hnadelled Submit");
    navigate("/");
    // e.preventDefault();
  };

  return (
    <>
      <div className="EditDetailsWrapper absolute h-full w-full flex justify-center items-center text-gray-300">
        <div className="EditDetailsMain h-5/6 w-2/3 bg-gray-800 flex-row justify-center items-center py-6 rounded-2xl">
          <div className="EditDetailsHead relative h-auto border-b-2  border-gray-400 px-4 pb-2">
            Edit Intro
          </div>
          <div className="EditDetailsContent relative h-5/6 overflow-scroll overflow-x-hidden ml-4 ">
            <div className="EditDetailsContentWarnings text-gray-600">
              * indicates required
            </div>
            <form
              className="EditDetailsContentForm"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="EditDetailsContentFormName py-4 mr-4">
                <div className="EditDetailsContentFormFirstName flex-row space-y-3 mb-6">
                  <div>First Name*</div>
                  <input
                    type="text"
                    placeholder="Enter Your first Name"
                    className="w-full ml-1 px-4 py-2 rounded-md outline-none"
                    required
                  ></input>
                </div>
                <div className="EditDetailsContentFormLastName flex-row space-y-3 mb-6">
                  <div>Last Name*</div>
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="w-full ml-1 px-4 py-2 rounded-md outline-none"
                    required
                  ></input>
                </div>
                <div className="EditDetailsContentFormAdditionalName flex-row space-y-3 mb-6">
                  <div>Additional Name</div>
                  <input
                    type="text"
                    placeholder="Enter Your Additional Name"
                    className="w-full ml-1 px-4 py-2 rounded-md outline-none"
                  ></input>
                </div>
              </div>
              <div className="EditDetailsContentFormPronoun mr-4">
                <div className="EditDetailsContentFormPronounDets flex-row space-y-3">
                  <div className="">Pronouns</div>
                  <select
                    className="w-full ml-1 px-4 py-2 rounded-md outline-none"
                    placeholder="Please Select"
                  >
                    <option>Adhar</option>
                    <option>hsfd</option>
                  </select>
                </div>
              </div>
              <div className="EditDetailsContentFormHeadlines mt-6 mr-4">
                <div className="EditDetailsContentFormHeadlinesDets flex-row space-y-3">
                  <div className="">Headlines</div>
                  <textarea className="w-full ml-1 px-4 py-2 rounded-md outline-none"></textarea>
                </div>
              </div>
              <div className="EditDetailsContentFormEducation mt-6 mr-4">
                <div className="EditDetailsContentFormEducationSchool flex-row space-y-3">
                  <div>School*</div>
                  <input
                    type="text"
                    className="w-full ml-1 px-4 py-2 rounded-md outline-none"
                    placeholder="sdf"
                  ></input>
                </div>
                <div className="EditDetailsContentFormEducationAddNew"></div>
              </div>
              <div className="EditDetailsContentFormLocation mt-6 mr-4 flex-row space-y-3">
                <div className="text-2xl mb-3">Location</div>
                <div className="EditDetailsContentFormLocationCountry flex-row space-y-3">
                  <div className="">Country/Region</div>
                  <select className="w-full ml-1 px-4 py-2 rounded-md outline-none">
                    <option>Adhar</option>
                    <option>sdfsdf</option>
                    <option>klmlkj</option>
                  </select>
                </div>
                <div className="EditDetailsContentFormLocationCity flex-row space-y-3">
                  <div className="">City</div>
                  <select className="w-full ml-1 px-4 py-2 rounded-md outline-none">
                    <option>Adhar</option>
                    <option>sdfsdf</option>
                    <option>klmlkj</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="EditDetailsSave h-auto border-t-2 mt-3 flex justify-end items-center border-gray-400 px-5 pb-4">
            <button onClick={handleSubmit} className="EditDetailsSaveButton px-6 py-2 mt-2 bg-blue-600 rounded-md">
                Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditDetails;
