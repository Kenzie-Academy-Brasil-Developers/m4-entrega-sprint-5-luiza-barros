import { Users } from "../../entities/users.entity"
import AppDataSource from "../../data-source"
import { IUser } from "../../interfaces/users"

const getAllUsersService = async (): Promise<IUser[]> => {
    const userRepository = AppDataSource.getRepository(Users)

    const users = userRepository.find()
    return users
}

export default getAllUsersService

//A rota deve retornar todos os dados dos usuários, com exceção da hash de senha.