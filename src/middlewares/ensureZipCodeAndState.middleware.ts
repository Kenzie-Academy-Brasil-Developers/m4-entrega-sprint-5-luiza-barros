import { Request, Response, NextFunction } from "express"
import { IAddressRequest } from "../interfaces/properties"
import { AppError } from "../errors/AppError"

const ensureZipCodeAndState = async (req: Request, res: Response, next: NextFunction) => {
    const address: IAddressRequest = req.body.address

    if (address.zipCode.length > 8 && address.state.length > 2 || address.zipCode.length > 8 || address.state.length > 2) {
        throw new AppError("Invalid request.", 400)
    }
    return next()
}

export default ensureZipCodeAndState