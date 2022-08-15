import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import * as controller from "../controllers/donationFormController";
import validateDonationForm from "../middlewares/validateDonationForm";

const donationFormRouter = Router();

donationFormRouter.post(
  "/donee/:id/new-donation",
  [authValidation("/new-donation"), validateDonationForm("/new-donation")],
  controller.newDonation
);

export default donationFormRouter;
