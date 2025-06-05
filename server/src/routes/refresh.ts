import express from "express";
import logger from "../utils/loggingUtils";
import {
  verifyRefreshTokenAndGetPayload,
  signAccessTokenFromPayload,
} from "../utils/jwtUtils";

const router = express.Router();
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
  logger.info(`verifying refresh token...`);
  verifyRefreshTokenAndGetPayload(refreshToken, (err, payload) => {
    if (err || !payload) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    const newAccessToken = signAccessTokenFromPayload(payload);
    logger.info(`new access token: ${newAccessToken}`);
    res.status(200).json({ accessToken: newAccessToken });
  });
});

export default router;
