import { IUser, IUserLogin } from "../../interfaces/users"
import { AppError } from "../../errors/AppError"
import { compare } from "bcryptjs"
import { createLoginSerializer } from "../../serializers/users.serializers"
import jwt from "jsonwebtoken"
import "dotenv/config"

const createLoginService = async (login: IUserLogin, user: IUser): Promise<{}> => {
    try {
        const validatedLogin = await createLoginSerializer.validate(login, {
            abortEarly: false,
            stripUnknown: true
        })
    
        const passwordMatch = await compare(validatedLogin.password, user.password)
    
        if (!passwordMatch) {
            throw new AppError("User or password invalid", 403)
        }
    
        const token = jwt.sign(
            {
                isAdm: user.isAdm,
                id: user.id
            },
            process.env.SECRET_KEY,
            {
                subject: user.id,
                expiresIn: "24h"
            }
        )
    
        return { token: token }
        
    } catch (error) {
        throw new AppError(error, 403)
    }

}

export default createLoginService