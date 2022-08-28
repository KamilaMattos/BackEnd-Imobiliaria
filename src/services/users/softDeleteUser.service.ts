import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/appError";

export const deleteUserService = async(id: string): Promise<void>=>{
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({id})

  if(!user){
    throw new AppError("User not found!", 404)
  }

  if(!user.isActive){
    throw new AppError("User is already inactive", 400)
  }

  user.isActive = false

  await userRepository.save(user)
  
}