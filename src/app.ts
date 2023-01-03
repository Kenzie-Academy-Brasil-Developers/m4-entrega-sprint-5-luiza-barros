import "reflect-metadata"
import "express-async-errors"
import express from "express"
import userRoutes from "./routes/users.routes"
import loginRoutes from "./routes/login.routes"
import { handleError } from "./errors/handleError"

const app = express()
app.use(express.json())

app.use("/users", userRoutes)
app.use("/login", loginRoutes)

app.use(handleError)

export default app