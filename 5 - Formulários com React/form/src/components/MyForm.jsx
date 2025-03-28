import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  //6. Controlled inputs
  //3. Gerenciamento de Dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState("");
  
  const handleName = (e) => {
    setName(e.target.value);
  };
  //console.log(name);
  //console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando Formulário...");
    console.log("Formulário enviado com sucesso!");
    console.log("Nome: " + name);
    console.log("Email: " + email);
    console.log("Bio: " + bio);

    //7. Limpar Formulário
    setName("");
    setEmail("");
    setBio("");
  };



  return (
    <div>
      {/* //5 - envio de FORM */}
      {/* 1. Criando um Formulário*/}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input
            type="nome"
            name="nome"
            placeholder="Digite seu nome"
            onChange={handleName} // aula 3
            value={name}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          {/* 4 - simplificação de maninupulação */}
          <span>E-mail</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8. Textarea no React */}
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição..."
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          ></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
