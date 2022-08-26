import "reflect-metadata"
import "express-async-errors"
import express from "express"

import { usersRoute } from "./routes/users"
import { loginRoute } from "./routes/login"
import { categoriesRoute } from "./routes/categories"
import { propertiesRoute } from "./routes/properties"
import { schedulesRoute } from "./routes/schedules/index.ts"

import { handleError } from "./middlewares/errors.middleware"

const app = express()
app.use(express.json())

app.use("/users", usersRoute)
app.use("/login", loginRoute)
app.use("/categories", categoriesRoute)
app.use("/properties", propertiesRoute)
app.use("/schedules", schedulesRoute)

app.use(handleError)

export default app
