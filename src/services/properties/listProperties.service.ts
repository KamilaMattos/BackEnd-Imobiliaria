import AppDataSource from "../../data-source"
import { Propertie } from "../../entities/propertie.entity"

export const listPropertiesService = async (): Promise<Propertie[]> => {
  const propertyRepository = AppDataSource.getRepository(Propertie)

  const properties = await propertyRepository.find()

  return properties
}
