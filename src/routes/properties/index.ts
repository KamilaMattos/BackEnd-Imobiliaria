import { Router } from "express"
import { createPropertyController } from "../../controllers/properties/createProperty.controller"
import { listPropertiesController } from "../../controllers/properties/listProperties.controller"
import { authToken } from "../../middlewares/authToken.middleware"
import { isAdm } from "../../middlewares/isAdm.middleware"
import { schemaValidationMiddleware } from "../../middlewares/schemaValidation.middleware"
import { newPropertySchema } from "../../schemas/property.schema"

export const propertiesRoute = Router()

propertiesRoute.post(
  "",
  authToken,
  isAdm,
  schemaValidationMiddleware(newPropertySchema),
  createPropertyController
)
propertiesRoute.get("", listPropertiesController)
