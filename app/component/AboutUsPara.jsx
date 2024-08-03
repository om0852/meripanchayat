"use client"

import { useGlobalContext } from "../context/context";

const AboutUsPara = () => {
  const {language}=useGlobalContext();
  return (
    <>
      <div class="w-full h-auto">
        <div class="w-[90%] mx-auto">
          <h5 class="w-full text-center py-4  ">
            <span className="border-b-2 border-black text-2xl">About Us</span>
          </h5>
          {language == "english" ? (
            <p class="card-text">
              <p className="font-bold"> Sarpanch Details:-</p>
              name:-Manisha Ganesh Thengde<br></br>
              mobile no :-9673338564<br></br>
              email id :- ganstgda@gmail.com<br></br>
            </p>
          ) : (
            <p class="card-text">
              <p className="font-bold">सरपंच विवरण:-</p>
              नाम:- मनीषा गणेश थेंगड़े<br></br>
              मोबाइल नंबर:- 9673338564<br></br>
              ईमेल आईडी:- ganstgda@gmail.com<br></br>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default AboutUsPara;
