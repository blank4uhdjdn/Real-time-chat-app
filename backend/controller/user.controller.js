const User=require('../model/user.model')

const getUserForSideBar=async (req,res)=>{
    try {
        const loggedInUserId=req.user._id
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}})

        res.status(200).json(filteredUsers)

    }
     catch (error) {
        console.log(`error in user controller ${error.message}`);
        res.status(500).json({error:"internal server error "})
    }
}

module.exports={
    getUserForSideBar,
}