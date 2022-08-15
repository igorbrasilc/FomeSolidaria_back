import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import * as stepSchemas from "../schemas/doneeFormSchemas";
import { wrongSchemaError } from "../utils/errorUtils";
import AppLog from "../utils/AppLog";
import DoneeFormData from "../types/doneeFormTypes";

function validateDoneeForm(endpoint: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { colleagues, donee, address, children, spouse, note } = req.body;

    const notNullInputs = {};

    const colleaguesIsNull = !colleagues;

    if (!colleaguesIsNull) {
      notNullInputs["colleagues"] = colleagues;
    }

    const doneeIsNull = !donee.name;

    if (!doneeIsNull) {
      notNullInputs["donee"] = donee;
    }

    const addressIsNull = !address.street;

    if (!addressIsNull) {
      notNullInputs["address"] = address;
    }

    const childrenIsNull = !children;

    if (!childrenIsNull) {
      notNullInputs["children"] = children;
    }

    const spouseIsNull = !spouse.name;

    if (!spouseIsNull) {
      notNullInputs["spouse"] = spouse;
    }

    const noteIsNull = !note.note;

    if (!noteIsNull) {
      notNullInputs["note"] = note;
    }

    AppLog("Middleware", `Schema for endpoint ${endpoint} validated`);
    res.locals.notNullInputs = notNullInputs;
    return next();
  };
}

export default validateDoneeForm;
