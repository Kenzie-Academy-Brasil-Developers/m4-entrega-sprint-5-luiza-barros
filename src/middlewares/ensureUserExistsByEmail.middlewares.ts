import { Request, Response, NextFunction } from "express"
import { Users } from "../entities/users.entity"
import { AppError } from "../errors/AppError"
import AppDataSource from "../data-source"

const ensureUserExistsByEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const email: string = req.body.email

    const userRepository = AppDataSource.getRepository(Users)

    try {
        const user = await userRepository.findOneBy({
            email: email
        })
    
        res.locals.user = user
        if (req.body.name) {
            return user ? res.status(400).json({ message: "User already exists." }) : next()
        } 
        return user ? next() : res.status(401).json({ message: "User or password invalid." })

    } catch (error) {
        throw new AppError("Invalid email structure.", 409)
    }
}

export default ensureUserExistsByEmailMiddleware