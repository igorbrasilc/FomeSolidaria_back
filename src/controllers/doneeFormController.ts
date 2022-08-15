import { Request, Response } from "express";
import * as service from "../services/doneeFormServices";
import DoneeFormData from "../types/doneeFormTypes";

export async function newDonee(req: Request, res: Response) {
  const { notNullInputs } = res.locals;
  const newDonee = await service.postDonee(notNullInputs);
  res.status(201).json(newDonee);
}
