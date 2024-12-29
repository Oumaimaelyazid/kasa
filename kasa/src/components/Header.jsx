import { Link } from 'react-router-dom';
import logo from '../assets/KASA.png'; 

const Header = () => {
  return (
   <div>
    <header>
      <img src={logo} alt="logo de kasa"/>
      <nav>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
      
          </ul>
        </nav>
    </header>
    </div>

  );
};


export default Header;