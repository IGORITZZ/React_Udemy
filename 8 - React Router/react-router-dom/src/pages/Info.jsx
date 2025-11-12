import { useParams } from "react-router-dom"

const Info = () => {

    const {id} = useParams()
  return (
    <div>Mais Informações sobre o Produdo: {id}</div>
  )
}

export default Info