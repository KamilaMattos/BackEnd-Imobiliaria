import { Router } from "express"
import { loginController } from "../../controllers/login/login.controller"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { loginUserSchema } from "../../schemas/login.schema"

export const sessionRoutes = Router()

sessionRoutes.post(
  "",
  schemaValidationMiddleware(loginUserSchema),
  loginController
)
