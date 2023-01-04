import { Request, Response } from "express"
import { IPropertyRequest } from "../interfaces/properties"
import createPropertyService from "../services/properties/createPropertyService.services"
import getAllPropertiesService from "../services/properties/getAllPropertiesService.services"

const createPropertyController = async (req: Request, res: Response) => {
    const requestData: IPropertyRequest = req.body

    const createdProperty = await createPropertyService(requestData)
    return res.status(201).json(createdProperty)
}

const getAllPropertiesController = async (req: Request, res: Response) => {
    const allProperties = await getAllPropertiesService()
    return res.status(200).json(allProperties)
}

export {
    createPropertyController,
    getAllPropertiesController
}