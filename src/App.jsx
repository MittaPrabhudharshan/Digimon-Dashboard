
import { useEffect, useState } from 'react'
import './App.css'
import Digimons from './components/Digimons/Digimons'
import Counter from './components/Counter/Counter'
import { Link, Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <div className='App-container'>
     
     <Navbar />
       
      <Routes>
        <Route path="/"  element={<Digimons />}/>
        <Route path="/counter" element={<Counter />}/>
      </Routes>
    </div>
  )
}

export default App
