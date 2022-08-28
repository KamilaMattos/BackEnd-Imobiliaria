import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IPropertyRequest } from "../../interfaces/properties/index"
import { Address } from "../../entities/address.entity"
import { Categorie } from "../../entities/categorie.entity"
import { Propertie } from "../../entities/propertie.entity"

export const createPropertieService = async ({
  address: { city, district, state, zipCode, number },
  categoryId,
  size,
  value,
}: IPropertyRequest): Promise<Propertie> => {
  const propertiesRepository = AppDataSource.getRepository(Propertie)
  const categoryRepository = AppDataSource.getRepository(Categorie)
  const addressRepository = AppDataSource.getRepository(Address)

  const addressAlreadyExits = await addressRepository.findOneBy({ zipCode })

  if (addressAlreadyExits?.number === number) {
    throw new AppError("Address already exists!", 400)
  }

  if (state.length > 2) {
    throw new AppError("Invalid state!", 400)
  }

  if (zipCode.length > 8) {
    throw new AppError("Invalid zip code!", 400)
  }

  const newAddress = addressRepository.create({
    district,
    zipCode,
    number,
    city,
    state,
  })

  await addressRepository.save(newAddress)

  const category = await categoryRepository.findOneBy({ id: categoryId })

  if (!category) {
    throw new AppError("Category not found!", 404)
  }

  const newProperty = propertiesRepository.create({
    value,
    createdAt: new Date(),
    updatedAt: new Date(),
    size,
    sold: false,
    address: newAddress,
    category: {
      id: category?.id,
      name: category?.name,
    },
  })

  await propertiesRepository.save(newProperty)

  return newProperty
}
