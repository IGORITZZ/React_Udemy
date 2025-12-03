//1. Importando React
import React from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

//2. Importanto estilos
import './App.css'

//3. Importanto componentes e paginas
import NavBar from './componentes/NavBar'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'

function App() {

  return (
    <div>
      <h1>Context API</h1>
      <BrowserRouter> 
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Sobre' element={<Sobre />}/>
          <Route path='/Contato' element={<Contato />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
