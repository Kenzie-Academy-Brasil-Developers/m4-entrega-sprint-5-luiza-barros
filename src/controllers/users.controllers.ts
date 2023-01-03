import { Request, Response } from "express"
import { IUserRequest, IUserUpdate } from "../interfaces/users"
import createUserService from "../services/users/createUser.services"
import deleteUserService from "../services/users/deleteUser.services"
import getAllUsersService from "../services/users/getAllUsers.services"
import updateUserService from "../services/users/updateUser.services"

const createUserController = async (req: Request, res: Response) => {
    const userData: IUserRequest = req.body
    
    const newUser = await createUserService(userData)
    return res.status(201).json(newUser)
}

const getAllUsersController = async (req: Request, res: Response) => {
    const users = await getAllUsersService()
    return res.status(200).json(users)
}

const updateUserController = async (req: Request, res: Response) => {
    const dataToUpdate: IUserUpdate = req.body

    const updatedUser = await updateUserService(req.params.id, dataToUpdate)
    return res.status(200).json(updatedUser)
}

const deleteUserController = async (req: Request, res: Response) => {
    await deleteUserService(req.params.id)
    return res.status(204).send()
}

export { 
    createUserController, 
    getAllUsersController, 
    updateUserController,
    deleteUserController 
}