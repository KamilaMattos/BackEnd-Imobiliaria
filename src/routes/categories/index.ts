import { Router } from "express"
import { authToken } from "../../middlewares/authToken.middleware"
import { isAdm } from "../../middlewares/isAdm.middleware"
import { createCategoryController } from "../../controllers/categories/createCategory.controller"
import { listCategoriesController } from "../../controllers/categories/listCategories.controller"
import { listCategoryByIDController } from "../../controllers/categories/listCategoryByID.controller"

export const categoriesRoute = Router()

categoriesRoute.post("", authToken, isAdm, createCategoryController)
categoriesRoute.get("", listCategoriesController)
categoriesRoute.get("/:id/properties", listCategoryByIDController)
