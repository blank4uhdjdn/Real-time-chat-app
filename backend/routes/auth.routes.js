const express=require("express")
const router=express.Router()
const{handlelogin,handlesignup,handlelogout}=require("../controller/auth.controller")
router.post("/signup",handlesignup)
router.post("/login",handlelogin)
router.post("/logout",handlelogout)

module.exports=router    