import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/appError"

export const isAdm = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdm } = req.user

  if (!isAdm) {
    throw new AppError("User is not admin", 403)
  }

  next()
}
