import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserRequest } from "../../interfaces/users"
import { AppError } from "../../errors/appError"
import { hash } from "bcryptjs"

export const createUserService = async ({
  email,
  name,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User)

  const userAlreadyExists = await userRepository.findOneBy({ email })

  if (userAlreadyExists) {
    throw new AppError("User already exists", 400)
  }

  const hashedPassword = await hash(password, 10)

  const newUser = userRepository.create({
    email,
    name,
    password: hashedPassword,
    isAdm,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  })

  await userRepository.save(newUser)

  return newUser
}
