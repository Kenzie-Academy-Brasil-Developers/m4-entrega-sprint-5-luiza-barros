import { Request, Response, NextFunction } from "express"
import { Users } from "../entities/users.entity"
import AppDataSource from "../data-source"
import { AppError } from "../errors/AppError"

const ensureUserExistsByIDMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const reqID: string = req.params.id

    const userRepository = AppDataSource.getRepository(Users)

    try {
        const user = await userRepository.findOneBy({
            id: reqID
        })

        if (!user || !user.isActive) {
            throw new AppError("User not found.")
        } else if (user && user.isActive) {
            return next()
        }
        
    } catch (error) {
        throw new AppError("Invalid ID.")
    }
    
}

export default ensureUserExistsByIDMiddleware