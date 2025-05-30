import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "lax",
    secure: false, // Set to true if using HTTPS
  });
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
