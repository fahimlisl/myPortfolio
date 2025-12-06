import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    } catch (error) {
        throw new Error(400,"erorr while connecion to databse , file index inside db folder")
    }
}

export {connectDB}