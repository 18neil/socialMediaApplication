import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home/home'

function App() {
  
  return (
    <>
    <div className="blur" style={{top:'-8%', right:'0'}}></div>
    <div className="blur" style={{top:'36%', left:'-8rem'}}></div>
    <Home/>
    </>
  )
}

export default App
