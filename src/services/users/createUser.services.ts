import { IUserRequest, IUserResponse } from "../../interfaces/users"
import { Users } from "../../entities/users.entity"
import { AppError } from "../../errors/AppError"
import { createUserSerializer, createUserWithoutPasswordSerializer } from "../../serializers/users.serializers"
import AppDataSource from "../../data-source"

const createUserService = async (userData: IUserRequest): Promise<IUserResponse> => {
    try {
        const validatedUserData = await createUserSerializer.validate(userData, {
            abortEarly: false,
            stripUnknown: true
        })

        const userRepository = AppDataSource.getRepository(Users)
    
        const user = userRepository.create(validatedUserData)
        await userRepository.save(user)

        const userWithoutPassword = await createUserWithoutPasswordSerializer.validate(user, {
            abortEarly: false,
            stripUnknown: true
        })
    
        return userWithoutPassword
    } catch (error) {
        throw new AppError(error)
    }

}

export default createUserService