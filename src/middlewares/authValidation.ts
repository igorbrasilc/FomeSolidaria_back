import { Request, Response, NextFunction } from "express";
import { unauthorizedError } from "../utils/errorUtils";
import * as adminUtils from "../utils/adminUtils";
import AppLog from "../utils/AppLog";
import { Admin } from ".prisma/client";

function authValidation(endpoint?: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const header = req.header("authorization");
    const tokenInput = header?.replace("Bearer", "").trim();

    if (!header) {
      throw unauthorizedError(
        "You need to send the needed headers for authorization"
      );
    }

    try {
      const tokenValidation = adminUtils.validateToken(tokenInput);
      res.locals.admin = tokenValidation as Admin;
    } catch (err) {
      throw unauthorizedError("Error trying to validate token");
    }

    res.locals.header = header;
    AppLog("Middleware", `Header for endpoint ${endpoint} processed`);
    return next();
  };
}

export default authValidation;
