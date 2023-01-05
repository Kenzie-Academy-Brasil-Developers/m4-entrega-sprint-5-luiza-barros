import AppDataSource from "../../data-source"
import { Properties } from "../../entities/properties.entity"

const getAllUserScheduleService = async (propertyId: string) => {
    const propertiesRepository = AppDataSource.getRepository(Properties)

    const allUserSchedule = await propertiesRepository.createQueryBuilder('properties').
    innerJoinAndSelect('properties.schedules', 'schedules').
    innerJoinAndSelect('schedules.users', 'user').
    where('properties.id = :id_property', {id_property: propertyId}).
    select(['properties.id as id_property', 'schedules', 'user']).
    getRawMany()

    return allUserSchedule
}

export default getAllUserScheduleService