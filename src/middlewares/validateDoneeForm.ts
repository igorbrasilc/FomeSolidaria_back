import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import * as stepSchemas from "../schemas/doneeFormSchemas";
import { wrongSchemaError } from "../utils/errorUtils";
import AppLog from "../utils/AppLog";
import DoneeFormData from "../types/doneeFormTypes";

function validateDoneeForm(endpoint: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { colleagues, donee, address, children, spouse, note } =
      req.body as DoneeFormData;

    const notNullInputs = {};

    const colleaguesIsNull =
      colleagues.length === 0 || colleagues[0].name === "";

    if (!colleaguesIsNull) {
      notNullInputs["colleague"] = colleagues;
    }

    const doneeIsNull = donee.name === "";

    if (!doneeIsNull) {
      notNullInputs["donee"] = donee;
    }

    const addressIsNull = address.street === "";

    if (!addressIsNull) {
      notNullInputs["address"] = address;
    }

    const childrenIsNull = children.length === 0 || children[0].name === "";

    if (!childrenIsNull) {
      notNullInputs["child"] = children;
    }

    const spouseIsNull = spouse.name === "";

    if (!spouseIsNull) {
      notNullInputs["spouse"] = spouse;
    }

    const noteIsNull = note.note === "";

    if (!noteIsNull) {
      notNullInputs["note"] = note;
    }

    AppLog("Middleware", `Schema for endpoint ${endpoint} validated`);
    res.locals.notNullInputs = notNullInputs;
    return next();
  };
}

export default validateDoneeForm;
