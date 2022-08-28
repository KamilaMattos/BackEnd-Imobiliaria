import { Router } from "express"
import { createScheduleController } from "../../controllers/schedules/createSchedule.controller"
import { listSchedulesController } from "../../controllers/schedules/listSchedules.controller"
import { authToken } from "../../middlewares/authToken.middleware"
import { isAdm } from "../../middlewares/isAdm.middleware"

export const schedulesRoute = Router()

schedulesRoute.post("", authToken, createScheduleController)
schedulesRoute.get("/properties/:id", authToken, isAdm, listSchedulesController)
