// CSS
import './App.css'
// React
import { useCallback, useEffect, useState } from 'react'
// Data
import {listagemDePalavras} from './data/palavras'
//console.log(wordsList)
// Componentes
import StarScreen from './components/StarScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
//Estágios do jogo
const stages = [
  {id: 0, name: 'start'},
  {id: 1, name: 'game'},
  {id: 2, name: 'gameover'}
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [palavras] = useState(listagemDePalavras);
  const [escolhaPalavra, setEscolhaPalavra] = useState("")
  const [escolhaCategoria, setEscolhaCategoria] = useState("")
  const [letras, setLetras] = useState([]);

  const escolhaPalavraCategoria = () => {
    // escolhendo uma categoria random
    const categorias = Object.keys(palavras)
    const categoria = categorias[Math.floor(Math.random() * Object.keys(palavras).length)]
    console.log(categoria) // mostrando categoria no navegador

    // escolhendo uma palavra random (dentro da categoria random)
    const palavra = palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)]
    console.log(palavra)

    return {palavra, categoria}
  }

  // Start the game
  const startGame = () => {
    const {palavra, categoria} = escolhaPalavraCategoria()

    let palavraLetras = palavra.split("")
    palavraLetras = palavraLetras.map((l) => l.toUpperCase())

    console.log(palavra, categoria)
    console.log(palavraLetras)


    setEscolhaPalavra(palavra)
    setEscolhaCategoria(categoria)
    setLetras(letras)

    setGameStage(stages[1].name);
  }
  // process the letter input
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  }
  //returns the game
    const retry = () => {
      setGameStage(stages[0].name);
    };
  return (
    <>
      <div className="App">
        {gameStage === "start" && <StarScreen startGame={startGame} />}
        {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
        {gameStage === "gameover" && <GameOver retry={retry}/>}
      </div>
    </>
  );
}

export default App
