import { Request, Response, NextFunction } from "express"
import { Properties } from "../entities/properties.entity"
import { AppError } from "../errors/AppError"
import AppDataSource from "../data-source"

const ensurePropertyExists = async (req: Request, res: Response, next: NextFunction) => {
    const scheduleID: string = req.params.id
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const property = await propertiesRepository.findOneBy({
        id: scheduleID
    })

    if (!property) {
        throw new AppError("Invalid property id.", 404)
    }
    return next()
}

export default ensurePropertyExists