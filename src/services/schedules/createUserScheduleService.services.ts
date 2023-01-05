import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"
import { SchedulesUsersProperties } from "../../entities/schedulesUsersProperties.entity"
import { AppError } from "../../errors/AppError"
import { IScheduleRequest } from "../../interfaces/schedules"
import { IUserResponse } from "../../interfaces/users"

const createUserScheduleService = async (user: IUserResponse, schedule: IScheduleRequest): Promise<{}> => {
    const propertiesRepository = AppDataSource.getRepository(Properties)
    const schedulesRepository = AppDataSource.getRepository(SchedulesUsersProperties)

    const property = await propertiesRepository.findOneBy({
        id: schedule.propertyId
    })

    if (!property) {
        throw new AppError("Invalid property id.", 404)
    }

    const createdSchedule = schedulesRepository.create({
        date: schedule.date,
        hour: schedule.hour,
        users: user,
        properties: property
    })
    await schedulesRepository.save(createdSchedule)

    return { message: "Schedule created successfully"}
}

export default createUserScheduleService