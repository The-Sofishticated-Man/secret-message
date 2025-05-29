import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  if (req.user) {
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logged out successfully" });
  }
});

export default router;
