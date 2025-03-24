import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* 1. Criando um Formulário*/}
        <form>
            <label htmlFor="nome">Nome: </label>
            <input type="nome" name='nome' placeholder='Digite Seu nome'/>
            <input type="buttom" value='Enviar' />
        </form>
    </div>
  )
}

export default MyForm