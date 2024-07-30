"use client"
import FundDetailCard from "@/app/component/FundDetailCard";
import { useGlobalContext } from "@/app/context/context";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [fundsData, setFundsData] = useState(null);
  const {setOpenSidebar} =useGlobalContext();
  const fetchFundsData = async () => {
    console.log(params)
    
    const response = await fetch(`/api/user/panchayat_funds/${params.year}`, {
      method: "get",
    });
    if (response.status == 200) {
      const res = await response.json();
      setFundsData(res);
    }
  };
  useEffect(() => {
    fetchFundsData();
  }, []);
  return (
    <div className="w-full h-auto px-2 py-6" onClick={()=>setOpenSidebar(false)}>
      <h1 className="w-full text-2xl font-semibold h-auto flex flex-row items-center justify-center py-4 border-y-2 border-gray-400 ">
        Scheme-wise fund receipt and expenditure
      </h1>
      <p className="w-fit mx-auto flex-row text-xl font-semibold flex justify-center h-auto py-4 px-2 border-b-2 border-gray-400">
        {params.year }-{(parseInt(params.year)+1)}
      </p>
      <div className="w-full h-auto py-8">
        {fundsData && fundsData.map((data, index) => {
          return <FundDetailCard data={data} year={params.year} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Page;
