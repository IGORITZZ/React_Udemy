import "./App.css";
import MeuComponete from "./componentes/MeuComponete";

import { useState } from "react";

function App() {
  const n = 15;
  const [name] = useState("IGOR");
  const redTitle = true;
  return (
    <>
      {/*  CSS Global */}
      <h1>React com CSS</h1>
      <p>Paragrafo do JSX</p>
      {/* CSS de componente */}
      <MeuComponete />
      {/* Inline CSS */}
      <p
        style={{
          color: "white",
          fontWeight: "900",
          borderTop: "2px solid red",
        }}
      >
        Esse paragrafo é com CSS Inline
      </p>

      {/* CSS INLINE DINAMICO */}
      <h2 style={n < 10 ? { color: "green" } : { color: "blue" }}>
        CSS Dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "green" } : { color: "blue" }}>
        CSS Dinâmico
      </h2>
      <h2
        style={
          name === "IGOR" ? { color: "red", backgroundColor: "black" } : null
        }
      >
        Testo Dinâmico
      </h2>

      {/* CSS CLASSE DINAMICA */}
      <h2 className={redTitle ? "red-title" : "title"}>
        Esse titulo possui classe dinaminca
      </h2>
    </>
  );
}

export default App;
