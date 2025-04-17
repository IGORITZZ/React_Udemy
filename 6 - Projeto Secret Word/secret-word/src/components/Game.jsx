import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verificarLetra,
  palavraEscolhida,
  categoriaEscolhida,
  letrasDaPalavra,
  letrasIncorretas,
  letrasAdvinhadas,
  chancesRestantes,
  pontuacao,
}) => {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    verificarLetra(letra);
    setLetra("");
    letraInputRef.current.focus();
  };

  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Advinhe a Palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{categoriaEscolhida}</span>
      </h3>
      <p>Você ainda tem {chancesRestantes} tentativas(s).</p>
      <div className="palavraContainer">
        {letrasDaPalavra.map((l, i) =>
          letrasAdvinhadas.includes(l) ? (
            <span key={i} className="letra">
              {l}
            </span>
          ) : (
            <span key={i} className="quadroBranco"></span>
          )
        )}
      </div>
      <div className="letraContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetra(e.target.value)}
            value={letra}
            ref={letraInputRef}
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {letrasIncorretas.map((l, i) => (
          <span key={i}>{l}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
