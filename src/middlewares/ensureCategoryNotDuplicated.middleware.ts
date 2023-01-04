import { Request, Response, NextFunction } from "express"
import { Category } from "../entities/category.entity"
import { AppError } from "../errors/AppError"
import AppDataSource from "../data-source"

const ensureCategoryNotDuplicated = async (req: Request, res: Response, next: NextFunction) => {
    const name: string = req.body.name

    const categoryRepository = AppDataSource.getRepository(Category)

    try {
        const category = await categoryRepository.findOneBy({
            name: name
        })
    
        if (!category) {
            return next()
        } 
        throw new AppError("This category already exists.", 409)

    } catch (error) {
        throw new AppError("Conflict.", 409)
    }
}   

export default ensureCategoryNotDuplicated