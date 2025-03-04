import User from "../models/user.js";
import brcypt from "bcrypt";
import jwt from "jsonwebtoken";

export function registerUser(req, res){

    const data = req.body

    data.password = brcypt.hashSync(data.password, 10)

    const newUser = new User(data)

    newUser.save().then(()=>{
        res.json({
            message: "User saved success"
        }).catch((error)=>{
            res.status(500).json({error: "User registration failed"})
        })
    })
}

export function loginUser(req, res){

    if(req.user==null){
        res.status(401).json({
            message : "Please login and try again"
        })
        return
    }

    if(req.user.role != "admin"){
        res.status(404).json({
            message: "You are not authorized to perform this action"
        })
        return
    }

    User.findOne({
        email: data.email
    }).then(
        (user)=>{
            
            if(user==null){
                res.status(404).json({error: "User not found"})
            }else{

                const isPasswordCorrect = brcypt.compareSync(data.password, user.password)

                if(isPasswordCorrect){
                    const token = jwt.sign({
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role
                    }, "kvaudio1")
                    res.json({message: "Login success", token:token})
                }else{
                    res.status(401).json({error: "Login failed"})
                }
            }
        }
    )

}