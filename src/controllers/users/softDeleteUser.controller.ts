import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { deleteUserService } from "../../services/users/softDeleteUser.service"

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await deleteUserService(id)
    return res.status(204).json(user)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
