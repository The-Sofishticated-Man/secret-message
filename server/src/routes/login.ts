import express, { Request, Response } from "express";
import SMUser from "../utils/mongoAPIUtils";
import argon2 from "argon2";
import logger from "../utils/loggingUtils";
import {generateTokens} from "../utils/jwtUtils";

const router = express.Router();

router.post("/", async (req: Request, res: Response) => {
  const loginFields = req.body;
  logger.info(`Login attempt:`, loginFields);
  SMUser.findOne({ email: loginFields.email }).then(async (user) => {
    if (user) {
      try {
        if (
          await argon2.verify(user.password as string, loginFields.password)
        ) {
          logger.info(`Login successful`);
          const { accessToken, refreshToken } = generateTokens(
            user.id,
            user.username!
          );
          logger.info(`Generated tokens successfully`);
          logger.info(`access token: ${accessToken}`);
          logger.info(`refresh token: ${refreshToken}`);
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 30 * 24 * 60 * 60 * 1000,
            secure: false, // Set to true if using HTTPS
            path: "/",
          });
          res.status(201).json({ accessToken });
        } else {
          logger.error(`Login failed: password does not match`);
          res.status(401).json({ message: "Login failed" });
        }
      } catch (err) {
        logger.error(`Error: couldn't verify password: ${err}`);
        res.status(500).json({ message: "Internal server error" });
      }
    } else {
      logger.error(`Login failed: user does not exist`);
      res.status(401).json({ message: "Login failed" });
    }
  });
});

export default router;
