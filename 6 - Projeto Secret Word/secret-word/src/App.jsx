// CSS
import './App.css'
// React
import { useCallback, useEffect, useState } from 'react'
// Data
import {wordsList} from './data/words'
//console.log(wordsList)
// Componentes
import StarScreen from './components/StarScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'
//Estágios do jogo
const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'gameover'}
]
function App() {
  const [words] = useState(wordsList);
  const [gameStage, setGameStage] = useState(stages[0].name)
  // Start the game
  const startGame = () => {
    setGameStage(stages[1].name)
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
