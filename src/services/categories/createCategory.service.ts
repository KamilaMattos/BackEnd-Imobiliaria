import AppDataSource from "../../data-source"
import { Categorie } from "../../entities/categorie.entity"
import { AppError } from "../../errors/appError"
import { ICategoryRequest } from "../../interfaces/categories"

export const createCategorieService = async ({
  name,
}: ICategoryRequest): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Categorie)

  const categoryAlreadyExists = await categoryRepository.findOneBy({ name })

  if (categoryAlreadyExists) {
    throw new AppError("Category already exists!", 400)
  }

  const createdCategory = {
    name,
  }

  await categoryRepository.save(createdCategory)
  return createdCategory
}
