import { Request, Response } from "express"
import { IScheduleRequest } from "../../interfaces/schedules"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { createScheduleService } from "../../services/schedules/createSchedule.service"

export const createScheduleController = async (req: Request, res: Response) => {
  try {
    const { id } = req.user
    const userId = id
    const { date, hour, propertyId }: IScheduleRequest = req.body
    const schedule = await createScheduleService({
      date,
      hour,
      userId,
      propertyId,
    })

    return res.status(201).json({ message: "Schedule created" })
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
