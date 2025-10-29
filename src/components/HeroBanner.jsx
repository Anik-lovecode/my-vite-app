import React from "react";
import Navbar from "./Navbar";

const HeroBanner = () => (
  <section className="hero-banner d-flex align-items-center justify-content-center text-center text-white">
    <div className="overlay"></div>
    <Navbar />
    <div className="container position-relative">
      <h1 className="ms-5 mb-3 text-start">
        Welcome to <span className="highlight">Department</span> <br />
        <span className="highlight">of Power</span>
        Government <br /> of West Bengal
      </h1>
    </div>
  </section>
);
export default HeroBanner;
