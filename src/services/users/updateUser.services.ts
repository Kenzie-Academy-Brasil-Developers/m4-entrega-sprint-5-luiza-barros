import AppDataSource from "../../data-source"
import { Users } from "../../entities/users.entity"
import { AppError } from "../../errors/AppError"
import { IUserUpdate } from "../../interfaces/users"
import { updateUserSerializer } from "../../serializers/users.serializers"

const updateUserService = async (reqID: string, dataToUpdate: IUserUpdate) => {
    try {
        const validatedDataToUpdate = await updateUserSerializer.validate(dataToUpdate, {
            abortEarly: false,
            stripUnknown: true
        })

        const userRepository = AppDataSource.getRepository(Users)

        const foundUser = await userRepository.findOneBy({
            id: reqID
        })

        const updatedUser = await userRepository.update(reqID, {
            email: validatedDataToUpdate.email || foundUser.email,
            name: validatedDataToUpdate.name || foundUser.name,
            password: validatedDataToUpdate.password || foundUser.password
        })

        return updatedUser

    } catch (error) {
        throw new AppError(error)
    }
}

export default updateUserService