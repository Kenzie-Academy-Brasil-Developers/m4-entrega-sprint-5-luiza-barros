import { Request, Response, NextFunction } from "express"
import { Address } from "../entities/address.entity"
import { IAddressRequest } from "../interfaces/properties"
import { AppError } from "../errors/AppError"
import AppDataSource from "../data-source"

const ensurePostPropertiesRequestAreValid = async (req: Request, res: Response, next: NextFunction) => {    
    const address: IAddressRequest = req.body.address
    const addressRepository = AppDataSource.getRepository(Address)

    const foundAddress = await addressRepository.findOneBy({
        district: address.district,
        zipCode: address.zipCode,
        number: address.number,
        city: address.city,
        state: address.state
    })

    if (!foundAddress) {        
        return next()
    }
    throw new AppError("This address already exists", 409)
}

export default ensurePostPropertiesRequestAreValid