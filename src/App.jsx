
import { useEffect, useState } from 'react'
import './App.css'
import Digimons from './components/Digimons/Digimons'
import Counter from './components/Counter/Counter'
import { Link, Route, Routes } from 'react-router'
import Navbar from './components/Navbar/Navbar'
import DigimonsDetails from './components/DigimonDetails/DigimonsDetails'
import SearchDigimon from './components/SearchDigimon/SearchDigimon'

function App() {


  return (
    <div className='App-container'>
     
     <Navbar />
       
      <Routes>
        <Route path="/"  element={<Digimons />}/>
        <Route path="/digimon-search" element={<SearchDigimon />}/>
        <Route path="/digimons-details/:id" element={<DigimonsDetails />}/>
      </Routes>
    </div>
  )
}

export default App
