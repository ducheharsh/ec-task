import React from "react";
import "../../stylesheet/style.css";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { PiAppleLogoLight } from "react-icons/pi";

const SignIn = () => {

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log("Hello Submitted");
    navigate("/");
    e.preventDefault();
  };

  return (
    <>
      <div className="RegistrationWrapper absolute h-full w-full flex items-center justify-center">
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="RegistrationWrapperImg w-full h-full absolute object-cover object-center"></img>
        <div className="RegistrationMain flex-row items-center justify-center h-auto w-auto backdrop-blur-md bg-gray-800 py-6 px-4 rounded-2xl z-10">
          <div className="RegistrationTop flex items-center justify-between px-6 my-4">
            <div className="RegistrationTopLeft flex-row items-center justify-center gap-4 ">
              <div className="RegistrationTopLeftWelcome text-2xl font-light">
                Welcome
              </div>
              <div className="RegistrationTopLeftSignIn text-4xl font-medium">
                Sign In
              </div>
            </div>
            <div className="RegistrationTopRight text-gray-400 ">
              No Account ?
              <br />
              <Link className="text-yellow-200" to="/signup">Sign Up</Link>
            </div>
          </div>
          <div className="RegistrationMid flex gap-3 items-center px-6 my-8">
            <Link to="/">
              <div className="RegistrationMidGoogle flex items-center justify-center gap-2 bg-blue-600 backdrop:blur-sm p-2 px-8 rounded-md">
                <FcGoogle />
                Sign In with Google
              </div>
            </Link>
            <Link to="/">
              <div className="RegistrationMidFacebook flex items-center justify-center bg-blue-600 p-3 rounded-md">
                <FaFacebook />
              </div>
            </Link>
            <Link to="/">
              <div className="RegistrationMidApple flex items-center justify-center bg-blue-600 p-3 rounded-md">
                <PiAppleLogoLight/>
              </div>
            </Link>
          </div>
          <div className="RegistrationBottom my-6">
            <form
              // method="POST"
              onSubmit={handleSubmit}
              className="RegistrationBottomForm m-6"
            >
              <div className="RegistrationBottomEmail px-2 my-4">
                <div className="RegistrationBottomEmailDet py-2">
                  Enter your Email Address
                </div>
                <input
                  type="email"
                  className="RegistrationBottomEmailInput outline-none py-2 rounded-md w-full text-black px-2"
                ></input>
              </div>
              <div className="RegistrationBottomPassword px-2 my-4">
                <div className="RegistrationBottomPasswordDet py-2">
                  Enter your Password
                </div>
                <input
                  type="password"
                  className="RegistrationBottomPasswordInput py-2 outline-none rounded-md w-full text-black px-2"
                ></input>
                <div className="RegistrationBottomForgotPassword flex items-center justify-end my-2 text-blue-600">
                  Forgot Password
                </div>
              </div>
              <div className="RegistrationBottomFormSubmit flex items-center justify-end py-2">
                <input className="bg-blue-600 px-12 py-2 rounded-md" type="submit" name="submit" value="Sign In"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
