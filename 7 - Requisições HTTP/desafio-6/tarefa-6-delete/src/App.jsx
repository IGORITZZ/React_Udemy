import { useState } from 'react'
import './App.css'
import { json } from './../node_modules/@tinyhttp/send/dist/json';


const url = "http://localhost:3000/produtos";

function App() {

  return (
    <div>
      <div className="quadrado">
        <h1>Adcionar Produtos</h1>
        <div>
          <h3>Lista de Produtos</h3>
        </div>
      </div>
    </div>
  )
}

export default App
