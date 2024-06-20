import React from "react";
import Header from "./Header";
import { MAINBG } from "../utils/constants.jsx";
import Landing from "./Landing.jsx";
const Body = () => {
  return (
    <div className="bg-violet-400 w-full h-full absolute">
      {/* <img className="absolute" src={MAINBG} alt="BG" /> */}
      <Header />
      <Landing />
    </div>
  );
};

export default Body;
