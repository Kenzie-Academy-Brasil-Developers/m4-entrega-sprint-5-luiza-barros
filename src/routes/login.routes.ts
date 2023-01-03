import { Router } from "express"
import { loginUserController } from "../controllers/login.controllers"
import ensureUserExistsByEmail from "../middlewares/ensureUserExistsByEmail.middlewares"

const loginRoutes = Router()

loginRoutes.post("", ensureUserExistsByEmail, loginUserController)

export default loginRoutes