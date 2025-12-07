import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {ApiError} from "../utils/ApiError.js"
import { Review } from "../models/review.models.js"

const registerReview = asyncHandler( async(req,res) => {
    const {
        username,
        message,
        star,
        positionOfReviewer,
        projectUrl
    } = req.body
    
    if ([username,message,star,positionOfReviewer].some((t) => !t && t !== 0 )){
    throw new ApiError(400,"all fields are required")
    }
        

    const review = await Review.create({
        username,
        message,
        star,
        positionOfReviewer,
        project:projectUrl
    })

    if (!review) throw new ApiError(400,"failed to create review")

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            review,
            "review has been successfully created"
        )
    )
})

const getAllReview = asyncHandler( async(req,res) => {
    const reviews = await Review.find({})

    return res
    .status(200)
    .json(
        new ApiResponse(
            200,
            reviews || "current no of reviews are zero",
            "fetched all the reveiws"
        )
    )
})

export {registerReview,getAllReview}