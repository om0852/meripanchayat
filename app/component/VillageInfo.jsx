"use client"
import { useGlobalContext } from "../context/context";

const VillageInfo = () => {
  const {language}=useGlobalContext();
  return (
    <>
      <div className="mainContainer px-4">
        {language == "english" ? (
          <p className="px-4 py-4">
            {" "}
            <span className="text-black font-semibold text-red-600 text-xl">
              Village Panchayat
            </span>
            :Chandgaon
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              LGD Code
            </span>
            :170972
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              Block
            </span>
            :vaijapur
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              Zilla Parishad
            </span>
            :Sambhaji nagar
          </p>
        ) : (
          <p className="px-4 py-4">
            {" "}
            <span className="text-black font-semibold text-red-600 text-xl">
              ग्राम पंचायत
            </span>
            : चांदगांव
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              एलजीडी कोड
            </span>
            : 170972
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              ब्लॉक
            </span>
            : वैजापुर
            <br />
            <span className="text-black font-semibold text-red-600 text-xl">
              जिला परिषद
            </span>
            : संभाजी नगर
          </p>
        )}
        <hr />
      </div>
    </>
  );
};
export default VillageInfo;
