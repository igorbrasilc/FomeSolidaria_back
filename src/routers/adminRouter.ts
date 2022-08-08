import { Router } from "express";
import * as schemas from "../schemas/adminSchemas";
import * as controller from "../controllers/adminController";
import validateSchema from "../middlewares/validateSchema";

const adminRouter = Router();

adminRouter.post(
  "/sign-in",
  validateSchema(schemas.signIn, "/sign-in"),
  controller.signIn
);

export default adminRouter;
