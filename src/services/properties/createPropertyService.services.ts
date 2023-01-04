import AppDataSource from "../../data-source"
import { Address } from "../../entities/address.entity"
import { Properties } from "../../entities/properties.entity"
import { AppError } from "../../errors/AppError"
import { IPropertyRequest } from "../../interfaces/properties"

const createPropertyService = async (requestData: IPropertyRequest): Promise<Properties> => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const addressRepository = AppDataSource.getRepository(Address)

    const newAddress  = addressRepository.create(requestData.address)
    await addressRepository.save(newAddress)

    const newProperty = propertiesRepository.create(requestData)
    await propertiesRepository.save(newProperty)

    return newProperty
}

export default createPropertyService