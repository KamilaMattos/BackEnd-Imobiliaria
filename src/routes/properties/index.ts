import { Router } from "express"
import { createPropertyController } from "../../controllers/properties/createProperty.controller"
import { listPropertiesController } from "../../controllers/properties/listProperties.controller"
import { authToken } from "../../middlewares/authToken.middleware"
import { isAdm } from "../../middlewares/isAdm.middleware"

export const propertiesRoute = Router()

propertiesRoute.post("", authToken, isAdm, createPropertyController)
propertiesRoute.get("", listPropertiesController)
