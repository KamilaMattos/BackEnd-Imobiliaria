import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/appError"
import jwt from "jsonwebtoken"

export const authToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization

  if (!token) {
    throw new AppError("Invalid token!", 401)
  }

  token = token?.split(" ")[1]

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
        throw new AppError("Invalid token", 401)
      }

      req.user = {
        isAdm: decoded.isAdm,
        isActive: decoded.isActive,
        id: decoded.sub,
      }
    }
  )
  next()
}
