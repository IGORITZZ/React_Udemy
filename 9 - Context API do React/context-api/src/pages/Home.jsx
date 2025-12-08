import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      <h2>Pagina Princiapal</h2>
      <p>Bem-Vindo a minha página inicial.</p>
      <p>Valor do Contador: {counter}</p>
    </div>
  );
}

export default Home