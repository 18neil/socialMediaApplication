import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'
import Profile from './pages/Profile/Profile'
import Login from './pages/LogIn/Login'
import {Route, Routes, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'



function App() {
  const user = useSelector ((state) => state.auth.authData)
  
  console.log(user)
  
  return (
    <div className="App">
    <div className="blur" style={{top:'-8%', right:'0'}}></div>
    <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
    <Routes>
      <Route path='/' element={user?<Navigate to= "home"/> : <Navigate to= "login"/>}/>
      <Route path='/home' element={user? <Home/>:<Navigate to = "../login"/>}/>
      <Route path='/login' element={user ? <Navigate to= "../home"/> : <Login/>}/>
      <Route path='/profile/:id' element={user ?  <Profile/> : <Navigate to= "../login"/> }/>


    </Routes>
    </div>
  )
}

export default App
