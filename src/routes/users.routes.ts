import { Router } from "express"
import { 
    createUserController, 
    deleteUserController, 
    getAllUsersController, 
    updateUserController 
} from "../controllers/users.controllers"
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware"
import ensureUserExistsByEmailMiddleware from "../middlewares/ensureUserExistsByEmail.middlewares"
import ensureUserExistsByIDMiddleware from "../middlewares/ensureUserExistsByID.middlewares"

const userRoutes = Router()

userRoutes.post("", ensureUserExistsByEmailMiddleware, createUserController)
userRoutes.get("", ensureAuthMiddleware, getAllUsersController)
userRoutes.patch("/:id", ensureUserExistsByIDMiddleware, ensureAuthMiddleware, updateUserController)
userRoutes.delete("/:id", ensureUserExistsByIDMiddleware, ensureAuthMiddleware, deleteUserController)

export default userRoutes