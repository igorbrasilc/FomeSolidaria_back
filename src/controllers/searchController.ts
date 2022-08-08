import { Request, Response } from "express";
import * as services from "../services/searchServices";

export async function search(req: Request, res: Response) {
  const input = req.query.input as string;

  const results = await services.search(input);

  res.status(200).send({ results });
}
