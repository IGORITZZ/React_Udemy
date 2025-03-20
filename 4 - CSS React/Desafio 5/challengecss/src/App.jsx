import './App.css'
import ListaCarros from './componentes/ListaCarros'

function App() {

  // const listadecarros = [
  //   {id: 0, marca: "Volkswagem",modelo: "Polo"},
  //   {id: 1, marca: "Ford",modelo: "Mustang"},
  //   {id: 2, marca: "Volkswagem",modelo: "Gol"},
  //   {id: 3, marca: "Volkswagem",modelo: "Amarok"},
  //   {id: 4, marca: "Volkswagem",modelo: "Arteon"},
  // ]

  const meuscarros = [
    { id: 0, marca: "Ford", modelo: "Ecosport", km: 25000, cor: "Prata" },
    { id: 1, marca: "Volvo", modelo: "XC 40", km: 12569, cor: "Branca" },
    { id: 2, marca: "BMW", modelo: "x6 M Competition", km: 2158, cor: "Azul" },
    { id: 3, marca: "Chevrolet", modelo: "Onix", km: 148966, cor: "Preta" },
  ];

  return (
    <>
      <h1>Lista de Carros</h1>
      <div className='lista'>
        {meuscarros.map((carro) => (
          <ListaCarros
            key={carro.id}
            marca={carro.marca}
            modelo={carro.modelo}
            km={carro.km}
            cor={carro.cor}
          />
        ))}
      </div>
    </>
  );
}

export default App
