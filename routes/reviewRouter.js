import express from "express";
import { addReview, deleteReview, getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router()

reviewRouter.post("/", addReview)
reviewRouter.get("/", getReviews)
reviewRouter.delete("/:email", deleteReview)

reviewRouter.get("/approved",
(req, res)=>{
    
}
)

export default reviewRouter