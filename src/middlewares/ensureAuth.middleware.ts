import { Request, Response, NextFunction } from "express"
import { IDecoded } from "../interfaces/users"
import jwt from "jsonwebtoken"
import "dotenv/config"
import { AppError } from "../errors/AppError"

const ensureUserExistsByEmailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const reqID = req.params.id
    let token = req.headers.authorization
    
    if (!token) {
        throw new AppError("Invalid token")
    }
    
    token = token.split(" ")[1]

    jwt.verify(token, process.env.SECRET_KEY, (error, decoded: IDecoded) => {
        if (error) {
            throw new AppError("Invalid token")
        }

        if (req.body.name || req.body.email || req.body.password) {
            if (decoded.isAdm || !decoded.isAdm && decoded.id === reqID) {
                return next()
            } else if (!decoded.isAdm && decoded.id !== reqID) {
                throw new AppError("User not authorized.", 403)
            }

        } else {
            if (decoded.isAdm) {
                return next()
            }
            throw new AppError("User not authorized.", 403)
        }
    })
}

export default ensureUserExistsByEmailMiddleware