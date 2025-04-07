import React from "react";
import "./preloader.css";

function Preloader() {
  return (
    <div className="preloader-container">
      <i className="circle-preloader"></i>
      <p className="loading-text">Carregando...</p>
    </div>
  );
}

export default Preloader;
