const express=require("express")
const dotenv=require("dotenv")
const cookieParser = require('cookie-parser');
const app=express();


const{ connectToMongodb }=require("../db/connectToMongodb")
const authroutes=require("./routes/auth.routes")
const messageRoutes=require("./routes/message.routes")
const userRoutes=require("./routes/user.routes")
const User=require("./model/user.model")
dotenv.config()

const PORT=process.env.PORT || 5000;


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth",authroutes)
app.use("/api/messages",messageRoutes)
app.use("/api/user",userRoutes)


app.listen(PORT,()=>{
    connectToMongodb()
    console.log(`the port is listening at ${PORT}`)
})
 