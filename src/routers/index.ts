import { Router } from "express";
import adminRouter from "./adminRouter";
import categoryRouter from "./categoryRouter";
import searchRouter from "./searchRouter";

const router = Router();
router.use(adminRouter);
router.use(categoryRouter);
router.use(searchRouter);

export default router;
