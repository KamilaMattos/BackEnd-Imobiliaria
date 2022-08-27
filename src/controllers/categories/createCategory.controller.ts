import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { ICategoryRequest } from "../../interfaces/categories"
import { handleError } from "../../middlewares/errors.middleware"
import { createCategorieService } from "../../services/categories/createCategory.service"

export const createCategoryController = async (req: Request, res: Response) => {
  try {
    const { name }: ICategoryRequest = req.body
    const category = await createCategorieService({ name })

    return res.status(201).json(category)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
