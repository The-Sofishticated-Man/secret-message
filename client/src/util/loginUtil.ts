import Cookies from "js-cookie";

export function SetUser(user: string, token: string, id: string) {
  Cookies.set(
    "SMUser",
    JSON.stringify({
      user: user,
      id,
      token: token,
    }),
    {
      expires: 7,
      sameSite: "Lax",
    }
  );
}
