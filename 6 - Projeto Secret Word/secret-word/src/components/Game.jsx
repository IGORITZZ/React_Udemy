import './Game.css'

const Game = ({
  verifyLetter,
  escolhaPalavra,
  escolhaCategoria,
  letras,
  letrasErradas,
  letraAdvinhada,
  chances,
  pontuação
}) => {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {pontuação}</span>
      </p>
      <h1>Advinhe a Palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{escolhaCategoria}</span>
      </h3>
      <p>Você ainda tem {chances} tentativas(s).</p>
      <div className="palavraContainer">
        {letras.map((l, i) =>
          letraAdvinhada.includes(l) ? (
            <span key={i} className="letra">{l}</span>
          ) : (
            <span key={i} className="quadroBranco"></span>
          )
        )}
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {letrasErradas.map((l, i) => {
          <span key={i}>{l}</span>;
        })}
      </div>
    </div>
  );
};

export default Game