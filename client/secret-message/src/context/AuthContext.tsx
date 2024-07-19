import { createContext, ReactNode, useReducer } from "react";
import Cookies from "js-cookie";
interface authStateType {
  user: string | null;
}

interface authContextType {
  authState: authStateType;
  dispatch: React.Dispatch<{ type: string; payload: string | null }>;
}

export const AuthContext = createContext<authContextType>({
  authState: { user: null },
  dispatch: () => {},
});

const authReducer = (
  authState: authStateType,
  action: { type: string; payload: string | null }
) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Logged in as user: ", action.payload);
      return { user: action.payload };
    case "LOGOUT":
      console.log("Logged out");
      return { user: null };
    default:
      return authState;
  }
};
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  console.log("auth context provider launched");
  const userCookie = Cookies.get("SMUser");
  console.log("SMUser cookie: ", userCookie);

  const [authState, dispatch] = useReducer(authReducer, {
    user: userCookie ? JSON.parse(userCookie).user : null,
  });
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
