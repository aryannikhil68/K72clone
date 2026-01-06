import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Agence from './pages/agence'
import Projects from './pages/projects'

const App = () => {
  return (
    <div>
      <Link  className='text-blue-800 mr-5 text-sm' to='/' >Home</Link>
       <Link   className='text-blue-800 mr-5 text-sm' to='/agence' >Agence</Link>
        <Link  className='text-blue-800 mr-5 text-sm' to='/projects' >Projects</Link>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
         <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
  )
}

export default App