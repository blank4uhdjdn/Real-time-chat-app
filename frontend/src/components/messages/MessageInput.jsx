import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'


function MessageInput() {
  const [message,setMessage]=useState("")

  const{loading,sendMessage}=useSendMessage();

  const handleSubmit= async (e)=>{
    e.preventDefault()
    if(!message)return;
    await sendMessage(message)  
    setMessage("");
  }
  return (
    
    
    <div>
      <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text"
            placeholder='Send a message'
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-black'
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-6 text-black'>
              
               {loading? <div className='loading loading-spinner'></div> :<BsSend/>}
            </button>
        </div>
      </form>
    </div>
  )
}

export default MessageInput

const NoChatSelected=()=>{
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
                <p>
                    Welcome 👋 John Doe
                </p>
                <p>
                    Select a chat to start messaging 
                </p>
                <TiMessages className='text-3xl md:text-6xl text-center ' />

            </div>

        </div>
    );

};




// import React from 'react'
// import { BsSend } from 'react-icons/bs'

// function MessageInput() {
//   return (
//     <div>
//       <form action="">
//         <div className='w-full relative'>
//             <input type="text"
//             placeholder='Send a message'
//             className='border text-sm rounded-lg block w-full p-2.5 bg-gray-200 text-black'
//             />
//             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-6 text-black'>
//                 <BsSend/>
//             </button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default MessageInput
