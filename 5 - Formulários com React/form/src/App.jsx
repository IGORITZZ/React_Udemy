import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h2>Formulário</h2>
      <MyForm
        user={{
          name: "Igor",
          email: "igor@teste.com",
          bio: "Eu sou um Adm do sistema",
          role: "admin",
        }}
      />
    </>
  );
}

export default App;
