import './App.css'
import ListaArray from './componentes/listaArray';

function App() {

  const listaNomes = [    
    {id: 0, nome: 'IGOR', idade: 27},
    {id: 1, nome: 'LAURA', idade: 23},
    {id: 2, nome: 'MIGUEL', idade: 18},
    {id: 3, nome: 'LARISSA', idade: 17}
  ]
  


  return (
    <>
      <h1>Desafio 4</h1>
      {listaNomes.map((lista) => (
        <ListaArray 
        key={lista.id}
        nome={lista.nome}
        idade={lista.idade}
        />
      ))}
    </>
  );
}

export default App
