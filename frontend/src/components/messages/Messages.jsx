import React, { useEffect,useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import Skeleton from '../skeleton/Skeleton';


function Messages() {
  const{messages,loading}=useGetMessages();
  const lastMessageRef=useRef();
  
  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"})
      
    }, 100);

  },[messages])

  return (
    <div className='px-4 flex-1 overflow-auto'>

      {!loading && messages.length>0 && messages.map((messages)=>
      (
        <div key={messages.id}
        ref={lastMessageRef}
        >

          <Message  message={messages} />

        </div>
      )
      ) }

      {loading && [...Array(3)].map((_,idx)=><Skeleton key={idx}/>)}
      {!loading && messages.length===0 &&(
        <p className='text-center justify-center mt-52'> Send a messages to start the conversation.</p>
      )}
      
    </div>
  );
};

export default Messages

// {loading?&& [...Array(3)].map((_,idx)=><Skeleton key={idx}/>)}
