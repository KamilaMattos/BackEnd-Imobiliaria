import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { Propertie } from "../../entities/propertie.entity"

export const listSchedulesService = async (id: string) => {
  const propertiesRepository = AppDataSource.getRepository(Propertie)

  const properties = await propertiesRepository.findOne({
    relations: {
      schedules: true,
    },
    where: {
      id,
    },
  })

  if (!properties) {
    throw new AppError("Property not found!", 404)
  }

  return properties
}
