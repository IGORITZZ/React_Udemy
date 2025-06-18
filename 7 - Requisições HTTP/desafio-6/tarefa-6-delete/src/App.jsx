import { useState } from 'react'
import './App.css'

function App() {

  const[data, useData] = useState(null)
  

  return (
    <div>
      <div className="quadrado"><p>Lista de Produtos</p></div>
    </div>
  )
}

export default App
