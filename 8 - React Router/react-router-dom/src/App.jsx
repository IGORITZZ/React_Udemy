import "./App.css";
// 1 - configuração react router
//importando para o projeto
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 1.2 - paginas
//importando as paginas para o projeto
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
//2 importando o novo elemento de menu, ou NavBar
import NavBar from "./components/NavBar";
import SearchForm from "./components/SearchForm";
import Produto from "./pages/Produto";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";


function App() {

  return (
    <div>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Camada mais alta do React Router */}
        <NavBar />
        {/* como um elemento de Router, é necessário que esteja dentro da "árvore de links" */}
        {/* 9 - Search */}
        <SearchForm />
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
          {/* 6 - Nested Routes */}
          <Route path="/produto/:id/info" element={<Info />} />
          {/* 9 - Search */}
          <Route path="/search" element={<Search />} />
          {/* 7 - No match Routes (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
