import cookieParser from "cookie-parser"
import express, { urlencoded } from "express"
import morgan from "morgan"

const app = express()

app.use(morgan("combined"))
app.use(cookieParser())
app.use(express.json(urlencoded({extended:true , limit:"16kb"})))
app.use(express.json({limit:"16kb"}))
app.use(express.static("public"))

export {app}