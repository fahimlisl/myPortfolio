import { Router } from "express";
import { registerReview } from "../controllers/review.controllers.js";


const router = Router()


router.route("/register").post(registerReview)

export default router