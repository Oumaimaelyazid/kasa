import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <img className="footer-logo" src={logo} alt="Logo de Kasa" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
