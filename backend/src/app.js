import cookieParser from "cookie-parser"
import express, { urlencoded } from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("combined"))
app.use(cookieParser())
app.use(express.json(urlencoded({extended:true , limit:"16kb"})))
app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))

import reviewRoute from "./routes/review.routes.js"

// routes
app.use("/api/v1/review",reviewRoute)

export {app}