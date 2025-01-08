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
import { Routes,Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {authUser}=useAuthContext();

  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path="/" element={authUser?<Home/>:<Navigate to="/login"/>} />
        <Route path="/signup" element={ authUser? <Navigate to="/" /> : <SignUp />} />
        <Route path="/login" element={authUser? <Navigate to="/" /> :<Login />} />
      </Routes>
      <Toaster/>    
     {/* <Login/>
     <SignUp/> */}
       
    </div>
  )
}

export default App
