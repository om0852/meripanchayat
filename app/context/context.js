//create a context
"use client"
import { createContext, useContext, useState } from "react";

export const AppContext = createContext();


//provider needed
export const AppProvider = ({ children }) => {
  //defining login
  //logic for sidebar 
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };
  
  
  
  


  return <AppContext.Provider value={{name:"om",toggleSidebar,openSidebar,setOpenSidebar}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = ()=>{
  return useContext(AppContext);
}
//consumer implementation
