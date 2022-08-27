import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { listCategoryByIDService } from "../../services/categories/listCategoryByID.service"

export const listCategoryByIDController = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params
    const category = await listCategoryByIDService(id)

    return res.json(category)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
