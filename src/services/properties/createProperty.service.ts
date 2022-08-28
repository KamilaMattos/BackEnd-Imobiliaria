import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IPropertyRequest } from "../../interfaces/properties/index"
import { Address } from "../../entities/address.entity"
import { Category } from "../../entities/category.entity"
import { Property } from "../../entities/property.entity"

export const createPropertieService = async (
  property: IPropertyRequest
): Promise<Property> => {
  const propertiesRepository = AppDataSource.getRepository(Property)
  const categoryRepository = AppDataSource.getRepository(Category)
  const addressRepository = AppDataSource.getRepository(Address)

  let { value, size, address, categoryId } = property

  const category = await categoryRepository.findOneBy({ id: categoryId })
  if (!category) {
    throw new AppError("Category not found!", 404)
  }

  address = addressRepository.create(address)
  const addressAlreadyExists = await addressRepository.findOne({
    where: address,
  })
  if (addressAlreadyExists) {
    throw new AppError("Address already exists!")
  }

  await addressRepository.save(address)

  const newProperty = await propertiesRepository.save({
    value,
    size,
    address,
    category,
  })

  if (!newProperty) {
    throw new AppError("Address already exists!")
  }

  return newProperty
}
