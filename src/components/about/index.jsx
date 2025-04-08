import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiBookmark } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import Preloader from "../preloader/preloader";
import "./about.css";

const About = () => {
  const [noticias, setNoticias] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const resposta = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=a288f46ed536409b88ff45b911547068"
        );
        setNoticias(resposta.data.articles);
        setCarregando(false);
      } catch (error) {
        setErro("Erro ao buscar notícias");
        setCarregando(false);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section className="about">
      <h2 className="about__title">React e conexão de uma API de terceiros</h2>

      <div className="about__content">
        {erro && <p className="about__error">{erro}</p>}

        {carregando ? (
          <Preloader />
        ) : noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <div className="card" key={index}>
              <img
                src={noticia.urlToImage || "https://via.placeholder.com/150"}
                alt="Imagem da notícia"
                className="card__image"
              />
              {/* <div>
                <div className="card__wrapper-buttons">
                  <p className="card__text">Categoria</p>
                  <button className="card__delete-buttom">
                    <FaRegTrashAlt
                      className="card__delete-icon"
                      color="#B6BCBF"
                    />
                  </button>
                </div>
                <button className="card__save-buttom">
                  <CiBookmark className="card__save-icon" color="#B6BCBF" />
                </button>
              </div> */}
              <div className="card__info">
                <p className="card__news-date">Data da notícia</p>
                <h3 className="card__news-title">{noticia.title}</h3>
                <p className="card__news-description">{noticia.description}</p>
                <span className="card__news-sources">
                  {noticia.source.name}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="about__no-news">Nenhuma notícia encontrada.</p>
        )}
      </div>

      <p className="about__author-description">
        <a href="/">Voltar</a>
      </p>
    </section>
  );
};

export default About;
