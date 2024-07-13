import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  setLoggedIn: (state: boolean) => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  setLoggedIn: () => {},
});

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  console.log("Authentication state: ", isLoggedIn);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
