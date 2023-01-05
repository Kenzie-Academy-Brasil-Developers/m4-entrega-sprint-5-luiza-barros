import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError"
import { IScheduleRequest } from "../interfaces/schedules"

const ensureSchedulesReqAreValid = (req: Request, res: Response, next: NextFunction) => {
    const schedulesData: IScheduleRequest = req.body

    const begin = Date.parse("01/01/2011 8:00:00 GMT")
    const end = Date.parse("01/01/2011 18:00:00 GMT")
    const requestHour = Date.parse(`01/01/2011 ${schedulesData.hour}`)

    if (requestHour > begin && requestHour < end) {

        const day = new Date(schedulesData.date).getDay()
        if (day >= 1 && day <= 5) {
            return next()
        }
        throw new AppError("Date is not valid", 400)

    }
    throw new AppError("Hour is not valid", 400)
}

export default ensureSchedulesReqAreValid