import { Router } from "express"
import { createCategoryController, getAllCategoriesController, getAllCategoriesPropertiesController } from "../controllers/category.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureCategoryNotDuplicated from "../middlewares/ensureCategoryNotDuplicated.middleware"

const categoryRoutes = Router()

categoryRoutes.post("", ensureAuthMiddleware, ensureCategoryNotDuplicated, createCategoryController)
categoryRoutes.get("", getAllCategoriesController)
categoryRoutes.get("/:id/properties", getAllCategoriesPropertiesController)

export default categoryRoutes