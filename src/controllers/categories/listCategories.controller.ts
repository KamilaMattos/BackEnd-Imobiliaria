import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { listCategoriesService } from "../../services/categories/listCategories.service"

export const listCategoriesController = async (req: Request, res: Response) => {
  try {
    const categories = await listCategoriesService()
    return res.json(categories)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
