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
  const { dados: itens, configuracaoHttp, carregando } = useFetch(url);

  // 2 - Adicionar Produtos
  const handleSubmit = async (e) => {
    e.preventDefault();
    const produto = {
      nomeDoProduto,
      preco,
    };

    configuracaoHttp(produto, "POST");
    setNomeDoProduto("");
    setPreco("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {/* 6 - loading */}
        {carregando && <p className="estado_carregamento">Carregando lista...</p>}
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
