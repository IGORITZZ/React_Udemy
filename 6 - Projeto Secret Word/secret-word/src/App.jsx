// CSS
import "./App.css";
// React
import { act, useCallback, useEffect, useState } from "react";
// Data
import { listagemDePalavras } from "./data/palavras";
// Componentes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
//Estágios do jogo
const estagioDoJogo = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "gameover" },
];
//quantidade de chances inicais
const totalDeChances = 3

function App() {
  const [etapaDoJogo, setEtapaDoJogo] = useState(estagioDoJogo[0].name);
  const [palavrasPorCategoria] = useState(listagemDePalavras);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letrasDaPalavra, setLetrasDaPalavra] = useState([]);

  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasIncorretas, setLetrasIncorretas] = useState([]);
  const [chancesRestantes, setChancesRestantes] = useState(totalDeChances);
  const [pontuacao, setPontuacao] = useState(0);

  const escolhaPalavraECategoria = () => {
    // escolhendo uma categoria random
    const categoriasDisponiveis = Object.keys(palavrasPorCategoria);
    const categoriaAleatoria =
      categoriasDisponiveis[
        Math.floor(Math.random() * Object.keys(palavrasPorCategoria).length)
      ];
    console.log(categoriaAleatoria); // mostrando categoria no navegador

    // escolhendo uma palavra random (dentro da categoria random)
    const palavraAleatoria =
      palavrasPorCategoria[categoriaAleatoria][
        Math.floor(Math.random() * palavrasPorCategoria[categoriaAleatoria].length)
      ];

    return { palavraAleatoria, categoriaAleatoria };
  };

  // Start the game
  const IniciarJogo = () => {
    const { palavraAleatoria, categoriaAleatoria } = escolhaPalavraECategoria();

    let letrasSeparadas = palavraAleatoria.split("").map((l) => l.toUpperCase())
    //palavraLetras = palavraLetras.map((l) => l.toUpperCase()); códgio acima melhora essa linha

    console.log(palavraAleatoria, categoriaAleatoria);
    console.log(letrasSeparadas);

    setPalavraEscolhida(palavraAleatoria);
    setCategoriaEscolhida(categoriaAleatoria);
    setLetrasDaPalavra(letrasSeparadas);

    setEtapaDoJogo(estagioDoJogo[1].name);
  };
  // process the letter input
  const verificarLetra = (letra) => {
    const letraNormalizada = letra.toUpperCase();
    // checar se uma letra já foi utilizada
    if (
      letrasAdivinhadas.includes(letraNormalizada) ||
      letrasIncorretas.includes(letraNormalizada)
    ) {
      alert("A letra " + letraNormalizada + " ja foi utilizada. Tente novamente")
      return;
    }

    // coloque a letra adivinha ou remova uma chance
    if (letrasDaPalavra.includes(letraNormalizada)) {
      setLetrasAdivinhadas((letrasAtuais) => [
        ...letrasAtuais,
        letraNormalizada,
      ]);

    } else {
      setLetrasIncorretas((letrasErradasAtuais) => [
        ...letrasErradasAtuais,
        letraNormalizada,
      ]);

      setChancesRestantes((chancesAtuais) => chancesAtuais - 1)

    }

  };
  console.log("Letras Corretas: " + letrasAdivinhadas);
  console.log("Letras Erradas: " + letrasIncorretas); 
  const limparLetras = () => {
    setLetrasAdivinhadas([])
    setLetrasIncorretas([])
  }
// verificar se as tentativas terminarem
  useEffect(() => {
    if(chancesRestantes <= 0){
      // reset em todos os states
      limparLetras()

      setEtapaDoJogo(estagioDoJogo[2].name)
    }
  }, [chancesRestantes])
  // verificar condições de vitória
  useEffect(() => {

    const letrasUnicas = [...new Set(letrasDaPalavra)]

    //condição para vitória
    if(letrasAdivinhadas.length === letrasUnicas.length ){
      // adicionar pontuação
      setPontuacao((pontuacaoAtual) => pontuacaoAtual += 100)
      limparLetras()
      IniciarJogo()
      // reiniciar o jogo com uma nova palavra
 
    }
  }, [letrasAdivinhadas])

  //returns the game
  const reiniciarJogo = () => {
    setPontuacao(0)
    setChancesRestantes(totalDeChances);
    setEtapaDoJogo(estagioDoJogo[0].name);
  };
  return (
    <>
      <div className="App">
        {etapaDoJogo === "start" && <StartScreen startGame={IniciarJogo} />}
        {etapaDoJogo === "game" && (
          <Game
            verificarLetra={verificarLetra}
            palavraEscolhida={palavraEscolhida}
            categoriaEscolhida={categoriaEscolhida}
            letrasDaPalavra={letrasDaPalavra}
            letrasIncorretas={letrasIncorretas}
            letrasAdivinhadas={letrasAdivinhadas}
            chancesRestantes={chancesRestantes}
            pontuacao={pontuacao}
          />
        )}
        {etapaDoJogo === "gameover" && (
          <GameOver reiniciarJogo={reiniciarJogo} pontuacao={pontuacao} />
        )}
      </div>
    </>
  );
}

export default App;
