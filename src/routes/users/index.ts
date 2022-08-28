import { Router } from "express"
import { createUserController } from "../../controllers/users/createUser.controller"
import { listUsersController } from "../../controllers/users/listUsers.controller"
import { deleteUserController } from "../../controllers/users/softDeleteUser.controller"
import { authToken } from "../../middlewares/authToken.middleware"
import { isAdm } from "../../middlewares/isAdm.middleware"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newUserSchema } from "../../schemas/newUser.schema"

export const usersRoute = Router()

usersRoute.post(
  "",
  schemaValidationMiddleware(newUserSchema),
  createUserController
)
usersRoute.get("", authToken, isAdm, listUsersController)
usersRoute.delete("/:id", authToken, isAdm, deleteUserController)
