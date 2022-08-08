import { Router } from "express";
import authValidation from "../middlewares/authValidation";
import * as controller from "../controllers/searchController";

const searchRouter = Router();

searchRouter.get("/search", authValidation("/search"), controller.search);

export default searchRouter;
