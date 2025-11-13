import { useFetch } from '../hooks/useFetch';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {

    const url = "http://localhost:3000/produtos";
    const { data: itens, httpConfig, loading, erro } = useFetch(url); 
  return (
    <div className="Home">
      <div>
        <h1>Produtos</h1>
      </div>
      {erro && <p>{erro}</p>}
      <div className="lista">
        <ul className="produtos">
          {itens &&
            itens.map((item) => (
              <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>R$: {item.valor.toFixed(2)}</p>
                {/* 4 - Rota Dminamica */}
                <Link className='estilo-link' to={`/produtos/${item.id}`}>Detalhes</Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );

}

export default Home