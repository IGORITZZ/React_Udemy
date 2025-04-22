import './GameOver.css'

const GameOver = ({ reiniciarJogo, pontuacao }) => {

const corPontuacao = () => {
  if(pontuacao === 0){
    return "red"
  } else if (pontuacao > 500){
    return "#ECFA00"
  } else if (pontuacao > 1000){
    return "green"
  }
}
  return (
    <div>
      <h1>Fim de Jogo!</h1>
      <h2>A sua pontuação foi:</h2>
      <p style={{color: corPontuacao()}}><span>{pontuacao}</span></p>
      <button onClick={reiniciarJogo}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver