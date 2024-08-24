import React from "react";
import "../../stylesheet/style.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { PiAppleLogoLight } from "react-icons/pi";

const SignUp = () => {
const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("Hello Submitted");
    navigate("/");
    e.preventDefault();
  };

  return (
    <>
      <div className="SignUpWrapper absolute h-full w-full flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="SignUpWrapperImg w-full h-full absolute object-cover object-center"
        ></img>
        <div className="SignUpMain flex-row items-center justify-center h-auto w-auto backdrop-blur-md bg-gray-800 py-6 px-4 rounded-2xl z-10">
          <div className="SignUpTop flex items-center justify-between px-6 my-4">
            <div className="SignUpTopLeft flex-row items-center justify-center gap-4 ">
              <div className="SignUpTopLeftWelcome text-2xl font-light">
                Welcome
              </div>
              <div className="SignUpTopLeftSignIn text-4xl font-medium">
                Sign Up
              </div>
            </div>
            <div className="SignUpTopRight text-gray-400 ">
              Have an Account ?
              <br />
              <Link className="text-yellow-200" to="/registration">
                Sign In
              </Link>
            </div>
          </div>
          <div className="SignUpBottom my-6">
            <form
            //   method="POST"
              onSubmit={handleSubmit}
              className="SignUpBottomForm m-6"
            >
              <div className="SignUpBottomEmail px-2 my-4">
                <div className="SignUpBottomEmailDet py-2">
                  Enter your Email Address
                </div>
                <input
                  type="email"
                  className="bg-gray-700 SignUpBottomEmailInput outline-none py-2 rounded-md w-full text-white px-2"
                ></input>
              </div>
              <div className="SignUpBottomDetails flex justify-start gap-10 items-center">
                <div className="SignUpBottomDetailsUsername px-2 my-4">
                  <div className="SignUpBottomDetailsDetUsername py-2">
                    Enter your Username
                  </div>
                  <input
                    type="text"
                    className="bg-gray-700 SignUpBottomDetailsInputUsername outline-none py-2 rounded-md w-full text-white px-2"
                  ></input>
                </div>
                <div className="SignUpBottomDetailsContact px-2 my-4">
                  <div className="SignUpBottomDetailsDetContact py-2">
                    Enter your Contact Number
                  </div>
                  <input
                    type="email"
                    className="bg-gray-700 SignUpBottomDetailsInputContact outline-none py-2 rounded-md w-full text-white px-2"
                  ></input>
                </div>
              </div>
              <div className="SignUpBottomPassword px-2 my-4">
                <div className="SignUpBottomPasswordDet py-2">
                  Enter your Password
                </div>
                <input
                  type="password"
                  className="bg-gray-700 SignUpBottomPasswordInput py-2 outline-none rounded-md w-full text-white px-2"
                ></input>
                <div className="SignUpBottomForgotPassword flex items-center justify-end my-2 text-blue-600">
                  Forgot Password
                </div>
              </div>
              <div className="SignUpBottomFormSubmit flex items-center justify-end py-2">
                <input
                  className="bg-blue-600 px-12 py-2 rounded-md"
                  type="submit"
                  name="submit"
                  value="Sign Up"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
