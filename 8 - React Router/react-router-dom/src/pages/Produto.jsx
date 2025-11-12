import { useParams } from "react-router-dom"


const Produto = () => {
  // 4 - Rotas dinamicas
  const { id } = useParams();
  return <div>
    <p>ID do produto: {id}</p>
  </div>;
}

export default Produto