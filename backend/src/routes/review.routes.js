import { Router } from "express";
import { getAllReview, registerReview } from "../controllers/review.controllers.js";


const router = Router()


router.route("/register").post(registerReview)
router.route("/getAll").get(getAllReview)

export default router