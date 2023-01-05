import { Request, Response, NextFunction } from "express"
import { IScheduleRequest } from "../interfaces/schedules"
import createUserScheduleService from "../services/schedules/createUserScheduleService.services"
import getAllUserScheduleService from "../services/schedules/getAllUserScheduleService.services"

const createUserScheduleController = async (req: Request, res: Response, next: NextFunction) => {
    const user = res.locals.user
    const schedule: IScheduleRequest = req.body

    const createdSchedule = await createUserScheduleService(user, schedule)
    return res.status(201).json(createdSchedule)
}

const getAllUserScheduleController = async (req: Request, res: Response, next: NextFunction) => {
    const propertyId = req.params.id

    const allUserSchedule = await getAllUserScheduleService(propertyId)
    return res.status(201).json(allUserSchedule)
}

export {
    createUserScheduleController,
    getAllUserScheduleController
}