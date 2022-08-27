import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categorie.entity"

export const listCategoriesService = async (): Promise<Categories[]> => {
  const categoriesRepository = AppDataSource.getRepository(Categories)

  const categories = await categoriesRepository.find()

  return categories
}
