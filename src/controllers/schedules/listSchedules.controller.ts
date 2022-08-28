import { instanceToPlain } from "class-transformer"
import { Request, Response } from "express"
import { listSchedulesService } from "../../services/schedules/listSchedules.service"

export const listSchedulesController = async (req: Request, res: Response) => {
  const { id } = req.params
  const listSchedules = await listSchedulesService(id)

  return res.json(instanceToPlain(listSchedules))
}
