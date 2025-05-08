import "./App.css";

import { useState, useEffect } from "react";

const url = "http://localhost:3000/produtos";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [nomeDoProduto, setNomeDoProduto] = useState("");
  const [preco, setPreco] = useState("");

  // 1 - Resgatando dados
  useEffect(() => {
    async function buscarDados() {
      const resposta = await fetch(url);
      const data = await resposta.json();
      setProdutos(data);
    }
    buscarDados();
  }, []);

  // 2 - Adicionar Produtos
  const handleSubmit = async (e) => {
    e.preventDefault()

    const produto= {
      nomeDoProduto,
      preco
    }
    console.log(produto)
    const resposta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(produto),
    })
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {produtos.map((produto) => (
            <li key={produto.id}>
              {produto.nomeDoProduto} R$: {produto.preco}
            </li>
          ))}
        </ul>
      </div>
      <div className="add-produtos">
        <form onSubmit={handleSubmit}>
          <label>
            Nome do Produto:
            <input
              type="text"
              value={nomeDoProduto}
              name="nome"
              onChange={(e) => setNomeDoProduto(e.target.value)}
            />
          </label>
          <label>
            Preço do Produto:
            <input
              type="number"
              value={preco}
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          <input type="submit" value="Adicionar Produto" />
        </form>
      </div>
    </>
  );
}

export default App;
