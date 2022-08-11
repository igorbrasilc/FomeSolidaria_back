import { Request, Response } from "express";
import * as service from "../services/peopleServices";

export async function getDonee(req: Request, res: Response) {
  const { id } = req.params;
  const doneeInfos = await service.getDonee(+id);
  res.status(200).send({ doneeInfos });
}

export async function getColleague(req: Request, res: Response) {
  const { id } = req.params;
  const colleagueInfos = await service.getColleague(+id);
  res.status(200).send({ colleagueInfos });
}

export async function getSpouse(req: Request, res: Response) {
  const { id } = req.params;
  const spouseInfos = await service.getSpouse(+id);
  res.status(200).send({ spouseInfos });
}
