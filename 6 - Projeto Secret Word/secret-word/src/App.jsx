// CSS
import "./App.css";
// React
import { act, useCallback, useEffect, useState } from "react";
// Data
import { listagemDePalavras } from "./data/palavras";
// Componentes
import StarScreen from "./components/StarScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";
//Estágios do jogo
const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "game" },
  { id: 2, name: "gameover" },
];
//quantidade de chances inicais
const totalDeChances = 3

function App() {
  const [estapaDoJogo, setEtapaDoJogo] = useState(stages[0].name);
  const [palavarasPorCategoria] = useState(listagemDePalavras);
  const [palavraEscolhida, setPalavraEscolhida] = useState("");
  const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
  const [letrasDaPalavra, setLetrasDaPalavra] = useState([]);

  const [letrasAdvinhadas, setletrasAdvinhadas] = useState([]);
  const [letrasIncorretas, setLetrasIncorretas] = useState([]);
  const [chancesRestantes, setChancesRestantes] = useState(totalDeChances);
  const [pontuacao, setPontuacao] = useState(0);

  const escolhaPalavraECategoria = () => {
    // escolhendo uma categoria random
    const categoriasDisponiveis = Object.keys(palavarasPorCategoria);
    const categoriaAleatoria =
      categoriasDisponiveis[
        Math.floor(Math.random() * Object.keys(palavarasPorCategoria).length)
      ];
    console.log(categoriaAleatoria); // mostrando categoria no navegador

    // escolhendo uma palavra random (dentro da categoria random)
    const palavraAleatoria =
      palavarasPorCategoria[categoriaAleatoria][
        Math.floor(Math.random() * palavarasPorCategoria[categoriaAleatoria].length)
      ];
    console.log(palavraAleatoria);

    return { palavraAleatoria, categoriaAleatoria };
  };

  // Start the game
  const IniciarJogo = () => {
    const { palavraAleatoria, categoriaAleatória } = escolhaPalavraECategoria();

    let letrasSeparadas = palavraAleatoria.split("").map((l) => l.toUpperCase())
    //palavraLetras = palavraLetras.map((l) => l.toUpperCase()); códgio acima melhora essa linha

    console.log(palavraAleatoria, categoriaAleatória);
    console.log(letrasSeparadas);

    setPalavraEscolhida(palavraAleatoria);
    setCategoriaEscolhida(categoriaAleatória);
    setLetrasDaPalavra(letrasSeparadas);

    setEtapaDoJogo(stages[1].name);
  };
  // process the letter input
  const verificarLetra = (letra) => {
    const letraNormalizada = letra.toUpperCase();
    // checar se uma letra já foi utilizada
    if (
      letrasAdvinhadas.includes(letraNormalizada) ||
      letrasIncorretas.includes(letraNormalizada)
    ) {
      alert("A letra " + letraNormalizada + " ja foi utilizada. Tente novamente")
      return;
    }

    // coloque a letra adivinha ou remova uma chance
    if (letrasDaPalavra.includes(letraNormalizada)) {
      setletrasAdvinhadas((letrasAtuais) => [
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
  console.log("Letras Corretas: " + letrasAdvinhadas);
  console.log("Letras Erradas: " + letrasIncorretas);

  const limparLetras = () => {
    setletrasAdvinhadas([])
    setLetrasIncorretas([])
  }
// verificar se as tentativas terminarem
  useEffect(() => {
    if(chancesRestantes <= 0){
      // reset em todos os states
      limparLetras()

      setEtapaDoJogo(stages[2].name)
    }
  }, [chancesRestantes])
  // verificar condições de vitória
  useEffect(() => {

    const letrasUnicas = [...new Set(letrasDaPalavra)]

    //condição para vitória
    if(letrasAdvinhadas.length === letrasUnicas.length ){
      // adicionar pontuação
      setPontuacao((pontuacaoAtual) => pontuacaoAtual += 100)

      // reiniciar o jogo com uma nova palavra
 
    }
  }, [letrasAdvinhadas])

  //returns the game
  const reiniciarJogo = () => {
    setPontuacao()
    setChancesRestantes(totalDeChances);
    setEtapaDoJogo(stages[0].name);
  };
  return (
    <>
      <div className="App">
        {estapaDoJogo === "start" && <StarScreen startGame={IniciarJogo} />}
        {estapaDoJogo === "game" && (
          <Game
            verificarLetra={verificarLetra}
            palavraEscolhida={palavraEscolhida}
            categoriaEscolhida={categoriaEscolhida}
            letrasDaPalavra={letrasDaPalavra}
            letrasIncorretas={letrasIncorretas}
            letrasAdvinhadas={letrasAdvinhadas}
            chancesRestantes={chancesRestantes}
            pontuacao={pontuacao}
          />
        )}
        {estapaDoJogo === "gameover" && (
          <GameOver reiniciarJogo={reiniciarJogo} pontuacao={pontuacao} />
        )}
      </div>
    </>
  );
}

export default App;
