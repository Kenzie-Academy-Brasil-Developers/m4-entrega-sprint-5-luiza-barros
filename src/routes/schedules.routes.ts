import { Router } from "express"
import { createUserScheduleController, getAllUserScheduleController } from "../controllers/schedules.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensurePropertyExists from "../middlewares/ensurePropertyExists.middleware"
import ensureSchedulesReqAreValid from "../middlewares/ensureSchedulesReqAreValid.middleware"
import ensureUserExistsByTokenId from "../middlewares/ensureUserExistsByTokenId.middleware"

const schedulesRoutes = Router()

schedulesRoutes.post("", ensureUserExistsByTokenId, ensureSchedulesReqAreValid, createUserScheduleController)
schedulesRoutes.get("/properties/:id", ensureAuthMiddleware, ensurePropertyExists, getAllUserScheduleController)

export default schedulesRoutes