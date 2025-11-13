import { Link, useParams, useFetch } from "react-router-dom";
import './Produtos.css'

const Produto = () => {
  // 4 - Rotas dinamicas
  const { id } = useParams();

  // 5 -  Carregamento de dado individual
  const url = "http://localhost:3000/produtos/" + id;
  const { data: produto, loading, error } = useFetch(url);
  return (
    <div>
      <p>ID do produto: {id}</p>
      {error && <p>Houve um erro no carregamento...</p>}
      {loading && <p>Carregando produto...</p>}
      {produto && (
        <div className="detalhes-produto">
          <h1>{produto.nome}</h1>
          <p>R$ {produto.valor}</p>
          <Link className="esilo-link-detalhes" to="/">
            Voltar
          </Link>
          {/* um link que volta para a página inicial, o simbolo "/" inidica pagina inical */}
          {/* 6 - Nested Routes */}
          <Link className="esilo-link-detalhes" to={`/produto/${produto.id}/info`}>Mais Informações</Link>
          {/* 
              como estamos uma uma pagina dinamica de produto, podemos indicar a url com produdo.id
              para acessar a rota info que criamos no App.jsx
          */}
        </div>
      )}
    </div>
  );
};

export default Produto;
