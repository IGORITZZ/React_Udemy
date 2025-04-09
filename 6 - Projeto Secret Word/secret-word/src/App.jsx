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

  const [letraAdvinhada, setletraAdvinhada] = useState([])
  const [letrasErradas, setLetrasErradas] = useState([])
  const [chances, setChances] = useState(3)
  const [pontuação, setPontuação] = useState(0)


  const escolhaPalavraCategoria = () => {
    // escolhendo uma categoria random
    const gerandoCategoriaAleatória = Object.keys(palavras)
    const categoriaAleatória = gerandoCategoriaAleatória[Math.floor(Math.random() * Object.keys(palavras).length)]
    console.log(categoriaAleatória) // mostrando categoria no navegador

    // escolhendo uma palavra random (dentro da categoria random)
    const palavraAleatoria =
      palavras[categoriaAleatória][
        Math.floor(Math.random() * palavras[categoriaAleatória].length)
      ];
    console.log(palavraAleatoria)

    return {palavraAleatoria, categoriaAleatória}
  }

  // Start the game
  const startGame = () => {
    const {palavraAleatoria, categoriaAleatória} = escolhaPalavraCategoria()

    let palavraLetras = palavraAleatoria.split("")
    palavraLetras = palavraLetras.map((l) => l.toUpperCase())

    console.log(palavraAleatoria, categoriaAleatória)
    console.log(palavraLetras)


    setEscolhaPalavra(palavraAleatoria)
    setEscolhaCategoria(categoriaAleatória);
    setLetras(palavraLetras)

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
        {gameStage === "game" && <Game verifyLetter={verifyLetter} 
        escolhaPalavra={escolhaPalavra} 
        escolhaCategoria={escolhaCategoria} 
        letras={letras}
        letrasErradas={letrasErradas}
        letraAdvinhada={letraAdvinhada}
        chances={chances}
        pontuação={pontuação}
        />}
        {gameStage === "gameover" && <GameOver retry={retry}/>}
      </div>
    </>
  );
}

export default App
