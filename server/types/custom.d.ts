import * as Express from "express";
// adding a user property to piggyback onto the request
declare global {
  namespace Express {
    interface Request {
      user?: object;
    }
  }
}
