import { Request, Response } from "express";
import * as service from "../services/donationFormServices";
import donationFormData from "../types/donationFormTypes";

export async function newDonation(req: Request, res: Response) {
  const { notNullInputs, admin } = res.locals;
  const { id: doneeId } = req.params;
  const newDonation = await service.postDonation(
    notNullInputs,
    Number(admin.id),
    Number(doneeId)
  );
  res.status(201).json(newDonation);
}
