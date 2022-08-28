import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Property } from "../../entities/property.entity"

export const listSchedulesService = async (id: string): Promise<Property> => {
  const propertiesRepository = AppDataSource.getRepository(Property)

  const property = await propertiesRepository.findOneBy({ id })

  if (!property) {
    throw new AppError("Property not found!", 404)
  }

  const listProperty = await propertiesRepository.findOne({
    where: {
      id,
    },
    relations: {
      category: true,
      schedules: true,
    },
  })

  if (!listProperty) {
    throw new AppError("Schedule not found", 404)
  }

  return listProperty
}
