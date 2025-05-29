import express, { Request, Response } from "express";
import { registerValidationSchema } from "../utils/validationUtils";
import SMUser from "../utils/mongoAPIUtils";
import { validationResult } from "express-validator";
import argon2 from "argon2";
import logger from "../utils/loggingUtils";
import generateTokens from "../utils/jwtUtils";

const router = express.Router();


router.post(
  "/",
  registerValidationSchema,
  async (req: Request, res: Response) => {
    const errors = validationResult(req).array({ onlyFirstError: true });
    logger.info("Validation result: ", errors);
    const formData = req.body;
    logger.info("User creation request: ", formData);

    if (errors.length !== 0) {
      res.status(400).send(errors);
    } else {
      try {
        const hashedPassword = await argon2.hash(formData.password);
        const data = await SMUser.create({
          ...formData,
          password: hashedPassword,
        });
        logger.info("created user successfully:");
        const { accessToken, refreshToken } = generateTokens(data.id,data.username!);
        res.status(201).cookie("refreshToken", refreshToken, { httpOnly: true }).json({accessToken});
      } catch (err) {
        logger.error("Error creating user", err);
        res.status(500).json({ error: err });
      }
    }
  }
);

export default router;


