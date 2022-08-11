import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import validateSchema from "../middlewares/validateSchema";
import * as schemas from "../schemas/doneeSchemas";
import * as controller from "../controllers/peopleController";

const peopleRouter = Router();

peopleRouter.get(
  "/donee/:id",
  authValidation("/donee/:id"),
  controller.getDonee
);

peopleRouter.get(
  "/colleague/:id",
  authValidation("/colleague/:id"),
  controller.getColleague
);

peopleRouter.get(
  "/spouse/:id",
  authValidation("/spouse/:id"),
  controller.getSpouse
);

export default peopleRouter;
