import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IScheduleRequest } from "../../interfaces/schedules"
import { Property } from "../../entities/property.entity"
import { Schedule } from "../../entities/schedule.entity"
import { User } from "../../entities/user.entity"

export const createScheduleService = async (
  newSchedule: IScheduleRequest
): Promise<Schedule> => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)
  const propertyRepository = AppDataSource.getRepository(Property)
  const userRepository = AppDataSource.getRepository(User)

  const user = await userRepository.findOneBy({ id: newSchedule.userId })
  const property = await propertyRepository.findOneBy({
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
    property,
    user,
  })

  const scheduleAlreadyExists = await scheduleRepository.findOne({
    where: {
      hour,
      date,
      property: {
        id: property.id,
      },
      user: {
        id: user.id,
      },
    },
  })

  if (scheduleAlreadyExists) {
    throw new AppError("User schedule already exists!")
  }

  const savedSchedule = await scheduleRepository.save(createSchedule)

  return savedSchedule
}
