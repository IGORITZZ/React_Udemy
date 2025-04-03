import './StarScreen.css'

const StarScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Palavra Secreta</h1>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={startGame}>Comerçar o jogo</button>
    </div>
  )
}

export default StarScreen