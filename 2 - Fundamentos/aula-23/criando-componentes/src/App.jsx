import './App.css'
import FirstComponent from './compontes/FirstComponent'
import MyComponent from './compontes/MyComponent'
import MyEvent from './compontes/MyEvent'
import TemplateExpression from './compontes/TemplateExpression'

//comentário
/*
  comentário
*/ 
function App() {
  return (
    //comentário
    <div className="name">
      {/* comentário */}
      <h1>Importando meu Primeiro componente</h1>
      <p>Tag errada</p>
      <FirstComponent/>
      <TemplateExpression/>
      <MyComponent/>
      <MyEvent/>
    </div>
     

  )
}

export default App
