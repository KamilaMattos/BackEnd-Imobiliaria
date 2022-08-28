import * as yup from "yup"
import { SchemaOf } from "yup"
import { IPropertyRequest } from "../interfaces/properties"

const newPropertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number().required(),
  size: yup.number().required(),
  categoryId: yup.string().required(),
  address: yup.object({
    district: yup.string().required(),
    zipCode: yup.string().required().max(8, "Invalid zip code"),
    number: yup.string(),
    city: yup.string().required(),
    state: yup.string().required().max(2, "Invalid state"),
  }),
})

export { newPropertySchema }
