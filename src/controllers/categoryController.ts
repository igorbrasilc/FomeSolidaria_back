import { Request, Response } from "express";
import * as services from "../services/categoryServices";
import { Categories } from "../types/CategoryTypes";

export async function getCategory(req: Request, res: Response) {
  const category = req.params.category as Categories;

  const categoryCount = await services.getCategory(category);

  res.status(200).send({ categoryCount });
}
