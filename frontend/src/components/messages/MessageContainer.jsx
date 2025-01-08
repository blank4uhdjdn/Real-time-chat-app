import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'


function MessageContainer() {
  const{selectedConversation,setSelectedConversation}=useConversation();
  // const noChatSelected=true;
  useEffect(()=>{
    return () =>setSelectedConversation(null)
  },[setSelectedConversation])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation?(<NoChatSelected/>): (
            <>
            {/* Headers*/}
            <div className='bg-slate-500 px-4 py-2 mb-2'>
             <span className='label-text px-1 font-bold'>To:</span>
             <span  className='text-white font-bold'>{selectedConversation.fullName}</span>
            </div>
            <Messages/>
            <MessageInput/>
             </>
      )}
      
        {/* <>
       Headers  ::isko comment karna hai 
       <div className='bg-slate-500 px-4 py-2 mb-2'>
        <span className='label-text px-1 font-bold'>To:</span>
        <span  className='text-white font-bold'>John Doe</span>
       </div>
       <Messages/>
       <MessageInput/>
        </> */}
      
    </div>
  )
}

export default MessageContainer


const NoChatSelected=()=>{
  const{authUser}=useAuthContext();
  return(
      <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
              <p>
                  Welcome 👋 {authUser.fullName}
              </p>
              <p>
                  Select a chat to start messaging 
              </p>
              <TiMessages className='text-3xl md:text-6xl text-center ' />

          </div>

      </div>
  );

};



// STARTING CODE SNIPPET

// import React from 'react'
// import Messages from './Messages'
// import MessageInput from './MessageInput'
// import {TiMessages} from 'react-icons/ti'

// function MessageContainer() {
//   const NoChatSelected=true;
//   return (
//     <div className='md:min-w-[450px] flex flex-col'>
      
//         <>
//        {/* Headers*/}
//        <div className='bg-slate-500 px-4 py-2 mb-2'>
//         <span className='label-text px-1 font-bold'>To:</span>
//         <span  className='text-white font-bold'>John Doe</span>
//        </div>
//        <Messages/>
//        <MessageInput/>
//         </>
      
//     </div>
//   )
// }

// export default MessageContainer



















