import './App.css'

import city from "./assets/city.jpg"
import ConditionalRender from './componetes/ConditionalRender'
import ListRender from './componetes/ListRender'
import ManageData from './componetes/ManageData'

function App() {

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
    </>
  )
}

export default App
