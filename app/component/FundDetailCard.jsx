import React from "react";

const FundDetailCard = ({ data, year }) => {
  return (
    <div className="box-shadow w-[85%] h-auto mx-auto my-4 bg-white rounded-lg p-4">
      
      <div className="w-[95%] h-auto py-2 mx-auto border-b-2  flex flex-col">
        <div className="flex flex-row items-center py-2 gap-2">
          <span className="font-bold text-black text-xl">Scheme:</span>
          <span className="text-black font-extrabold">{data.scheme}</span>
        </div>
        <div className="flex flex-row items-center gap-2">
          <span className=" text-xl font-bold text-black">Component:</span>
          <span className="text-black font-extrabold">{data.component}</span>
        </div>
      </div>
      <div className="w-[95%] h-auto py-2 mx-auto border-b-2">
        <span className="font-bold text-black">Expected Funds:</span>
        <span className="text-green-900 font-bold">${data.expected_funds}</span>
      </div>
      <div className="w-[95%] h-auto mx-auto border-b-2 flex flex-row justify-between items-center py-4">
        <span>
          <span className="font-bold text-black">Actual Funds Received:</span>
          <span className="text-purple-800 font-bold">${data.actual_funds}</span>
        </span>
      </div>
      <div className="w-[95%] h-auto mx-auto border-b-2 flex flex-row justify-between items-center py-2">
        <span>
          <span className="font-bold text-black">
            Reverted/Surrendered Funds:
          </span>
          <span className="text-violet-700 font-bold ">${data.reverted_funds}</span>
        </span>
      </div>
      <div className="w-[95%] h-auto mx-auto flex flex-row justify-between items-center py-2">
        <span>
          <span className="font-bold text-black">Actual Expenditure:</span>
          <span className="text-red-700 font-bold">${data.actual_expenditure}</span>
        </span>
      </div>
    </div>
  );
};

export default FundDetailCard;
