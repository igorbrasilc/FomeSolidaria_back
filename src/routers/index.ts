import { Router } from "express";
import adminRouter from "./adminRouter";
import categoryRouter from "./categoryRouter";
import peopleRouter from "./peopleRouter";
import searchRouter from "./searchRouter";
import doneeFormRouter from "./doneeFormRouter";

const router = Router();
router.use(adminRouter);
router.use(categoryRouter);
router.use(searchRouter);
router.use(peopleRouter);
router.use(doneeFormRouter);

export default router;
