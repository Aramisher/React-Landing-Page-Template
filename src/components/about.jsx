import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nosotros</h2>
              <p>La Fundación Protégeme A.C. nace en enero del 2001 como respuesta a la urgente necesidad de atender y prevenir los casos de abuso sexual en menores de edad, un problema profundamente arraigado que afecta a nuestra sociedad y vulnera los derechos más básicos de la infancia.
                  Desde sus inicios, Fundación Protégeme ha trabajado incansablemente para ofrecer un espacio seguro donde los niños, niñas y adolescentes puedan recibir apoyo emocional, psicológico y legal, con el objetivo de sanar las heridas del pasado y construir un futuro lleno de esperanza. 
                  Además, hemos desarrollado programas educativos y de sensibilización dirigidos a comunidades, familias y escuelas, con el propósito de prevenir el abuso y fomentar una cultura de protección y respeto hacia los más pequeños.</p>
              {/* <h3>Why Choose Us?</h3> */}
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  {/* <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
