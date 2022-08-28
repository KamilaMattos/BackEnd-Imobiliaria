import { Request, Response } from "express"
import { createScheduleService } from "../../services/schedules/createSchedule.service"

export const createScheduleController = async (req: Request, res: Response) => {
  const schedule = req.body
  schedule.userId = req.user.id

  await createScheduleService(schedule)

  return res.status(201).json({ message: "Schedule created!" })
}
