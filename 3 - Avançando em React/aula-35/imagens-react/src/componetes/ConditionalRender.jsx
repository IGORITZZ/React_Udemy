import { useState } from "react"

const ConditionalRender = () => {

    const [x] = useState(true)
    const [name, setName] = useState("Igor")
  return (
    <div>
      <h1>Isso será exebido?</h1>
      {x && <p>Se x for True, escreva</p>}
      {!x && <p>Se x for False, escreva</p>}
      <h1>If Ternário</h1>
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>O nome não é João</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Atualizar</button>
    </div>
  );
}

export default ConditionalRender