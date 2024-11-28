import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nuestra Fundadora</h2>
          <p>
          Maestra en Derecho, Promotora y Defensora activa de los Derechos Humanos de grupos
          vulnerables, reconocida por su distinción a su liderazgo y trayectoria profesional como una de
          las abogadas más influyentes de México. Doctora Honoris Causa por el Claustro Nacional de
          Doctores, cuenta con la Certificación en Derechos Humanos ante la Organización de las
          Naciones Unidas celebrado en La Haya Holanda, Ginebra Suiza, Nuremberg Alemania y
          Estrasburgo Francia.
          </p>
        </div>
        <div className="row">
          {props.data && props.data.length > 0 ? (
            <div className="col-md-4 col-md-offset-4 team">
              <div className="thumbnail">
                <img
                  src={props.data[0].img}
                  alt={props.data[0].name}
                  className="team-img"
                />
                <div className="caption">
                  <h4>{props.data[0].name}</h4>
                  <p>{props.data[0].job}</p>
                </div>
              </div>
            </div>
          ) : (
            "loading"
          )}
        </div>
      </div>
    </div>
  );
};
