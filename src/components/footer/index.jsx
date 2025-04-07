import { FaGithub, FaFacebookSquare } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wapper">
        <div className="footer__list">
          <p className="footer__list-item">Início</p>
          <p className="footer__list-item">TripleTen</p>
        </div>
        <div className="footer__container">
          <FaGithub className="footer__icon" />
          <FaFacebookSquare className="footer__icon" />
        </div>
      </div>
      <p className="footer__copywright">
        © 2025 Supersite, desenvolvido pela News API
      </p>
    </footer>
  );
};

export default Footer;
