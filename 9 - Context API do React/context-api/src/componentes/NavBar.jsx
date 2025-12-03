import { NavLink } from "react-router-dom";

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