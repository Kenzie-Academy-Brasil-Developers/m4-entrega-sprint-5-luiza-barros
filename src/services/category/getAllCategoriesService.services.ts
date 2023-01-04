import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"

const getAllCategoriesService = (): Promise<Category[]> => {
    const categoryRepository = AppDataSource.getRepository(Category)
    const allCategories = categoryRepository.find()

    return allCategories
}

export default getAllCategoriesService