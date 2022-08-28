import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IScheduleRequest } from "../../interfaces/schedules"
import { Propertie } from "../../entities/propertie.entity"
import { Schedule } from "../../entities/schedule.entity"
import { User } from "../../entities/user.entity"

export const createScheduleService = async (
  newSchedule: IScheduleRequest
): Promise<Schedule> => {
  const userRepository = AppDataSource.getRepository(User)
  const porpertyRepository = AppDataSource.getRepository(Propertie)
  const scheduleRepository = AppDataSource.getRepository(Schedule)

  const user = await userRepository.findOneBy({ id: newSchedule.userId })
  const property = await porpertyRepository.findOneBy({
    id: newSchedule.propertyId,
  })

  if (!user) {
    throw new AppError("User not found!", 404)
  }

  if (!property) {
    throw new AppError("Property not found!", 404)
  }

  let { date, hour } = newSchedule
  const createSchedule = scheduleRepository.create({
    date,
    hour,
    properties: property,
    users: user,
  })

  const scheduleAlreadyExists = await scheduleRepository.findOne({
    where: {
      hour,
      date,
      properties: { id: property.id },
      users: { id: user.id },
    },
  })

  if (scheduleAlreadyExists) {
    throw new AppError("User schedule already exists!")
  }

  const scheduleCreated = await scheduleRepository.save(createSchedule)
  return scheduleCreated
}
