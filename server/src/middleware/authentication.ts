import { NextFunction, Response } from "express";
import { Request } from "express";
import jwt from "jsonwebtoken";
import SMUser from "../utils/mongoAPIUtils";

// type of payload contained in jwt token
interface JwtPayload {
  _id: string;
}

export default async function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "Authorization token required" });
    return;
  }
  const token = authorization?.split(" ")[1];
  try {
    //decrypts jwt token and returns paylead
    const { _id } = jwt.verify(
      token as string,
      process.env.JWT_SECRET_KEY as string
    ) as JwtPayload;

    //add userId to request
    req.user = (await SMUser.findById({ _id }).select("_id")) as object;
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token could not be authorized" });
  }

  next();
}
