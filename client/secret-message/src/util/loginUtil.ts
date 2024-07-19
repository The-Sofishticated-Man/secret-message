import Cookies from "js-cookie";

export function SetUser(user: string, token: string) {
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
}
