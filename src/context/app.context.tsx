import React, { createContext, useState } from "react";
import { getAccessTokenFromLS } from "../utils/auth";
import { boolean } from "yup";
import { User } from "../types/user.type";

interface AppContextInteface {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user?: User;
}

const initialAppContext: AppContextInteface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => boolean,
};

export const AppContext = createContext<AppContextInteface>(initialAppContext); // không truyền value vào provider thì sử dụng giá trị này

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated,
  );

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
