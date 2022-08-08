import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import validateSchema from "../middlewares/validateSchema";
import * as schemas from "../schemas/doneeSchemas";

const doneeRouter = Router();

// doneeRouter.post("/new-record", [
//   validateSchema(),
//   authValidation("/new-record"),
// ]);

export default doneeRouter;
