import Cookies from "js-cookie";
import useAuth from "../hooks/useAuth";

export function SetUser(user: string, token: string) {
  const { dispatch } = useAuth();
  Cookies.set(
    "SMUser",
    JSON.stringify({
      user: user,
      token: token,
    }),
    {
      expires: 7,
      sameSite: "Lax",
    }
  );
  dispatch({ type: "LOGIN", payload: user });
}
