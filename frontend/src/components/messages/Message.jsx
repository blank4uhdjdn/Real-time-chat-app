import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

function Message({message}) {
  const{authUser} = useAuthContext();
  const{selectedConversation}=useConversation();

  const fromMe=message.senderId===authUser._id;
  const chatClassName=fromMe?"chat-end":"chat-start";
  const profilePic=fromMe? authUser.profilePic:selectedConversation?.profilePic;
  const defaultProfilePic="https://avatar.iran.liara.run/public/29"
  const bubbleBgColor=fromMe? "bg-sky-500":"bg-white";
  const formattedTime =extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar px-1">
        <div className="w-10 rounded-full">
      <img
        alt="https://avatar.iran.liara.run/public/29"
        src={profilePic} />
    </div>
  </div>
  <div className={`chat-bubble text-black font-bold  ${bubbleBgColor}`}>{message.message}</div>
  <div className='chat-footer opacity-80 text-white text-xs flex gap-1 item-center'>{formattedTime}</div>
    </div>
  )
}

export default Message
