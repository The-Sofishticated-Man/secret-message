import express from "express";
import logger from "../utils/loggingUtils";

const router = express.Router();
import jwt, { JwtPayload } from "jsonwebtoken";
router.get("/", (req, res) => {
  // This route is used to refresh the access token
  // The refresh token is expected to be in the cookies
  logger.info(`got refresh request`);
  logger.info(`request cookies: ${JSON.stringify(req.cookies)}`);
  const refreshToken = req.cookies.refreshToken;
  logger.info(`refresh token: ${refreshToken}`);
  if (!refreshToken) {
    return res.status(401).json({ message: "No refresh token provided" });
  }
  logger.info(
    `verifying refresh token... with secret: ${process.env.REFRESH_SECRET}`
  );
  jwt.verify(
    refreshToken as string,
    process.env.REFRESH_SECRET as string,
    (
      err: jwt.JsonWebTokenError | null,
      decoded: string | JwtPayload | undefined
    ) => {
      if (err) {
        return res.status(403).json({ message: "Invalid refresh token" });
      }
      // If the refresh token is valid, issue a new access token
      const newAccessToken = jwt.sign(
        decoded as JwtPayload,
        process.env.ACCESS_SECRET as string,
        {
          expiresIn: "15m",
        }
      );
      logger.info(`new access token: ${newAccessToken}`);
      res.status(200).json({ accessToken: newAccessToken });
    }
  );
});

export default router;
