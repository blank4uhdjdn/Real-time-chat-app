const jwt = require('jsonwebtoken');
const User=require("../model/user.model")
const protectRoute= async (req,res,next)=>{
try {
    const token =req.cookies.jwt
    if(!token){
        res.status(500).json({error:"no authorised token  please make a cookie"})

    }
    
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    if(!decoded){
        res.status(500).json({error:"Unauthorised : invalid-token"})
    }
    
    const user= await User.findById(decoded.userid).select("-password")

    if(!user){
        res.status(404).json({error:"user not found"})
    }

    req.user=user
    next()


} catch (error) {
    console.log(`error in  protect route middleware ${error.message}`);
    res.status(500).json({error:"internal error int the protectRoute"})
}
}
module.exports={
    protectRoute,
}