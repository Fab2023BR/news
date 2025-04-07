import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import "./headerNewsSaved.css";

const HeaderNewsSaved = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header-news-saved">
      <div className="header__container-title-and-nav">
        <div className="header-news-saved__wrapper">
          <h2
            className={`header-news-saved__title ${
              showMenu ? "header-news-saved__title_menu" : ""
            }`}
          >
            NewsExplorer
          </h2>
          {!showMenu ? (
            <GiHamburgerMenu
              color="black"
              className={`header-news-saved__menu-button`}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <IoClose
              color="white"
              className={`header-news-saved__menu-button header-news-saved__menu-button_close`}
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>
        {showMenu ? (
          <nav className="header-news-saved__nav">
            <ul className="header-news-saved__list">
              <li className="header-news-saved__list-item">
                <a href="/" className="header-news-saved__link">
                  Home
                </a>
              </li>
              <li className="header-news-saved__list-item">
                <a href="/news-saved" className="header-news-saved__link">
                  Artigos salvos
                </a>
              </li>
              <li className="header-news-saved__list-item">
                <button className="header-news-saved__signin-button">
                  Entrar
                </button>
              </li>
            </ul>
          </nav>
        ) : null}
        <nav className="header-news-saved__nav header-news-saved__nav_desktop">
          <ul className="header-news-saved__list">
            <li className="header-news-saved__list-item">
              <a href="/" className="header-news-saved__link">
                Home
              </a>
            </li>
            <li className="header-news-saved__list-item">
              <a
                href="/saved-news"
                className="header-news-saved__link header-news-saved__link_l"
              >
                Artigos salvos
              </a>
            </li>
            <li className="header-news-saved__list-item">
              <button className="header-news-saved__signin-button">
                Entrar
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNewsSaved;
