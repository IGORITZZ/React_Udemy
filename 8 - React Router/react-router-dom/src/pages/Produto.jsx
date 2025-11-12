import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

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
        <div>
          <h1>{produto.nome}</h1> 
          <p>R$ {produto.valor}</p>
        </div>
      )}
    </div>
  );
};

export default Produto;
