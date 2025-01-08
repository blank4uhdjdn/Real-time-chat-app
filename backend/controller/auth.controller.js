const bcrypt=require("bcryptjs")
const User = require("../model/user.model");
const { generateTokenAndSetCookie } = require("../utils/generateToken");

const handlesignup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmpassword, gender } = req.body;
    
    
    if (!fullName || !userName || !password || !confirmpassword || !gender) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
    if (password != confirmpassword) {
      return res.status(400).json({ error: "passwords do not match" });
    }
    const user = await User.findOne({ userName });
    if (user) {
      return res.status(400).json({ error: "user already exists" });
    }

    // hashing of the password
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    // making of the avatar
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
      fullName:fullName,
      userName:userName,
      password:hashedPassword,
      gender:gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    if(newUser){
      // genearate JWT token
      generateTokenAndSetCookie(newUser._id,res)
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        password: newUser.password,
        profilePic: newUser.profilePic,
      });
    }
    else(
      res.status(400).json({error:"invalid user data"})
    )
  } catch (error) {
    console.log(`error in signup controller ${error.message}`);
    res.status(500).json({ error: "internal server error" });
  }
};
const handlelogin = async (req, res) => {
  try {
    const {userName,password}=req.body;
  const user=await User.findOne({userName})
  const isPasswordCorrect=await bcrypt.compare(password,user?.password||"");
  if(!user||!isPasswordCorrect){
   return res.status(400).json({error:"invalid usename or password"})
  }

  generateTokenAndSetCookie(user._id,res)

  res.status(200).json({
    _id:user._id,
    userName:user.userName,
    fullName:user.fullName,
    profilePic:user.profilePic,
  })
  // console.log(profilePic)

  } catch (error) {
    console.log(`error in login controller ${error.message}`);
    res.status(500).json({ error: "internal server error" });
  }
  

};
const handlelogout = (req, res) => {
  try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logged out successfully"})
  } catch (error) {
    console.log(`error in logout controller ${error.message}`);
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = {
  handlelogin,
  handlesignup,
  handlelogout,
};
