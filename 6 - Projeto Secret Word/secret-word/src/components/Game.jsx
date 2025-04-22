import { useState, useRef } from "react";
import "./Game.css";

const Game = ({
  verificarLetra,
  //palavraEscolhida,
  categoriaEscolhida,
  letrasDaPalavra,
  letrasIncorretas,
  letrasAdivinhadas,
  chancesRestantes,
  pontuacao,
}) => {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    // validação para apenas letras serem aceitas
    // /^ e $/ simbolizam o começo e o fim da string, ou seja, 1 caracter apenas
    // [a-zA-Z] simboliza que será aceito apenas caracteres de a-z minusculas
    // o mesmo vale para A-Z porém, vale para maiculas
    // como usamos toUpperCase, tanto faz, mas deixamos claro qual caractere que vamos aceitar ou não
    if (!letra.match(/^[a-zA-Z]$/)) {
      alert("Digite Apenas uma letra.");
      setLetra("");
      return;
    }
    verificarLetra(letra);
    setLetra("");
    letraInputRef.current.focus();
  };

  const corDasTentativas = () => {
    if (chancesRestantes === 3) {
      return "green"; // 3 tentativas restantes
    } else if (chancesRestantes === 2) {
      return "orange"; // 2 tentativas restantes
    } else if (chancesRestantes === 1) {
      return "red"; // 1 tentativa restante
    }
  };

  return (
    <div className="game">
      <p className="pontos">
        <span>Pontuação: {pontuacao}</span>
      </p>
      <h1>Advinhe a Palavra:</h1>
      <h3 className="dica">
        Dica sobre a palavra: <span>{categoriaEscolhida.toUpperCase()}</span>
      </h3>
      <p
        className="paragrafoTentativa"
        style={{
          backgroundColor: corDasTentativas(),
          padding: "10px",
          borderRadius: "7px",
          display: "inline-block",
        }}
      >
        Você ainda tem {chancesRestantes} tentativas(s).
      </p>
      <div className="palavraContainer">
        {letrasDaPalavra.map((l, i) =>
          letrasAdivinhadas.includes(l) ? (
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
          <span key={i}>
            {l}
            {i < letrasIncorretas.length - 1 && ", "}
          </span>
          // para evitar {l}, que ficaria vizualemte assim (a, c, d,), mesmo sendo a ultima letra, sempre teria uma "," no final
          // validamos para que se for a ultima letra, não tena virgula (a, c, d)
          // se o indice atual for menor ele adciona a virgula, se for igual ele não adciona nada
          // mantendo o a ultima letra sem uma virgula
        ))}
      </div>
    </div>
  );
};

export default Game;
