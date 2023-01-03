import AppDataSource from "../../data-source"
import { Users } from "../../entities/users.entity"

const deleteUserService = async (reqID: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(Users)

    const foundUser = await userRepository.findOneBy({
        id: reqID
    })
    
    await userRepository.softDelete(foundUser.id)
    await userRepository.save({...foundUser, isActive: false}) 
}

export default deleteUserService