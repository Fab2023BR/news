import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const NewsList = ({ noticias }) => {
  if (!noticias || noticias.length === 0) {
    return <p className="about__no-news">Nenhuma notícia encontrada.</p>;
  }

  return (
    <div className="about__content">
      {noticias.map((noticia, index) => (
        <div className="card" key={index}>
          <img
            src={noticia.urlToImage || "https://via.placeholder.com/150"}
            alt="Imagem da notícia"
            className="card__image"
          />
          <div>
            <div className="card__wrapper-buttons">
              <p className="card__text">Categoria</p>
              <button className="card__delete-buttom">
                <FaRegTrashAlt className="card__delete-icon" color="#B6BCBF" />
              </button>
            </div>
            <button className="card__save-buttom">
              <CiBookmark className="card__save-icon" color="#B6BCBF" />
            </button>
          </div>
          <div className="card__info">
            <p className="card__news-date">Data da notícia</p>
            <h3 className="card__news-title">{noticia.title}</h3>
            <p className="card__news-description">{noticia.description}</p>
            <span className="card__news-sources">{noticia.source.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
