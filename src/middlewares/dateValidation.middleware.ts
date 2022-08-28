import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/appError"

const dateValidationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { date, hour } = req.body

  date = new Date(date)
  const day = date.getDay()

  const minutes = +hour.split(":")[1]
  hour = +hour.split(":")[0]

  if (minutes == 0 && hour == 18) {
    next()
  }

  if (hour < 8 || hour >= 18) {
    throw new AppError("Invalid hour!")
  }

  if (day == 6 || day == 0) {
    throw new AppError("Invalid date!")
  }

  next()
}

export { dateValidationMiddleware }
