import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/users.routes"
import loginRoutes from "./routes/login.routes"
import categoryRoutes from "./routes/category.routes"
import propertiesRoutes from "./routes/properties.routes"
import { handleError } from "./errors/handleError"

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)
app.use("/categories", categoryRoutes)
app.use("/properties", propertiesRoutes)

app.use(handleError)

export default app