"use client";
import React from "react";
import Avatar from "./Avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const { toggleSidebar, openSidebar, setOpenSidebar, setUserData } =
    useGlobalContext();
  const router = useRouter();
  let menuOptions = [
    {
      title: "Home",
      href: "/",
      type: "user",
      img: "https://img.icons8.com/ios/50/home--v1.png",
    },
    {
      title: "About Panchayat",
      href: "/about",
      type: "user",
      img: "https://img.icons8.com/material-outlined/24/about.png",
    },
    {
      title: "Panchayat Funds",
      href: "/panchayat_funds",
      type: "user",
      img: "https://img.icons8.com/ios/50/coins--v1.png",
    },
    {
      title: "Panchayat Developement Work",
      href: "/panchayat_developement_work",
      type: "user",
      img: "https://img.icons8.com/ios/50/craft-work.png",
    },
    {
      title: "Nearby Services",
      href: "/nearby_services",
      type: "user",
      img: "https://img.icons8.com/ios/50/services--v1.png",
    },
  ];
  return (
    <div
      className="w-[35vh] h-[100vh] bg-white box-shadow"
      style={{
        transition: "all .4s ease",
        position: "absolute",
        top: 0,
        left: openSidebar ? 0 : "-60vh",
      }}
      onClick={() => {
        setOpenSidebar(false);
      }}
    >
      <div className="w-full h-auto flex flex-row px-4 items-center text-black font-semibold border-b-2">
        <Avatar />
      </div>
      {menuOptions.map((data, index) => {
        return (
          <Link
            href={data.href}
            key={index}
            className="w-full h-auto flex hover:bg-green-700 hover:text-white flex-row justify-left px-2 py-4 items-center gap-4 text-black font-semibold border-b-2"
          >
            <img
              className="text-white"
              src={data.img}
              alt={data.title}
              width={20}
              height={20}
            />
            {data.title}
          </Link>
        );
      })}
      <div className="w-full h-auto flex flex-row justify-end px-2 py-4 items-center text-black font-semibold">
        <button
          onClick={() => {
            localStorage.removeItem("email");
            setUserData({ email: "", phoneNo: "", name: "", profile: "" });
            router.push("/login");
          }}
          className="w-[60%] h-14 rounded-md text-white gap-2 justify-end px-6 bg-red-500 flex flex-row items-center"
        >
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/exit--v1.png"
            alt="exit--v1"
          />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
