import { Request, Response } from "express"
import { IPropertyRequest } from "../interfaces/properties"
import createPropertyService from "../services/properties/createPropertyService.services"

const createPropertyController = async (req: Request, res: Response) => {
    const requestData: IPropertyRequest = req.body

    const createdProperty = await createPropertyService(requestData)
    return res.status(201).json(createdProperty)
}

export {
    createPropertyController
}