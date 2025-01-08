import { Input } from 'postcss';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

function useSignup() {
  const [loading,setLoading]=useState(false); 
  const {setAuthUser}=useAuthContext();  
  const signup=async({fullName, userName,password,confirmpassword,gender})=>{
    // console.log('Form Values:', { fullName, userName, password, confirmpassword, gender });
      const success= handleInputErrors({fullName, userName,password,confirmpassword,gender})
      if(!success)return;
      setLoading(true);
      try {
        const res =await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({fullName, userName,password,confirmpassword,gender})
         })
         const data =await res.json();
        //  console.log("response from server : ",data)
         if(data.error){
            throw new Error(data.error)
         }
        
         //localStorage
         localStorage .setItem("chat-user",JSON.stringify(data));
         //context
         setAuthUser(data);
        

      } catch (error) {
        toast.error(error.message)
      }
      finally{
        setLoading(false)
      }
  }
  return {signup,loading}
}

export default useSignup


function handleInputErrors({fullName, userName,password,confirmpassword,gender}){
    if (!fullName || !userName || !password || !confirmpassword || !gender) {
        toast.error('Please fill all the fields')
        return false;
    }
    if (password!==confirmpassword) {
        toast.error("Passwords do not match.")
        return false;
    }
    if (password.length<6) {
        toast.error('password must be atleast 6 characters long')
        return false;
    }
    return true;
}
