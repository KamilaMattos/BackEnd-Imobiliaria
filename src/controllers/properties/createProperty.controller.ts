import { Request, Response } from "express"
import { AppError } from "../../errors/appError"
import { handleError } from "../../middlewares/errors.middleware"
import { IPropertyRequest } from "../../interfaces/properties"
import { createPropertieService } from "../../services/properties/createProperty.service"

export const createPropertyController = async (req: Request, res: Response) => {
  try {
    const {
      categoryId,
      address: { city, district, state, zipCode, number },
      size,
      value,
    }: IPropertyRequest = req.body

    const property = await createPropertieService({
      categoryId,
      address: { city, district, state, zipCode, number },
      size,
      value,
    })

    return res.status(201).json(property)
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res)
    }
  }
}
