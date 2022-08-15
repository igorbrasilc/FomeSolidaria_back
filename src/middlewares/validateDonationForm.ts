import { Request, Response, NextFunction } from "express";
import AppLog from "../utils/AppLog";

function validateDonationForm(endpoint: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { donation, note } = req.body;

    const notNullInputs = {};

    const donationIsNull = !donation.quantity;

    if (!donationIsNull) {
      notNullInputs["donation"] = donation;
    }

    const noteIsNull = !note || !note.note;

    if (!noteIsNull) {
      notNullInputs["note"] = note;
    }

    AppLog("Middleware", `Schema for endpoint ${endpoint} validated`);
    res.locals.notNullInputs = notNullInputs;
    return next();
  };
}

export default validateDonationForm;
