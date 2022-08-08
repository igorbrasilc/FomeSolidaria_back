import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import * as controller from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.get(
  "/categories/:category",
  authValidation("/categories"),
  controller.getCategory
);

export default categoryRouter;
