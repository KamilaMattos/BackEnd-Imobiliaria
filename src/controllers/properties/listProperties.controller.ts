import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { listPropertiesService } from "../../services/properties/listProperties.service"

export const listPropertiesController = async (req: Request, res: Response) => {
  try {
    const properties = await listPropertiesService()
    return res.json(properties)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
