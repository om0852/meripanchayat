"use client"
import React from "react";
import Loader from "./component/Loader";
import { useGlobalContext } from "./context/context";

const Provider = ({ children }) => {
    const {setOpenSidebar,loader}=useGlobalContext();
  return (
    <div onClick={()=>setOpenSidebar(false)}>
{loader &&      <Loader />
}      {children}
    </div>
  );
};

export default Provider;
