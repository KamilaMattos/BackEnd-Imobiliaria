import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { IUserLogin } from "../../interfaces/users"
import { handleError } from "../../middlewares/errors.middleware"
import { loginService } from "../../services/login/login.service"

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password }: IUserLogin = req.body
    const token = await loginService({ email, password })
    return res.json({ token })
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
