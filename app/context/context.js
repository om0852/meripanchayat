//create a context

import { createContext } from "react";

export const AppContext = createContext();

//provider needed
export const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

//consumer implementation
