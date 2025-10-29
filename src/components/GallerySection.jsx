import React, { useState, useEffect } from "react";

const GallerySection = () => {
  const images = [1, 2, 3, 4].map((i) => `/images/gallery-${i}.png`);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="container my-4">
      <div className="row gallery-section align-items-center justify-content-center">
        <div className="col-lg-8 col-md-12 mb-3 text-center">
          <div className="main-image-container">
            <img src={images[index]} alt="Main" id="mainImage" className="img-fluid rounded-4" />
          </div>
        </div>
        <div className="col-lg-4 col-md-12 d-flex flex-row align-items-center justify-content-center gap-3">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`thumb img-fluid rounded-4 ${i === index ? "active" : ""}`}
              alt={`thumb ${i}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default GallerySection;
