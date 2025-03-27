import { useState } from "react";
import "./MyForm.css";

const MyForm = () => {
  {
    /* 3. Gerenciamento de Dados */
  }
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(name);
  console.log(email);

  return (
    <div>
      {/* 1. Criando um Formulário*/}
      <form>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="nome"
            name="nome"
            placeholder="Digite seu nome"
            onChange={handleName} // aula 3
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
