import { use, useState } from 'react'
import './App.css'

import city from "./assets/city.jpg"
import ConditionalRender from './componetes/ConditionalRender'
import ListRender from './componetes/ListRender'
import ManageData from './componetes/ManageData'
import ShowUserName from './componetes/ShowUserName'
import CarDetails from './componetes/CarDetails'
import Fragments from './componetes/Fragments'
import Container from './componetes/Container'
import ExecuteFuinction from './componetes/ExecuteFuinction'
import Mensagem from './componetes/Mensagem'
import ChangeMessageState from './componetes/ChangeMessageState'

function App() {
  // const name = "Joana"
  const [userName] = useState("Joilson")
  const carros = [
    { id: 1, marca: "FERRARI", cor: "VERMELHA", km: 0, carroNovo: true },
    { id: 1, marca: "LARMBO", cor: "PRETA", km: 15631, carroNovo: false },
    { id: 1, marca: "ALFA", cor: "AZUL", km: 2656, carroNovo: false },
    { id: 1, marca: "ASTON", cor: "AMARELA", km: 0, carroNovo: true }
  ];

   const mostrarMensagem = () => {console.log('Mensagem  mostrada')}

   const [mensagem, setMensagem] = useState("")

   const enviarMensagem = (msg) =>{
    setMensagem(msg)
   }
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
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructing */}
      <CarDetails marca="Ford" km={100.0} cor="Branco" carroNovo={false} />
      {/* reaproveitando */}
      <CarDetails marca="Fiat" km={0} cor="Azul" carroNovo={true} />
      <CarDetails marca="Chevrolet" km={27.588} cor="Preto" carroNovo={false} />
      {/* loop em arra de objetos */}
      {carros.map((carro) => (
        <CarDetails
          key={carro.id}
          marca={carro.marca}
          cor={carro.cor}
          km={carro.km}
          carroNovo={carro.carroNovo}
        />
      ))}
      {/* Fragaments */}
      <Fragments propsFragments="Teste titulo" />
      {/* children */}
      <Container myvalue="conteudo teste">
        <p>Esse é o conteudo</p>
      </Container>
      <Container myvalue="conteudo teste3">
        <p>Esse é o outros conteudo</p>
      </Container>
      {/* Executando função com PROP */}
      <ExecuteFuinction minhaFuncao={mostrarMensagem}/>
      {/* State Lift */}
      <Mensagem msg={mensagem} />
      <ChangeMessageState enviarMensagem={enviarMensagem}/> 
      
    </>
  );
}

export default App
