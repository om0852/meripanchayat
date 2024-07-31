"use client";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import FundCard from "../component/FundCard";

const Page = () => {
  const { setOpenSidebar, setLoader } = useGlobalContext();
  const [fundsData, setFundsData] = useState([]);
  const fetchFundsData = async () => {
    setLoader(true);
    const response = await fetch(`/api/user/panchayat_funds`, {
      method: "get",
    });
    if (response.status == 200) {
      const res = await response.json();
      setFundsData(res);
    }
    setLoader(false);
  };
  useEffect(() => {
    fetchFundsData();
  }, []);
  return (
    <div
      onClick={() => setOpenSidebar(false)}
      className="w-full h-[90vh] overflow-hidden"
    >
      <h1 className="w-full h-16 border-y-2 border-gray-400 flex flex-row items-center justify-center ">
        Funds Details
      </h1>
      <h1 className="w-full h-20  text-gray-400 flex flex-row items-center justify-center ">
        View list of Funds Received
      </h1>
      <div
        className="w-full h-[80vh] py-8 overflow-x-hidden overflow-y-scroll "
        style={{ scrollbarWidth: "none" }}
      >
        { fundsData&& fundsData.length == 0 && <NoDataFound />}

        {fundsData
          ? fundsData.map((data, index) => {
              return <FundCard data={data} key={index} />;
            })
          : "No Data Found"}
        <div className="w-full h-20"></div>
      </div>
    </div>
  );
};

export default Page;
