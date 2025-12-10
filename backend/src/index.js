import 'dotenv/config' // using eS'6 verison of js
import { app } from "./app.js";
import { connectDB } from "./db/index.js";

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
