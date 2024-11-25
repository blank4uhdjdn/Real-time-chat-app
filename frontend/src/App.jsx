import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import Home from './pages/home/Home'
import Conversation from './components/sidebar/Conversation'
import Conversations from './components/sidebar/Conversations'
import SideBar from './components/SideBar'
import MessageContainer from './components/messages/MessageContainer'
import Messages from './components/messages/Messages'
import MessageInput from './components/messages/MessageInput'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
   <Home/>
   {/* <Conversations/> */}
   {/* <SideBar/> */}
   {/* <MessageContainer/> */}
   {/* <MessageInput/> */}

    </div>
  )
}

export default App
