import './NavBar.css'
//2. o Link vai ser usado para fazer o "link" da tela de HOME com as demais telas
// ele ajuda a fazer um menu do site de maneira mais prática
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link> */}
        {/* 
            o uso de <Link/> substitui a tag a, aqui a diferença entre elas é:
            <a/> carrega a página inteira para atualizar o link
            <Link/> atualiza apenas o elemento/compoente sem recarregar a página e atualizando apenas o link do site
        */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        {/* 
          tem o mesmo comportamento do Link, porém ele automaticamente imprime um estilo CSS no link selecionado e ativo
          exemplo, cliquei em SOBRE, e botão SOBRE agora tem um CSS prórpio porque a classe .active está sendo impressa no navegor e já havia CSS configurado no código
          para reforçar, a className é impressa no navegador ao selecionar um link e esse permanecer ativo, ao selecionar outro link, a configuração CSS muda automaticamente
          podemos fazer uma lógica para que a configuração não se perca em casos especifico, como:
              className={({isActive}) => (isActive ? "esta-ativo" : "nao-ativo")}
        */}
    </nav>
  )
}

export default NavBar