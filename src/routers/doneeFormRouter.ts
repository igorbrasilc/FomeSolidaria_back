import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import * as controller from "../controllers/doneeFormController";
import validateDoneeForm from "../middlewares/validateDoneeForm";

const doneeFormRouter = Router();

doneeFormRouter.post(
  "/new-donee",
  [authValidation("/new-donee"), validateDoneeForm("/new-donee")],
  controller.newDonee
);

export default doneeFormRouter;
