import { useFetch } from '../hooks/useFetch';
import './Home.css'

const Home = () => {

    const url = "http://localhost:3000/produtos";
    const { data: itens, httpConfig, loading, erro } = useFetch(url); 
  return (
    <div className='Home'>
      <div>Produtos</div>
      {erro && <p>{erro}</p>}
      <ul className="produtos">
        {itens &&
          itens.map((item) => (
            <li key={item.id}>
              <h2>{item.nome}</h2>
              <p>R$: {item.valor.toFixed(2)}</p>
            </li>
          ))}
      </ul>
    </div>
  );

}

export default Home