import logo from './logo.svg';
import './App.css';
import Image from './assets/image.png'
import ManageData from './components/ManageData';
import LisntsRenders from './components/LisntsRenders';
function App() {
  return (
    <div className="App">
      <h1>Avançando os conhecimentos em React</h1>
      <p>Aqui novamente cumpri o Desafio 3, mas ultilizei o comando npx para criar</p>
      <div>
        <div>
          {/* Imagem em Public */}
          {/* essas imagens se sofrerem alterações no nome, vão precisar de alteração em todo o código*/}
          <img src="/image.png" alt="Paisagem" width="400px" />
        </div>
        {/* Imagem em Assets */}
        {/* Dessa forma, como estou usando ela como se fosse uma váriavel, eu apenanas mudaria o nome do arquivo, e aonde a imagem fosse importada por meio de variável ele seria alterada de forma altomática. */}
        <img src={Image} alt="Paisagem cidade" width="400px" />
      </div>
      <div>
        <ManageData/>
        <LisntsRenders/>
      </div>
    </div>
  );
}

export default App;
