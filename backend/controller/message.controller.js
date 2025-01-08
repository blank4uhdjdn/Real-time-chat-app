const {Message}=require("../model/message.models")
const User=require("../model/user.model")


const {Conversation}=require("../model/conversation.model");

const sendMessage = async (req, res) => {
    try {
        const {message}=req.body;
        const {id:receiverId}=req.params;
        const senderId=req.user._id

        let conversation= await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
          conversation=await Conversation.create({
            participants: [senderId,receiverId]
          })
        }

        const newMessage= new Message({
            senderId:senderId,
            receiverId:receiverId,
            message:message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }

        await conversation.save()
        await newMessage.save()

        res.status(201).json(newMessage)
        
    } catch (error) {
        console.log(`error in sendMessage controller ${error.message}`);
        res.status(500).json({error:"internal error occured"})
    }
}

const getMessage=async (req,res)=>{
    try {
        const {id:userTochatId}=req.params
        const senderId=req.user._id
        const conversation=await Conversation.findOne({
            participants:{$all:[userTochatId,senderId]}
        }).populate("messages")


        if (!conversation || !conversation.messages) {
            return res.status(200).json([]);  // Return an empty array if no messages found
          }

        res.status(200).json(conversation.messages)

        
    } catch (error) {
        console.log(`error in the getmessage cntroller ${error.message}`);
        res.status(500).json({error:"internal error occured "})
    }
}

module.exports={
    sendMessage,
    getMessage
}