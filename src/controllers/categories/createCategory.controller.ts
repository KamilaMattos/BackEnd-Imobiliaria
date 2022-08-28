import { Request, Response } from "express"
import { createCategorieService } from "../../services/categories/createCategory.service"

export const createCategoryController = async (req: Request, res: Response) => {
  const category = req.body
  const newCategory = await createCategorieService(category)
  return res.status(201).json(newCategory)
}
