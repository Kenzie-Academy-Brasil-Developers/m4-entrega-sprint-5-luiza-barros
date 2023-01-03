import { Request, response, Response } from "express"
import { IUser, IUserLogin } from "../interfaces/users"
import createLoginService from "../services/login/createLogin.services"

const loginUserController = async (req: Request, res: Response) => {
    const login: IUserLogin = req.body
    const user: IUser = res.locals.user

    const data = await createLoginService(login, user)
    return res.status(200).json(data)
}

export { loginUserController }