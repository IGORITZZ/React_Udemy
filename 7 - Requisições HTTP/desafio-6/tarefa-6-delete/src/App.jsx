import { useState } from "react";
import "./App.css";
import { useFetch } from "../hook/useFecth";

const url = "http://localhost:3000/produtos";

function App() {
  const [nomeDoProduto, setNomeDoProduto] = useState("");
  const [precoDoProduto, setPrecoDoProduto] = useState("");
  const { dados: produtos, httpConfig, carregando, erro } = useFetch(url);

  // Adicionar novo produto
  const handleSubmit = async (e) => {
    e.preventDefault();

    const produto = {
      nome: nomeDoProduto,
      preco: Number(precoDoProduto),
    };

    try {
      await httpConfig(produto, "POST");
      setNomeDoProduto("");
      setPrecoDoProduto("");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  // Excluir produto
  const handleDelete = async (id, nome) => {
    if (window.confirm(`Tem certeza que deseja excluir este produto? ${nome}`)) {
      try {
        await httpConfig({ id }, "DELETE");
      } catch (error) {
        console.error("Erro ao excluir produto:", error);
      }
    }
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Gerenciamento de Produtos</h1>

        {/* Formulário para adicionar produto */}
        <div className="form-container">
          <h2>Adicionar Produto</h2>
          <form onSubmit={handleSubmit()}>
            <div className="form-group">
              <label htmlFor="nome">Nome do Produto:</label>
              <input
                id="nome"
                type="text"
                value={nomeDoProduto}
                onChange={(e) => setNomeDoProduto(e.target.value)}
                required
                disabled={carregando}
              />
            </div>

            <div className="form-group">
              <label htmlFor="preco">Preço (R$):</label>
              <input
                id="preco"
                type="number"
                min="0"
                step="0.01"
                value={precoDoProduto}
                onChange={(e) => setPrecoDoProduto(e.target.value)}
                required
                disabled={carregando}
              />
            </div>

            <button type="submit" disabled={carregando}>
              {carregando ? "Processando..." : "Adicionar Produto"}
            </button>
          </form>
        </div>

        {/* Lista de produtos */}
        <div className="produtos-container">
          <h2>Lista de Produtos</h2>

          {carregando && !produtos && <p>Carregando produtos...</p>}
          {erro && <p className="error-message">{erro}</p>}

          {produtos && produtos.length === 0 ? (
            <p>Nenhum produto cadastrado</p>
          ) : (
            <table className="produtos-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos?.map((produto) => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(produto.id, produto.nome)}
                        disabled={carregando}
                        className="delete-button"
                      >
                        {carregando ? "Excluindo..." : "Excluir"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
