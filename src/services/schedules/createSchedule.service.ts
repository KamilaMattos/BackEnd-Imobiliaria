import AppDataSource from "../../data-source"
import { AppError } from "../../errors/appError"
import { IScheduleRequest } from "../../interfaces/schedules"
import { Propertie } from "../../entities/propertie.entity"
import { Schedule } from "../../entities/schedule.entity"
import { User } from "../../entities/user.entity"

export const createScheduleService = async ({
  date,
  hour,
  propertyId,
  userId,
}: IScheduleRequest): Promise<void> => {
  const scheduleRepository = AppDataSource.getRepository(Schedule)
  const propertyRepository = AppDataSource.getRepository(Propertie)
  const userRepository = AppDataSource.getRepository(User)

  const properties = await propertyRepository.findOneBy({ id: propertyId })

  if (!properties || !propertyId) {
    throw new AppError("Property not found", 404)
  }

  const users = await userRepository.findOneBy({ id: userId })

  const propertySchedule = await scheduleRepository.find({
    relations: { properties: true },
    where: {
      date,
      hour,
    },
  })

  if (propertySchedule.length > 0) {
    throw new AppError("User shedule already exists!")
  }

  if (+hour.split(":")[0] < 8 || +hour.split(":")[0] >= 18) {
    throw new AppError("Invalid hour")
  }

  if (new Date(date).getDay() == 0 || new Date(date).getDay() == 6) {
    throw new AppError("Invalid date!")
  }

  await scheduleRepository.save({
    date: date,
    hour: hour,
    users: users!,
    properties: properties,
  })
}
