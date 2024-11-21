import React, { useState, useEffect } from "react";
import { Image } from "./image";

export const Gallery = (props) => {
  const [activeImage, setActiveImage] = useState(null); // Imagen activa
  const [isOpen, setIsOpen] = useState(false); // Controla si el lightbox está abierto

  const handleOpen = (image) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setActiveImage(null);
    setIsOpen(false);
  };

  const handleNext = () => {
    const currentIndex = props.data.findIndex(
      (item) => item.largeImage === activeImage
    );
    const nextIndex = (currentIndex + 1) % props.data.length;
    setActiveImage(props.data[nextIndex].largeImage);
  };

  const handlePrev = () => {
    const currentIndex = props.data.findIndex(
      (item) => item.largeImage === activeImage
    );
    const prevIndex =
      (currentIndex - 1 + props.data.length) % props.data.length;
    setActiveImage(props.data[prevIndex].largeImage);
  };

  const handleKeyDown = (e) => {
    if (isOpen) {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeImage]);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>
            Un vistazo a nuestros esfuerzos: Momentos que reflejan nuestro compromiso con la infancia, desde talleres
            educativos hasta eventos comunitarios que inspiran esperanza y acción.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <img
                      src={d.smallImage}
                      alt={d.title}
                      className="img-responsive"
                      onClick={() => handleOpen(d.largeImage)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <div className="lightbox">
          <div className="lightbox-content">
            <button className="close" onClick={handleClose}>
              &times;
            </button>
            <button className="prev" onClick={handlePrev}>
              &#8249;
            </button>
            <img src={activeImage} alt="Active" className="lightbox-image" />
            <button className="next" onClick={handleNext}>
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
