import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { ICategoryRequest } from "../../interfaces/categories"
import { Category } from "../../entities/category.entity"

export const createCategorieService = async (
  category: ICategoryRequest
): Promise<Category> => {
  const categoryRepository = AppDataSource.getRepository(Category)

  const categoryAlreadyExists = await categoryRepository.findOneBy({
    name: category.name,
  })

  if (categoryAlreadyExists) {
    throw new AppError("Category already exists!")
  }

  const createdCategory = categoryRepository.save(category)

  return createdCategory
}
