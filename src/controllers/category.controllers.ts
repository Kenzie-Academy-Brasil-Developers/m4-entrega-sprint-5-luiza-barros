import { Request, Response } from "express"
import { ICategoryRequest } from "../interfaces/categories"
import createCategoryService from "../services/category/createCategoryService.services"
import getAllCategoriesPropertiesService from "../services/category/getAllCategoriesPropertiesService.services"
import getAllCategoriesService from "../services/category/getAllCategoriesService.services"

const createCategoryController = async (req: Request, res: Response) => {
    const requestData: ICategoryRequest = req.body

    const createdCategory = await createCategoryService(requestData)
    return res.status(201).json(createdCategory)
}

const getAllCategoriesController = async (req: Request, res: Response) => {
    const allCategories = await getAllCategoriesService()
    return res.status(200).json(allCategories)
}

const getAllCategoriesPropertiesController = async (req: Request, res: Response) => {
    const idCategory = req.params.id

    const allCategoriesProperties = await getAllCategoriesPropertiesService(idCategory)
    return res.status(200).json(allCategoriesProperties)
}

export {
    createCategoryController,
    getAllCategoriesController,
    getAllCategoriesPropertiesController
}