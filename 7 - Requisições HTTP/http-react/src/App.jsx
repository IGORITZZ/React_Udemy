import './App.css'

import { useState, useEffect } from 'react'

const url = "http://localhost:3000/produtos";

function App() {

  const [produtos, setProdutos] = useState([])

  // 1 - Resgatando dados
  useEffect(() => {
    async function fecthData() {
      const resposta = await fetch(url);
      const data = await resposta.json();
      setProdutos(data);
    }
    fecthData()
  }, [])

  return (
    <>
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.name} R$: {produto.preco}</li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
