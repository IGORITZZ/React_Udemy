import {useState} from 'react'

const ManageData = () => {
    let someData = 10
    const [number, setNumber] = useState(15)
  return (
    <div>
        <div>
            <p>Valor de somaData é: {someData}</p>
            <button onClick={() => someData = 15}>Mudar</button>
        </div>
        <div>
            <p>O valor de useState: {number}</p>
            <button onClick={() => setNumber(25)}>Mudar o State</button>
        </div>
    </div>
    
  )
}

export default ManageData