import { useState } from "react";

const ManageData = () => {
    let someData = 10
    console.log(someData)


    const [number, setNumber] = useState(15)
    console.log(number)
  return (
    <>
      <div>
        <div>ManageData</div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar variável</button>
      </div>
      <div>
        <p>Valor: {number}</p>
        <button onClick={() => (setNumber(30))}>Mudar state</button>
      </div>
    </>
  );
}

export default ManageData