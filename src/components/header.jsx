import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <img src="img/logo.png" alt="Fundación Protegeme Logo" className="header-logo" />
                <h1>FUNDACIÓN PROTEGEME</h1>
                <p>Unidos por la infancia, comprometidos con su bienestar</p>
                <a href="#contact" className="btn btn-custom btn-lg">
                  Contáctanos Ahora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  );
};
