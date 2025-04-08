import './Game.css'

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: 000</span>
      </p>
      <h1>Advinhe a Palavra:</h1>
      <h3 className='dica'>
        Dica sobre a palavra: <span>dica...</span>
      </h3>
      <div className="palavraContainer">
        <span className='letra'>a</span>
        <span className="quadroBranco"></span>
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength='1'required/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
    </div>
  );
}

export default Game