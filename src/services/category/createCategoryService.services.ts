import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"
import { AppError } from "../../errors/AppError"
import { ICategoryRequest } from "../../interfaces/categories"
import { createCategorySerializer } from "../../serializers/category.serializers"

const createCategoryService = async (requestData: ICategoryRequest): Promise<Category> => {
    try {
        const validatedName = await createCategorySerializer.validate(requestData, {
            abortEarly: false,
            stripUnknown: true
        })

        const categoryRepository = AppDataSource.getRepository(Category)
    
        const category = categoryRepository.create(validatedName)
        await categoryRepository.save(category)

        return category
    } catch (error) {
        throw new AppError(error)
    }
}

export default createCategoryService