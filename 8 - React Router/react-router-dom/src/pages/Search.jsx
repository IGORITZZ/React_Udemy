import { useSearchParams, Link } from "react-router-dom"; 
import { useFetch } from "../hooks/useFetch"; 

const Serch = () => {
  const [searchParams] = useSearchParams()
  const url = "http://localhost:3000/produtos?" + searchParams

  const { data: itens, loading, erro } = useFetch(url);
  return (
    <div>
      <h1>Resultados Disponiveis</h1>
      {loading && <p>Carregando dados...</p>}
      {erro && <p>Erro ao carregar os dados</p>}
        <ul className="produtos">
          {itens &&
            itens.map((item) => (
              <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>R$: {item.valor.toFixed(2)}</p>
                <Link className="estilo-link" to={`/produtos/${item.id}`}>
                  Detalhes
                </Link>
              </li>
            ))}
        </ul>

    </div>
  );
}

export default Serch