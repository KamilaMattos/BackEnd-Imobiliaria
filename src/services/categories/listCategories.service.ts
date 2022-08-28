import AppDataSource from "../../data-source"
import { Category } from "../../entities/category.entity"

export const listCategoriesService = async (): Promise<Category[]> => {
  const categoriesRepository = AppDataSource.getRepository(Category)

  const categories = await categoriesRepository.find()

  return categories
}
