import { Request, Response } from "express"
import { createPropertieService } from "../../services/properties/createProperty.service"

export const createPropertyController = async (req: Request, res: Response) => {
  const property = req.body
  const newProperty = await createPropertieService(property)
  return res.status(201).json(newProperty)
}
