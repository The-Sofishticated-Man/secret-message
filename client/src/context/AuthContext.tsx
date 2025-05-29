import { createContext, ReactNode, useEffect, useReducer } from "react";
import { jwtDecode } from "jwt-decode";
import useRefreshToken from "../hooks/useRefreshToken";
interface authStateType {
  accessToken: string | null;
  username: string | null;
  userID: string | null;
  isAuthenticated: boolean;
  isGuest: boolean;
}
interface jwtPayloadType {
  username: string;
  _id: string;
}
interface reducerActionType {
  type: string;
  payload?: {
    accessToken: string;
  };
}
interface authContextType {
  authState: authStateType;
  dispatch: React.Dispatch<reducerActionType>;
}

export const AuthContext = createContext<authContextType>({
  authState: {
    accessToken: null,
    username: null,
    userID: null,
    isAuthenticated: false,
    isGuest: false,
  },
  dispatch: () => {},
});

const authReducer = (authState: authStateType, action: reducerActionType) => {
  switch (action.type) {
    case "LOGIN":
      const decodedToken = jwtDecode<jwtPayloadType>(
        action.payload?.accessToken as string
      );
      console.log("Logged in as user: ", action.payload);
      return {
        accessToken: action.payload!.accessToken,
        username: decodedToken.username,
        userID: decodedToken._id,
        isAuthenticated: true,
        isGuest: false,
      };
    case "LOGOUT":
      console.log("Logged out");
      return {
        accessToken: null,
        username: null,
        userID: null,
        isAuthenticated: false,
        isGuest: false,
      };
    default:
      return authState;
  }
};
const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  console.log("auth context provider launched");
  const [authState, dispatch] = useReducer(authReducer, {
    accessToken: null,
    username: null,
    userID: null,
    isAuthenticated: false,
    isGuest: false,
  });
  useEffect(() => {
    const refresh = useRefreshToken();
    const refreshToken = async () => {
      const token = await refresh();
      if (token) {
        console.log("Token refreshed:", token);
      }
    };
    refreshToken();
  }, []);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
