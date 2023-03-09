import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import Login from './Component/Login/Login'
import SignUp from './Component/Signup/SignUp'
import { auth } from './Firebas'
import Todo from "./Todo/Todo"
import './App.css'

export default function App() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.email.substr(0,user.email.indexOf("@")))
      }
      else setUsername("")
    })
  },[])
  return (
    <div>
   
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/todo' element={<Todo name = {username}/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  )
}