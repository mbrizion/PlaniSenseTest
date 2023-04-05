import { NavLink } from "react-router-dom";
import "./style.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" className="nav-item">
          <span>Acceuil</span>
        </NavLink>
        <NavLink to="/district" className="nav-item">
          <span>Arbres par arrondissement</span>
        </NavLink>
        <NavLink to="/gender" className="nav-item">
          <span>Arbres par genre</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
