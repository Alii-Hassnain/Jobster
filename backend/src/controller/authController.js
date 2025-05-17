const User = require("../model/authModel")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()

const generatedToken = (userId) =>{
    return jwt.sign({id:userId},process.env.JWT_SECRET,{expiresIn:"1d"});
};
const registerUser = async (req,res)=>{
    const {name , email , password } = req.body;
    if(!name,!email,!password){
        return res.status(400).json({message:"Please fill in all fields"})
    }
    const userExist = await User.findOne({email});
    if (userExist) return res.status(400).json({message:"Email already exist"})
        const user = await User.create({name,email,password});
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        // token:generatedToken(user._id)
    })
    
}
const loginUser = async (req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user || !(await user.matchPassword(password))){
        return res.status(401).json({message:"Invalid email or password"})
    }
    res.status(201).json({
        _id:user._id,
        name:user.name,
        email:user.email,
        token:generatedToken(user._id)
    })
}
module.exports = {
    registerUser,
    loginUser
}