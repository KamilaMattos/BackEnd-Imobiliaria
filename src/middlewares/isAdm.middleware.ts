import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/appError"
import { handleError } from "./errors.middleware"

export const isAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { isAdm } = req.user

    if (!isAdm) {
      throw new AppError("Unauthorized", 403)
    }

    next()
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
