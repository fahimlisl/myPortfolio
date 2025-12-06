import { app } from "./app.js";
import dotenv from "dotenv"
import { connectDB } from "./db/index.js";

dotenv.config({
    path:"./.env"
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 7878, () => {
        console.log(`exmaple app is listneing on ${process.env.PORT}`)
        console.log(`app is connected to databse`)
    })
})
.catch((err) => {
    console.error("error while connecting to database ",err)
})
