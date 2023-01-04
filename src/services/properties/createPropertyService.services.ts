import AppDataSource from "../../data-source"
import { Address } from "../../entities/address.entity"
import { Category } from "../../entities/category.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async (requestData: IPropertyRequest): Promise<Properties> => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const addressRepository = AppDataSource.getRepository(Address)
    const categoriesRepository = AppDataSource.getRepository(Category)

    const result = await categoriesRepository.findOneBy({
        id: requestData.categoryId
    })

    if (!result || result === null) {
        throw new AppError("Invalid CategoryId", 404)
    }

    const newAddress  = addressRepository.create({
        district: requestData.address.district,
        city: requestData.address.city,
        zipCode: requestData.address.zipCode,
        number: requestData.address.number,
        state: requestData.address.state
    })
    await addressRepository.save(newAddress)

    const newProperty = propertiesRepository.create({
        value: requestData.value,
        size: requestData.size,
        address: newAddress,
        category: result
    })
    await propertiesRepository.save(newProperty)

    return newProperty
}

export default createPropertyService