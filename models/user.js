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
    whatsApp: {
        type : String,
        required : true,
    }
})

const User = mongoose.model("User", userSchema)

export default User