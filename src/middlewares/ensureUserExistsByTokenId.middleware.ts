import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"
import { Users } from "../entities/users.entity"
import { IDecoded } from "../interfaces/users"
import jwt from "jsonwebtoken"
import AppDataSource from "../data-source"

const ensureUserExistsByTokenId = async (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers.authorization

    if (!token) {
        throw new AppError("Invalid token.")
    }

    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, async (error, decoded: IDecoded) => {
        if (error) {
            throw new AppError("Invalid token.")
        }

        const userRepository = AppDataSource.getRepository(Users)

        const user = await userRepository.findOneBy({
            id: decoded.id
        })

        res.locals.user = user
        if (user) {
            return next()
        }
        throw new AppError("User not found.", 404)
    })
}

export default ensureUserExistsByTokenId