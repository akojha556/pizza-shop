"use client"
import React, { useState } from "react";
import NavHeader from "./components/homepage/NavHeader";
import NavBar from "./components/homepage/NavBar";

const page = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevValue) => {
      return !prevValue;
    });
  };

  return (
    <div className="bg-yellow-500 h-[200svh]">
      <NavHeader handleClick={handleClick} clicked={clicked} />
      <NavBar clicked={clicked} />
    </div>
  )
}

export default page;
