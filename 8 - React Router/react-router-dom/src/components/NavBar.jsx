import './NavBar.css'
//2. o Link vai ser usado para fazer o "link" da tela de HOME com as demais telas
// ele ajuda a fazer um menu do site de maneira mais prática
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        {/* 
            o uso de <Link/> substitui a tag a, aqui a diferença entre elas é:
            <a/> carrega a página inteira para atualizar o link
            <Link/> atualiza apenas o elemento/compoente sem recarregar a página e atualizando apenas o link do site
        */}
    </nav>
  )
}

export default NavBar