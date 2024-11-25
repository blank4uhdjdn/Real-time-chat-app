import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
      <div className="chat-image avatar px-1">
        <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className={'chat-bubble text-black bg-white'}>Hi! this is Conny</div>
  <div className='chat-footer opacity-80 text-white text-xs flex gap-1 item-center'>07:07</div>
    </div>
  )
}

export default Message
