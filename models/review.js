import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    profilePic: {
        type : String,
        required : true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    isApproved: {
        type: Boolean,
        required: true,
        default: false
    }
})

const Review = mongoose.model("Reviews", reviewSchema)

export default Review