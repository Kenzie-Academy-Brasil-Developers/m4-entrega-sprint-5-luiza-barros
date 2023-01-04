import { Router } from "express"
import { createCategoryController, getAllCategoriesController } from "../controllers/category.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureCategoryNotDuplicated from "../middlewares/ensureCategoryNotDuplicated.middleware"

const categoryRoutes = Router()

categoryRoutes.post("", ensureAuthMiddleware, ensureCategoryNotDuplicated, createCategoryController)
categoryRoutes.get("", getAllCategoriesController)

export default categoryRoutes