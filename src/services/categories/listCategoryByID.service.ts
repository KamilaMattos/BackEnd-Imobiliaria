import AppDataSource from "../../data-source"
import { Categorie } from "../../entities/categorie.entity"
import { AppError } from "../../errors/appError"

export const listCategoryByIDService = async (
  id: string
): Promise<Categorie> => {
  const categoriesRepository = AppDataSource.getRepository(Categorie)

  const categories = await categoriesRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  })

  if (!categories) {
    throw new AppError("Category not found", 404)
  }

  return categories
}
