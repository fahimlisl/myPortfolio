import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    },
    star:{
        type:Number,
        default:1,
        required:true
    },
    positionOfReviewer:{
        type:String,
        required:true
    }
},{timestamps:true})


export const Review = mongoose.model("Review",reviewSchema)