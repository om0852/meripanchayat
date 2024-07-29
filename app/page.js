"use client"

import { useRouter } from "next/navigation";

export default function Home() {
  const router =useRouter();
  if(!localStorage.getItem("email")){
router.push("/login");
  }
  return (
    <></>
  );
}
