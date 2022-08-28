import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserRequest } from "../../interfaces/users"
import { AppError } from "../../errors/appError"
import { hash } from "bcryptjs"

export const createUserService = async (
  newUser: IUserRequest
): Promise<User> => {
  newUser.password = await hash(newUser.password, 10)
  const userRepository = AppDataSource.getRepository(User)
  const userAlreadyExists = await userRepository.findOneBy({
    email: newUser.email,
  })

  if (userAlreadyExists) {
    throw new AppError("User already exists", 400)
  }

  const createUser = userRepository.create(newUser)
  const savedUser = await userRepository.save(createUser)

  return savedUser
}
