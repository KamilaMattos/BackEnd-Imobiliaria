import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { instanceToPlain } from "class-transformer"
import { listUsersService } from "../../services/users/listUsers.service"

export const listUsersController = async (req: Request, res: Response) => {
  try {
    const users = await listUsersService()
    return res.json(instanceToPlain(users))
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
