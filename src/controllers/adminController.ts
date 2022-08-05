import { Request, Response } from "express";
import AppLog from "../utils/AppLog";
import { AdminInputData } from "../types/adminTypes";
import * as service from "../services/adminServices";

export async function signIn(req: Request, res: Response) {
  const adminInput: AdminInputData = req.body;

  const token = await service.signIn(adminInput);

  AppLog("Controller", "Admin logged in");
  res.status(200).send({ token });
}
