import "./App.css";
import { useFetch } from "./hooks/useFetch";
// 1 - configuração react router
//importando para o projeto
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 1.2 - paginas
//importando as paginas para o projeto
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
//2 importando o novo elemento de menu, ou NavBar
import NavBar from "./components/NavBar";
import Produto from "./pages/Produto";

function App() {

  const url = "http://localhost:3000/produtos";
  const { data: itens, httpConfig, loading, erro } = useFetch(url);

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Camada mais alta do React Router */}
        <NavBar />
        {/* como um elemento de Router, é necessário que esteja dentro da "árvore de links" */}
        <Routes>
          {/* Camada que envolve varias rotas */}
          <Route path="/" element={<Home />} />
          {/* o simbolo "/" significa home, ou pagina inicial */}
          <Route path="/sobre" element={<Sobre />} />
          {/* assim como o simbolo "/" significa home ou pagina inicial, 
                para configurar uma rota é preciso informar o nome da rota após a barra
                Conforme no exemplo acima "/sobre" */}
          {/* 4 - Rota dinamica */}
          <Route path="/produtos/:id" element={<Produto />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
