import React from "react";
import ReactDOM from "react-dom/client";
import {
  FaArrowUp,
  FaBars,
  FaEdit,
  FaMicrophone,
  FaSearch,
  FaUser,
} from "react-icons/fa";

const Main = () => {
  return (
    // this is the outer box where both the div are put
    <div className="box-border font-light" id="maindiv">
      {/* this is the left side which is looking green */}
      <div className="bg-green-200 cursor-pointer" id="left-bar">
        {/* this is the menu button of the lrft-bar */}
        <div className="m-1.5" id="left-bar-menu ">
          <FaBars />
        </div>

        {/* this is the div where both the button  */}
        <div
          className="mt-13 h-20 flex flex-col justify-between "
          id="left-bar-two-buttons"
        >
          <button
            className="bg-white text-black text-center p-1 cursor-pointer  hover:bg-stone-700 hover:text-white ease-in-out transition-colors duration-300"
            id="left-bar-button-examdetails"
          >
            Exam Details
          </button>
          <button
            className="bg-white text-black text-center p-1 cursor-pointer  hover:bg-stone-700 hover:text-white ease-in-out transition-colors duration-300"
            id="left-bar-button-collegepredictor"
          >
            College Predictor
          </button>
        </div>

        {/* this is option of new chat */}
        <div
          className="mt-5 flex justify-center items-center hover:scale-110 transition-all"
          id="left-bar-newchat"
        >
          <FaEdit />
          <span className="ml-2">New chat</span>
        </div>

        {/* this is the search bar */}
        <div
          className="mt-5 flex justify-center items-center  focus-within:bg-stone-700  focus-within:text-white "
          id="left-bar-search"
        >
          <FaSearch />
          <input
            className="w-17 text-black ml-2 outline-none hover:cursor-pointer focus:text-white focus:w-60 transition-all duration-300 ease-in-out"
            placeholder="search"
          ></input>
        </div>

        {/* this is the recents */}
        <div className="mt-5 ml-2" id="left-bar-recents">
          <h1>Recents</h1>
          <div id="left-bar-recents-data"></div>
        </div>
      </div>

      {/* this is the right-bar */}
      <div id="right-bar">
        {/* this is the top bar in right  */}
        <div
          className="flex justify-between mx-10 h-17 items-center"
          id="right-bar-top"
        >
          {/* this is the logo */}
          <div
            className="flex items-center justify-between w-20 font-extralight text-2xl"
            id="right-bar-top-left"
          >
            <img src="/logo_chatbot.png" alt=""></img>
            <span>Elevate</span>
          </div>

          {/* this is the profile and upgrade */}
          <div
            className="flex w-45 justify-between items-center"
            id="right-bar-top-right"
          >
            <div
              className="flex items-center gap-2 hover:font-semibold transition-all bg-green-200 px-2 py-1 rounded-4xl"
              id="right-bar-upgrade"
            >
              <span>Upgrade</span>
              <FaArrowUp />
            </div>
            <div id="right-bar-profile">
              {/* <FaUser size={24}/> */}
              <h1 className="bg-black cursor-pointer hover:font-semibold transition-all text-white p-1 px-2 rounded-2xl">
                Login
              </h1>
            </div>
          </div>
        </div>
        {/* Middle part of the right side in which searching option is present  */}
        <div className="h-auto place-items-center mt-5 " id="right-bar-middle">
          <h1 className="text-3xl mb-5 focus-within:animate-none">
            Enter your exam score/rank or ask questions to predict colleges with high chances{" "}
          </h1>
          <div
            className="flex w-150 flex-wrap flex-2 justify-between border-1 h-auto text-1xl items-center p-4 rounded-xl focus-within:border-green-400 focus-within:border-2 transition-all"
            id="right-bar-middle-search"
          >
            <FaSearch />
            <textarea
              className="w-115 h-6 resize-none outline-none items-center  text-wrap whitespace-normal break-all overflow-y-hidden-hidden ml-2"
              type="text"
              placeholder="Asks about exams or colleges"
              onInput={(e) => {
                e.currentTarget.style.height = "0px";
                e.currentTarget.style.height =
                  e.currentTarget.scrollHeight + "px";
              }}
            ></textarea>
            <div className="flex gap-1 items-center cursor-pointer ">
              <FaMicrophone />
              <button className="bg-blue-400 rounded-2xl text-white p-1 py-2 hover:bg-blue-500 text-shadow-indigo-100 cursor-pointer transition-all">
                Predict
              </button>
            </div>
          </div>
        </div>


        {/* section----3  college results */}
        <div className=" ml-7  mt-4 w-300">
          <div className="" id="section-3">
            <h1 className="text-4xl  font-extralight">
              "Colleges you can get"
            </h1>
            <div className="flex mt-3 gap-3 flex-wrap" id="section-3-cards">

           {/* this is the show results div */}
              <div className="border rounded-lg p-4 w-50  shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">IIT Bombay</h2>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
                <p className="text-gray-700 mt-2">
                  Chances: <span className="text-green-600 font-semibold">82%</span>
                </p>
              </div>
              <div className="border rounded-lg p-4 w-50  shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">IIT Bombay</h2>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
                <p className="text-gray-700 mt-2">
                  Chances: <span className="text-green-600 font-semibold">82%</span>
                </p>
              </div>
              
             {/* {uptill here we need to putt mapping } */}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
