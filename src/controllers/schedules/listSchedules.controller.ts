import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { listSchedulesService } from "../../services/schedules/listSchedules.service"

export const listSchedulesController = async (req: Request, res: Response) => {
  const { id } = req.params
  const listSchedules = await listSchedulesService(id)

  return res.status(200).json(listSchedules)
}
