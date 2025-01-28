import { use, useState } from 'react'
import './App.css'

import city from "./assets/city.jpg"
import ConditionalRender from './componetes/ConditionalRender'
import ListRender from './componetes/ListRender'
import ManageData from './componetes/ManageData'
import ShowUserName from './componetes/ShowUserName'

function App() {
  const name = "Joana"
  const [userName] = useState("Joilson")
  return (
    <>
      <h1>Avaçando em React</h1>
      {/* imagem public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      {/* imagem em src */}
      <div>
      <img src={city} alt="cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/>
    </>
  )
}

export default App
