import { NavLink } from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Sobre">Sobre</NavLink>
      <NavLink to="/Contato">Contato</NavLink>
    </nav>
  );
}

export default NavBar