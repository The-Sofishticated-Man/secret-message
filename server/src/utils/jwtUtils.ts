import jwt from "jsonwebtoken";
import logger from "./loggingUtils";
export const ACCESS_SECRET =
  process.env.ACCESS_SECRET || "sloppyKissesFromGrandma552";
export const REFRESH_SECRET =
  process.env.REFRESH_SECRET || "sloppyKissesFromGrandma225";

logger.info(
  `Using ACCESS_SECRET: ${ACCESS_SECRET} and REFRESH_SECRET: ${REFRESH_SECRET}`
);

export function generateTokens(_id: string, username: string) {
  const payload = { _id, username };
  const accessToken = jwt.sign(payload, ACCESS_SECRET, {
    expiresIn: "15m",
  });
  const refreshToken = jwt.sign(payload, REFRESH_SECRET, {
    expiresIn: "15d",
  });
  return { accessToken, refreshToken };
}
export function verifyRefreshTokenAndGetPayload(
  refreshToken: string,
  cb: (err: jwt.JsonWebTokenError | null, payload?: jwt.JwtPayload) => void
) {
  jwt.verify(refreshToken, REFRESH_SECRET, (err, decoded) => {
    if (err) return cb(err);
    // Remove 'exp' and 'iat' from the decoded payload before signing a new token
    const { exp, iat, ...payload } = decoded as jwt.JwtPayload;
    cb(null, payload);
  });
}

export function signAccessTokenFromPayload(payload: jwt.JwtPayload) {
  return jwt.sign(payload, ACCESS_SECRET, { expiresIn: "15m" });
}
