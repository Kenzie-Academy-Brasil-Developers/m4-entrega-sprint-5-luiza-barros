import { Router } from "express"
import { createPropertyController } from "../controllers/properties.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensurePostPropertiesRequestAreValid from "../middlewares/ensurePostPropertiesRequestAreValid.middleware"
import ensureZipCodeAndState from "../middlewares/ensureZipCodeAndState.middleware"

const propertiesRoutes = Router()

propertiesRoutes.post("", ensureAuthMiddleware, ensurePostPropertiesRequestAreValid, ensureZipCodeAndState,createPropertyController)

export default propertiesRoutes