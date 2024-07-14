import { createContext, ReactNode, useReducer } from "react";

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
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return authState;
  }
};

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authState, dispatch] = useReducer(authReducer, { user: null });

  console.log("Authentication state: ", !!authState.user);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
