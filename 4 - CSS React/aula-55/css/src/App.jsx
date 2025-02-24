import "./App.css";
import MeuComponete from "./componentes/MeuComponete";

function App() {
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
    </>
  );
}

export default App;
