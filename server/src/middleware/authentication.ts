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
  console.log("got authorization request with payload: "+authorization);
  if (!authorization) {
    // authorization header empty
    res.status(401).json({ error: "Authorization token required" });
    return;
  }
  const token = authorization?.split(" ")[1];
  try {
    //decrypts jwt token and returns payload
    const { _id } = jwt.verify(
      token as string,
      process.env.JWT_SECRET_KEY as string
    ) as JwtPayload;

    // piggy back userId to the request object
    req.user = (await SMUser.findById({ _id }).select("_id")) as object;
    console.log("request authenticated successfully as user: ", req.user);
  } catch (error) {
    // invalid token
    console.error(error);
    res.status(401).json({ message: "Token could not be authorized" });
  }

  next();
}
