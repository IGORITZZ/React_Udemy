import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {
  {/* 3. Gerenciamento de Dados */}
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value)
  }

  console.log(name)

  return (
    <div>
      {/* 1. Criando um Formulário*/}
      <form>
        <div>
          <label htmlFor="nome">Nome: </label>
          <input type="nome" name="nome" placeholder="Digite Seu nome" onChange={handleName}/>
          {/* 2 - Label envolvendo input */}
        </div>
        <label>
          <span>E-mail</span>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
        </label>
        <input type="button" value="Enviar" />
      </form>
    </div>
  );
}

export default MyForm