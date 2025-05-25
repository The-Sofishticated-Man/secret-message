import * as Express from "express";
import { Request } from "express";

// Extend Express Request interface to include 'user'
declare module "express" {
  interface Request {
    user?: any;
  }
}
