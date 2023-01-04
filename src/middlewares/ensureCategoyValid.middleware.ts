import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"
import AppDataSource from "../data-source"
import { Category } from "../entities/category.entity"

const ensureCategoryValid = async (req: Request, res: Response, next: NextFunction) => {    
    const categoriesRepository = AppDataSource.getRepository(Category)

    const result = await categoriesRepository.findOneBy({
        id: req.body.categoryId
    })

    if (!result || result === null) {
        throw new AppError("Invalid CategoryId", 404)
    }

    res.locals.result = result
}

export default ensureCategoryValid