"use client"
import React, { useContext } from "react";
import { AppContext, useGlobalContext } from "../context/context";

const Header = () => {
  const {toggleSidebar}=useGlobalContext();
  return (
    <div className="w-full h-[10vh]  bg-white-500 border-2 flex flex-row items-center">
      <div className="w-[40%] h-full flex flex-row items-center justify-start px-2">
        <img
        onClick={toggleSidebar}
          width="30"
          height="30"
          src="https://img.icons8.com/ios-filled/50/menu--v1.png"
          alt="menu--v1"
        />
      </div>
      <div className="flex flex-row gap-2">
        <img src="/merilogo.png" width={40} />
        <div className="flex flex-col line-0 gap-0">
          <span>Meri</span>
          <span>Panchayat</span>
        </div>
      </div>
    </div>
  );
};

export default Header;