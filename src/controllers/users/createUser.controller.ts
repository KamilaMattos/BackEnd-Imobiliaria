import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import { AppError } from "../../errors/appError"
import { IUser, IUserRequest } from "../../interfaces/users"
import { handleError } from "../../middlewares/errors.middleware"
import { createUserService } from "../../services/users/cretateUser.service"

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name, password, isAdm }: IUserRequest = req.body
    const user = await createUserService({ email, name, password, isAdm })
    return res.status(201).json(instanceToPlain(user))
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
