import AppDataSource from "../../data-source"
import { Categorie } from "../../entities/categorie.entity"

export const listCategoriesService = async (): Promise<Categorie[]> => {
  const categoriesRepository = AppDataSource.getRepository(Categorie)

  const categories = await categoriesRepository.find()

  return categories
}
