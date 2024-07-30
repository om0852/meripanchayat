"use client";

import { useRouter } from "next/navigation";
import Sidebar from "./component/Sidebar";
import { useEffect, useState } from "react";
import Header from "./component/Header";
import { useGlobalContext } from "./context/context";

export default function Home() {
  const router = useRouter();
  const {toggleSidebar,openSidebar,setOpenSidebar}=useGlobalContext();
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      router.push("/login");
    }
  });
  
  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <div className="w-full h-[100vh]" onClick={()=>setOpenSidebar(false)}>
        Home
      </div>
    </>
  );
}
