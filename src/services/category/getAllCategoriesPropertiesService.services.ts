import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"

const getAllCategoriesPropertiesService = async (idCategory: string): Promise<Category> => {
    const allPropertiesCategoryRepository = AppDataSource.getRepository(Category)

    const result = await allPropertiesCategoryRepository.findOneBy({
        id: idCategory
    })

    if (!result || result === null) {
        throw new AppError("Invalid CategoryId", 404)
    }

    const category = await allPropertiesCategoryRepository.findOne({
        where: {
            id: idCategory
        },
        relations: {
            properties: true
        },
        withDeleted: true
    })

    return category
}

export default getAllCategoriesPropertiesService