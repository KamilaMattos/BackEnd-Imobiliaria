import * as yup from "yup"
import { SchemaOf } from "yup"
import { IUserRequest } from "../interfaces/users"

const newUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  isAdm: yup.boolean().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().required(),
})

export { newUserSchema }
