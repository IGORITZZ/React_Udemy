import { Link, useParams } from "react-router-dom"
import "./Info.css"


const Info = () => {
  const {id} = useParams()
  return (
    <di>
      <div>Mais Informações sobre o Produdo: {id}</div>
      <Link className="info" to="/">Voltar</Link>
    </di>
  )
}

export default Info