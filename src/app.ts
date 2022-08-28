import "reflect-metadata"
import "express-async-errors"
import express from "express"

import { usersRoute } from "./routes/users"
import { sessionRoutes } from "./routes/session"
import { categoriesRoute } from "./routes/categories"
import { propertiesRoute } from "./routes/properties"
import { schedulesRoute } from "./routes/schedules/index.ts"

import { handleErrorMiddleware } from "./middlewares/errors.middleware"

const app = express()
app.use(express.json())

app.use("/users", usersRoute)
app.use("/login", sessionRoutes)
app.use("/categories", categoriesRoute)
app.use("/properties", propertiesRoute)
app.use("/schedules", schedulesRoute)

app.use(handleErrorMiddleware)

export default app
