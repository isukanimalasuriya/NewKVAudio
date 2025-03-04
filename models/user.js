import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    firstName: {
        type : String,
        required : true,
    },
    lastName: {
        type : String,
        required : true,
    },
    address: {
        type : String,
        required : true,
    },
    phoneNo: {
        type : String,
        required : true,
    },
    profilePic: {
        type : String,
        required : true,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
})

const User = mongoose.model("User", userSchema)

export default User