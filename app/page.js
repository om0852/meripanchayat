"use client";

import { useRouter } from "next/navigation";
import Sidebar from "./component/Sidebar";
import { useEffect, useState } from "react";
import Header from "./component/Header";

export default function Home() {
  const router = useRouter();
  const [openSidebar, setOpenSidebar] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem("email")) {
      router.push("/login");
    }
  });
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  return (
    <>
      <Sidebar toggleSidebar={toggleSidebar} openSidebar={openSidebar} />
      <div className="w-full h-[100vh]" onClick={()=>setOpenSidebar(false)}>
        Home
      </div>
    </>
  );
}
