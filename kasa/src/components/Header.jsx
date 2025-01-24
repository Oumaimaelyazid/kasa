import { Link, NavLink } from "react-router-dom";
import logo from "../assets/KASA.png";

const Header = () => {
  return (
    <div>
      <header>
        <img src={logo} alt="logo de kasa" />
        <nav>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                ACCUEIL
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                A PROPOS
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
