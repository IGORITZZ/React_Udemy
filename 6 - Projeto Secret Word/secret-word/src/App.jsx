// CSS
import './App.css'
// React
import { useCallback, useEffect, useState } from 'react'
// Data
import {wordsList} from './data/words'
console.log(wordsList);
// Componentes
import StarScreen from './components/StarScreen'

//Estágios do jogo
const stages = [
  {id: 0, name: 'start'},
  {id: 1, name: 'game'},
  {id: 2, name: 'gameover'}
]
function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)

  return (
    <>
      <div className='App'>
        {gameStage === 'start' &&  <StarScreen/>}
        {gameStage === 'game' && <Game/>}
        {gameStage === 'gameover' && <GameOver/>}
      </div>
    </>
  )
}

export default App
