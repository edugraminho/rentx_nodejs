import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specRoutes } from "./specs.routes";
const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specRoutes);

export { router };
