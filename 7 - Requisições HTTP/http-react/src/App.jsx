import "./App.css";

import { useState, useEffect } from "react";

// 4 - customizando hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/produtos";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [nomeDoProduto, setNomeDoProduto] = useState("");
  const [preco, setPreco] = useState("");
  // 1 e 4 - customizando hook e resgatando dados
  const { dados: itens } = useFetch(url);

  // 2 - Adicionar Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nomeDoProduto,
      preco,
    };
    console.log(produto);
    const resposta = await fetch(url, {
      // -> fazemos a consulta em (URL) após a virgura {argumentos/configurações}
      method: "POST", // -> informa que estamos "enviando" (POST) algo
      headers: {
        "Content-Type": "application/json", // -> informa que enviamos alguma coisa em formato JSON
      },
      body: JSON.stringify(produto), // -> tranformamos o objeto enviado em uma STRING com formato JSON
    });

    //3 - carregamento dinamico
    const produtoAdicionado = await resposta.json();

    setProdutos((prevProdutos) => [...prevProdutos, produtoAdicionado]);

    setNomeDoProduto("");
    setPreco("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {itens &&
            itens.map((produto) => (
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
