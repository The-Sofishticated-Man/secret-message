import jwt from "jsonwebtoken";

function generateTokens(_id: string,username:string) {
  const payload = { _id, username };
  const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET as string, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET as string, {
    expiresIn: "15d",
  });
  return { accessToken, refreshToken };
}
export default generateTokens;
